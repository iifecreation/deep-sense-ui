/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post } from '@/lib/api/client';

export interface SupportMessage {
  id: string;
  ticket_id: string;
  sender_user_id: string | null;
  sender_type: string;
  body: string;
  created_at: string;
}

export interface SupportTicket {
  id: string;
  organization_id: string | null;
  requester_user_id: string | null;
  subject: string;
  description: string | null;
  status: string;
  priority: string;
  category: string;
  created_at: string;
  updated_at: string;
  last_response_at: string | null;
  messages?: SupportMessage[];
}

export interface SupportTicketCreate {
  subject: string;
  message: string;
  priority: string;
  category: string;
}

export const supportService = {
  async list(params?: { status?: string; limit?: number; offset?: number }) {
    return await get<SupportTicket[]>('/support/tickets', { params });
  },

  async create(data: SupportTicketCreate) {
    return await post<SupportTicket>('/support/tickets', data);
  },

  async get(ticketId: string) {
    return await get<SupportTicket>(`/support/tickets/${ticketId}`);
  },

  async reply(ticketId: string, message: string) {
    return await post<SupportMessage>(`/support/tickets/${ticketId}/messages`, { message });
  },
};
