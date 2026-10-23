import { integrationsService } from '@/services/integrations.service';
import { useAsyncResource } from './use-async-resource';

export interface UseIntegrationsOptions {
  query?: Parameters<typeof integrationsService.list>[0];
  enabled?: boolean;
}

export function useIntegrations(options: UseIntegrationsOptions = {}) {
  const { query = {}, enabled = true } = options;

  return useAsyncResource(
    async () => (await integrationsService.list(query)).items || [],
    JSON.stringify([query]),
    { enabled, label: 'integrations' },
  );
}

export function useIntegration(integrationId: string, enabled: boolean = true) {
  return useAsyncResource(
    () => integrationsService.get(integrationId),
    JSON.stringify([integrationId]),
    { enabled: enabled && !!integrationId, label: 'integration' },
  );
}
