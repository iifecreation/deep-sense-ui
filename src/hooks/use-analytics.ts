import { useState, useEffect } from 'react';
import { analyticsService } from '@/services/analytics.service';
import { AnalyticsOverview } from '@/types';

export interface UseAnalyticsOptions {
  filters?: any;
  enabled?: boolean;
}

export function useDashboardMetrics(options: UseAnalyticsOptions = {}) {
  const [data, setData] = useState<AnalyticsOverview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { filters = {}, enabled = true } = options;

  const fetchMetrics = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await analyticsService.getOverview(filters);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch dashboard metrics:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, [enabled, JSON.stringify(filters)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchMetrics,
  };
}
