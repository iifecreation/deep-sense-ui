import { useState, useEffect } from 'react';
import { alertsService } from '@/services/alerts.service';
import { AlertRead, AlertDetail, AlertListFilters } from '@/types';

export interface UseAlertsOptions {
  query?: any;
  filters?: AlertListFilters;
  enabled?: boolean;
}

export function useAlerts(options: UseAlertsOptions = {}) {
  const [data, setData] = useState<AlertRead[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, filters = {}, enabled = true } = options;

  const fetchAlerts = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await alertsService.listAlerts(query, filters);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch alerts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, [enabled, JSON.stringify(query), JSON.stringify(filters)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchAlerts,
  };
}

export function useAlert(alertId: string, enabled: boolean = true) {
  const [data, setData] = useState<AlertDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchAlert = async () => {
    if (!enabled || !alertId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await alertsService.getAlert(alertId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch alert:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlert();
  }, [alertId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchAlert,
  };
}
