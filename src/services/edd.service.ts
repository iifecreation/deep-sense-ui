import { get, post, patch } from '@/lib/api/client';
import type {
  EddEvidenceCreate,
  EddEvidenceRead,
  EddReviewCreate,
  EddReviewRead,
  EddReviewUpdate,
} from '@/lib/api-client/api';

export const eddService = {
  /**
   * Create an EDD review
   */
  async createReview(data: EddReviewCreate): Promise<EddReviewRead> {
    return await post<EddReviewRead>('/edd/reviews', data);
  },

  /**
   * List EDD reviews
   */
  async listReviews(params?: Record<string, unknown>): Promise<EddReviewRead[]> {
    return await get<EddReviewRead[]>('/edd/reviews', { params });
  },

  /**
   * Get a single EDD review
   */
  async getReview(reviewId: string): Promise<EddReviewRead> {
    return await get<EddReviewRead>(`/edd/reviews/${reviewId}`);
  },

  /**
   * Update an EDD review
   */
  async updateReview(reviewId: string, data: EddReviewUpdate): Promise<EddReviewRead> {
    return await patch<EddReviewRead>(`/edd/reviews/${reviewId}`, data);
  },

  /**
   * Add evidence to an EDD review
   */
  async addEvidence(reviewId: string, data: EddEvidenceCreate): Promise<EddEvidenceRead> {
    return await post<EddEvidenceRead>(`/edd/reviews/${reviewId}/evidence`, data);
  },
};
