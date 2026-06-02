/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post, patch } from '@/lib/api/client';

export interface Notification {
  id: string;
  title: string;
  body: string;
  type: string;
  status: string;
  read_at: string | null;
  created_at: string;
}

export const notificationsService = {
  async list(params?: { page?: number; page_size?: number; unread_only?: boolean }) {
    return await get<any>('/notifications', { params });
  },

  async markAsRead(notificationId: string) {
    return await patch<any>(`/notifications/${notificationId}`, { read: true });
  },

  async markAllAsRead() {
    return await post<any>('/notifications/mark-all-read');
  },
};
