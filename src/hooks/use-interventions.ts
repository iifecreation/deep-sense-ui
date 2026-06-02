import { useState, useEffect } from 'react';
import { interventionsService } from '@/services/interventions.service';

export interface UseInterventionsOptions {
  query?: any;
  enabled?: boolean;
}

export function useInterventions(options: UseInterventionsOptions = {}) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, enabled = true } = options;

  const fetchInterventions = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await interventionsService.list(query);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch interventions:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInterventions();
  }, [enabled, JSON.stringify(query)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchInterventions,
  };
}

export function useIntervention(interventionId: string, enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchIntervention = async () => {
    if (!enabled || !interventionId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await interventionsService.get(interventionId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch intervention:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIntervention();
  }, [interventionId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchIntervention,
  };
}
