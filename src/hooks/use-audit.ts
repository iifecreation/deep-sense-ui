import { useAsyncResource } from './use-async-resource';
import { auditService } from '@/services/audit.service';

export function useAuditEvents(params?: Record<string, unknown>) {
  const { data, isLoading, isError, error, refetch } = useAsyncResource(
    () => auditService.listEvents(params),
    JSON.stringify([params]),
    { label: 'audit events' },
  );
  return { data, isLoading, isError, error, refetch };
}

export function useAuditEvent(eventId: string) {
  const { data, isLoading, isError, error, refetch } = useAsyncResource(
    () => auditService.getEventDetail(eventId),
    JSON.stringify([eventId]),
    { enabled: !!eventId, label: 'audit event details' },
  );
  return { data, isLoading, isError, error, refetch };
}

export function useAuditSummary() {
  const { data, isLoading, isError, error, refetch } = useAsyncResource(
    () => auditService.getSummary(),
    JSON.stringify([]),
    { label: 'audit summary' },
  );
  return { data, isLoading, isError, error, refetch };
}
