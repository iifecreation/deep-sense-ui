import { get } from '@/lib/api/client';

export const resourcesService = {
  async getWhitepapers(): Promise<any> {
    return await get<any>('/content/whitepapers');
  },
  async getCaseStudies(): Promise<any> {
    return await get<any>('/content/case-studies');
  },
  async getGuides(): Promise<any> {
    return await get<any>('/content/guides');
  }
};
