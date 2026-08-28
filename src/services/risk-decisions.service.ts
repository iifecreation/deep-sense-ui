import { get, post } from "@/lib/api/client";

export type RiskDecisionState = "allow" | "review" | "deny" | "unknown";
export type ExecutionState =
  | "not_requested"
  | "recommended"
  | "execution_requested"
  | "provider_accepted"
  | "customer_pending"
  | "customer_completed"
  | "failed"
  | "timed_out"
  | "cancelled"
  | "completed";

export interface EngineContribution {
  id: string;
  engine_key: string;
  source_record_type: string;
  source_record_id: string;
  score: number;
  outcome: string;
  reason_codes: string[];
  details: Record<string, unknown> | null;
}

export interface EvidenceReference {
  id: string;
  evidence_type: string;
  source_record_type: string;
  source_record_id: string;
  label: string;
  metadata: Record<string, unknown> | null;
}

export interface DecisionTimelineEvent {
  id: string;
  event_type: string;
  status: string;
  summary: string;
  details: Record<string, unknown> | null;
  created_at: string;
}

export interface NormalizedRiskDecision {
  decision_id: string;
  organization_id: string;
  service_key: string;
  event_id: string;
  subject_type: string;
  subject_id: string;
  score: number;
  risk_level: "minimal" | "low" | "medium" | "high" | "critical";
  decision: RiskDecisionState;
  recommended_action: string;
  executed_action: string | null;
  execution_status: ExecutionState;
  reason_codes: string[];
  engine_contributions: EngineContribution[];
  evidence_references: EvidenceReference[];
  alert_id: string | null;
  case_id: string | null;
  customer_risk_profile_id: string | null;
  unified_risk_profile_id: string | null;
  provider_status: string;
  processing_status: "pending" | "completed" | "partial" | "failed";
  policy_version: number;
  explanation: string;
  correlation_id: string;
  created_at: string;
  completed_at: string | null;
  timeline: DecisionTimelineEvent[];
}

export interface RiskDecisionFilters {
  service_key?: string;
  subject_type?: string;
  subject_id?: string;
  limit?: number;
  offset?: number;
}

export interface SimulationResult {
  simulation_key: string;
  simulated: boolean;
  note: string;
  decision: NormalizedRiskDecision;
}

export interface PolicyBacktestTransition {
  decision_id: string;
  subject_type: string;
  subject_id: string;
  score: number;
  current_decision: string;
  current_recommended_action: string;
  candidate_decision: string;
  candidate_recommended_action: string;
  created_at: string;
}

export interface DriftRiskLevelBucket {
  risk_level: string;
  baseline_count: number;
  baseline_share: number;
  current_count: number;
  current_share: number;
  share_delta: number;
}

export interface DriftReasonCodeShift {
  code: string;
  baseline_occurrences: number;
  current_occurrences: number;
  baseline_rate: number;
  current_rate: number;
  rate_delta: number;
}

export type DriftLevel = "insufficient_data" | "none" | "watch" | "alert";

export interface DriftReport {
  service_key: string;
  generated_at: string;
  baseline_window_days: number;
  current_window_days: number;
  baseline_decision_count: number;
  current_decision_count: number;
  psi: number | null;
  drift_level: DriftLevel;
  risk_level_buckets: DriftRiskLevelBucket[];
  outcome_distribution_baseline: Record<string, number>;
  outcome_distribution_current: Record<string, number>;
  emerging_reason_codes: DriftReasonCodeShift[];
  fading_reason_codes: DriftReasonCodeShift[];
}

export interface FeedbackConfusionMatrix {
  true_positives: number;
  false_positives: number;
  false_negatives: number;
  true_negatives: number;
  precision: number | null;
  recall: number | null;
}

export interface ThresholdTuningRecommendation {
  service_key: string;
  generated_at: string;
  lookback_days: number;
  feedback_count: number;
  candidates_evaluated: number;
  false_negative_cost_weight: number;
  false_positive_cost_weight: number;
  current_review_threshold: number;
  current_confusion_matrix: FeedbackConfusionMatrix;
  current_cost: number;
  recommended_review_threshold: number;
  recommended_confusion_matrix: FeedbackConfusionMatrix;
  recommended_cost: number;
  cost_improvement_pct: number | null;
  note: string;
}

export interface ProviderErrorCodeCount {
  error_code: string;
  count: number;
}

export interface ProviderScorecardEntry {
  provider: string;
  action: string;
  total_executions: number;
  completed_count: number;
  failed_count: number;
  timed_out_count: number;
  cancelled_count: number;
  pending_count: number;
  success_rate: number;
  failure_rate: number;
  timeout_rate: number;
  avg_latency_seconds: number | null;
  p50_latency_seconds: number | null;
  p95_latency_seconds: number | null;
  top_error_codes: ProviderErrorCodeCount[];
}

export interface ProviderScorecardReport {
  window_days: number;
  generated_at: string;
  entries: ProviderScorecardEntry[];
}

export interface PolicyBacktestResult {
  service_key: string;
  decisions_evaluated: number;
  lookback_days: number;
  current_policy_version: number;
  current_configuration: Record<string, unknown>;
  candidate_configuration: Record<string, unknown>;
  outcome_distribution_current: Record<string, number>;
  outcome_distribution_candidate: Record<string, number>;
  transition_matrix: Record<string, Record<string, number>>;
  changed_count: number;
  changed_examples: PolicyBacktestTransition[];
}

export interface BeneficiarySummary {
  id: string;
  identifier_hash: string;
  masked_identifier: string;
  identifier_type: string;
  institution_code: string | null;
  destination_country: string | null;
  risk_score: number;
  scoring_version: string;
  disposition: string;
  payment_count: number;
  payment_volume: number;
  first_seen_at: string;
  last_seen_at: string;
}

export interface BeneficiaryDetail extends BeneficiarySummary {
  confirmed_scam_count: number;
  cleared_count: number;
  suspected_mule: boolean;
  confirmed_mule: boolean;
  graph_score: number;
  challenge_count: number;
  confirmation_count: number;
  latest_analyst_note: string | null;
  relationships: Array<{
    id: string;
    payer_subject_id: string;
    first_seen_at: string;
    last_seen_at: string;
    payment_count: number;
    payment_volume: number;
  }>;
  history: Array<{
    id: string;
    event_type: string;
    outcome: string | null;
    previous_risk_score: number;
    new_risk_score: number;
    occurred_at: string;
    normalized_decision_id: string | null;
  }>;
  decisions: Array<{
    decision_id: string;
    decision: string;
    score: number;
    risk_level: string;
    alert_id: string | null;
    case_id: string | null;
    created_at: string;
  }>;
}

export interface TrustedDevice {
  id: string;
  account_id: string;
  fingerprint_display: string;
  is_active: boolean;
  trusted_at: string;
  last_seen_at: string | null;
  expires_at: string;
  revoked_at: string | null;
  trust_source: string;
  revocation_reason: string | null;
}

export interface ATOSession {
  session_id: string;
  account_id: string;
  login_at: string;
  outcome: string;
  risk_score: number;
  ip_country: string | null;
  device_fingerprint_display: string | null;
  revocation_status: "active" | "completed";
  revoked_at: string | null;
}

export interface CNPJourneyEvent {
  type: string;
  occurred_at: string;
  record_id: string;
  summary: string;
  details: Record<string, unknown>;
}

export interface CNPJourney {
  checkout_id: string;
  checkout_session_id: string;
  customer_id: string | null;
  device_id: string | null;
  timeline: CNPJourneyEvent[];
  decision_ids: string[];
}

export interface MerchantPolicy {
  id: string;
  merchant_key: string;
  business_unit: string | null;
  version: number;
  configuration: Record<string, unknown>;
  is_active: boolean;
  effective_at: string;
  change_reason: string;
  created_by_user_id: string;
  created_at: string;
}

export interface CustomerRiskHistory {
  profile_id: string;
  calculated_and_effective_history: Array<{
    id: string;
    reason: string;
    calculated_score: number;
    effective_score: number;
    active_override_id: string | null;
    contribution_count: number;
    stale_count: number;
    unavailable_count: number;
    created_at: string;
  }>;
  source_statuses: Array<{
    category: string;
    availability_status: "available" | "missing" | "unavailable";
    reason: string | null;
    last_checked_at: string;
    latest_source_at: string | null;
  }>;
  contributions: Array<{
    id: string;
    category: string;
    source_type: string;
    source_id: string;
    score: number;
    scoring_version: string;
    explanation: string;
    historical_weight: number;
    current_weight: number;
    freshness_status: string;
    availability_status: string;
    source_occurred_at: string;
    expires_at: string | null;
  }>;
}

export interface UnifiedRiskReevaluation {
  id: string;
  policy_name: string;
  policy_version_id: string | null;
  time_window_seconds: number;
  reason: string;
  explanation: string;
  prior_decision_id: string | null;
  result_decision_id: string | null;
  created_at: string;
  discovered_decisions: Array<{
    raw_decision_id: string;
    source_service: string;
    source_version: string;
    freshness_status: string;
    included: boolean;
    reason: string;
  }>;
}

function queryString(filters: RiskDecisionFilters): string {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== "") params.set(key, String(value));
  });
  const query = params.toString();
  return query ? `?${query}` : "";
}

export const riskDecisionsService = {
  list: (filters: RiskDecisionFilters = {}) =>
    get<NormalizedRiskDecision[]>(`/risk-decisions${queryString(filters)}`),
  get: (decisionId: string) =>
    get<NormalizedRiskDecision>(`/risk-decisions/decisions/${decisionId}`),
  execute: (decisionId: string, action?: string, provider?: string) =>
    post<NormalizedRiskDecision>(
      `/risk-decisions/decisions/${decisionId}/intervention/execute`,
      { action: action || null, provider: provider || null },
      { headers: { "Idempotency-Key": crypto.randomUUID() } },
    ),
  cancel: (decisionId: string, reason: string) =>
    post<NormalizedRiskDecision>(
      `/risk-decisions/decisions/${decisionId}/intervention/cancel`,
      { reason },
    ),
  beneficiaries: (identifierHash?: string, disposition?: string) =>
    get<BeneficiarySummary[]>(
      `/risk-decisions/beneficiaries${queryString({
        subject_id: identifierHash,
        service_key: disposition,
      }).replace("subject_id", "identifier_hash").replace("service_key", "disposition")}`,
    ),
  beneficiary: (profileId: string) =>
    get<BeneficiaryDetail>(`/risk-decisions/beneficiaries/${profileId}`),
  setBeneficiaryDisposition: (profileId: string, disposition: string, note: string) =>
    post<{ id: string; disposition: string; risk_score: number }>(
      `/risk-decisions/beneficiaries/${profileId}/disposition`,
      { disposition, note },
    ),
  trustedDevices: (accountId: string) =>
    get<TrustedDevice[]>(
      `/risk-decisions/ato/trusted-devices?account_id=${encodeURIComponent(accountId)}`,
    ),
  trustDevice: (
    accountId: string,
    deviceFingerprint: string,
    trustDays: number,
    reason: string,
  ) =>
    post<{ id: string; is_active: boolean; expires_at: string }>(
      "/risk-decisions/ato/trusted-devices",
      {
        account_id: accountId,
        device_fingerprint: deviceFingerprint,
        trust_days: trustDays,
        reason,
      },
    ),
  revokeDevice: (deviceId: string, reason: string) =>
    post<{ id: string; is_active: boolean; revoked_at: string }>(
      `/risk-decisions/ato/trusted-devices/${deviceId}/revoke`,
      { reason },
    ),
  sessions: (accountId: string) =>
    get<ATOSession[]>(
      `/risk-decisions/ato/sessions?account_id=${encodeURIComponent(accountId)}`,
    ),
  revokeSession: (sessionId: string, accountId: string, reason: string, provider?: string) =>
    post<{ control_action_id: string; status: string; provider_execution_id: string | null }>(
      `/risk-decisions/ato/sessions/${encodeURIComponent(sessionId)}/revoke`,
      { account_id: accountId, reason, provider: provider || null },
    ),
  cnpJourney: (checkoutId: string) =>
    get<CNPJourney>(
      `/risk-decisions/cnp/checkouts/${encodeURIComponent(checkoutId)}/journey`,
    ),
  merchantPolicies: (merchantKey?: string) =>
    get<MerchantPolicy[]>(
      `/risk-decisions/cnp/merchant-policies${
        merchantKey ? `?merchant_key=${encodeURIComponent(merchantKey)}` : ""
      }`,
    ),
  createMerchantPolicy: (
    merchantKey: string,
    businessUnit: string,
    configuration: Record<string, unknown>,
    changeReason: string,
  ) =>
    post<{ id: string; merchant_key: string; version: number; is_active: boolean }>(
      "/risk-decisions/cnp/merchant-policies",
      {
        merchant_key: merchantKey,
        business_unit: businessUnit || null,
        configuration,
        change_reason: changeReason,
      },
    ),
  rollbackMerchantPolicy: (merchantKey: string, version: number, changeReason: string) =>
    post<{ id: string; merchant_key: string; version: number; is_active: boolean }>(
      `/risk-decisions/cnp/merchant-policies/${encodeURIComponent(merchantKey)}/${version}/rollback`,
      { change_reason: changeReason },
    ),
  customerRiskHistory: (profileId: string) =>
    get<CustomerRiskHistory>(
      `/risk-decisions/customer-risk/${profileId}/contributions`,
    ),
  recalculateCustomerRisk: (profileId: string, reason: string) =>
    post<{
      recalculation_id: string;
      calculated_score: number;
      effective_score: number;
      stale_count: number;
      unavailable_count: number;
    }>(`/risk-decisions/customer-risk/${profileId}/recalculate`, {
      change_reason: reason,
    }),
  unifiedRiskHistory: (subjectType: string, subjectId: string) =>
    get<UnifiedRiskReevaluation[]>(
      `/risk-decisions/unified-risk/reevaluations?subject_type=${encodeURIComponent(
        subjectType,
      )}&subject_id=${encodeURIComponent(subjectId)}`,
    ),
  reevaluateUnifiedRisk: (
    subjectType: string,
    subjectId: string,
    reason: string,
    timeWindowSeconds = 86400,
  ) =>
    post<NormalizedRiskDecision>(
      "/risk-decisions/unified-risk/reevaluate",
      {
        event_id: crypto.randomUUID(),
        subject_type: subjectType,
        subject_id: subjectId,
        time_window_seconds: timeWindowSeconds,
        reason,
      },
      { headers: { "Idempotency-Key": crypto.randomUUID() } },
    ),
  assessPromoRisk: (userId: string, promotionId?: string, trigger = "enrollment") =>
    post<NormalizedRiskDecision>(
      "/risk-decisions/promo/risk/assess",
      { event_id: crypto.randomUUID(), user_id: userId, promotion_id: promotionId || null, trigger },
      { headers: { "Idempotency-Key": crypto.randomUUID() } },
    ),
  assessProcurementInvoice: (invoiceId: string) =>
    post<NormalizedRiskDecision>(
      "/risk-decisions/procurement/invoices/assess",
      { event_id: crypto.randomUUID(), invoice_id: invoiceId },
      { headers: { "Idempotency-Key": crypto.randomUUID() } },
    ),
  assessDocumentVerificationRun: (runId: string) =>
    post<NormalizedRiskDecision>(
      "/risk-decisions/documents/verification-runs/assess",
      { event_id: crypto.randomUUID(), run_id: runId },
      { headers: { "Idempotency-Key": crypto.randomUUID() } },
    ),
  assessDeepfakeCheck: (checkId: string) =>
    post<NormalizedRiskDecision>(
      "/risk-decisions/deepfake/checks/assess",
      { event_id: crypto.randomUUID(), check_id: checkId },
      { headers: { "Idempotency-Key": crypto.randomUUID() } },
    ),
  assessDisputeFraud: (customerId: string, disputeCaseId?: string) =>
    post<NormalizedRiskDecision>(
      "/risk-decisions/disputes/fraud/assess",
      { event_id: crypto.randomUUID(), customer_id: customerId, dispute_case_id: disputeCaseId || null },
      { headers: { "Idempotency-Key": crypto.randomUUID() } },
    ),
  /**
   * Run any wired scoring engine against a hypothetical payload. Nothing is
   * persisted — safe to call as many times as needed for policy design or
   * dispute defense.
   */
  simulate: (simulationKey: string, payload: Record<string, unknown>) =>
    post<SimulationResult>("/risk-decisions/simulate", {
      simulation_key: simulationKey,
      payload,
    }),
  listSimulationEngines: () =>
    get<Record<string, unknown>>("/risk-decisions/simulate/engines"),
  /**
   * Champion/challenger: re-classify recent decisions under a candidate
   * threshold configuration. Read-only — no policy version is created.
   */
  backtestPolicy: (
    serviceKey: string,
    candidateConfiguration: Record<string, unknown>,
    lookbackDays = 30,
    limit = 500,
  ) =>
    post<PolicyBacktestResult>(`/risk-decisions/policies/${serviceKey}/backtest`, {
      candidate_configuration: candidateConfiguration,
      lookback_days: lookbackDays,
      limit,
    }),
  /**
   * Detect score/outcome drift for a domain: compares a recent window against
   * an earlier baseline window using PSI over the risk-level distribution,
   * plus emerging/fading reason codes. Read-only.
   */
  getDriftReport: (serviceKey: string, baselineWindowDays = 60, currentWindowDays = 14) =>
    get<DriftReport>(`/risk-decisions/drift/${serviceKey}`, {
      params: { baseline_window_days: baselineWindowDays, current_window_days: currentWindowDays },
    }),
  /**
   * Per-(provider, action) success/failure/timeout rates and latency
   * percentiles, computed from this organization's intervention provider
   * execution history. Read-only.
   */
  getProviderScorecard: (windowDays = 30) =>
    get<ProviderScorecardReport>("/risk-decisions/provider-scorecard", {
      params: { window_days: windowDays },
    }),
  /**
   * Recommend a review_threshold from analyst-labeled ground truth
   * (DetectionFeedback) rather than a hand-picked guess. Read-only — validate
   * the recommendation with backtestPolicy before activating it.
   */
  getThresholdTuningRecommendation: (
    serviceKey: string,
    lookbackDays = 90,
    falseNegativeCostWeight = 5.0,
    falsePositiveCostWeight = 1.0,
  ) =>
    get<ThresholdTuningRecommendation>(`/risk-decisions/policies/${serviceKey}/tuning-recommendation`, {
      params: {
        lookback_days: lookbackDays,
        false_negative_cost_weight: falseNegativeCostWeight,
        false_positive_cost_weight: falsePositiveCostWeight,
      },
    }),
};
