import {
  ScreeningMatchRead,
  ScreeningMatchDetail,
  ScreeningMatchFilters,
  ScreeningDecisionRequest,
  ScreeningMutationResponse,
  WatchlistRead,
  WatchlistCreateRequest,
  RescreenRequest,
  ScreeningJobRead,
  ScreeningJobFilters,
  PaginatedResponse,
  ListQueryParams,
} from '@/types';
import { get, post } from '@/lib/api/client';
import type {
  FuzzyScreeningCheckRequest,
  FuzzyScreeningCheckResponse,
  InternalUploadResponse,
  PaginatedWatchlistEntryUnified,
  ScreeningCheckRequest,
  ScreeningCheckResponse,
  TransactionFuzzyScreeningCheckRequest,
  WatchlistDetailRead,
} from '@/lib/api-client/api';

export const screeningService = {
  /**
   * List screening matches with pagination and filters
   */
  async listMatches(
    query: ListQueryParams = {},
    filters: ScreeningMatchFilters = {}
  ): Promise<PaginatedResponse<ScreeningMatchRead>> {
    const params = { ...query, ...filters };
    return await get<PaginatedResponse<ScreeningMatchRead>>('/screening/matches', { params });
  },

  /**
   * Get screening match detail
   */
  async getMatch(matchId: string): Promise<ScreeningMatchDetail> {
    return await get<ScreeningMatchDetail>(`/screening/matches/${matchId}`);
  },

  /**
   * Confirm screening match
   */
  async confirmMatch(matchId: string, data: ScreeningDecisionRequest): Promise<ScreeningMutationResponse> {
    return await post<ScreeningMutationResponse>(`/screening/matches/${matchId}/confirm`, data);
  },

  /**
   * Dismiss screening match
   */
  async dismissMatch(matchId: string, data: ScreeningDecisionRequest): Promise<ScreeningMutationResponse> {
    return await post<ScreeningMutationResponse>(`/screening/matches/${matchId}/dismiss`, data);
  },

  /**
   * Escalate screening match
   */
  async escalateMatch(matchId: string, data: ScreeningDecisionRequest): Promise<ScreeningMutationResponse> {
    return await post<ScreeningMutationResponse>(`/screening/matches/${matchId}/escalate`, data);
  },

  /**
   * Assign screening match
   */
  async assignMatch(matchId: string, assignedUserId: string): Promise<ScreeningMutationResponse> {
    return await post<ScreeningMutationResponse>(`/screening/matches/${matchId}/assign`, { assigned_user_id: assignedUserId });
  },

  /**
   * List watchlists
   */
  async listWatchlists(): Promise<WatchlistRead[]> {
    return await get<WatchlistRead[]>('/screening/watchlists');
  },

  /**
   * Create watchlist
   */
  async createWatchlist(data: WatchlistCreateRequest): Promise<WatchlistRead> {
    return await post<WatchlistRead>('/screening/watchlists', data);
  },

  /**
   * Get watchlist detail
   */
  async getWatchlist(watchlistId: string): Promise<WatchlistDetailRead> {
    return await get<WatchlistDetailRead>(`/screening/watchlists/${watchlistId}`);
  },

  /**
   * Create re-screening job
   */
  async createRescreenJob(data: RescreenRequest): Promise<ScreeningJobRead> {
    return await post<ScreeningJobRead>('/screening/rescreen', data);
  },

  /**
   * List screening jobs
   */
  async listScreeningJobs(
    query: ListQueryParams = {},
    filters: ScreeningJobFilters = {}
  ): Promise<PaginatedResponse<ScreeningJobRead>> {
    const params = { ...query, ...filters };
    return await get<PaginatedResponse<ScreeningJobRead>>('/screening/jobs', { params });
  },

  /**
   * List watchlist entries
   */
  async listWatchlistEntries(
    query: ListQueryParams = {},
    source?: string
  ): Promise<PaginatedWatchlistEntryUnified> {
    return await get<PaginatedWatchlistEntryUnified>('/screening/watchlist-entries', {
      params: { ...query, source },
    });
  },

  /**
   * Upload internal watchlist CSV
   */
  async uploadInternalWatchlist(csvText: string, watchlistName: string, replace: boolean = false): Promise<InternalUploadResponse> {
    return await post<InternalUploadResponse>('/screening/watchlists/internal/upload', {
      csv_text: csvText,
      watchlist_name: watchlistName,
      replace,
    });
  },

  /**
   * Ad-hoc screening check
   */
  async check(data: ScreeningCheckRequest): Promise<ScreeningCheckResponse> {
    return await post<ScreeningCheckResponse>('/screening/check', data);
  },

  /**
   * Fuzzy check customer
   */
  async fuzzyCheckCustomer(data: FuzzyScreeningCheckRequest): Promise<FuzzyScreeningCheckResponse> {
    return await post<FuzzyScreeningCheckResponse>('/screening/check/customer', data);
  },

  /**
   * Fuzzy check counterparty
   */
  async fuzzyCheckCounterparty(data: FuzzyScreeningCheckRequest): Promise<FuzzyScreeningCheckResponse> {
    return await post<FuzzyScreeningCheckResponse>('/screening/check/counterparty', data);
  },

  /**
   * Fuzzy check transaction
   */
  async fuzzyCheckTransaction(data: TransactionFuzzyScreeningCheckRequest): Promise<FuzzyScreeningCheckResponse> {
    return await post<FuzzyScreeningCheckResponse>('/screening/check/transaction', data);
  },
};
