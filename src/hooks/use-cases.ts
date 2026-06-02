import { useState, useEffect } from 'react';
import { casesService } from '@/services/cases.service';
import { FraudCaseRead, FraudCaseDetail, CaseListFilters } from '@/types';

export interface UseCasesOptions {
  query?: any;
  filters?: CaseListFilters;
  enabled?: boolean;
}

export function useCases(options: UseCasesOptions = {}) {
  const [data, setData] = useState<FraudCaseRead[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, filters = {}, enabled = true } = options;

  const fetchCases = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await casesService.listCases(query, filters);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch cases:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCases();
  }, [enabled, JSON.stringify(query), JSON.stringify(filters)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchCases,
  };
}

export function useCase(caseId: string, enabled: boolean = true) {
  const [data, setData] = useState<FraudCaseDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchCase = async () => {
    if (!enabled || !caseId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await casesService.getCase(caseId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch case:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCase();
  }, [caseId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchCase,
  };
}
