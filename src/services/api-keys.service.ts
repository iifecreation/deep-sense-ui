import { get, post, del } from '@/lib/api/client';

export const apiKeysService = {
  listKeys: async () => {
    return get<any>('/integrations/api-keys');
  },

  createKey: async (data: { name: string; scopes: string[]; environment?: string }) => {
    return post<any>('/integrations/api-keys', data);
  },

  revokeKey: async (keyId: string) => {
    return del<any>(`/integrations/api-keys/${keyId}`);
  },

  rotateKey: async (keyId: string) => {
    return post<any>(`/integrations/api-keys/${keyId}/rotate`, {});
  }
};
