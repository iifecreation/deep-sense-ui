import { get, post } from '@/lib/api/client';

export interface DecisionPolicy {
  id: string;
  organization_id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface DecisionPolicyVersion {
  id: string;
  decision_policy_id: string;
  version_number: number;
  status: string; // draft | active | retired
  block_threshold: number;
  review_threshold: number;
  notes: string | null;
  activated_at: string | null;
  activated_by_user_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface DecisionPolicyVersionCreate {
  block_threshold: number;
  review_threshold: number;
  notes?: string;
}

export interface DecisionSimulateRequest {
  final_score: number;
  policy_version_id?: string;
  block_threshold?: number;
  review_threshold?: number;
  dry_run?: boolean;
}

export interface DecisionSimulateResponse {
  final_score: number;
  outcome: string; // allow | review | block
  reason_codes: string[];
  block_threshold: number;
  review_threshold: number;
  dry_run: boolean;
}

export interface TransactionDecision {
  id: string;
  transaction_id: string;
  decision_policy_version_id: string;
  final_score: number;
  fusion_decision: string;
  policy_decision: string;
  effective_decision: string;
  shadow_mode: boolean;
  reason_codes_json: string[];
  explainability_json: Record<string, any>;
  created_at: string;
}

export const decisionPoliciesService = {
  async list(): Promise<DecisionPolicy[]> {
    return await get<DecisionPolicy[]>('/decision-policies');
  },

  async listVersions(policyId: string): Promise<DecisionPolicyVersion[]> {
    return await get<DecisionPolicyVersion[]>(`/decision-policies/${policyId}/versions`);
  },

  async createVersion(policyId: string, data: DecisionPolicyVersionCreate): Promise<DecisionPolicyVersion> {
    return await post<DecisionPolicyVersion>(`/decision-policies/${policyId}/versions`, data);
  },

  async activateVersion(versionId: string): Promise<DecisionPolicyVersion> {
    return await post<DecisionPolicyVersion>(`/decision-policies/versions/${versionId}/activate`);
  },

  async simulate(data: DecisionSimulateRequest): Promise<DecisionSimulateResponse> {
    return await post<DecisionSimulateResponse>('/decision-policies/simulate', data);
  },

  async getTransactionAudit(transactionId: string): Promise<TransactionDecision> {
    return await get<TransactionDecision>(`/decision-policies/transaction/${transactionId}/audit`);
  },
};
