import { get, post } from "@/lib/api/client";

export type GnnRingClassification = "fraud_ring" | "mule_network" | "uncertain" | "benign";

export interface GnnRingResult {
  id: string;
  ring_id: string | null;
  ring_gnn_score: number;
  ring_classification: GnnRingClassification;
  confidence: number;
  node_count: number;
  edge_count: number;
  model_version: string;
  created_at: string | null;
}

export interface GnnResultsPage {
  items: GnnRingResult[];
  total: number;
  limit: number;
  offset: number;
}

export interface GnnScoreRunResult extends GnnRingResult {
  inference_latency_ms: number;
  node_scores: Array<{ id: string; score: number }>;
  top_edges: Array<{ source_id: string; target_id: string; importance: number }>;
}

export const gnnService = {
  listResults: (limit = 50, offset = 0) =>
    get<GnnResultsPage>("/gnn/results", { params: { limit, offset } }),

  scoreEntitySet: (entityIds: string[], ringId?: string | null, modelVersion?: string) =>
    post<GnnScoreRunResult>("/gnn/score-entity-set", {
      entity_ids: entityIds,
      ring_id: ringId || null,
      model_version: modelVersion,
    }),
};
