import { useCallback, useEffect, useState } from 'react';
import { dashboardService, TenantDashboardOverview } from '@/services/dashboard.service';

export function useDashboard(enabled = true) {
  const [data, setData] = useState<TenantDashboardOverview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchDashboard = useCallback(async () => {
    if (!enabled) return;

    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await dashboardService.getOverview();
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchDashboard,
  };
}
