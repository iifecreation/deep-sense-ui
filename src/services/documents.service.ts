/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IdentityVerificationSessionCreate,
  IdentityVerificationSessionRead,
  FaceMatchRequest,
  LivenessRequest,
  BiometricCheckRead,
  IdentityDocumentRead,
  KYCVerifyRequest,
  KYCCheckRead,
  KYBVerifyRequest,
  KYBCheckRead,
} from '@/types';
import { get, getToken, post, patch } from '@/lib/api/client';
import { getRuntimeApiUrl } from '@/lib/runtime-environment';

export type PortraitDocumentType = 'passport' | 'national_id' | 'drivers_license';

export const documentsService = {
  /**
   * Get document privacy policy
   */
  async getDocumentPrivacyPolicy(): Promise<any> {
    return await get<any>('/documents/privacy/policy');
  },

  /**
   * Update document privacy policy
   */
  async updateDocumentPrivacyPolicy(data: any): Promise<any> {
    return await patch<any>('/documents/privacy/policy', data);
  },

  /**
   * Anonymize document session
   */
  async anonymizeDocumentSession(sessionId: string): Promise<void> {
    await post<void>(`/documents/sessions/${sessionId}/anonymize`);
  },

  /**
   * Purge document
   */
  async purgeDocument(documentId: string): Promise<void> {
    await post<void>(`/documents/${documentId}/purge`);
  },

  /**
   * Create identity verification session
   */
  async createSession(data: IdentityVerificationSessionCreate): Promise<IdentityVerificationSessionRead> {
    return await post<IdentityVerificationSessionRead>('/documents/sessions', data);
  },

  /**
   * Upload session selfie
   */
  async uploadSessionSelfie(sessionId: string, file: File): Promise<IdentityVerificationSessionRead> {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${getRuntimeApiUrl()}/api/v1/documents/sessions/${sessionId}/selfie`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Idempotency-Key': crypto.randomUUID(),
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Selfie upload failed (${response.status})`);
    }
    return await response.json();
  },

  /**
   * Upload the identity document (passport/ID card/etc.) a face-match check compares against
   */
  async uploadSessionDocument(
    sessionId: string,
    file: File,
    documentType: PortraitDocumentType = 'passport',
  ): Promise<IdentityDocumentRead> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('document_type', documentType);
    const response = await fetch(`${getRuntimeApiUrl()}/api/v1/documents/sessions/${sessionId}/document`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Idempotency-Key': crypto.randomUUID(),
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Document upload failed (${response.status})`);
    }
    return await response.json();
  },

  /**
   * Run session face match
   */
  async runSessionFaceMatch(sessionId: string, data: FaceMatchRequest = {}): Promise<BiometricCheckRead> {
    return await post<BiometricCheckRead>(`/documents/sessions/${sessionId}/face-match`, data, {
      headers: { 'Idempotency-Key': crypto.randomUUID() },
    });
  },

  /**
   * Run session liveness check
   */
  async runSessionLiveness(sessionId: string, data: LivenessRequest = {}): Promise<BiometricCheckRead> {
    return await post<BiometricCheckRead>(`/documents/sessions/${sessionId}/liveness`, data, {
      headers: { 'Idempotency-Key': crypto.randomUUID() },
    });
  },

  /**
   * List session biometrics
   */
  async listSessionBiometrics(sessionId: string): Promise<BiometricCheckRead[]> {
    return await get<BiometricCheckRead[]>(`/documents/sessions/${sessionId}/biometrics`);
  },

  /**
   * Run session deepfake check
   */
  async runSessionDeepfake(sessionId: string, data: LivenessRequest = {}): Promise<BiometricCheckRead> {
    return await post<BiometricCheckRead>(`/documents/sessions/${sessionId}/deepfake`, data, {
      headers: { 'Idempotency-Key': crypto.randomUUID() },
    });
  },

  /**
   * List countries with a registered KYC provider (empty array is not an error)
   */
  async listKycSupportedCountries(): Promise<string[]> {
    return await get<string[]>('/documents/kyc/countries');
  },

  /**
   * List countries with a registered KYB provider (empty array is not an error)
   */
  async listKybSupportedCountries(): Promise<string[]> {
    return await get<string[]>('/documents/kyb/countries');
  },

  /**
   * Run a KYC (individual identity) check against a country's ID registry
   */
  async runSessionKyc(sessionId: string, data: KYCVerifyRequest): Promise<KYCCheckRead> {
    return await post<KYCCheckRead>(`/documents/sessions/${sessionId}/kyc`, data, {
      headers: { 'Idempotency-Key': crypto.randomUUID() },
    });
  },

  /**
   * List KYC checks run for a session
   */
  async listSessionKycChecks(sessionId: string): Promise<KYCCheckRead[]> {
    return await get<KYCCheckRead[]>(`/documents/sessions/${sessionId}/kyc`);
  },

  /**
   * Run a KYB (business) check against a country's business registry
   */
  async runSessionKyb(sessionId: string, data: KYBVerifyRequest): Promise<KYBCheckRead> {
    return await post<KYBCheckRead>(`/documents/sessions/${sessionId}/kyb`, data, {
      headers: { 'Idempotency-Key': crypto.randomUUID() },
    });
  },

  /**
   * List KYB checks run for a session
   */
  async listSessionKybChecks(sessionId: string): Promise<KYBCheckRead[]> {
    return await get<KYBCheckRead[]>(`/documents/sessions/${sessionId}/kyb`);
  },

  /**
   * Request document extraction
   */
  async requestDocumentExtraction(documentId: string, data?: any): Promise<any> {
    return await post<any>(`/documents/${documentId}/extract`, data);
  },

  /**
   * Get document extraction
   */
  async getDocumentExtraction(documentId: string): Promise<any> {
    return await get<any>(`/documents/${documentId}/extraction`);
  },
};
