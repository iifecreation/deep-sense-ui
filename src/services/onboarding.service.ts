import { get, post } from "@/lib/api/client";
import type {
  OnboardingDocumentCreateRequest,
  OnboardingMutationResponse,
  OnboardingReviewDetail,
  OnboardingRiskResultRead,
  OnboardingScreeningSummary,
  PaginatedAuditEventRead,
  PaginatedOnboardingReviewListItem,
} from "@/lib/api-client/api";

export const onboardingService = {
  listReviews: async (params?: Record<string, unknown>) => {
    return get<PaginatedOnboardingReviewListItem>('/onboarding/reviews', { params });
  },

  getReviewDetail: async (reviewId: string) => {
    return get<OnboardingReviewDetail>(`/onboarding/reviews/${reviewId}`);
  },

  createReview: async (data: {
    customer_type: string;
    applicant_name: string;
    applicant_email?: string;
    applicant_phone?: string;
    onboarding_channel?: string;
  }) => {
    return post<OnboardingReviewDetail>('/onboarding/reviews', data);
  },

  approveReview: async (reviewId: string, data: { reason?: string; initialize_risk_profile?: boolean; idempotency_key?: string }) => {
    return post<OnboardingMutationResponse>(`/onboarding/reviews/${reviewId}/approve`, data);
  },

  rejectReview: async (reviewId: string, data: { reason: string; idempotency_key?: string }) => {
    return post<OnboardingMutationResponse>(`/onboarding/reviews/${reviewId}/reject`, data);
  },

  escalateReview: async (reviewId: string, data: { reason: string; escalate_to_edd?: boolean; create_case?: boolean; assigned_user_id?: string; idempotency_key?: string }) => {
    return post<OnboardingMutationResponse>(`/onboarding/reviews/${reviewId}/escalate`, data);
  },

  addDocument: async (reviewId: string, data: OnboardingDocumentCreateRequest) => {
    return post<OnboardingMutationResponse>(`/onboarding/reviews/${reviewId}/documents`, data);
  },

  getScreeningSummary: async (reviewId: string) => {
    return get<OnboardingScreeningSummary>(`/onboarding/reviews/${reviewId}/screening`);
  },

  assignReviewer: async (reviewId: string, data: { assigned_user_id: string | null }) => {
    return post<OnboardingMutationResponse>(`/onboarding/reviews/${reviewId}/assign`, data);
  },

  addNote: async (reviewId: string, data: { body: string }) => {
    return post<OnboardingMutationResponse>(`/onboarding/reviews/${reviewId}/notes`, data);
  },

  getAuditTrail: async (reviewId: string, params?: Record<string, unknown>) => {
    return get<PaginatedAuditEventRead>(`/onboarding/reviews/${reviewId}/audit`, { params });
  },

  getRiskHistory: async (reviewId: string) => {
    return get<OnboardingRiskResultRead[]>(`/onboarding/reviews/${reviewId}/risk`);
  },

  requestInfo: async (reviewId: string, data: { reason: string; fields_requested: string[] }) => {
    return post<OnboardingMutationResponse>(`/onboarding/reviews/${reviewId}/request-info`, data);
  },
};
