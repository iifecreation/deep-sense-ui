import { useState, useEffect } from 'react';
import { modelsService, MLModel, ModelMetrics } from '../services/models.service';

export function useModels() {
  const [data, setData] = useState<MLModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let mounted = true;
    modelsService.getModels()
      .then(res => {
        if (mounted) {
          setData(res.items || []);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setIsError(true);
          setIsLoading(false);
        }
      });
    return () => { mounted = false; };
  }, []);

  return { data, isLoading, isError };
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
          setResult({ modelId, data: res, isError: false });
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
