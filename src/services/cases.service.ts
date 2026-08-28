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

export interface CaseNarrativeReasonCode {
  code: string;
  label: string;
  occurrences: number;
}

export interface CaseNarrativeTrajectoryPoint {
  decision_id: string;
  service_key: string;
  subject_type: string;
  subject_id: string;
  score: number;
  risk_level: string;
  decision: string;
  recommended_action: string;
  created_at: string;
}

export interface CaseNarrativeEvidenceItem {
  evidence_type: string;
  label: string;
  source_record_type: string;
}

export interface CaseNarrative {
  case_id: string;
  status: string;
  priority: number;
  title: string | null;
  assignee_user_id: string | null;
  headline: string;
  paragraphs: string[];
  decision_count: number;
  domains_involved: string[];
  key_reason_codes: CaseNarrativeReasonCode[];
  risk_trajectory: CaseNarrativeTrajectoryPoint[];
  notable_evidence: CaseNarrativeEvidenceItem[];
  analyst_note_count: number;
  analyst_action_count: number;
  generated_at: string;
}

export interface RecommendedAction {
  action_type: string;
  label: string;
  category: string;
  priority: number;
  rationale: string[];
  already_taken: boolean;
}

export interface CaseRecommendations {
  case_id: string;
  status: string;
  generated_at: string;
  decision_count: number;
  recommendations: RecommendedAction[];
}

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
   * Generate a plain-language investigation summary for a case, built from
   * every normalized risk decision linked to it.
   */
  async getCaseNarrative(caseId: string): Promise<CaseNarrative> {
    return await get<CaseNarrative>(`/cases/${caseId}/narrative`);
  },

  /**
   * Get ranked next-best-action recommendations for a case, computed from
   * its linked normalized risk decisions, status, age, and recorded actions.
   */
  async getCaseRecommendations(caseId: string): Promise<CaseRecommendations> {
    return await get<CaseRecommendations>(`/cases/${caseId}/recommendations`);
  },

  /**
   * Create feedback for case
   */
  async createCaseFeedback(caseId: string, data: any): Promise<any> {
    return await post<any>(`/cases/${caseId}/feedback`, data);
  },
};
