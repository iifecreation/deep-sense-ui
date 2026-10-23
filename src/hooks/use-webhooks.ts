import { webhooksService } from '@/services/webhooks.service';
import { useAsyncResource } from './use-async-resource';

export interface UseWebhooksOptions {
  query?: Parameters<typeof webhooksService.list>[0];
  enabled?: boolean;
}

export function useWebhooks(options: UseWebhooksOptions = {}) {
  const { query = {}, enabled = true } = options;

  return useAsyncResource(
    async () => (await webhooksService.list(query)).items || [],
    JSON.stringify([query]),
    { enabled, label: 'webhooks' },
  );
}

// Org-wide webhook delivery log (across all endpoints), used by the webhooks
// developer-hub view for the "Delivery Logs" tab and retry actions.
export function useWebhookDeliveries(options: UseWebhooksOptions = {}) {
  const { query = {}, enabled = true } = options;

  return useAsyncResource(
    async () => (await webhooksService.listAllDeliveries(query)).items || [],
    JSON.stringify([query]),
    { enabled, label: 'webhook deliveries' },
  );
}
