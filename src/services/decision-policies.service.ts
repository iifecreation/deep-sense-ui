import { get, post, patch, del } from '@/lib/api/client';

export interface DecisionPolicy {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  priority: number;
  conditions: Record<string, any>;
  actions: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface DecisionPolicyCreate {
  name: string;
  description?: string;
  enabled?: boolean;
  priority?: number;
  conditions: Record<string, any>;
  actions: Record<string, any>;
}

export interface DecisionPolicyUpdate {
  name?: string;
  description?: string;
  enabled?: boolean;
  priority?: number;
  conditions?: Record<string, any>;
  actions?: Record<string, any>;
}

export interface DecisionPolicySimulateRequest {
  transaction: Record<string, any>;
  policy_id?: string;
}

export interface DecisionPolicySimulateResponse {
  decision: string;
  final_score: number;
  triggered_rules: string[];
  evaluations: Record<string, any>;
}

export interface DecisionPolicyVersion {
  id: string;
  policy_id: string;
  version: number;
  conditions: Record<string, any>;
  actions: Record<string, any>;
  created_at: string;
  created_by: string;
}

export interface TransactionAuditResponse {
  transaction_id: string;
  decision: string;
  final_score: number;
  triggered_rules: string[];
  policy_version: string;
}

export const decisionPoliciesService = {
  async list(params?: { page?: number; page_size?: number; search?: string }) {
    return await get<any>('/decision-policies', { params });
  },

  async create(data: DecisionPolicyCreate) {
    return await post<any>('/decision-policies', data);
  },

  async get(policyId: string) {
    return await get<any>(`/decision-policies/${policyId}`);
  },

  async update(policyId: string, data: DecisionPolicyUpdate) {
    return await patch<any>(`/decision-policies/${policyId}`, data);
  },

  async delete(policyId: string) {
    return await del<any>(`/decision-policies/${policyId}`);
  },

  async simulate(data: DecisionPolicySimulateRequest) {
    return await post<DecisionPolicySimulateResponse>('/decision-policies/simulate', data);
  },

  async getTransactionAudit(transactionId: string) {
    return await get<TransactionAuditResponse>(`/decision-policies/transaction/${transactionId}/audit`);
  },

  async listVersions(policyId: string) {
    return await get<DecisionPolicyVersion[]>(`/decision-policies/${policyId}/versions`);
  },

  async createVersion(policyId: string, data: { conditions: Record<string, any>; actions: Record<string, any> }) {
    return await post<DecisionPolicyVersion>(`/decision-policies/${policyId}/versions`, data);
  },

  async activateVersion(versionId: string) {
    return await post<DecisionPolicyVersion>(`/decision-policies/versions/${versionId}/activate`);
  },
};
