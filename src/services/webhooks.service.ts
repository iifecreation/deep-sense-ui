import { get, post } from '@/lib/api/client';
import type {
  PaginatedWebhookDeliveryDetailRead,
  PaginatedWebhookDeliveryRead,
  PaginatedWebhookRead,
  WebhookCreateRequest,
  WebhookCreateResponse,
  IntegrationMutationResponse,
  WebhookReplayResponse,
  WebhookTestResult,
} from '@/lib/api-client/api';

export type WebhookCreate = WebhookCreateRequest;

// Endpoints are created, tested and disabled; the API has no per-endpoint GET, PATCH or DELETE.
export const webhooksService = {
  async list(params?: { page?: number; page_size?: number }) {
    return await get<PaginatedWebhookRead>('/integrations/webhooks', { params });
  },

  async create(data: WebhookCreate) {
    return await post<WebhookCreateResponse>('/integrations/webhooks', data);
  },

  async test(webhookId: string) {
    return await post<WebhookTestResult>(`/integrations/webhooks/${webhookId}/test`);
  },

  async disable(webhookId: string) {
    return await post<IntegrationMutationResponse>(`/integrations/webhooks/${webhookId}/disable`);
  },

  async listDeliveries(webhookId: string, params?: { page?: number; page_size?: number }) {
    return await get<PaginatedWebhookDeliveryRead>(`/integrations/webhooks/${webhookId}/deliveries`, { params });
  },

  // Org-wide delivery log, across all webhook endpoints, with replay support.
  async listAllDeliveries(params?: { page?: number; page_size?: number }) {
    return await get<PaginatedWebhookDeliveryDetailRead>('/webhooks/deliveries', { params });
  },

  async replayDelivery(deliveryId: string) {
    return await post<WebhookReplayResponse>(`/webhooks/deliveries/${deliveryId}/replay`);
  },
};
