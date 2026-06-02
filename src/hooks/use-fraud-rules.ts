import { useState, useEffect } from 'react';
import { fraudRulesService } from '@/services/fraud-rules.service';
import { FraudRuleListFilters } from '@/types';

export interface UseFraudRulesOptions {
  query?: any;
  filters?: FraudRuleListFilters;
  enabled?: boolean;
}

export function useFraudRules(options: UseFraudRulesOptions = {}) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, filters = {}, enabled = true } = options;

  const fetchRules = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await fraudRulesService.listRules(query, filters);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch fraud rules:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRules();
  }, [enabled, JSON.stringify(query), JSON.stringify(filters)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchRules,
  };
}

export function useFraudRule(ruleId: string, enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchRule = async () => {
    if (!enabled || !ruleId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await fraudRulesService.getRule(ruleId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch fraud rule:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRule();
  }, [ruleId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchRule,
  };
}

export function useFraudRuleMetrics(days: number = 30, enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchMetrics = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await fraudRulesService.getMetricsSummary(days);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch fraud rule metrics:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, [days, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchMetrics,
  };
}
