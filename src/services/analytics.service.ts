import {
  AnalyticsOverview,
  AnalyticsFilters,
} from '@/types';
import { get } from '@/lib/api/client';

export const analyticsService = {
  /**
   * Get analytics overview
   */
  async getOverview(filters: AnalyticsFilters = {}): Promise<AnalyticsOverview> {
    return await get<AnalyticsOverview>('/analytics/overview', { params: filters });
  },
};
