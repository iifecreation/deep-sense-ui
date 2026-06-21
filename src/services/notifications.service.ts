import { get, post } from '@/lib/api/client';

export interface UserNotification {
  id: string; // this is the delivery ID
  notification_id: string;
  subject: string;
  message: string;
  channel: string;
  is_read: boolean;
  read_at: string | null;
  created_at: string;
}

export interface UserNotificationPage {
  items: UserNotification[];
  total: number;
}

export const notificationsService = {
  async list(params?: { unread_only?: boolean; page?: number; page_size?: number }) {
    return await get<UserNotificationPage>('/me/notifications', { params });
  },

  async getUnreadCount() {
    return await get<{ unread_count: number }>('/me/notifications/unread-count');
  },

  async markAsRead(deliveryId: string) {
    return await post<{ delivery_id: string; is_read: boolean }>(`/me/notifications/${deliveryId}/read`);
  },

  async markAsUnread(deliveryId: string) {
    return await post<{ delivery_id: string; is_read: boolean }>(`/me/notifications/${deliveryId}/unread`);
  },

  async markAllAsRead() {
    return await post<{ success: boolean; marked_count: number }>('/me/notifications/read-all');
  },
};
