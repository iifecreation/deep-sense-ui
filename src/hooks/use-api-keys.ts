import { apiKeysService } from '@/services/api-keys.service';
import { useAsyncResource } from './use-async-resource';

export function useApiKeys() {
  const { data, isLoading, isError, error, refetch } = useAsyncResource(
    async () => (await apiKeysService.listKeys())?.items ?? [],
    '',
    { label: 'api keys' },
  );
  return { data: data ?? [], isLoading, isError, error, refetch };
}
