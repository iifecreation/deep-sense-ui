import { get } from '@/lib/api/client';

export interface PriorityServiceOperational {
  key: string;
  service: string;
  enabled: boolean | null;
  enabled_organization_count: number | null;
  events_processed: number;
  failed_events: number | null;
  error_rate: number | null;
  queue_depth: number | null;
  latest_successful_processing_at: string | null;
  provider_readiness: string | null;
  degraded_organization_count: number | null;
  service_version: string;
  last_configuration_change_at: string | null;
}

export interface PriorityServiceOperationsResponse {
  scope: 'tenant' | 'platform';
  services: PriorityServiceOperational[];
  generated_at: string;
}

export const riskOperationsService = {
  getPriorityServices: () =>
    get<PriorityServiceOperationsResponse>('/risk-operations/priority-services'),
};
