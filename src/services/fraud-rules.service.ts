/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FraudRuleRead,
  FraudRuleCreate,
  FraudRuleUpdate,
  FraudRuleListFilters,
  FraudRuleTestRequest,
  FraudRuleTestResponse,
  PaginatedResponse,
  ListQueryParams,
} from '@/types';
import { get, post, patch, del as deleteFn } from '@/lib/api/client';

export const fraudRulesService = {
  /**
   * List fraud rules with pagination and filters
   */
  async listRules(
    query: ListQueryParams = {},
    filters: FraudRuleListFilters = {}
  ): Promise<PaginatedResponse<FraudRuleRead>> {
    const params = { ...query, ...filters };
    return await get<PaginatedResponse<FraudRuleRead>>('/fraud-rules', { params });
  },

  /**
   * Create a new fraud rule
   */
  async createRule(data: FraudRuleCreate): Promise<FraudRuleRead> {
    return await post<FraudRuleRead>('/fraud-rules', data);
  },

  /**
   * Get fraud rule by ID
   */
  async getRule(ruleId: string): Promise<FraudRuleRead> {
    return await get<FraudRuleRead>(`/fraud-rules/${ruleId}`);
  },

  /**
   * Get fraud rule detail
   */
  async getRuleDetail(ruleId: string): Promise<any> {
    return await get<any>(`/fraud-rules/${ruleId}/detail`);
  },

  /**
   * Get fraud rule analytics
   */
  async getRuleAnalytics(ruleId: string): Promise<any> {
    return await get<any>(`/fraud-rules/${ruleId}/analytics`);
  },

  /**
   * Get fraud rule metrics
   */
  async getRuleMetrics(ruleId: string, days: number = 30): Promise<any[]> {
    return await get<any[]>(`/fraud-rules/${ruleId}/metrics`, { params: { days } });
  },

  /**
   * Get fraud rule metrics summary
   */
  async getMetricsSummary(days: number = 30): Promise<any> {
    return await get<any>('/fraud-rules/metrics/summary', { params: { days } });
  },

  /**
   * Get noisy fraud rules
   */
  async getNoisyRules(days: number = 30, minTriggers: number = 10): Promise<any[]> {
    return await get<any[]>('/fraud-rules/noisy', { params: { days, min_triggers: minTriggers } });
  },

  /**
   * Get stale fraud rules
   */
  async getStaleRules(days: number = 30): Promise<any[]> {
    return await get<any[]>('/fraud-rules/stale', { params: { days } });
  },

  /**
   * Get high-impact fraud rules
   */
  async getHighImpactRules(days: number = 30, limit: number = 20): Promise<any[]> {
    return await get<any[]>('/fraud-rules/high-impact', { params: { days, limit } });
  },

  /**
   * Get fraud rule triggers
   */
  async getRuleTriggers(
    ruleId: string,
    query: ListQueryParams = {},
    filters: any = {}
  ): Promise<PaginatedResponse<any>> {
    const params = { ...query, ...filters };
    return await get<PaginatedResponse<any>>(`/fraud-rules/${ruleId}/triggers`, { params });
  },

  /**
   * Get fraud rule audit
   */
  async getRuleAudit(ruleId: string, query: ListQueryParams = {}): Promise<PaginatedResponse<any>> {
    return await get<PaginatedResponse<any>>(`/fraud-rules/${ruleId}/audit`, { params: query });
  },

  /**
   * Update fraud rule
   */
  async updateRule(ruleId: string, data: FraudRuleUpdate): Promise<FraudRuleRead> {
    return await patch<FraudRuleRead>(`/fraud-rules/${ruleId}`, data);
  },

  /**
   * Delete fraud rule
   */
  async deleteRule(ruleId: string): Promise<void> {
    await deleteFn<void>(`/fraud-rules/${ruleId}`);
  },

  /**
   * Enable fraud rule
   */
  async enableRule(ruleId: string, reason?: string): Promise<FraudRuleRead> {
    return await post<FraudRuleRead>(`/fraud-rules/${ruleId}/enable`, { reason });
  },

  /**
   * Disable fraud rule
   */
  async disableRule(ruleId: string, reason?: string): Promise<FraudRuleRead> {
    return await post<FraudRuleRead>(`/fraud-rules/${ruleId}/disable`, { reason });
  },

  /**
   * Archive fraud rule
   */
  async archiveRule(ruleId: string, reason?: string): Promise<FraudRuleRead> {
    return await post<FraudRuleRead>(`/fraud-rules/${ruleId}/archive`, { reason });
  },

  /**
   * Duplicate fraud rule
   */
  async duplicateRule(ruleId: string): Promise<FraudRuleRead> {
    return await post<FraudRuleRead>(`/fraud-rules/${ruleId}/duplicate`);
  },

  /**
   * Test all rules
   */
  async testAllRules(data: FraudRuleTestRequest): Promise<FraudRuleTestResponse> {
    return await post<FraudRuleTestResponse>('/fraud-rules/test', data);
  },

  /**
   * Test single rule
   */
  async testSingleRule(ruleId: string, data: FraudRuleTestRequest): Promise<any> {
    return await post<any>(`/fraud-rules/${ruleId}/test`, data);
  },

  /**
   * Validate conditions
   */
  async validateConditions(data: any): Promise<any> {
    return await post<any>('/fraud-rules/validate-conditions', data);
  },
};
