/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IdentityVerificationSessionCreate,
  IdentityVerificationSessionRead,
  FaceMatchRequest,
  LivenessRequest,
  BiometricCheckRead,
} from '@/types';
import { get, post, patch } from '@/lib/api/client';

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/documents/sessions/${sessionId}/selfie`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('deep_sense_access_token')}`,
      },
      body: formData,
    });
    return await response.json();
  },

  /**
   * Run session face match
   */
  async runSessionFaceMatch(sessionId: string, data: FaceMatchRequest): Promise<BiometricCheckRead> {
    return await post<BiometricCheckRead>(`/documents/sessions/${sessionId}/face-match`, data);
  },

  /**
   * Run session liveness check
   */
  async runSessionLiveness(sessionId: string, data: LivenessRequest): Promise<BiometricCheckRead> {
    return await post<BiometricCheckRead>(`/documents/sessions/${sessionId}/liveness`, data);
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
  async runSessionDeepfake(sessionId: string, data: LivenessRequest): Promise<BiometricCheckRead> {
    return await post<BiometricCheckRead>(`/documents/sessions/${sessionId}/deepfake`, data);
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
