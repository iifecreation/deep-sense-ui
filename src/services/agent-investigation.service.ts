import { get, post } from "@/lib/api/client";

export interface AgentInvestigationSession {
  id: string;
  case_id: string | null;
  status: string;
  analyst_review_status: string;
  agent_version: string;
  confidence_score: number | null;
  steps_completed: number;
  total_evidence_items: number;
  draft_narrative: string | null;
  sar_draft: Record<string, unknown> | null;
  assembled_evidence: Record<string, unknown>;
  inference_duration_ms: number | null;
  reviewed_at: string | null;
  analyst_notes: string | null;
  created_at: string | null;
}

export interface AgentPolicyProposal {
  id: string;
  service_key: string;
  proposal_type: string;
  rationale: string;
  status: string;
  fp_reduction_estimate: number | null;
  fn_increase_estimate: number | null;
  current_config: Record<string, unknown>;
  proposed_config: Record<string, unknown>;
  approved_at: string | null;
  created_at: string | null;
}

export interface NLQueryResultEntity {
  id: string;
  entity_type: string;
  entity_key: string;
  display_label: string | null;
  risk_score: number;
  risk_tier: string | null;
  gnn_fraud_ring_score: number | null;
  gnn_mule_network_score: number | null;
  linked_alert_count: number;
  linked_case_count: number;
  linked_transaction_count: number;
  last_seen_at: string | null;
}

export interface NLQueryResponse {
  parsed_query: Record<string, unknown>;
  results: NLQueryResultEntity[];
  result_count: number;
  execution_latency_ms: number;
  parse_success: boolean;
  parse_error: string | null;
}

export const agentInvestigationService = {
  startInvestigation: async (caseId: string, triggerAlertIds?: string[]) => {
    return post<AgentInvestigationSession>(`/agent/cases/${caseId}/investigate`, {
      trigger_alert_ids: triggerAlertIds,
    });
  },

  listCaseSessions: async (caseId: string, params?: { limit?: number; offset?: number }) => {
    return get<{ items: AgentInvestigationSession[]; total: number }>(
      `/agent/cases/${caseId}/sessions`,
      { params },
    );
  },

  approveSession: async (sessionId: string, analystNotes?: string) => {
    return post<AgentInvestigationSession>(`/agent/sessions/${sessionId}/approve`, {
      analyst_notes: analystNotes,
    });
  },

  rejectSession: async (sessionId: string, analystNotes?: string) => {
    return post<AgentInvestigationSession>(`/agent/sessions/${sessionId}/reject`, {
      analyst_notes: analystNotes,
    });
  },

  listPolicyProposals: async (params?: { status?: string; limit?: number; offset?: number }) => {
    return get<{ items: AgentPolicyProposal[]; total: number }>("/agent/policy-proposals", { params });
  },

  approvePolicyProposal: async (proposalId: string) => {
    return post<AgentPolicyProposal>(`/agent/policy-proposals/${proposalId}/approve`);
  },

  rejectPolicyProposal: async (proposalId: string, rejectionReason?: string) => {
    return post<AgentPolicyProposal>(`/agent/policy-proposals/${proposalId}/reject`, {
      rejection_reason: rejectionReason,
    });
  },

  runNLQuery: async (query: string) => {
    return post<NLQueryResponse>("/agent/graph/nl-query", { query });
  },
};
