import { useState, useEffect, useCallback } from 'react';
import { modelsService, MLModel, MLModelDetail, ModelMetrics } from '../services/models.service';

export function useModels() {
  const [data, setData] = useState<MLModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // State only changes once the request settles, so the effect never sets state synchronously.
  const loadModels = useCallback(() => {
    return modelsService.getModels()
      .then(res => {
        setData(res.items || []);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const refetch = () => {
    setIsLoading(true);
    setIsError(false);
    return loadModels();
  };

  useEffect(() => {
    loadModels();
  }, [loadModels]);

  return { data, isLoading, isError, refetch };
}

export function useModelMetrics(modelId?: string) {
  const [result, setResult] = useState<{
    modelId: string;
    data: ModelMetrics | null;
    isError: boolean;
  } | null>(null);

  useEffect(() => {
    if (!modelId) return;

    let mounted = true;
    modelsService.getModelMetrics(modelId)
      .then(res => {
        if (mounted) {
          setResult({ modelId, data: res.latest_metrics, isError: false });
        }
      })
      .catch(() => {
        if (mounted) {
          setResult({ modelId, data: null, isError: true });
        }
      });
    return () => { mounted = false; };
  }, [modelId]);

  const currentResult = result?.modelId === modelId ? result : null;
  return {
    data: currentResult?.data ?? null,
    isLoading: Boolean(modelId && currentResult === null),
    isError: currentResult?.isError ?? false,
  };
}

export function useModelDetail(modelId?: string) {
  const [data, setData] = useState<MLModelDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const loadDetail = useCallback(() => {
    if (!modelId) return;
    return modelsService.getModelDetail(modelId)
      .then(res => {
        setData(res);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [modelId]);

  const refetch = () => {
    if (!modelId) return;
    setIsLoading(true);
    setIsError(false);
    return loadDetail();
  };

  useEffect(() => {
    loadDetail();
  }, [loadDetail]);

  return { data, isLoading, isError, refetch };
}
