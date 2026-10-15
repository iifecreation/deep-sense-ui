import { get } from "@/lib/api/client";

export interface FraudRing {
  id: string;
  organization_id: string;
  fingerprint: string;
  detection_kind: string;
  status: string;
  ring_score: number;
  member_count: number;
  members_json: string[];
  summary: string | null;
  created_at: string;
  updated_at: string;
}

export interface FraudRingsPage {
  items: FraudRing[];
  total: number;
}

export const graphRingsService = {
  /** Active fraud rings ordered by ring_score desc (server-side default). */
  listActiveRings: (pageSize = 5) =>
    get<FraudRingsPage>("/graph/rings", { params: { page_size: pageSize } }),
};
