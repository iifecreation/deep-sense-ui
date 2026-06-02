import { useState, useEffect } from 'react';
import { billingService } from '@/services/billing.service';

export interface UseBillingOptions {
  enabled?: boolean;
}

export function useCurrentPlan(options: UseBillingOptions = {}) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { enabled = true } = options;

  const fetchPlan = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await billingService.getCurrentPlan();
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch current plan:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlan();
  }, [enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchPlan,
  };
}

export function useBillingUsage(options: UseBillingOptions = {}) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { enabled = true } = options;

  const fetchUsage = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await billingService.getUsage();
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch usage:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsage();
  }, [enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchUsage,
  };
}
