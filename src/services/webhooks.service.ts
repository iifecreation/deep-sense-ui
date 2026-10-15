/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post, patch, del } from '@/lib/api/client';

export interface Webhook {
  id: string;
  url: string;
  events: string[];
  secret: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface WebhookCreate {
  url: string;
  event_types: string[];
  secret?: string;
  environment?: string;
  signing_enabled?: boolean;
  integration_id?: string | null;
  description?: string;
}

export interface WebhookDeliveryDetail {
  id: string;
  organization_id: string;
  endpoint_id: string;
  event_type: string;
  payload_json: Record<string, unknown> | null;
  status: string;
  attempt_count: number;
  next_attempt_at: string | null;
  last_attempt_at: string | null;
  response_status: number | null;
  response_body: string | null;
  idempotency_key: string | null;
  created_at: string;
  updated_at: string;
}

export interface WebhookUpdate {
  url?: string;
  events?: string[];
  secret?: string;
  status?: string;
}

export interface WebhookDelivery {
  id: string;
  webhook_id: string;
  status: string;
  attempt_count: number;
  response_code: number | null;
  response_body: string | null;
  created_at: string;
}

export const webhooksService = {
  async list(params?: { page?: number; page_size?: number }) {
    return await get<any>('/integrations/webhooks', { params });
  },

  async create(data: WebhookCreate) {
    return await post<any>('/integrations/webhooks', data);
  },

  async get(webhookId: string) {
    return await get<any>(`/integrations/webhooks/${webhookId}`);
  },

  async update(webhookId: string, data: WebhookUpdate) {
    return await patch<any>(`/integrations/webhooks/${webhookId}`, data);
  },

  async delete(webhookId: string) {
    return await del<any>(`/integrations/webhooks/${webhookId}`);
  },

  async test(webhookId: string) {
    return await post<any>(`/integrations/webhooks/${webhookId}/test`);
  },

  async disable(webhookId: string) {
    return await post<any>(`/integrations/webhooks/${webhookId}/disable`);
  },

  async listDeliveries(webhookId: string, params?: { page?: number; page_size?: number }) {
    return await get<any>(`/integrations/webhooks/${webhookId}/deliveries`, { params });
  },

  // Org-wide delivery log, across all webhook endpoints, with replay support.
  async listAllDeliveries(params?: { page?: number; page_size?: number }) {
    return await get<any>('/webhooks/deliveries', { params });
  },

  async replayDelivery(deliveryId: string) {
    return await post<any>(`/webhooks/deliveries/${deliveryId}/replay`);
  },
};
