import { useState, useEffect } from 'react';
import { promotionService, GoLiveRequestRead } from '@/services/promotion.service';

export function usePromotionStatus(enabled: boolean = true) {
  const [data, setData] = useState<GoLiveRequestRead | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchStatus = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await promotionService.getGoLiveRequest();
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch promotion status:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, [enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchStatus,
  };
}
