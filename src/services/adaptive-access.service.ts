import { get, post } from "@/lib/api/client";

export interface AccessDecision {
  id: string;
  user_id: string;
  resource_type: string;
  resource_id: string | null;
  action: string;
  static_role_allowed: boolean;
  ueba_score_at_decision: number | null;
  ueba_risk_tier: string | null;
  ueba_override_applied: boolean;
  final_decision: "allow" | "challenge" | "deny" | string;
  challenge_type: string | null;
  challenge_completed: boolean | null;
  decided_at: string | null;
}

export interface HoneytokenAlert {
  id: string;
  asset_id: string;
  accessing_entity_type: string;
  accessing_entity_id: string | null;
  alert_severity: "critical" | "high" | "medium" | "low" | string;
  threat_type: string | null;
  ueba_risk_elevated: boolean;
  access_ip: string | null;
  triggered_at: string | null;
  created_at: string | null;
}

export interface HoneytokenAsset {
  id: string;
  token_type: string;
  label: string;
  deployment_context: string | null;
  is_active: boolean;
  total_access_count: number;
  last_accessed_at: string | null;
  created_at: string | null;
}

export interface CreateHoneytokenResponse {
  id: string;
  token_type: string;
  label: string;
  deployment_context: string | null;
  token_hash: string;
  is_active: boolean;
  created_at: string | null;
  warning: string;
}

export interface ListResponse<T> {
  items: T[];
  total: number;
}

export const adaptiveAccessService = {
  listDecisions: async (params?: { final_decision?: string; limit?: number; offset?: number }) => {
    return get<ListResponse<AccessDecision>>("/adaptive-access/decisions", { params });
  },

  listHoneytokenAlerts: async (params?: { severity?: string; limit?: number; offset?: number }) => {
    return get<ListResponse<HoneytokenAlert>>("/adaptive-access/honeytokens/alerts", { params });
  },

  listHoneytokenAssets: async (params?: { is_active?: boolean; limit?: number; offset?: number }) => {
    return get<ListResponse<HoneytokenAsset>>("/adaptive-access/honeytokens", { params });
  },

  createHoneytoken: async (data: {
    token_type: string;
    label: string;
    deployment_context?: string;
  }) => {
    return post<CreateHoneytokenResponse>("/adaptive-access/honeytokens", data);
  },
};
