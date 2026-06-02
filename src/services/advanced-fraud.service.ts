/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post } from '@/lib/api/client';

// Deepfake Detection
export interface DeepfakeCheck {
  id: string;
  status: string;
  result: {
    is_deepfake: boolean;
    confidence: number;
    details: Record<string, any>;
  } | null;
  created_at: string;
}

export const deepfakeService = {
  async check(data: { image_url?: string; video_url?: string }) {
    return await post<any>('/deepfake/deepfake-check', data);
  },

  async uploadCheck(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return await post<any>('/deepfake/deepfake-check/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  async getCheck(checkId: string) {
    return await get<any>(`/deepfake/deepfake-checks/${checkId}`);
  },

  async listChecks(params?: { page?: number; page_size?: number }) {
    return await get<any>('/deepfake/deepfake-checks', { params });
  },

  async getModelStatus() {
    return await get<any>('/deepfake/deepfake-model/status');
  },
};

// Synthetic Identity Detection
export const syntheticAdvancedService = {
  async createSession(data: any) {
    return await post<any>('/synthetic-advanced/sessions', data);
  },

  async ingestEvent(sessionId: string, data: any) {
    return await post<any>('/synthetic-advanced/events', { session_id: sessionId, ...data });
  },

  async getSessionRisk(sessionId: string) {
    return await get<any>(`/synthetic-advanced/sessions/${sessionId}/risk`);
  },

  async listSignals(params?: { page?: number; page_size?: number }) {
    return await get<any>('/synthetic-advanced/signals', { params });
  },
};

// Friendly Fraud Detection
export const friendlyFraudAdvancedService = {
  async createSession(data: any) {
    return await post<any>('/friendly-fraud-advanced/sessions', data);
  },

  async ingestEvent(sessionId: string, data: any) {
    return await post<any>('/friendly-fraud-advanced/events', { session_id: sessionId, ...data });
  },

  async getSessionRisk(sessionId: string) {
    return await get<any>(`/friendly-fraud-advanced/sessions/${sessionId}/risk`);
  },

  async listSignals(params?: { page?: number; page_size?: number }) {
    return await get<any>('/friendly-fraud-advanced/signals', { params });
  },
};

// CNP Advanced
export const cnpAdvancedService = {
  async createSession(data: any) {
    return await post<any>('/cnp-advanced/sessions', data);
  },

  async ingestEvent(sessionId: string, data: any) {
    return await post<any>('/cnp-advanced/events', { session_id: sessionId, ...data });
  },

  async getSessionRisk(sessionId: string) {
    return await get<any>(`/cnp-advanced/sessions/${sessionId}/risk`);
  },

  async listSignals(params?: { page?: number; page_size?: number }) {
    return await get<any>('/cnp-advanced/signals', { params });
  },
};

// App Scams
export const appScamsService = {
  async createSession(data: any) {
    return await post<any>('/app-scams/sessions', data);
  },

  async ingestEvent(sessionId: string, data: any) {
    return await post<any>('/app-scams/events', { session_id: sessionId, ...data });
  },

  async getSessionRisk(sessionId: string) {
    return await get<any>(`/app-scams/sessions/${sessionId}/risk`);
  },

  async listSignals(params?: { page?: number; page_size?: number }) {
    return await get<any>('/app-scams/signals', { params });
  },
};

// Fraud Domains
export const fraudDomainsService = {
  async list(params?: { page?: number; page_size?: number }) {
    return await get<any>('/fraud-domains', { params });
  },

  async add(data: { domain: string; reason: string }) {
    return await post<any>('/fraud-domains', data);
  },

  async remove(domainId: string) {
    return await post<any>(`/fraud-domains/${domainId}/remove`);
  },
};

// Consortium
export const consortiumService = {
  async optIn() {
    return await post<any>('/consortium/opt-in');
  },

  async shareSignal(data: any) {
    return await post<any>('/consortium/share-signal', data);
  },

  async query(data: any) {
    return await post<any>('/consortium/query', data);
  },

  async getMatches(params?: { page?: number; page_size?: number }) {
    return await get<any>('/consortium/matches', { params });
  },

  async getAudit() {
    return await get<any>('/consortium/audit');
  },

  async optOut() {
    return await post<any>('/consortium/opt-out');
  },
};
