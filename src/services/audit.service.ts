import { get } from "@/lib/api/client";

// NOTE: these hit the general audit-trail router (`/audit/...`), which covers
// every entity type and supports the filters this page's hooks pass through
// (category/severity/actor/etc. - see app.api.v1.endpoints.audit on the
// backend). This is a different, broader endpoint group than
// `/settings/audit`, which is only the settings-change trail - do not merge
// the two paths back together.
export const auditService = {
  listEvents: async (params?: Record<string, any>) => {
    return get<any>('/audit/events', { params });
  },

  getEventDetail: async (eventId: string) => {
    return get<any>(`/audit/events/${eventId}`);
  },

  exportEvents: async (format: string, params?: Record<string, any>) => {
    return get<any>(`/audit/export`, { params: { ...params, format } });
  },

  getSummary: async () => {
    return get<any>('/audit/summary');
  }
};
