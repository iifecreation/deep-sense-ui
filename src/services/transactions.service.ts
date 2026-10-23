import {
  TransactionRead,
  TransactionIngest,
  TransactionIngestResult,
  TransactionListFilters,
  PaginatedResponse,
  ListQueryParams,
} from '@/types';
import { get, post } from '@/lib/api/client';
import type {
  BulkTransactionResult,
  DecisionExplanationRead,
  TransactionScoreBreakdown,
} from '@/lib/api-client/api';

export const transactionsService = {
  /**
   * List transactions with pagination and filters
   */
  async listTransactions(
    query: ListQueryParams = {},
    filters: TransactionListFilters = {}
  ): Promise<PaginatedResponse<TransactionRead>> {
    const params = { ...query, ...filters };
    return await get<PaginatedResponse<TransactionRead>>('/transactions', { params });
  },

  /**
   * Get transaction by ID
   */
  async getTransaction(transactionId: string): Promise<TransactionRead> {
    return await get<TransactionRead>(`/transactions/${transactionId}`);
  },

  /**
   * Ingest a single transaction
   */
  async ingestTransaction(data: TransactionIngest): Promise<TransactionIngestResult> {
    return await post<TransactionIngestResult>('/transactions', data);
  },

  /**
   * Get transaction score breakdown
   */
  async getTransactionScoreBreakdown(transactionId: string): Promise<TransactionScoreBreakdown> {
    return await get<TransactionScoreBreakdown>(`/transactions/${transactionId}/score-breakdown`);
  },

  /**
   * Get transaction explanation
   */
  async getTransactionExplanation(transactionId: string): Promise<DecisionExplanationRead> {
    return await get<DecisionExplanationRead>(`/transactions/${transactionId}/explanation`);
  },

  /**
   * Bulk ingest transactions
   */
  async bulkIngestTransactions(items: TransactionIngest[]): Promise<BulkTransactionResult> {
    return await post<BulkTransactionResult>('/transactions/bulk', { items });
  },
};
