import { get } from '@/lib/api/client';
import type {
  CategoryRead,
  ListPostsApiV1PublicBlogPostsGetParams,
  PaginatedPublicPostListItem,
  PublicPostDetail,
  PublicPostListItem,
} from '@/lib/api-client/api';

// Public, unauthenticated blog API (`/public/blog/*`); only published posts are returned.
export const blogService = {
  async listPosts(params?: ListPostsApiV1PublicBlogPostsGetParams): Promise<PaginatedPublicPostListItem> {
    return await get<PaginatedPublicPostListItem>('/public/blog/posts', { params });
  },

  async getPost(slug: string): Promise<PublicPostDetail> {
    return await get<PublicPostDetail>(`/public/blog/posts/${encodeURIComponent(slug)}`);
  },

  async listCategories(): Promise<CategoryRead[]> {
    return await get<CategoryRead[]>('/public/blog/categories');
  },

  async getFeaturedPosts(limit?: number): Promise<PublicPostListItem[]> {
    return await get<PublicPostListItem[]>('/public/blog/featured', { params: { limit } });
  },
};
