import { settingsService } from '@/services/settings.service';
import { useAsyncResource } from './use-async-resource';

export function useTeam(enabled: boolean = true) {
  return useAsyncResource(
    () => settingsService.listTeam(),
    JSON.stringify([]),
    { enabled, label: 'team' },
  );
}

export function useWebhookSettings(enabled: boolean = true) {
  return useAsyncResource(
    () => settingsService.getWebhookSettings(),
    JSON.stringify([]),
    { enabled, label: 'webhook settings' },
  );
}

export function useScreeningSettings(enabled: boolean = true) {
  return useAsyncResource(
    () => settingsService.getScreeningSettings(),
    JSON.stringify([]),
    { enabled, label: 'screening settings' },
  );
}

export function useReportingSettings(enabled: boolean = true) {
  return useAsyncResource(
    () => settingsService.getReportingSettings(),
    JSON.stringify([]),
    { enabled, label: 'reporting settings' },
  );
}

export function useRetentionSettings(enabled: boolean = true) {
  return useAsyncResource(
    () => settingsService.getRetentionSettings(),
    JSON.stringify([]),
    { enabled, label: 'retention settings' },
  );
}

export function useSecuritySettings(enabled: boolean = true) {
  return useAsyncResource(
    () => settingsService.getSecuritySettings(),
    JSON.stringify([]),
    { enabled, label: 'security settings' },
  );
}

export function useOrganizationSettings(enabled: boolean = true) {
  return useAsyncResource(
    () => settingsService.getOrganizationSettings(),
    JSON.stringify([]),
    { enabled, label: 'organization settings' },
  );
}

export function useNotificationSettings(enabled: boolean = true) {
  return useAsyncResource(
    () => settingsService.getNotificationSettings(),
    JSON.stringify([]),
    { enabled, label: 'notification settings' },
  );
}
