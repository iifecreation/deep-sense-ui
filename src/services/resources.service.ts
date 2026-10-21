import { get } from '@/lib/api/client';

// NOTE: /content/whitepapers, /content/case-studies and /content/guides are not implemented
// by the API yet, so these requests currently 404 and the resource pages show their error state.
export type ResourceItem = Record<string, unknown>;

export const resourcesService = {
  async getWhitepapers(): Promise<ResourceItem[]> {
    return await get<ResourceItem[]>('/content/whitepapers');
  },
  async getCaseStudies(): Promise<ResourceItem[]> {
    return await get<ResourceItem[]>('/content/case-studies');
  },
  async getGuides(): Promise<ResourceItem[]> {
    return await get<ResourceItem[]>('/content/guides');
  }
};
