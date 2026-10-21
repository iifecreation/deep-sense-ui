import { get, post } from '@/lib/api/client';
import type {
  ApiKeyCreateResponse,
  ApiKeyRotateResponse,
  IntegrationMutationResponse,
  PaginatedApiKeyRead,
} from "@/lib/api-client/api";

export const apiKeysService = {
  listKeys: async () => {
    return get<PaginatedApiKeyRead>('/integrations/api-keys');
  },

  createKey: async (data: { name: string; scopes: string[]; environment?: string }) => {
    return post<ApiKeyCreateResponse>('/integrations/api-keys', data);
  },

  revokeKey: async (keyId: string) => {
    return post<IntegrationMutationResponse>(`/integrations/api-keys/${keyId}/revoke`, {});
  },

  rotateKey: async (keyId: string) => {
    return post<ApiKeyRotateResponse>(`/integrations/api-keys/${keyId}/rotate`, {});
  }
};
