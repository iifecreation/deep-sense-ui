/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FraudCaseRead,
  FraudCaseCreate,
  FraudCaseUpdate,
  FraudCaseDetail,
  CaseNoteCreate,
  CaseNoteRead,
  CaseAssignBody,
  CaseStatusBody,
  CaseListFilters,
  PaginatedResponse,
  ListQueryParams,
} from '@/types';
import { get, post, patch, del as deleteFn } from '@/lib/api/client';

export const casesService = {
  /**
   * List fraud cases with pagination and filters
   */
  async listCases(
    query: ListQueryParams = {},
    filters: CaseListFilters = {}
  ): Promise<PaginatedResponse<FraudCaseRead>> {
    const params = { ...query, ...filters };
    return await get<PaginatedResponse<FraudCaseRead>>('/cases', { params });
  },

  /**
   * Create a new fraud case
   */
  async createCase(data: FraudCaseCreate): Promise<FraudCaseRead> {
    return await post<FraudCaseRead>('/cases', data);
  },

  /**
   * Get case detail by ID
   */
  async getCase(caseId: string): Promise<FraudCaseDetail> {
    return await get<FraudCaseDetail>(`/cases/${caseId}`);
  },

  /**
   * Update case metadata
   */
  async updateCase(caseId: string, data: FraudCaseUpdate): Promise<FraudCaseRead> {
    return await patch<FraudCaseRead>(`/cases/${caseId}`, data);
  },

  /**
   * Delete case (soft delete)
   */
  async deleteCase(caseId: string): Promise<void> {
    await deleteFn<void>(`/cases/${caseId}`);
  },

  /**
   * Assign case to a user
   */
  async assignCase(caseId: string, data: CaseAssignBody): Promise<FraudCaseRead> {
    return await post<FraudCaseRead>(`/cases/${caseId}/assign`, data);
  },

  /**
   * Transition case status
   */
  async transitionCaseStatus(
    caseId: string,
    data: CaseStatusBody
  ): Promise<FraudCaseRead> {
    return await post<FraudCaseRead>(`/cases/${caseId}/status`, data);
  },

  /**
   * Add note to case
   */
  async addCaseNote(caseId: string, data: CaseNoteCreate): Promise<CaseNoteRead> {
    return await post<CaseNoteRead>(`/cases/${caseId}/notes`, data);
  },

  /**
   * Get case explanation
   */
  async getCaseExplanation(caseId: string): Promise<any> {
    return await get<any>(`/cases/${caseId}/explanation`);
  },

  /**
   * Create feedback for case
   */
  async createCaseFeedback(caseId: string, data: any): Promise<any> {
    return await post<any>(`/cases/${caseId}/feedback`, data);
  },
};
