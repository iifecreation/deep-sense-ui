/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from '@/lib/api/client';

export const enterpriseDashboardService = {
  /**
   * Get unified enterprise risk dashboard
   */
  async getDashboard(): Promise<any> {
    return await get<any>('/enterprise-risk/dashboard');
  },

  /**
   * Get risk heatmap
   */
  async getHeatmap(): Promise<any> {
    return await get<any>('/enterprise-risk/heatmap');
  },

  /**
   * Get risk trends over time
   */
  async getTrends(timePeriod: string = '30d'): Promise<any> {
    return await get<any>('/enterprise-risk/trends', { params: { time_period: timePeriod } });
  },

  /**
   * Get Key Risk Indicators (KRIs)
   */
  async getKRI(): Promise<any> {
    return await get<any>('/enterprise-risk/kri');
  },

  /**
   * Get executive summary
   */
  async getExecutiveSummary(period: string = '30d'): Promise<any> {
    return await get<any>('/enterprise-risk/executive-summary', { params: { period } });
  },
};
