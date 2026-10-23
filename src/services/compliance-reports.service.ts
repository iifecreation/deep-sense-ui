import { get, post } from '@/lib/api/client';
import type {
  ComplianceFrameworkSummary,
  ComplianceGapAnalysisResponse,
  ComplianceReportExportRead,
  ComplianceReportExportRequest,
  ComplianceReportGenerateRequest,
  ComplianceReportRead,
  ComplianceReportRunListResponse,
  ComplianceReportRunRead,
  ComplianceReportRunRequest,
  ComplianceReportTemplateListResponse,
} from '@/lib/api-client/api';

export const complianceReportsService = {
  /**
   * List compliance report templates
   */
  async listTemplates(): Promise<ComplianceReportTemplateListResponse> {
    return await get<ComplianceReportTemplateListResponse>('/compliance-reports/templates');
  },

  /**
   * Run a compliance report
   */
  async runReport(data: ComplianceReportRunRequest): Promise<ComplianceReportRunRead> {
    return await post<ComplianceReportRunRead>('/compliance-reports/run', data);
  },

  /**
   * List compliance report runs
   */
  async listRuns(params?: Record<string, unknown>): Promise<ComplianceReportRunListResponse> {
    return await get<ComplianceReportRunListResponse>('/compliance-reports/runs', { params });
  },

  /**
   * Get a single compliance report run
   */
  async getRun(runId: string): Promise<ComplianceReportRunRead> {
    return await get<ComplianceReportRunRead>(`/compliance-reports/runs/${runId}`);
  },

  /**
   * Export a compliance report run
   */
  async exportRun(runId: string, data: ComplianceReportExportRequest): Promise<ComplianceReportExportRead> {
    return await post<ComplianceReportExportRead>(`/compliance-reports/runs/${runId}/export`, data);
  },

  /**
   * List available compliance frameworks
   */
  async listFrameworks(): Promise<ComplianceFrameworkSummary[]> {
    return await get<ComplianceFrameworkSummary[]>('/compliance-reports/frameworks');
  },

  /**
   * Generate a compliance report
   */
  async generateReport(data: ComplianceReportGenerateRequest): Promise<ComplianceReportRead> {
    return await post<ComplianceReportRead>('/compliance-reports/generate', data);
  },

  /**
   * Get gap analysis for a framework
   */
  async getGapAnalysis(framework: string): Promise<ComplianceGapAnalysisResponse> {
    return await get<ComplianceGapAnalysisResponse>(`/compliance-reports/gap-analysis/${framework}`);
  },
};
