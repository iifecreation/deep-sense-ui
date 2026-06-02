/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from '@/lib/api/client';

export const blogService = {
  /**
   * List all published blog posts
   */
  async listPosts(params?: any): Promise<any> {
    return await get<any>('/content/posts', { params: { ...params, status: 'published' } });
  },

  /**
   * Get a single blog post by slug
   */
  async getPost(slug: string): Promise<any> {
    return await get<any>(`/content/posts/${slug}`);
  },

  /**
   * List blog categories
   */
  async listCategories(): Promise<any[]> {
    return await get<any[]>('/content/categories');
  },

  /**
   * Get posts by category
   */
  async getPostsByCategory(categorySlug: string, params?: any): Promise<any> {
    return await get<any>(`/content/categories/${categorySlug}/posts`, { params });
  },

  /**
   * Get featured posts
   */
  async getFeaturedPosts(params?: any): Promise<any> {
    return await get<any>('/content/posts', { params: { ...params, featured: true, status: 'published' } });
  },

  /**
   * Search blog posts
   */
  async searchPosts(query: string, params?: any): Promise<any> {
    return await get<any>('/content/posts', { params: { ...params, search: query, status: 'published' } });
  },
};
