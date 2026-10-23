import { transactionsService } from '@/services/transactions.service';
import { TransactionRead, TransactionListFilters, ListQueryParams } from '@/types';
import { useAsyncResource } from './use-async-resource';

export interface UseTransactionsOptions {
  query?: ListQueryParams;
  filters?: TransactionListFilters;
  enabled?: boolean;
}

export function useTransactions(options: UseTransactionsOptions = {}) {
  const { query = {}, filters = {}, enabled = true } = options;

  return useAsyncResource<TransactionRead[]>(
    async () => (await transactionsService.listTransactions(query, filters)).items || [],
    JSON.stringify([query, filters]),
    { enabled, label: 'transactions' },
  );
}

export function useTransaction(transactionId: string, enabled: boolean = true) {
  return useAsyncResource<TransactionRead>(
    () => transactionsService.getTransaction(transactionId),
    JSON.stringify([transactionId]),
    { enabled: enabled && !!transactionId, label: 'transaction' },
  );
}
