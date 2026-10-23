import { pricingService } from '@/services/pricing.service';
import { useAsyncResource } from './use-async-resource';

export function usePricingPlans() {
  const { data, isLoading, isError, error, refetch } = useAsyncResource(
    async () => (await pricingService.getPlans())?.plans || [],
    '',
    { label: 'pricing plans' },
  );
  return { data: data ?? [], isLoading, isError, error, refetch };
}
