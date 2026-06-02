/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post, patch } from '@/lib/api/client';

export interface SupportTicket {
  id: string;
  subject: string;
  description: string;
  status: string;
  priority: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface SupportTicketCreate {
  subject: string;
  description: string;
  priority?: string;
  category?: string;
}

export interface SupportTicketUpdate {
  status?: string;
  priority?: string;
  description?: string;
}

export const supportService = {
  async list(params?: { page?: number; page_size?: number; status?: string }) {
    return await get<any>('/platform-support/tickets', { params });
  },

  async create(data: SupportTicketCreate) {
    return await post<any>('/platform-support/tickets', data);
  },

  async get(ticketId: string) {
    return await get<any>(`/platform-support/tickets/${ticketId}`);
  },

  async update(ticketId: string, data: SupportTicketUpdate) {
    return await patch<any>(`/platform-support/tickets/${ticketId}`, data);
  },
};
