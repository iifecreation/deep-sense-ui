/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from '@/lib/api/client';

export const apiMonitoringService = {
  /**
   * Get API monitoring metrics
   */
  async getMetrics(params?: any): Promise<any> {
    return await get<any>('/api-monitoring/metrics', { params });
  },

  /**
   * Get API performance data
   */
  async getPerformance(params?: any): Promise<any> {
    return await get<any>('/api-monitoring/performance', { params });
  },

  /**
   * Get API error rates
   */
  async getErrorRates(params?: any): Promise<any> {
    return await get<any>('/api-monitoring/error-rates', { params });
  },

  /**
   * Get API latency data
   */
  async getLatency(params?: any): Promise<any> {
    return await get<any>('/api-monitoring/latency', { params });
  },

  /**
   * Get API throughput data
   */
  async getThroughput(params?: any): Promise<any> {
    return await get<any>('/api-monitoring/throughput', { params });
  },
};
