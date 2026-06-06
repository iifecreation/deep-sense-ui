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
  const [data, setData] = useState<ModelMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!modelId) {
      setIsLoading(false);
      return;
    }

    let mounted = true;
    modelsService.getModelMetrics(modelId)
      .then(res => {
        if (mounted) {
          setData(res);
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
  }, [modelId]);

  return { data, isLoading, isError };
}
