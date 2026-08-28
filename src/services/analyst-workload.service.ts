import { get } from "@/lib/api/client";

export interface AnalystWorkloadEntry {
  user_id: string;
  open_case_count: number;
  high_priority_open_count: number;
  workload_score: number;
  oldest_open_case_age_days: number | null;
}

export interface TeamWorkloadReport {
  generated_at: string;
  entries: AnalystWorkloadEntry[];
}

export interface AssignmentRecommendation {
  case_id: string;
  generated_at: string;
  recommended_assignee_user_id: string | null;
  candidates_considered: number;
  candidates: AnalystWorkloadEntry[];
  note: string;
}

export const analystWorkloadService = {
  /**
   * Open-case count, high-priority count, and a priority-weighted workload
   * score per analyst, lightest load first. Candidates are inferred from
   * real case assignments in this org unless candidateUserIds is supplied.
   */
  async getTeamWorkload(candidateUserIds?: string[]): Promise<TeamWorkloadReport> {
    return await get<TeamWorkloadReport>("/cases/workload", {
      params: candidateUserIds?.length ? { candidate_user_ids: candidateUserIds } : undefined,
    });
  },

  /**
   * Recommend which analyst should take a case, ranked by current open-case
   * workload. Advisory only — does not assign the case.
   */
  async getAssignmentRecommendation(
    caseId: string,
    candidateUserIds?: string[],
  ): Promise<AssignmentRecommendation> {
    return await get<AssignmentRecommendation>(`/cases/${caseId}/assignment-recommendation`, {
      params: candidateUserIds?.length ? { candidate_user_ids: candidateUserIds } : undefined,
    });
  },
};
