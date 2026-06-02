import { useState, useEffect } from 'react';
import { transactionsService } from '@/services/transactions.service';
import { TransactionRead, TransactionListFilters } from '@/types';

export interface UseTransactionsOptions {
  query?: any;
  filters?: TransactionListFilters;
  enabled?: boolean;
}

export function useTransactions(options: UseTransactionsOptions = {}) {
  const [data, setData] = useState<TransactionRead[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, filters = {}, enabled = true } = options;

  const fetchTransactions = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await transactionsService.listTransactions(query, filters);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch transactions:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [enabled, JSON.stringify(query), JSON.stringify(filters)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchTransactions,
  };
}

export function useTransaction(transactionId: string, enabled: boolean = true) {
  const [data, setData] = useState<TransactionRead | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchTransaction = async () => {
    if (!enabled || !transactionId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await transactionsService.getTransaction(transactionId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch transaction:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, [transactionId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchTransaction,
  };
}
