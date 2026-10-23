import { analyticsService } from '@/services/analytics.service';
import { AnalyticsOverview } from '@/types';
import { useAsyncResource } from './use-async-resource';

export interface UseAnalyticsOptions {
  filters?: Parameters<typeof analyticsService.getOverview>[0];
  enabled?: boolean;
}

export function useDashboardMetrics(options: UseAnalyticsOptions = {}) {
  const { filters = {}, enabled = true } = options;

  return useAsyncResource<AnalyticsOverview>(
    () => analyticsService.getOverview(filters),
    JSON.stringify([filters]),
    { enabled, label: 'dashboard metrics' },
  );
}
