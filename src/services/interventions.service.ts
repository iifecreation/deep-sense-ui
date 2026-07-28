import { get, post } from '@/lib/api/client';

export interface InterventionPolicy {
  id: string;
  name: string;
  description: string | null;
  fraud_domain: string;
  trigger_conditions: Record<string, unknown>;
  actions: Array<Record<string, unknown>>;
  priority: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface InterventionEvaluation {
  fraud_domain: string;
  trigger_type: string;
  risk_score: number;
  factors?: Record<string, unknown>;
  user_id?: string;
  account_id?: string;
  session_id?: string;
  transaction_id?: string;
  external_reference?: string;
}

export const interventionsService = {
  listPolicies: (params?: { include_inactive?: boolean; limit?: number; offset?: number }) =>
    get<InterventionPolicy[]>('/interventions/policies', { params }),
  createPolicy: (data: Omit<InterventionPolicy, 'id' | 'created_at' | 'updated_at'>) =>
    post<InterventionPolicy>('/interventions/policies', data),
  evaluate: (data: InterventionEvaluation, idempotencyKey?: string) =>
    post<Record<string, unknown>>('/interventions/evaluate', data, {
      headers: idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : undefined,
    }),
  execute: (data: Record<string, unknown>, idempotencyKey?: string) =>
    post<Record<string, unknown>>('/interventions/execute', data, {
      headers: idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : undefined,
    }),
};
