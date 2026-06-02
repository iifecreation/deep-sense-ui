import { get, post, patch, del } from '@/lib/api/client';

export interface Intervention {
  id: string;
  title: string;
  description: string;
  intervention_type: string;
  status: string;
  priority: string;
  target_type: string;
  target_id: string;
  reason: string;
  created_at: string;
  updated_at: string;
  created_by: string;
}

export interface InterventionCreate {
  title: string;
  description?: string;
  intervention_type: string;
  priority?: string;
  target_type: string;
  target_id: string;
  reason: string;
}

export interface InterventionUpdate {
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  reason?: string;
}

export const interventionsService = {
  async list(params?: { page?: number; page_size?: number; search?: string; status?: string }) {
    return await get<any>('/interventions', { params });
  },

  async create(data: InterventionCreate) {
    return await post<any>('/interventions', data);
  },

  async get(interventionId: string) {
    return await get<any>(`/interventions/${interventionId}`);
  },

  async update(interventionId: string, data: InterventionUpdate) {
    return await patch<any>(`/interventions/${interventionId}`, data);
  },

  async delete(interventionId: string) {
    return await del<any>(`/interventions/${interventionId}`);
  },
};
