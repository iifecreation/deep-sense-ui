/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertRead,
  AlertDetail,
  AlertSuppressionRuleCreate,
  AlertSuppressionRuleRead,
  AlertSuppressionRuleUpdate,
  AlertListFilters,
  PaginatedResponse,
  ListQueryParams,
} from '@/types';
import { get, post, patch, del as deleteFn } from '@/lib/api/client';

export const alertsService = {
  /**
   * List alerts with pagination and filters
   */
  async listAlerts(
    query: ListQueryParams = {},
    filters: AlertListFilters = {}
  ): Promise<PaginatedResponse<AlertRead>> {
    const params = { ...query, ...filters };
    return await get<PaginatedResponse<AlertRead>>('/alerts', { params });
  },

  /**
   * Get alert detail by ID
   */
  async getAlert(alertId: string): Promise<AlertDetail> {
    return await get<AlertDetail>(`/alerts/${alertId}`);
  },

  /**
   * List alert groups
   */
  async listAlertGroups(
    query: ListQueryParams = {}
  ): Promise<PaginatedResponse<any>> {
    return await get<PaginatedResponse<any>>('/alerts/groups', { params: query });
  },

  /**
   * Get alert group by ID
   */
  async getAlertGroup(groupId: string): Promise<any> {
    return await get<any>(`/alerts/groups/${groupId}`);
  },

  /**
   * Create alert suppression rule
   */
  async createSuppressionRule(
    data: AlertSuppressionRuleCreate
  ): Promise<AlertSuppressionRuleRead> {
    return await post<AlertSuppressionRuleRead>('/alerts/suppression-rules', data);
  },

  /**
   * List alert suppression rules
   */
  async listSuppressionRules(): Promise<AlertSuppressionRuleRead[]> {
    return await get<AlertSuppressionRuleRead[]>('/alerts/suppression-rules');
  },

  /**
   * Update alert suppression rule
   */
  async updateSuppressionRule(
    ruleId: string,
    data: AlertSuppressionRuleUpdate
  ): Promise<AlertSuppressionRuleRead> {
    return await patch<AlertSuppressionRuleRead>(
      `/alerts/suppression-rules/${ruleId}`,
      data
    );
  },

  /**
   * Delete alert suppression rule
   */
  async deleteSuppressionRule(ruleId: string): Promise<void> {
    await deleteFn<void>(`/alerts/suppression-rules/${ruleId}`);
  },
};
