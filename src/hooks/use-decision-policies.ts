import { useState, useEffect } from 'react';
import { decisionPoliciesService } from '@/services/decision-policies.service';

export interface UseDecisionPoliciesOptions {
  query?: any;
  enabled?: boolean;
}

export function useDecisionPolicies(options: UseDecisionPoliciesOptions = {}) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, enabled = true } = options;

  const fetchPolicies = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await decisionPoliciesService.list(query);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch decision policies:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPolicies();
  }, [enabled, JSON.stringify(query)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchPolicies,
  };
}

export function useDecisionPolicy(policyId: string, enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchPolicy = async () => {
    if (!enabled || !policyId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await decisionPoliciesService.get(policyId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch decision policy:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPolicy();
  }, [policyId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchPolicy,
  };
}
