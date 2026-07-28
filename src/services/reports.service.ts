/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReportRead,
  ReportCreateRequest,
  ReportUpdateRequest,
  ReportDetail,
  ReportListFilters,
  ReportAssignRequest,
  ReportReopenRequest,
  ReportAttachmentRead,
  ReportAttachmentRequest,
  ReportMutationResponse,
  PaginatedResponse,
  ListQueryParams,
} from '@/types';
import { get, getToken, patch, post } from '@/lib/api/client';
import { getRuntimeApiUrl } from '@/lib/runtime-environment';

export const reportsService = {
  /**
   * List reports with pagination and filters
   */
  async listReports(
    query: ListQueryParams = {},
    filters: ReportListFilters = {}
  ): Promise<PaginatedResponse<ReportRead>> {
    const params = { ...query, ...filters };
    return await get<PaginatedResponse<ReportRead>>('/reports', { params });
  },

  /**
   * Create a new report
   */
  async createReport(data: ReportCreateRequest): Promise<ReportRead> {
    return await post<ReportRead>('/reports', data);
  },

  /**
   * Create report from case
   */
  async createReportFromCase(caseId: string): Promise<ReportRead> {
    return await post<ReportRead>(`/reports/from-case/${caseId}`);
  },

  /**
   * Get report detail
   */
  async getReport(reportId: string): Promise<ReportDetail> {
    return await get<ReportDetail>(`/reports/${reportId}`);
  },

  /**
   * Update report
   */
  async updateReport(reportId: string, data: ReportUpdateRequest): Promise<ReportRead> {
    return await patch<ReportRead>(`/reports/${reportId}`, data);
  },

  /**
   * Validate report
   */
  async validateReport(reportId: string): Promise<string[]> {
    return await post<string[]>(`/reports/${reportId}/validate`);
  },

  /**
   * Submit report
   */
  async submitReport(reportId: string, destination: string): Promise<ReportRead> {
    return await post<ReportRead>(`/reports/${reportId}/submit`, { destination });
  },

  /**
   * Review report
   */
  async reviewReport(reportId: string, action: string, comments?: string): Promise<ReportRead> {
    return await post<ReportRead>(`/reports/${reportId}/review`, { action, comments });
  },

  /**
   * Approve report
   */
  async approveReport(reportId: string): Promise<ReportRead> {
    return await post<ReportRead>(`/reports/${reportId}/approve`);
  },

  /**
   * Export report
   */
  async exportReport(reportId: string, formatType: string): Promise<any> {
    const response = await fetch(
      `${getRuntimeApiUrl()}/api/v1/reports/${reportId}/export?format_type=${formatType}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return response;
  },

  /**
   * Mark report as submitted
   */
  async markSubmitted(reportId: string, destination: string, externalReference?: string): Promise<ReportRead> {
    return await post<ReportRead>(`/reports/${reportId}/mark-submitted`, null, {
      params: { destination, external_reference: externalReference },
    });
  },

  /**
   * Mark report as accepted
   */
  async markAccepted(reportId: string): Promise<ReportRead> {
    return await post<ReportRead>(`/reports/${reportId}/mark-accepted`);
  },

  /**
   * Mark report as rejected
   */
  async markRejected(reportId: string, reason: string): Promise<ReportRead> {
    return await post<ReportRead>(`/reports/${reportId}/mark-rejected`, null, {
      params: { reason },
    });
  },

  /**
   * Assign report
   */
  async assignReport(reportId: string, data: ReportAssignRequest): Promise<ReportMutationResponse> {
    return await post<ReportMutationResponse>(`/reports/${reportId}/assign`, data);
  },

  /**
   * Reopen report
   */
  async reopenReport(reportId: string, data: ReportReopenRequest): Promise<ReportMutationResponse> {
    return await post<ReportMutationResponse>(`/reports/${reportId}/reopen`, data);
  },

  /**
   * Get report audit trail
   */
  async getReportAudit(reportId: string): Promise<any[]> {
    return await get<any[]>(`/reports/${reportId}/audit`);
  },

  /**
   * List report submissions
   */
  async listSubmissions(): Promise<any[]> {
    return await get<any[]>('/reports/submissions');
  },

  /**
   * Get report version history
   */
  async getReportVersions(reportId: string): Promise<any[]> {
    return await get<any[]>(`/reports/${reportId}/versions`);
  },

  /**
   * Add report attachment
   */
  async addAttachment(reportId: string, data: ReportAttachmentRequest): Promise<ReportAttachmentRead> {
    return await post<ReportAttachmentRead>(`/reports/${reportId}/attachments`, data);
  },
};
