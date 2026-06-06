/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TeamListResponse,
  TeamInviteRequest,
  TeamInviteResponse,
  TeamRolePatch,
  TeamStatusPatch,
  TeamMutationResponse,
} from '@/types';
import { get, post, patch } from '@/lib/api/client';

export const settingsService = {
  /**
   * List team members
   */
  async listTeam(): Promise<TeamListResponse> {
    return await get<TeamListResponse>('/settings/team');
  },

  /**
   * Invite team member
   */
  async inviteTeamMember(data: TeamInviteRequest): Promise<TeamInviteResponse> {
    return await post<TeamInviteResponse>('/settings/team/invite', data);
  },

  /**
   * Update team member role
   */
  async updateTeamRole(userId: string, data: TeamRolePatch): Promise<TeamMutationResponse> {
    return await patch<TeamMutationResponse>(`/settings/team/${userId}/role`, data);
  },

  /**
   * Update team member status
   */
  async updateTeamStatus(userId: string, data: TeamStatusPatch): Promise<TeamMutationResponse> {
    return await patch<TeamMutationResponse>(`/settings/team/${userId}/status`, data);
  },

  /**
   * Resend team invitation
   */
  async resendInvite(userId: string): Promise<TeamMutationResponse> {
    return await post<TeamMutationResponse>(`/settings/team/${userId}/resend-invite`);
  },

  /**
   * Deactivate team member
   */
  async deactivateUser(userId: string): Promise<TeamMutationResponse> {
    return await post<TeamMutationResponse>(`/settings/team/${userId}/deactivate`);
  },

  /**
   * Get webhook settings
   */
  async getWebhookSettings(): Promise<any> {
    return await get<any>('/settings/webhooks');
  },

  /**
   * Update webhook settings
   */
  async updateWebhookSettings(data: any): Promise<any> {
    return await patch<any>('/settings/webhooks', data);
  },

  /**
   * Get screening settings
   */
  async getScreeningSettings(): Promise<any> {
    return await get<any>('/settings/screening');
  },

  /**
   * Update screening settings
   */
  async updateScreeningSettings(data: any): Promise<any> {
    return await patch<any>('/settings/screening', data);
  },

  /**
   * Get reporting settings
   */
  async getReportingSettings(): Promise<any> {
    return await get<any>('/settings/reporting');
  },

  /**
   * Update reporting settings
   */
  async updateReportingSettings(data: any): Promise<any> {
    return await patch<any>('/settings/reporting', data);
  },

  /**
   * Get retention settings
   */
  async getRetentionSettings(): Promise<any> {
    return await get<any>('/settings/retention');
  },

  /**
   * Update retention settings
   */
  async updateRetentionSettings(data: any): Promise<any> {
    return await patch<any>('/settings/retention', data);
  },

  /**
   * Get security settings
   */
  async getSecuritySettings(): Promise<any> {
    return await get<any>('/settings/security');
  },

  /**
   * Update security settings
   */
  async updateSecuritySettings(data: any): Promise<any> {
    return await patch<any>('/settings/security', data);
  },

  /**
   * Get feature flags
   */
  async getFeatureFlags(): Promise<any> {
    return await get<any>('/settings/feature-flags');
  },

  /**
   * Update feature flags
   */
  async updateFeatureFlags(data: any): Promise<any> {
    return await patch<any>('/settings/feature-flags', data);
  },

  /**
   * Get permissions summary
   */
  async getPermissionsSummary(): Promise<any> {
    return await get<any>('/settings/permissions');
  },

  /**
   * Get settings audit trail
   */
  async getSettingsAudit(limit: number = 50, offset: number = 0): Promise<any> {
    return await get<any>('/settings/audit', { params: { limit, offset } });
  },

  /**
   * Get organization settings
   */
  async getOrganizationSettings(): Promise<any> {
    return await get<any>('/organization/settings');
  },

  /**
   * Update organization settings
   */
  async updateOrganizationSettings(data: any): Promise<any> {
    return await patch<any>('/organization/settings', data);
  },

  /**
   * Get notification settings
   */
  async getNotificationSettings(): Promise<any> {
    return await get<any>('/settings/notifications');
  },

  /**
   * Update notification settings
   */
  async updateNotificationSettings(data: any): Promise<any> {
    return await patch<any>('/settings/notifications', data);
  },
};
