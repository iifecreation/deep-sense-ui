/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post } from '@/lib/api/client';

export const adverseMediaService = {
  /**
   * Search adverse media for a person
   */
  async searchPerson(data: any): Promise<any> {
    return await post<any>('/adverse-media/search/person', data);
  },

  /**
   * Search adverse media for a company
   */
  async searchCompany(data: any): Promise<any> {
    return await post<any>('/adverse-media/search/company', data);
  },

  /**
   * Search adverse media (person or company)
   */
  async search(data: any): Promise<any> {
    return await post<any>('/adverse-media/search', data);
  },

  /**
   * List adverse media hits with filtering
   */
  async listHits(params?: any): Promise<any> {
    return await get<any>('/adverse-media/hits', { params });
  },

  /**
   * Get a single adverse media hit
   */
  async getHit(hitId: string): Promise<any> {
    return await get<any>(`/adverse-media/hits/${hitId}`);
  },

  /**
   * Resolve an adverse media hit
   */
  async resolveHit(hitId: string, data: any): Promise<any> {
    return await post<any>(`/adverse-media/hits/${hitId}/resolve`, data);
  },

  /**
   * List configured adverse media providers
   */
  async listProviders(): Promise<any[]> {
    return await get<any[]>('/adverse-media/providers');
  },

  /**
   * Create a new adverse media provider configuration
   */
  async createProvider(data: any): Promise<any> {
    return await post<any>('/adverse-media/providers', data);
  },
};
