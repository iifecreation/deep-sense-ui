import { get } from "@/lib/api/client";

export interface ModelDriftFeatureDrift {
  psi: number;
  ks: number;
  drift_level: string;
}

export interface ModelDriftSnapshot {
  id: string;
  model_id: string;
  snapshot_at: string;
  psi_score: number | null;
  ks_statistic: number | null;
  alert_triggered: boolean;
  alert_severity: string | null;
  feature_drift: Record<string, ModelDriftFeatureDrift> | null;
  reference_sample_count: number;
  current_sample_count: number;
  created_at: string | null;
}

export interface ModelCard {
  id: string;
  model_version_id: string;
  intended_use: string;
  training_data_description: string;
  evaluation_metrics: Record<string, number>;
  fairness_metrics: Record<string, unknown> | null;
  known_limitations: string | null;
  is_published: boolean;
  published_at: string | null;
  version_label: string;
  created_at: string;
}

export const explainabilityService = {
  getModelDrift: (modelId: string, limit = 50, offset = 0) =>
    get<{ items: ModelDriftSnapshot[]; total: number }>(
      `/explainability/models/${modelId}/drift`,
      { params: { limit, offset } },
    ),
  getModelCardByVersion: (versionId: string) =>
    get<ModelCard>(`/explainability/model-cards/by-version/${versionId}`),
};
