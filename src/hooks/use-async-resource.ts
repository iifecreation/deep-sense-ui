import { useCallback, useEffect, useRef, useState } from 'react';
import { ApiError } from '@/lib/api/client';

export interface AsyncResource<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

interface ResourceState<T> {
  key: string | null;
  data: T | null;
  error: Error | null;
  refreshing: boolean;
}

/**
 * Loads `load()` whenever `key` changes (pass a stable serialisation of the inputs, e.g.
 * JSON.stringify of the query). Responses from superseded requests are dropped, so a slow
 * earlier request can never overwrite newer results. Previous data is kept while reloading.
 */
export function useAsyncResource<T>(
  load: () => Promise<T>,
  key: string,
  { enabled = true, label = 'resource' }: { enabled?: boolean; label?: string } = {},
): AsyncResource<T> {
  const loadRef = useRef(load);
  useEffect(() => {
    loadRef.current = load;
  });

  const [state, setState] = useState<ResourceState<T>>({ key: null, data: null, error: null, refreshing: false });
  const generation = useRef(0);

  const run = useCallback(
    async (requestKey: string) => {
      const current = ++generation.current;
      try {
        const data = await loadRef.current();
        if (current === generation.current) setState({ key: requestKey, data, error: null, refreshing: false });
      } catch (err) {
        // 403s (service not enabled, missing permission) are expected states the page explains.
        if (!(err instanceof ApiError && err.statusCode === 403)) console.error(`Failed to fetch ${label}:`, err);
        if (current === generation.current) {
          setState((prev) => ({ key: requestKey, data: prev.data, error: err as Error, refreshing: false }));
        }
      }
    },
    [label],
  );

  useEffect(() => {
    if (enabled) void run(key);
  }, [enabled, key, run]);

  const refetch = useCallback(async () => {
    if (!enabled) return;
    setState((prev) => ({ ...prev, refreshing: true }));
    await run(key);
  }, [enabled, key, run]);

  const settled = state.key === key;
  return {
    data: state.data,
    isLoading: enabled && (!settled || state.refreshing),
    isError: enabled && settled && state.error !== null,
    error: settled ? state.error : null,
    refetch,
  };
}
