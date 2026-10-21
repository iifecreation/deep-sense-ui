import { get, post } from '@/lib/api/client';
import type { ContactSubmissionRequest, PostRead, SubmitContactFormApiV1ContentContactPost201 } from "@/lib/api-client/api";

export const contentService = {
  async getPage(slug: string): Promise<PostRead> {
    return await get<PostRead>(`/content/pages/${slug}`);
  },
  
  async submitContact(data: ContactSubmissionRequest): Promise<SubmitContactFormApiV1ContentContactPost201> {
    return await post<SubmitContactFormApiV1ContentContactPost201>('/content/contact', data);
  }
};
