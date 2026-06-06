import { useState, useEffect, useCallback } from 'react';
import { contentService } from '@/services/content.service';

export function useContentPage(slug: string) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPage = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await contentService.getPage(slug);
      setData(res);
    } catch (err) {
      console.error(`Failed to fetch page ${slug}:`, err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  return { data, isLoading, isError, refetch: fetchPage };
}
