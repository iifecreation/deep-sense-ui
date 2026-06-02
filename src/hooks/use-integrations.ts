import { useState, useEffect } from 'react';
import { integrationsService } from '@/services/integrations.service';

export interface UseIntegrationsOptions {
  query?: any;
  enabled?: boolean;
}

export function useIntegrations(options: UseIntegrationsOptions = {}) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, enabled = true } = options;

  const fetchIntegrations = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await integrationsService.list(query);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch integrations:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIntegrations();
  }, [enabled, JSON.stringify(query)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchIntegrations,
  };
}

export function useIntegration(integrationId: string, enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchIntegration = async () => {
    if (!enabled || !integrationId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await integrationsService.get(integrationId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch integration:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIntegration();
  }, [integrationId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchIntegration,
  };
}
