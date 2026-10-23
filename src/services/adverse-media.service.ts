import { get, post } from '@/lib/api/client';
import type {
  AdverseMediaHitListResponse,
  AdverseMediaHitRead,
  AdverseMediaHitResolveRequest,
  AdverseMediaHitResolveResponse,
  AdverseMediaProviderCreate,
  AdverseMediaProviderRead,
  AdverseMediaSearchRequest,
  AdverseMediaSearchResponse,
} from '@/lib/api-client/api';

export const adverseMediaService = {
  /**
   * Search adverse media for a person
   */
  async searchPerson(data: AdverseMediaSearchRequest): Promise<AdverseMediaSearchResponse> {
    return await post<AdverseMediaSearchResponse>('/adverse-media/search/person', data);
  },

  /**
   * Search adverse media for a company
   */
  async searchCompany(data: AdverseMediaSearchRequest): Promise<AdverseMediaSearchResponse> {
    return await post<AdverseMediaSearchResponse>('/adverse-media/search/company', data);
  },

  /**
   * Search adverse media (person or company)
   */
  async search(data: AdverseMediaSearchRequest): Promise<AdverseMediaSearchResponse> {
    return await post<AdverseMediaSearchResponse>('/adverse-media/search', data);
  },

  /**
   * List adverse media hits with filtering
   */
  async listHits(params?: Record<string, unknown>): Promise<AdverseMediaHitListResponse> {
    return await get<AdverseMediaHitListResponse>('/adverse-media/hits', { params });
  },

  /**
   * Get a single adverse media hit
   */
  async getHit(hitId: string): Promise<AdverseMediaHitRead> {
    return await get<AdverseMediaHitRead>(`/adverse-media/hits/${hitId}`);
  },

  /**
   * Resolve an adverse media hit
   */
  async resolveHit(hitId: string, data: AdverseMediaHitResolveRequest): Promise<AdverseMediaHitResolveResponse> {
    return await post<AdverseMediaHitResolveResponse>(`/adverse-media/hits/${hitId}/resolve`, data);
  },

  /**
   * List configured adverse media providers
   */
  async listProviders(): Promise<AdverseMediaProviderRead[]> {
    return await get<AdverseMediaProviderRead[]>('/adverse-media/providers');
  },

  /**
   * Create a new adverse media provider configuration
   */
  async createProvider(data: AdverseMediaProviderCreate): Promise<AdverseMediaProviderRead> {
    return await post<AdverseMediaProviderRead>('/adverse-media/providers', data);
  },
};
