/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, post } from '@/lib/api/client';

export const complianceReportsService = {
  /**
   * List compliance report templates
   */
  async listTemplates(): Promise<any> {
    return await get<any>('/compliance-reports/templates');
  },

  /**
   * Run a compliance report
   */
  async runReport(data: any): Promise<any> {
    return await post<any>('/compliance-reports/run', data);
  },

  /**
   * List compliance report runs
   */
  async listRuns(params?: any): Promise<any> {
    return await get<any>('/compliance-reports/runs', { params });
  },

  /**
   * Get a single compliance report run
   */
  async getRun(runId: string): Promise<any> {
    return await get<any>(`/compliance-reports/runs/${runId}`);
  },

  /**
   * Export a compliance report run
   */
  async exportRun(runId: string, data: any): Promise<any> {
    return await post<any>(`/compliance-reports/runs/${runId}/export`, data);
  },

  /**
   * List available compliance frameworks
   */
  async listFrameworks(): Promise<any[]> {
    return await get<any[]>('/compliance-reports/frameworks');
  },

  /**
   * Generate a compliance report
   */
  async generateReport(data: any): Promise<any> {
    return await post<any>('/compliance-reports/generate', data);
  },

  /**
   * Get gap analysis for a framework
   */
  async getGapAnalysis(framework: string): Promise<any> {
    return await get<any>(`/compliance-reports/gap-analysis/${framework}`);
  },
};
