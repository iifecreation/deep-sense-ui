import { get, post } from "@/lib/api/client";

export interface FraudRing {
  id: string;
  organization_id: string;
  fingerprint: string;
  detection_kind: string;
  status: string;
  ring_score: number;
  member_count: number;
  members_json: string[];
  evidence_json?: Record<string, unknown>;
  anchor_transaction_id?: string | null;
  summary: string | null;
  created_at: string;
  updated_at: string;
}

export interface FraudRingsPage {
  items: FraudRing[];
  total: number;
}

export interface GraphCluster {
  id: string;
  organization_id: string;
  cluster_key: string;
  cluster_type: string;
  risk_score: number;
  confidence: number;
  node_count: number;
  edge_count: number;
  representative_entities_json: Record<string, unknown>[];
  first_seen_at: string | null;
  last_seen_at: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface GraphClustersPage {
  items: GraphCluster[];
  total: number;
}

export interface PathHop {
  entity_id: string | null;
  entity_type: string;
  entity_key: string;
  display_label: string | null;
  relationship_type: string | null;
}

export interface GraphPathResult {
  source_entity_id: string;
  target_entity_id: string;
  path_found: boolean;
  path_length: number;
  hops: PathHop[];
}

export interface EntityPathCollection {
  entity_type: string;
  entity_id: string;
  total_paths: number;
  paths: GraphPathResult[];
}

export interface EntityRiskClusterSummary {
  cluster_id: string;
  cluster_type: string;
  risk_score: number;
  confidence: number;
}

export interface EntityRiskAssessment {
  entity_type: string;
  entity_id: string;
  connected_component_key: string | null;
  connected_component_size: number;
  centrality_score: number;
  known_fraud: boolean;
  shortest_path_to_known_fraud: number | null;
  fraud_proximity_score: number;
  mule_cluster_detected: boolean;
  fraud_ring_confidence_score: number;
  risk_score: number;
  shared_entity_clusters: EntityRiskClusterSummary[];
  path: GraphPathResult | null;
}

export const ENTITY_TYPES = [
  "customer",
  "device",
  "merchant",
  "account",
  "ip",
  "transaction",
] as const;
export type GraphEntityType = (typeof ENTITY_TYPES)[number];

export const graphRingsService = {
  /** Active fraud rings ordered by ring_score desc (server-side default). */
  listActiveRings: (pageSize = 5) =>
    get<FraudRingsPage>("/graph/rings", { params: { page_size: pageSize } }),

  // GET /graph/rings only supports page/page_size (no server-side search/status
  // filter) - search below is applied client-side over the fetched page.
  listRings: (params: { page?: number; page_size?: number }) =>
    get<FraudRingsPage>("/graph/rings", { params }),

  getRing: (ringId: string) => get<FraudRing>(`/graph/rings/${ringId}`),

  listClusters: (params: { page?: number; page_size?: number; cluster_type?: string; status?: string }) =>
    get<GraphClustersPage>("/graph/clusters", { params }),

  getCluster: (clusterId: string) => get<GraphCluster>(`/graph/clusters/${clusterId}`),

  getEntityRisk: (entityType: string, entityId: string) =>
    get<EntityRiskAssessment>(`/graph/entities/${entityType}/${encodeURIComponent(entityId)}/risk`),

  getEntityPaths: (entityType: string, entityId: string) =>
    get<EntityPathCollection>(`/graph/entities/${entityType}/${encodeURIComponent(entityId)}/paths`),

  rebuild: () => post<{ status: string; stats: Record<string, unknown> }>("/graph/rebuild"),
};
