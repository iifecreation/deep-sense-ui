import { get } from "@/lib/api/client";

export const auditService = {
  listEvents: async (params?: Record<string, any>) => {
    return get<any>('/settings/audit', params);
  },

  getEventDetail: async (eventId: string) => {
    return get<any>(`/settings/audit/${eventId}`);
  },

  exportEvents: async (format: string, params?: Record<string, any>) => {
    return get<any>(`/settings/audit/export`, { params: { ...params, format } });
  },

  getSummary: async () => {
    return get<any>('/settings/audit/summary');
  }
};
