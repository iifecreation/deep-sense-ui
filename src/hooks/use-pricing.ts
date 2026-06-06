import { useState, useEffect, useCallback } from 'react';
import { pricingService } from '@/services/pricing.service';

export function usePricingPlans() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPlans = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await pricingService.getPlans();
      setData(res.data || []);
    } catch (err) {
      console.error('Failed to fetch pricing plans:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  return { data, isLoading, isError, refetch: fetchPlans };
}
