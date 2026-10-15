import { get } from "@/lib/api/client";

export type FederatedRoundStatus = "pending" | "submitted" | "aggregated" | "failed";

export interface FederatedLearningRound {
  id: string;
  model_id: string;
  round_number: number;
  status: FederatedRoundStatus;
  contribution_accepted: boolean;
  differential_privacy_epsilon: number;
  global_model_version_id: string | null;
  created_at: string | null;
}

export interface FederatedRoundsResponse {
  items: FederatedLearningRound[];
  total: number;
  min_contributions_for_aggregation: number;
  limit: number;
  offset: number;
}

export const federatedLearningService = {
  listRounds: (limit = 100, offset = 0) =>
    get<FederatedRoundsResponse>("/federated/rounds", { params: { limit, offset } }),
};
