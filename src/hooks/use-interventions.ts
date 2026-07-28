import { useCallback, useEffect, useState } from 'react';
import {
  InterventionPolicy,
  interventionsService,
} from '@/services/interventions.service';

export interface UseInterventionsOptions {
  query?: { include_inactive?: boolean; limit?: number; offset?: number };
  enabled?: boolean;
}

export function useInterventions(options: UseInterventionsOptions = {}) {
  const { query, enabled = true } = options;
  const [data, setData] = useState<InterventionPolicy[]>([]);
  const [isLoading, setIsLoading] = useState(enabled);
  const [error, setError] = useState<Error | null>(null);

  const fetchPolicies = useCallback(async () => {
    if (!enabled) return;
    setIsLoading(true);
    setError(null);
    try {
      setData(await interventionsService.listPolicies(query));
    } catch (caught) {
      setError(caught instanceof Error ? caught : new Error('Failed to load intervention policies'));
    } finally {
      setIsLoading(false);
    }
  }, [enabled, query]);

  useEffect(() => {
    void fetchPolicies();
  }, [fetchPolicies]);

  return {
    data,
    isLoading,
    isError: error !== null,
    error,
    isEmpty: !isLoading && error === null && data.length === 0,
    refetch: fetchPolicies,
  };
}
