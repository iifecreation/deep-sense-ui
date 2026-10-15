import { get, post } from "@/lib/api/client";

export interface Counterfactual {
  id: string;
  decision_id: string;
  interventions: Record<string, unknown>;
  original_score: number;
  counterfactual_score: number;
  score_delta: number;
  original_decision: string;
  counterfactual_decision: string;
  narrative: string;
  created_at: string | null;
}

export const counterfactualService = {
  generate: (decisionId: string, interventions: Record<string, unknown>) =>
    post<Counterfactual>(`/explainability/decisions/${decisionId}/counterfactual`, {
      interventions,
    }),

  list: (decisionId: string, limit = 20) =>
    get<{ items: Counterfactual[]; total: number }>(
      `/explainability/decisions/${decisionId}/counterfactuals`,
      { params: { limit } },
    ),
};
