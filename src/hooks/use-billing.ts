import { billingService } from '@/services/billing.service';
import { useAsyncResource } from './use-async-resource';

export interface UseBillingOptions {
  enabled?: boolean;
}

export function useCurrentPlan(options: UseBillingOptions = {}) {
  const { enabled = true } = options;

  return useAsyncResource(
    () => billingService.getCurrentPlan(),
    JSON.stringify([]),
    { enabled, label: 'current plan' },
  );
}

export function useBillingUsage(options: UseBillingOptions = {}) {
  const { enabled = true } = options;

  return useAsyncResource(
    () => billingService.getUsage(),
    JSON.stringify([]),
    { enabled, label: 'usage' },
  );
}
