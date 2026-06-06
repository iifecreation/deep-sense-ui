import { get, post, del } from '@/lib/api/client';

export const apiKeysService = {
  listKeys: async () => {
    return get<any>('/api-keys');
  },

  createKey: async (data: { name: string; scopes: string[] }) => {
    return post<any>('/api-keys', data);
  },

  revokeKey: async (keyId: string) => {
    return del<any>(`/api-keys/${keyId}`);
  },

  rotateKey: async (keyId: string) => {
    return post<any>(`/api-keys/${keyId}/rotate`, {});
  }
};
