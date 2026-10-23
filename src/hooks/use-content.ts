import { contentService } from '@/services/content.service';
import { useAsyncResource } from './use-async-resource';

export function useContentPage(slug: string) {
  return useAsyncResource(() => contentService.getPage(slug), JSON.stringify([slug]), {
    enabled: !!slug,
    label: `page ${slug}`,
  });
}
