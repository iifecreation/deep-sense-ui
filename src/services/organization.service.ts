/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  OrganizationSettingsRead,
  OrganizationSettingsPatch,
  OrganizationStatsResponse,
  OrganizationServiceSettingsRead,
  OrganizationServiceSettingsPatch,
} from '@/types';
import { get, patch } from '@/lib/api/client';

export const organizationService = {
  /**
   * Get organization settings
   */
  async getSettings(): Promise<OrganizationSettingsRead> {
    return await get<OrganizationSettingsRead>('/organization/settings');
  },

  /**
   * Update organization settings
   */
  async updateSettings(data: OrganizationSettingsPatch): Promise<OrganizationSettingsRead> {
    return await patch<OrganizationSettingsRead>('/organization/settings', data);
  },

  /**
   * Get organization stats
   */
  async getStats(): Promise<OrganizationStatsResponse> {
    return await get<OrganizationStatsResponse>('/organization/stats');
  },

  /**
   * Get organization services
   */
  async getServices(): Promise<OrganizationServiceSettingsRead> {
    return await get<OrganizationServiceSettingsRead>('/organization/services');
  },

  /**
   * Update organization services
   */
  async updateServices(data: OrganizationServiceSettingsPatch): Promise<OrganizationServiceSettingsRead> {
    return await patch<OrganizationServiceSettingsRead>('/organization/services', data);
  },

  /**
   * Get organization analytics overview
   */
  async getAnalyticsOverview(
    dateFrom?: string,
    dateTo?: string,
    interval: string = 'day'
  ): Promise<any> {
    return await get<any>('/organization/stats/overview', {
      params: { date_from: dateFrom, date_to: dateTo, interval },
    });
  },
};
