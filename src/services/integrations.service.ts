/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post, patch } from '@/lib/api/client';

export interface Integration {
  id: string;
  organization_id: string;
  name: string;
  integration_type: string;
  status: string;
  environment?: string | null;
  last_tested_at?: string | null;
  last_test_status?: string | null;
  last_sync_at?: string | null;
  last_success_at?: string | null;
  last_error_at?: string | null;
  error_count: number;
  created_at: string;
  updated_at: string;
}

export interface IntegrationHealthSummary {
  status: string;
  last_tested_at?: string | null;
  last_test_status?: string | null;
  last_test_summary?: string | null;
  last_sync_at?: string | null;
  last_success_at?: string | null;
  last_error_at?: string | null;
  last_error_summary?: string | null;
  error_count: number;
  uptime_indicator: string;
}

// Note: unlike Integration (list item), the detail payload nests all health
// fields under `health` rather than flattening them onto the object.
export interface IntegrationDetail {
  id: string;
  organization_id: string;
  name: string;
  integration_type: string;
  status: string;
  environment?: string | null;
  description?: string | null;
  base_url?: string | null;
  auth_type?: string | null;
  config_display?: Record<string, any> | null;
  health: IntegrationHealthSummary;
  webhook_count: number;
  api_key_count: number;
  created_at: string;
  updated_at: string;
  available_actions: string[];
}

export interface IntegrationCreate {
  name: string;
  integration_type: string;
  environment?: string;
  base_url?: string;
  auth_type?: string;
  description?: string;
  config?: Record<string, any>;
}

export interface IntegrationUpdate {
  name?: string;
  environment?: string;
  base_url?: string;
  auth_type?: string;
  description?: string;
  config?: Record<string, any>;
}

export const integrationsService = {
  async list(params?: { page?: number; page_size?: number; type?: string; status?: string; search?: string }) {
    return await get<any>('/integrations', { params });
  },

  async create(data: IntegrationCreate) {
    return await post<IntegrationDetail>('/integrations', data);
  },

  async get(integrationId: string) {
    return await get<IntegrationDetail>(`/integrations/${integrationId}`);
  },

  async update(integrationId: string, data: IntegrationUpdate) {
    return await patch<IntegrationDetail>(`/integrations/${integrationId}`, data);
  },

  async test(integrationId: string) {
    return await post<any>(`/integrations/${integrationId}/test`);
  },

  async disable(integrationId: string) {
    return await post<any>(`/integrations/${integrationId}/disable`);
  },

  async enable(integrationId: string) {
    return await post<any>(`/integrations/${integrationId}/enable`);
  },

  async getHealth(integrationId: string) {
    return await get<any>(`/integrations/${integrationId}/health`);
  },

  async getLogs(integrationId: string, params?: { page?: number; page_size?: number }) {
    return await get<any>(`/integrations/${integrationId}/logs`, { params });
  },
};
