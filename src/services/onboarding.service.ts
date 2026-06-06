import { get, post } from "@/lib/api/client";

export const onboardingService = {
  listReviews: async (params?: Record<string, any>) => {
    return get<any>('/onboarding/reviews', params);
  },

  getReviewDetail: async (reviewId: string) => {
    return get<any>(`/onboarding/reviews/${reviewId}`);
  },

  approveReview: async (reviewId: string, data: { reason?: string; initialize_risk_profile?: boolean; idempotency_key?: string }) => {
    return post<any>(`/onboarding/reviews/${reviewId}/approve`, data);
  },

  rejectReview: async (reviewId: string, data: { reason: string; idempotency_key?: string }) => {
    return post<any>(`/onboarding/reviews/${reviewId}/reject`, data);
  },

  escalateReview: async (reviewId: string, data: { reason: string; escalate_to_edd?: boolean; create_case?: boolean; assigned_user_id?: string; idempotency_key?: string }) => {
    return post<any>(`/onboarding/reviews/${reviewId}/escalate`, data);
  },

  addDocument: async (reviewId: string, data: any) => {
    return post<any>(`/onboarding/reviews/${reviewId}/documents`, data);
  },

  getScreeningSummary: async (reviewId: string) => {
    return get<any>(`/onboarding/reviews/${reviewId}/screening`);
  },

  assignReviewer: async (reviewId: string, data: { assigned_user_id: string | null }) => {
    return post<any>(`/onboarding/reviews/${reviewId}/assign`, data);
  },

  addNote: async (reviewId: string, data: { body: string }) => {
    return post<any>(`/onboarding/reviews/${reviewId}/notes`, data);
  },

  getAuditTrail: async (reviewId: string, params?: Record<string, any>) => {
    return get<any>(`/onboarding/reviews/${reviewId}/audit`, params);
  },

  getRiskHistory: async (reviewId: string) => {
    return get<any>(`/onboarding/reviews/${reviewId}/risk`);
  },

  requestInfo: async (reviewId: string, data: { reason: string; fields_requested: string[] }) => {
    return post<any>(`/onboarding/reviews/${reviewId}/request-info`, data);
  },
};
