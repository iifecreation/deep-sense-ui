import { blogService } from '@/services/blog.service';
import { useAsyncResource } from './use-async-resource';

export interface UseBlogOptions {
  enabled?: boolean;
}

export function useBlogPosts(options: UseBlogOptions = {}) {
  const { enabled = true } = options;
  return useAsyncResource(() => blogService.listPosts(), '', { enabled, label: 'blog posts' });
}

export function useBlogPost(slug: string, enabled: boolean = true) {
  return useAsyncResource(
    () => blogService.getPost(slug),
    JSON.stringify([slug]),
    { enabled: enabled && !!slug, label: 'blog post' },
  );
}

export function useBlogCategories(enabled: boolean = true) {
  return useAsyncResource(
    () => blogService.listCategories(),
    JSON.stringify([]),
    { enabled, label: 'blog categories' },
  );
}

export function useFeaturedPosts(options: UseBlogOptions = {}) {
  const { enabled = true } = options;
  return useAsyncResource(() => blogService.getFeaturedPosts(), '', { enabled, label: 'featured posts' });
}
