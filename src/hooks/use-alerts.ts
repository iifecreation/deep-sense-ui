import { alertsService } from '@/services/alerts.service';
import { AlertRead, AlertDetail, AlertListFilters, ListQueryParams } from '@/types';
import { useAsyncResource } from './use-async-resource';

export interface UseAlertsOptions {
  query?: ListQueryParams;
  filters?: AlertListFilters;
  enabled?: boolean;
}

export function useAlerts(options: UseAlertsOptions = {}) {
  const { query = {}, filters = {}, enabled = true } = options;

  return useAsyncResource<AlertRead[]>(
    async () => (await alertsService.listAlerts(query, filters)).items || [],
    JSON.stringify([query, filters]),
    { enabled, label: 'alerts' },
  );
}

export function useAlert(alertId: string, enabled: boolean = true) {
  return useAsyncResource<AlertDetail>(
    () => alertsService.getAlert(alertId),
    JSON.stringify([alertId]),
    { enabled: enabled && !!alertId, label: 'alert' },
  );
}
