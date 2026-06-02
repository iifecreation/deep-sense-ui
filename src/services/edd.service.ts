/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post, patch } from '@/lib/api/client';

export const eddService = {
  /**
   * Create an EDD review
   */
  async createReview(data: any): Promise<any> {
    return await post<any>('/edd/reviews', data);
  },

  /**
   * List EDD reviews
   */
  async listReviews(params?: any): Promise<any[]> {
    return await get<any[]>('/edd/reviews', { params });
  },

  /**
   * Get a single EDD review
   */
  async getReview(reviewId: string): Promise<any> {
    return await get<any>(`/edd/reviews/${reviewId}`);
  },

  /**
   * Update an EDD review
   */
  async updateReview(reviewId: string, data: any): Promise<any> {
    return await patch<any>(`/edd/reviews/${reviewId}`, data);
  },

  /**
   * Add evidence to an EDD review
   */
  async addEvidence(reviewId: string, data: any): Promise<any> {
    return await post<any>(`/edd/reviews/${reviewId}/evidence`, data);
  },
};
