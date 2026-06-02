import { useState, useEffect } from 'react';
import { webhooksService } from '@/services/webhooks.service';

export interface UseWebhooksOptions {
  query?: any;
  enabled?: boolean;
}

export function useWebhooks(options: UseWebhooksOptions = {}) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, enabled = true } = options;

  const fetchWebhooks = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await webhooksService.list(query);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch webhooks:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWebhooks();
  }, [enabled, JSON.stringify(query)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchWebhooks,
  };
}

export function useWebhook(webhookId: string, enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchWebhook = async () => {
    if (!enabled || !webhookId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await webhooksService.get(webhookId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch webhook:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWebhook();
  }, [webhookId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchWebhook,
  };
}
