import { get, post } from "@/lib/api/client";

export interface DecisionExplanation {
  id: string;
  transaction_id: string;
  final_score: number;
  decision: string;
  shap_values: Record<string, number> | null;
  lime_explanation: Record<string, unknown> | null;
  top_reasons: { component: string; reason: string; score?: number }[] | null;
  human_summary: string | null;
  rule_explanations: Record<string, unknown> | null;
  ml_explanation: Record<string, unknown> | null;
  graph_explanation: Record<string, unknown> | null;
  screening_explanation: Record<string, unknown> | null;
  anomaly_explanation: Record<string, unknown> | null;
  device_explanation: Record<string, unknown> | null;
  counterfactual_id: string | null;
  explanation_version: string | null;
  regulatory_export_at: string | null;
  created_at: string | null;
}

export interface ModelDriftSnapshot {
  id: string;
  model_id: string;
  snapshot_at: string;
  psi_score: number;
  ks_statistic: number | null;
  alert_triggered: boolean;
  alert_severity: string | null;
  feature_drift: Record<string, unknown> | null;
  reference_sample_count: number;
  current_sample_count: number;
  created_at: string | null;
}

export interface ModelCard {
  id: string;
  model_version_id: string;
  intended_use: string;
  training_data_description: string;
  evaluation_metrics: Record<string, unknown>;
  fairness_metrics: Record<string, unknown> | null;
  known_limitations: string | null;
  is_published: boolean;
  published_at: string | null;
  version_label: string | null;
  created_at: string | null;
}

export const explainabilityService = {
  // The path says "decisions" but the id is actually the transaction id -
  // DecisionExplanation is keyed 1:1 on transaction_id, not a separate
  // decision concept.
  getDecisionExplanation: (transactionId: string) =>
    get<DecisionExplanation>(`/explainability/decisions/${transactionId}/explanation`),

  listModelDrift: (modelId: string, limit = 50) =>
    get<{ items: ModelDriftSnapshot[]; total: number }>(`/explainability/models/${modelId}/drift`, {
      params: { limit },
    }),

  getModelCard: (versionId: string) =>
    get<ModelCard>(`/explainability/model-cards/by-version/${versionId}`),

  createModelCard: (data: {
    model_version_id: string;
    intended_use: string;
    training_data_description: string;
    evaluation_metrics: Record<string, unknown>;
    known_limitations?: string;
  }) => post<ModelCard>("/explainability/model-cards", data),

  publishModelCard: (cardId: string) =>
    post<ModelCard>(`/explainability/model-cards/${cardId}/publish`),
};
