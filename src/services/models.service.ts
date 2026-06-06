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

export interface ModelMetrics {
  total_predictions: number;
  average_latency_ms: number;
  precision: number;
  recall: number;
  f1_score: number;
  auc_roc: number;
  last_trained_at?: string;
  active_version: string;
}

export const modelsService = {
  async getModels(): Promise<{ items: MLModel[]; total: number }> {
    return await get<any>('/models');
  },
  
  async getModelMetrics(modelId: string): Promise<ModelMetrics> {
    return await get<ModelMetrics>(`/models/${modelId}/metrics`);
  },

  async requestRetrain(modelId: string): Promise<any> {
    return await post<any>(`/models/${modelId}/retrain`, {});
  }
};
