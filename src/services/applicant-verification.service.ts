import axios, { AxiosError } from 'axios';
import type { ApplicantInquiryView, ApplicantVideoSessionView, LinkExchangeResponse } from '@/lib/api-client/api';
import { getRuntimeApiUrl } from '@/lib/runtime-environment';
import type { StepType } from '@/services/verification-flows.service';

/**
 * Public applicant API (/api/v1/verify). Authenticated only by the one-time
 * link code and the session token it is exchanged for — never by the org JWT,
 * so this deliberately does not use the dashboard apiClient (which would
 * attach a bearer token and redirect to /login on 401).
 */

export class ApplicantApiError extends Error {
  constructor(message: string, public statusCode?: number, public code?: string) {
    super(message);
    this.name = 'ApplicantApiError';
  }
}

const client = () =>
  axios.create({
    baseURL: `${getRuntimeApiUrl()}/api/v1/verify`,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
  });

const normalize = (error: unknown): never => {
  if (error instanceof AxiosError) {
    const data = error.response?.data as { message?: string; error_code?: string } | undefined;
    throw new ApplicantApiError(data?.message || error.message, error.response?.status, data?.error_code);
  }
  throw error;
};

const sessionHeaders = (sessionToken: string) => ({ 'X-Inquiry-Session': sessionToken });

export const applicantVerificationService = {
  async exchangeLink(code: string, deviceFingerprint?: string): Promise<LinkExchangeResponse> {
    try {
      const { data } = await client().post<LinkExchangeResponse>('/links/exchange', {
        code,
        device_fingerprint: deviceFingerprint,
      });
      return data;
    } catch (error) {
      return normalize(error);
    }
  },

  async getSession(sessionToken: string): Promise<ApplicantInquiryView> {
    try {
      const { data } = await client().get<ApplicantInquiryView>('/session', { headers: sessionHeaders(sessionToken) });
      return data;
    } catch (error) {
      return normalize(error);
    }
  },

  /** Upload a captured photo or PDF for a document/selfie/liveness/proof_of_address step. */
  async uploadEvidence(sessionToken: string, stepType: StepType, file: Blob, filename: string): Promise<ApplicantInquiryView> {
    const form = new FormData();
    form.append('file', file, filename);
    try {
      // The client defaults to a JSON Content-Type, which makes axios serialize FormData as JSON.
      // Declaring multipart keeps the FormData; axios then lets the browser add the boundary.
      const { data } = await client().post<ApplicantInquiryView>(`/session/steps/${stepType}/upload`, form, {
        headers: { ...sessionHeaders(sessionToken), 'Content-Type': 'multipart/form-data' },
        timeout: 120000,
      });
      return data;
    } catch (error) {
      return normalize(error);
    }
  },

  /** The applicant's booked or live video identification call, or null. */
  async getVideo(sessionToken: string): Promise<ApplicantVideoSessionView | null> {
    try {
      const { data } = await client().get<ApplicantVideoSessionView | null>('/session/video', {
        headers: sessionHeaders(sessionToken),
      });
      return data ?? null;
    } catch (error) {
      return normalize(error);
    }
  },

  async bookVideo(sessionToken: string, scheduledAt: string): Promise<ApplicantVideoSessionView> {
    try {
      const { data } = await client().post<ApplicantVideoSessionView>(
        '/session/video',
        { scheduled_at: scheduledAt },
        { headers: sessionHeaders(sessionToken) },
      );
      return data;
    } catch (error) {
      return normalize(error);
    }
  },

  async cancelVideo(sessionToken: string): Promise<void> {
    try {
      await client().delete('/session/video', { headers: sessionHeaders(sessionToken) });
    } catch (error) {
      normalize(error);
    }
  },

  async submitStep(
    sessionToken: string,
    stepType: StepType,
    body: { data?: Record<string, unknown>; evidence_ref?: string | null },
  ): Promise<ApplicantInquiryView> {
    try {
      const { data } = await client().post<ApplicantInquiryView>(`/session/steps/${stepType}`, body, {
        headers: sessionHeaders(sessionToken),
      });
      return data;
    } catch (error) {
      return normalize(error);
    }
  },
};
