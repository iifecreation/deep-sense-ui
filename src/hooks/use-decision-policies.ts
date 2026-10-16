import { useState, useEffect, useCallback } from 'react';
import { decisionPoliciesService, DecisionPolicy, DecisionPolicyVersion } from '@/services/decision-policies.service';

export function useDecisionPolicies() {
  const [data, setData] = useState<DecisionPolicy[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchPolicies = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await decisionPoliciesService.list();
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch decision policies:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPolicies();
  }, [fetchPolicies]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchPolicies,
  };
}

export function useDecisionPolicyVersions(policyId: string | null) {
  const [data, setData] = useState<DecisionPolicyVersion[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchVersions = useCallback(async () => {
    if (!policyId) return;

    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await decisionPoliciesService.listVersions(policyId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch decision policy versions:', err);
    } finally {
      setIsLoading(false);
    }
  }, [policyId]);

  useEffect(() => {
    fetchVersions();
  }, [fetchVersions]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchVersions,
  };
}
