import {
  TeamListResponse,
  TeamInviteRequest,
  TeamInviteResponse,
  TeamRolePatch,
  TeamStatusPatch,
  TeamMutationResponse,
} from '@/types';
import { get, post, patch } from '@/lib/api/client';
import type {
  FeatureFlagsPatch,
  FeatureFlagsRead,
  OrganizationSettingsPatch,
  OrganizationSettingsRead,
  PermissionsSummaryResponse,
  ReportingSettingsPatch,
  ReportingSettingsRead,
  RetentionSettingsPatch,
  RetentionSettingsRead,
  ScreeningSettingsPatch,
  ScreeningSettingsRead,
  SecuritySettingsPatch,
  SecuritySettingsRead,
  SettingsAuditResponse,
  WebhookSettingsPatch,
  WebhookSettingsRead,
} from '@/lib/api-client/api';

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
  async getWebhookSettings(): Promise<WebhookSettingsRead> {
    return await get<WebhookSettingsRead>('/settings/webhooks');
  },

  /**
   * Update webhook settings
   */
  async updateWebhookSettings(data: WebhookSettingsPatch): Promise<WebhookSettingsRead> {
    return await patch<WebhookSettingsRead>('/settings/webhooks', data);
  },

  /**
   * Get screening settings
   */
  async getScreeningSettings(): Promise<ScreeningSettingsRead> {
    return await get<ScreeningSettingsRead>('/settings/screening');
  },

  /**
   * Update screening settings
   */
  async updateScreeningSettings(data: ScreeningSettingsPatch): Promise<ScreeningSettingsRead> {
    return await patch<ScreeningSettingsRead>('/settings/screening', data);
  },

  /**
   * Get reporting settings
   */
  async getReportingSettings(): Promise<ReportingSettingsRead> {
    return await get<ReportingSettingsRead>('/settings/reporting');
  },

  /**
   * Update reporting settings
   */
  async updateReportingSettings(data: ReportingSettingsPatch): Promise<ReportingSettingsRead> {
    return await patch<ReportingSettingsRead>('/settings/reporting', data);
  },

  /**
   * Get retention settings
   */
  async getRetentionSettings(): Promise<RetentionSettingsRead> {
    return await get<RetentionSettingsRead>('/settings/retention');
  },

  /**
   * Update retention settings
   */
  async updateRetentionSettings(data: RetentionSettingsPatch): Promise<RetentionSettingsRead> {
    return await patch<RetentionSettingsRead>('/settings/retention', data);
  },

  /**
   * Get security settings
   */
  async getSecuritySettings(): Promise<SecuritySettingsRead> {
    return await get<SecuritySettingsRead>('/settings/security');
  },

  /**
   * Update security settings
   */
  async updateSecuritySettings(data: SecuritySettingsPatch): Promise<SecuritySettingsRead> {
    return await patch<SecuritySettingsRead>('/settings/security', data);
  },

  /**
   * Get feature flags
   */
  async getFeatureFlags(): Promise<FeatureFlagsRead> {
    return await get<FeatureFlagsRead>('/settings/feature-flags');
  },

  /**
   * Update feature flags
   */
  async updateFeatureFlags(data: FeatureFlagsPatch): Promise<FeatureFlagsRead> {
    return await patch<FeatureFlagsRead>('/settings/feature-flags', data);
  },

  /**
   * Get permissions summary
   */
  async getPermissionsSummary(): Promise<PermissionsSummaryResponse> {
    return await get<PermissionsSummaryResponse>('/settings/permissions');
  },

  /**
   * Get settings audit trail
   */
  async getSettingsAudit(limit: number = 50, offset: number = 0): Promise<SettingsAuditResponse> {
    return await get<SettingsAuditResponse>('/settings/audit', { params: { limit, offset } });
  },

  /**
   * Get organization settings
   */
  async getOrganizationSettings(): Promise<OrganizationSettingsRead> {
    return await get<OrganizationSettingsRead>('/organization/settings');
  },

  /**
   * Update organization settings
   */
  async updateOrganizationSettings(data: OrganizationSettingsPatch): Promise<OrganizationSettingsRead> {
    return await patch<OrganizationSettingsRead>('/organization/settings', data);
  },

  /**
   * Get notification settings
   */
  async getNotificationSettings(): Promise<Record<string, unknown>> {
    return await get<Record<string, unknown>>('/settings/notifications');
  },

  /**
   * Update notification settings
   */
  async updateNotificationSettings(data: Record<string, unknown>): Promise<Record<string, unknown>> {
    return await patch<Record<string, unknown>>('/settings/notifications', data);
  },
};
