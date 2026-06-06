import { useState, useEffect, useCallback } from 'react';
import { resourcesService } from '@/services/resources.service';

export function useWhitepapers() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchWhitepapers = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await resourcesService.getWhitepapers();
      setData(res.data || []);
    } catch (err) {
      console.error('Failed to fetch whitepapers:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWhitepapers();
  }, [fetchWhitepapers]);

  return { data, isLoading, isError, refetch: fetchWhitepapers };
}

export function useCaseStudies() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchCaseStudies = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await resourcesService.getCaseStudies();
      setData(res.data || []);
    } catch (err) {
      console.error('Failed to fetch case studies:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCaseStudies();
  }, [fetchCaseStudies]);

  return { data, isLoading, isError, refetch: fetchCaseStudies };
}

export function useGuides() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchGuides = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await resourcesService.getGuides();
      setData(res.data || []);
    } catch (err) {
      console.error('Failed to fetch guides:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGuides();
  }, [fetchGuides]);

  return { data, isLoading, isError, refetch: fetchGuides };
}
