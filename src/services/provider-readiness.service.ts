import { get, put } from '@/lib/api/client';

export interface ProviderCapabilityStatus {
  capability: string;
  status: 'healthy' | 'degraded' | 'unavailable' | 'not_configured' | 'disabled' | 'rate_limited' | 'unknown' | 'manual_review';
}

export interface ProviderOption {
  capability: string;
  providers: string[];
  regions: string[];
}

export interface ProviderPreference {
  provider_id: string | null;
  region: string | null;
  manual_review_on_failure: boolean;
  version: number;
}

export interface ProviderPreferencesResponse {
  preferences: Record<string, ProviderPreference>;
  approved_options: ProviderOption[];
}

export const providerReadinessService = {
  async getStatus(): Promise<{ capabilities: ProviderCapabilityStatus[]; approved_options: ProviderOption[] }> {
    return get('/providers/status');
  },
  async getPreferences(): Promise<ProviderPreferencesResponse> {
    return get('/providers/preferences');
  },
  async updatePreference(
    capability: string,
    body: {
      provider_id: string | null;
      region: string | null;
      manual_review_on_failure: boolean;
      expected_version: number;
      change_reason: string;
    },
  ): Promise<ProviderPreference & { capability: string }> {
    return put(`/providers/preferences/${capability}`, { capability, ...body });
  },
};
