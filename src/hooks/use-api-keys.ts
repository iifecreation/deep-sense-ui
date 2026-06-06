import { useState, useEffect, useCallback } from 'react';
import { apiKeysService } from '@/services/api-keys.service';

export function useApiKeys() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchKeys = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await apiKeysService.listKeys();
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch api keys:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchKeys();
  }, [fetchKeys]);

  return { data, isLoading, isError, refetch: fetchKeys };
}
