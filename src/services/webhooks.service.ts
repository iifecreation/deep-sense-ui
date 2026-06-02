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
  events: string[];
  secret?: string;
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
    return await get<any>('/webhooks', { params });
  },

  async create(data: WebhookCreate) {
    return await post<any>('/webhooks', data);
  },

  async get(webhookId: string) {
    return await get<any>(`/webhooks/${webhookId}`);
  },

  async update(webhookId: string, data: WebhookUpdate) {
    return await patch<any>(`/webhooks/${webhookId}`, data);
  },

  async delete(webhookId: string) {
    return await del<any>(`/webhooks/${webhookId}`);
  },

  async test(webhookId: string) {
    return await post<any>(`/webhooks/${webhookId}/test`);
  },

  async listDeliveries(webhookId: string, params?: { page?: number; page_size?: number }) {
    return await get<any>(`/webhooks/${webhookId}/deliveries`, { params });
  },
};
