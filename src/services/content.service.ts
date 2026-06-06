import { get, post } from '@/lib/api/client';

export const contentService = {
  async getPage(slug: string): Promise<any> {
    return await get<any>(`/content/pages/${slug}`);
  },
  
  async submitContact(data: any): Promise<any> {
    return await post<any>('/content/contact', data);
  }
};
