/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post, patch, del } from '@/lib/api/client';

export interface Integration {
  id: string;
  name: string;
  type: string;
  status: string;
  config: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface IntegrationCreate {
  name: string;
  type: string;
  config: Record<string, any>;
}

export interface IntegrationUpdate {
  name?: string;
  config?: Record<string, any>;
  status?: string;
}

export const integrationsService = {
  async list(params?: { page?: number; page_size?: number; type?: string }) {
    return await get<any>('/integrations', { params });
  },

  async create(data: IntegrationCreate) {
    return await post<any>('/integrations', data);
  },

  async get(integrationId: string) {
    return await get<any>(`/integrations/${integrationId}`);
  },

  async update(integrationId: string, data: IntegrationUpdate) {
    return await patch<any>(`/integrations/${integrationId}`, data);
  },

  async delete(integrationId: string) {
    return await del<any>(`/integrations/${integrationId}`);
  },

  async test(integrationId: string) {
    return await post<any>(`/integrations/${integrationId}/test`);
  },
};
