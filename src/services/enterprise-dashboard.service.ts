import { get } from '@/lib/api/client';
import type {
  EnterpriseDashboardResponse,
  ExecutiveSummaryResponse,
  KRIMetricsResponse,
  RiskHeatmapResponse,
  RiskTrendsResponse,
} from '@/lib/api-client/api';

export const enterpriseDashboardService = {
  /**
   * Get unified enterprise risk dashboard
   */
  async getDashboard(): Promise<EnterpriseDashboardResponse> {
    return await get<EnterpriseDashboardResponse>('/enterprise-risk/dashboard');
  },

  /**
   * Get risk heatmap
   */
  async getHeatmap(): Promise<RiskHeatmapResponse> {
    return await get<RiskHeatmapResponse>('/enterprise-risk/heatmap');
  },

  /**
   * Get risk trends over time
   */
  async getTrends(timePeriod: string = '30d'): Promise<RiskTrendsResponse> {
    return await get<RiskTrendsResponse>('/enterprise-risk/trends', { params: { time_period: timePeriod } });
  },

  /**
   * Get Key Risk Indicators (KRIs)
   */
  async getKRI(): Promise<KRIMetricsResponse> {
    return await get<KRIMetricsResponse>('/enterprise-risk/kri');
  },

  /**
   * Get executive summary
   */
  async getExecutiveSummary(period: string = '30d'): Promise<ExecutiveSummaryResponse> {
    return await get<ExecutiveSummaryResponse>('/enterprise-risk/executive-summary', { params: { period } });
  },
};
