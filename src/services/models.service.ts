import { get, post } from '@/lib/api/client';

export interface MLModel {
  id: string;
  name: string;
  slug: string;
  model_type: string;
  description: string;
  status: string;
  active_version_id?: string;
}

export interface MLModelDetail extends MLModel {
  organization_id?: string | null;
  artifact_location?: string | null;
  last_trained_at?: string | null;
  last_activated_at?: string | null;
  primary_metric_name?: string | null;
  primary_metric_value?: number | null;
  created_at: string;
  updated_at: string;
  active_version_label?: string | null;
  total_versions: number;
  available_actions: string[];
}

export interface ModelMetrics {
  total_predictions?: number;
  average_latency_ms?: number;
  precision?: number;
  recall?: number;
  f1?: number;
  auc_roc?: number;
  last_trained_at?: string;
  active_version?: string;
}

export interface ModelMetricsResponse {
  model_id: string;
  latest_metrics: ModelMetrics | null;
  historical_snapshots: Array<{ version_label: string; trained_at: string; metrics: ModelMetrics }>;
}

export const modelsService = {
  async getModels(): Promise<{ items: MLModel[]; total: number }> {
    return await get<any>('/models');
  },

  async getModelMetrics(modelId: string): Promise<ModelMetricsResponse> {
    return await get<ModelMetricsResponse>(`/models/${modelId}/metrics`);
  },

  async getModelDetail(modelId: string): Promise<MLModelDetail> {
    return await get<MLModelDetail>(`/models/${modelId}`);
  },

  async requestRetrain(modelId: string): Promise<any> {
    return await post<any>(`/models/${modelId}/retrain`, {});
  },

  async deactivateModel(modelId: string, reason?: string): Promise<any> {
    return await post<any>(`/models/${modelId}/deactivate`, { reason });
  },

  async registerModel(data: { name: string; slug: string; model_type: string; description?: string }): Promise<MLModel> {
    return await post<MLModel>('/models/register', data);
  }
};
