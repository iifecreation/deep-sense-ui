import { useState, useEffect } from 'react';
import { blogService } from '@/services/blog.service';

export interface UseBlogOptions {
  enabled?: boolean;
}

export function useBlogPosts(options: UseBlogOptions = {}) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { enabled = true } = options;

  const fetchPosts = async (params?: any) => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await blogService.listPosts(params);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch blog posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchPosts,
  };
}

export function useBlogPost(slug: string, enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchPost = async () => {
    if (!enabled || !slug) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await blogService.getPost(slug);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch blog post:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [slug, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchPost,
  };
}

export function useBlogCategories(enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchCategories = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await blogService.listCategories();
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch blog categories:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchCategories,
  };
}

export function useFeaturedPosts(options: UseBlogOptions = {}) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { enabled = true } = options;

  const fetchFeatured = async (params?: any) => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await blogService.getFeaturedPosts(params);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch featured posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, [enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchFeatured,
  };
}
