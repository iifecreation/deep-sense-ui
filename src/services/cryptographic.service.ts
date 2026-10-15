import { get, post } from "@/lib/api/client";

export interface ZkProofRecord {
  id: string;
  decision_id: string | null;
  proof_type: string;
  zk_protocol: string;
  proof_valid: boolean | null;
  proof_commitment: string;
  public_inputs: Record<string, unknown> | null;
  auditor_accessible: boolean;
  verified_at: string | null;
  expires_at: string | null;
  created_at: string;
}

export interface SmpcMatchRecord {
  id: string;
  hash_type: string;
  query_entity_count: number;
  psi_protocol: string;
  computation_status: string;
  revealed_match_count: number | null;
  computation_latency_ms: number | null;
  completed_at: string | null;
  created_at: string;
}

export const cryptographicService = {
  generateZkProof: (decisionId: string, proofType: string, auditorAccessible = true) =>
    post<ZkProofRecord>(`/cryptographic/decisions/${decisionId}/zk-proof`, {
      proof_type: proofType,
      auditor_accessible: auditorAccessible,
    }),

  listDecisionProofs: (decisionId: string) =>
    get<{ items: ZkProofRecord[]; total: number }>(`/cryptographic/decisions/${decisionId}/zk-proof`),

  verifyZkProof: (proofId: string, verifierId?: string) =>
    post<{ proof_id: string; proof_valid: boolean }>(`/cryptographic/zk-proofs/${proofId}/verify`, {
      verifier_id: verifierId,
    }),

  listZkProofs: (params?: { proof_type?: string; limit?: number; offset?: number }) =>
    get<{ items: ZkProofRecord[]; total: number }>("/cryptographic/zk-proofs", { params }),

  initiateSmpcMatch: (hashType: string, identifiers: string[]) =>
    post<SmpcMatchRecord>("/cryptographic/consortium/smpc-match", {
      hash_type: hashType,
      identifiers,
    }),

  getSmpcMatchResult: (requestId: string) =>
    get<SmpcMatchRecord>(`/cryptographic/consortium/smpc-match/${requestId}`),

  listSmpcMatches: (params?: { limit?: number; offset?: number }) =>
    get<{ items: SmpcMatchRecord[]; total: number }>("/cryptographic/consortium/smpc-matches", { params }),
};
