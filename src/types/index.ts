/* eslint-disable @typescript-eslint/no-explicit-any */
// Core types based on server DTOs/schemas

export interface UUID {
  toString(): string;
}

// Common types
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface ListQueryParams {
  page?: number;
  page_size?: number;
  search?: string;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
}

export interface ErrorResponse {
  detail: string;
  code?: string;
}

// Auth types
export interface LoginRequest {
  email: string;
  password: string;
  two_factor_code?: string;
}

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  requires_2fa: boolean;
}

export interface SignupRequest {
  organization_name: string;
  organization_slug: string;
  country: string;
  industry: string;
  services: string[];
  email: string;
  password: string;
  full_name: string;
}

export interface SignupResponse {
  user_id: string;
  organization_id: string;
  organization_name: string;
  country: string;
  services: string[];
  industry?: string;
  verification_required: boolean;
}

export interface UserPublic {
  id: string;
  email: string;
  full_name: string;
  role: string;
  organization_id: string;
  organization_name: string;
  is_active: boolean;
  two_factor_enabled: boolean;
  last_active_at?: string;
  created_at: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  token: string;
  new_password: string;
}

export interface VerifyEmailRequest {
  email: string;
  token: string;
}

export interface ResendVerifyEmailRequest {
  email: string;
}

export interface AvailableService {
  key: string;
  label: string;
  description: string;
}

export interface AvailableCountry {
  id: string;
  name: string;
  iso_code: string;
  dial_code: string;
}

// Customer types
export interface CustomerListItem {
  id: string;
  customer_id: string;
  full_name: string;
  email?: string;
  status: string;
  risk_tier?: string;
  kyc_status?: string;
  screening_status?: string;
  open_cases_count: number;
  open_alerts_count: number;
  owner_user_id?: string;
  owner_full_name?: string;
  created_at: string;
  last_activity_at?: string;
}

export interface CustomerDetail {
  id: string;
  customer_id: string;
  full_name: string;
  email?: string;
  phone?: string;
  date_of_birth?: string;
  nationality?: string;
  address?: string;
  status: string;
  risk_tier?: string;
  risk_score?: number;
  kyc_status?: string;
  screening_status?: string;
  organization_id: string;
  owner_user_id?: string;
  owner_full_name?: string;
  notes_count: number;
  linked_transactions_count: number;
  linked_devices_count: number;
  linked_alerts_count: number;
  linked_cases_count: number;
  linked_reports_count: number;
  created_at: string;
  updated_at: string;
  last_activity_at?: string;
}

export interface CustomerFilters {
  status?: string;
  risk_tier?: string;
  kyc_status?: string;
  screening_status?: string;
  owner_user_id?: string;
  search?: string;
  date_from?: string;
  date_to?: string;
  has_open_cases?: boolean;
  has_open_alerts?: boolean;
}

export interface CustomerTimelineEvent {
  id: string;
  event_type: string;
  description: string;
  actor_user_id?: string;
  actor_full_name?: string;
  created_at: string;
  metadata?: Record<string, any>;
}

export interface CustomerNoteCreateRequest {
  body: string;
}

export interface CustomerNoteRead {
  id: string;
  body: string;
  created_by_user_id: string;
  created_by_full_name: string;
  created_at: string;
}

export interface CustomerStatusPatchRequest {
  status: string;
  reason?: string;
}

export interface CustomerWatchRequest {
  reason?: string;
}

export interface CustomerOwnerPatchRequest {
  owner_user_id?: string;
}

export interface CustomerMutationResponse {
  id: string;
  status: string;
  message: string;
}

// Transaction types
export interface TransactionRead {
  id: string;
  account_id: string;
  merchant_id?: string;
  amount: string;
  currency: string;
  transaction_type: string;
  channel: string;
  status: string;
  occurred_at: string;
  external_reference?: string;
  decision?: string;
  final_score?: number;
  risk_level?: string;
  customer_id?: string;
  customer_name?: string;
  created_at: string;
  updated_at: string;
}

export interface TransactionIngest {
  account_id: string;
  merchant_id?: string;
  amount: string;
  currency: string;
  transaction_type: string;
  channel: string;
  status: string;
  occurred_at: string;
  external_reference?: string;
  idempotency_key?: string;
  metadata?: Record<string, any>;
}

export interface TransactionIngestResult {
  transaction: TransactionRead;
  idempotent_replay: boolean;
  decision: string;
  final_score: number;
  triggered_rule_slugs: string[];
  evaluations: any[];
}

export interface TransactionListFilters {
  status?: string;
  decision?: string;
  risk_level?: string;
  channel?: string;
  transaction_type?: string;
  customer_id?: string;
  merchant_id?: string;
  search?: string;
  date_from?: string;
  date_to?: string;
}

// Alert types
export interface AlertRead {
  id: string;
  alert_type: string;
  severity: string;
  title: string;
  description: string;
  status: string;
  risk_score?: number;
  transaction_id?: string;
  customer_id?: string;
  customer_name?: string;
  assigned_user_id?: string;
  assigned_user_name?: string;
  created_at: string;
  updated_at: string;
}

export interface AlertDetail {
  alert: AlertRead;
  deliveries: AlertDeliveryRead[];
}

export interface AlertDeliveryRead {
  id: string;
  channel: string;
  status: string;
  sent_at?: string;
  error_message?: string;
}

export interface AlertListFilters {
  status?: string;
  severity?: string;
  alert_type?: string;
  assigned_user_id?: string;
  customer_id?: string;
  transaction_id?: string;
  search?: string;
  date_from?: string;
  date_to?: string;
}

export interface AlertSuppressionRuleCreate {
  name: string;
  description?: string;
  condition_json: Record<string, any>;
  duration_minutes: number;
  enabled: boolean;
}

export interface AlertSuppressionRuleRead {
  id: string;
  name: string;
  description?: string;
  condition_json: Record<string, any>;
  duration_minutes: number;
  enabled: boolean;
  created_by_user_id: string;
  created_at: string;
  updated_at: string;
}

export interface AlertSuppressionRuleUpdate {
  name?: string;
  description?: string;
  condition_json?: Record<string, any>;
  duration_minutes?: number;
  enabled?: boolean;
}

// Case types
export interface FraudCaseRead {
  id: string;
  case_number: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
  transaction_id?: string;
  customer_id?: string;
  customer_name?: string;
  assigned_user_id?: string;
  assigned_user_name?: string;
  created_by_user_id: string;
  created_by_user_name?: string;
  created_at: string;
  updated_at: string;
}

export interface FraudCaseCreate {
  title: string;
  description?: string;
  priority?: string;
  status?: string;
  transaction_id?: string;
}

export interface FraudCaseUpdate {
  title?: string;
  description?: string;
  priority?: string;
}

export interface FraudCaseDetail {
  case: FraudCaseRead;
  notes: CaseNoteRead[];
  actions: CaseActionRead[];
}

export interface CaseNoteCreate {
  body: string;
}

export interface CaseNoteRead {
  id: string;
  body: string;
  created_by_user_id: string;
  created_by_user_name?: string;
  created_at: string;
}

export interface CaseActionRead {
  id: string;
  action_type: string;
  description: string;
  actor_user_id: string;
  actor_user_name?: string;
  created_at: string;
}

export interface CaseAssignBody {
  assignee_user_id: string;
}

export interface CaseStatusBody {
  status: string;
}

export interface CaseListFilters {
  status?: string;
  priority?: string;
  assignee_user_id?: string;
  unassigned_only?: boolean;
  customer_id?: string;
  transaction_id?: string;
  search?: string;
  date_from?: string;
  date_to?: string;
}

// Analytics types
export interface AnalyticsFilters {
  date_from?: string;
  date_to?: string;
  interval?: 'hour' | 'day' | 'week' | 'month';
}

export interface SummaryMetric {
  key?: string;
  label: string;
  value: number;
  delta?: number;
  trend?: 'up' | 'down' | 'flat' | string | null;
  change?: number;
  change_type?: 'increase' | 'decrease';
}

export interface TimeSeriesPoint {
  timestamp: string;
  value: number;
  grouped_values?: Record<string, number>;
}

export interface TopEntityRow {
  id: string;
  label?: string;
  name?: string;
  count?: number;
  value?: number;
  risk_score?: number | null;
  metadata?: Record<string, any>;
  extra?: Record<string, any> | null;
}

export interface AnalyticsOverview {
  metrics: SummaryMetric[];
  transactions_trend: TimeSeriesPoint[];
  top_rules_triggered: TopEntityRow[];
  risky_entities: TopEntityRow[];
}

// Settings types
export interface TeamListResponse {
  members: TeamMember[];
  total: number;
}

export interface TeamMember {
  id: string;
  full_name: string;
  email: string;
  role: string;
  is_active: boolean;
  is_invite: boolean;
  created_at: string;
  last_active_at?: string;
}

export interface TeamInviteRequest {
  email: string;
  role: string;
  full_name: string;
}

export interface TeamInviteResponse {
  id: string;
  email: string;
  role: string;
  status: string;
  message: string;
}

export interface TeamRolePatch {
  role: string;
}

export interface TeamStatusPatch {
  is_active: boolean;
}

export interface TeamMutationResponse {
  id: string;
  status: string;
  message: string;
}

// Billing types
export interface CheckoutRequest {
  plan_id?: string;
  plan_slug?: string;
  success_url: string;
  cancel_url: string;
}

export interface PortalRequest {
  return_url: string;
}

export interface CancelRequest {
  at_period_end: boolean;
}

export interface ChangePlanRequest {
  target_plan_id?: string;
  target_plan_slug?: string;
}

export interface QuotaCheckRequest {
  feature_key: string;
  increment: number;
}

// Document types
export interface IdentityVerificationSessionCreate {
  customer_id?: string;
  account_id?: string;
  applicant_reference?: string;
  metadata_json?: Record<string, any>;
}

export interface IdentityVerificationSessionRead {
  id: string;
  customer_id?: string;
  account_id?: string;
  applicant_reference?: string;
  status: string;
  metadata_json?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface FaceMatchRequest {
  document_id: string;
  selfie_document_id: string;
}

export interface LivenessRequest {
  selfie_document_id: string;
}

export interface BiometricCheckRead {
  id: string;
  check_type: string;
  result: string;
  confidence_score?: number;
  created_at: string;
}

// Organization types
export interface OrganizationSettingsRead {
  settings: Record<string, any>;
}

export interface OrganizationSettingsPatch {
  settings?: Record<string, any>;
}

export interface OrganizationStatsResponse {
  total_customers: number;
  total_transactions: number;
  total_alerts: number;
  total_cases: number;
  active_users: number;
}

export interface OrganizationServiceSettingsRead {
  country: string;
  services: string[];
}

export interface OrganizationServiceSettingsPatch {
  country?: string;
  services?: string[];
}

// Fraud Rule types
export interface FraudRuleRead {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category?: string;
  severity: string;
  weight: number;
  conditions_json: Record<string, any>;
  action_json?: Record<string, any>;
  enabled: boolean;
  dry_run_only: boolean;
  version: number;
  rule_status: string;
  priority?: number;
  created_by_user_id: string;
  created_at: string;
  updated_at: string;
}

export interface FraudRuleCreate {
  name: string;
  slug: string;
  description?: string;
  category?: string;
  severity: string;
  weight: number;
  conditions_json: Record<string, any>;
  action_json?: Record<string, any>;
  enabled: boolean;
  dry_run_only: boolean;
  version: number;
  priority?: number;
}

export interface FraudRuleUpdate {
  name?: string;
  description?: string;
  category?: string;
  severity?: string;
  weight?: number;
  conditions_json?: Record<string, any>;
  action_json?: Record<string, any>;
  enabled?: boolean;
  dry_run_only?: boolean;
  rule_status?: string;
  priority?: number;
}

export interface FraudRuleListFilters {
  enabled?: boolean;
  category?: string;
  severity?: string;
  rule_status?: string;
  search?: string;
}

export interface FraudRuleTestRequest {
  context: Record<string, any>;
}

export interface FraudRuleTestResponse {
  total_rules_evaluated: number;
  total_triggered: number;
  triggered_rules: any[];
  total_score: number;
}

// Screening types
export interface ScreeningMatchRead {
  id: string;
  match_type: string;
  confidence_score: number;
  risk_level: string;
  status: string;
  customer_id?: string;
  customer_name?: string;
  matched_name: string;
  matched_via: string;
  source_list: string;
  assigned_user_id?: string;
  assigned_user_name?: string;
  created_at: string;
  updated_at: string;
}

export interface ScreeningMatchDetail {
  match: ScreeningMatchRead;
  matched_fields: Record<string, any>;
  confidence_explanation: Record<string, any>;
  customer_summary?: CustomerDetail;
  prior_screenings: any[];
  prior_decisions: any[];
  linked_case?: FraudCaseRead;
  notes: any[];
}

export interface ScreeningMatchFilters {
  match_type?: string;
  status?: string;
  risk_level?: string;
  assigned_user_id?: string;
  customer_id?: string;
  source_list?: string;
  search?: string;
  date_from?: string;
  date_to?: string;
}

export interface ScreeningDecisionRequest {
  reason?: string;
  create_case?: boolean;
  trigger_edd?: boolean;
}

export interface ScreeningMutationResponse {
  id: string;
  status: string;
  message: string;
}

export interface WatchlistRead {
  id: string;
  name: string;
  watchlist_type: string;
  source_provider?: string;
  is_active: boolean;
  entry_count: number;
  created_at: string;
  updated_at: string;
}

export interface WatchlistCreateRequest {
  name: string;
  watchlist_type: string;
  source_provider?: string;
  is_active: boolean;
}

export interface RescreenRequest {
  scope: 'all' | 'single';
  customer_id?: string;
  metadata?: Record<string, any>;
}

export interface ScreeningJobRead {
  id: string;
  scope: string;
  customer_id?: string;
  status: string;
  started_at: string;
  completed_at?: string;
  total_customers: number;
  processed_customers: number;
  matches_found: number;
  metadata?: Record<string, any>;
}

export interface ScreeningJobFilters {
  status?: string;
  scope?: string;
  customer_id?: string;
}

// Report types
export interface ReportRead {
  id: string;
  report_number: string;
  report_type: string;
  title: string;
  summary?: string;
  narrative?: string;
  status: string;
  linked_case_id?: string;
  linked_customer_id?: string;
  linked_customer_name?: string;
  linked_transaction_ids: string[];
  assigned_to_user_id?: string;
  assigned_to_user_name?: string;
  reviewer_user_id?: string;
  reviewer_user_name?: string;
  due_at?: string;
  external_reference?: string;
  created_by_user_id: string;
  created_by_user_name?: string;
  created_at: string;
  updated_at: string;
  submitted_at?: string;
}

export interface ReportCreateRequest {
  report_type: string;
  title: string;
  summary?: string;
  narrative?: string;
  linked_case_id?: string;
  linked_customer_id?: string;
  linked_transaction_ids?: string[];
  assigned_to_user_id?: string;
  reviewer_user_id?: string;
  due_at?: string;
  external_reference?: string;
  metadata?: Record<string, any>;
}

export interface ReportUpdateRequest {
  title?: string;
  summary?: string;
  narrative?: string;
  linked_customer_id?: string;
  linked_transaction_ids?: string[];
  due_at?: string;
  external_reference?: string;
  metadata?: Record<string, any>;
}

export interface ReportDetail {
  report: ReportRead;
  linked_case?: FraudCaseRead;
  linked_customer?: CustomerDetail;
  review_history: any[];
  submission_records: any[];
  attachments: ReportAttachmentRead[];
  metadata?: Record<string, any>;
}

export interface ReportListFilters {
  report_type?: string;
  status?: string;
  assigned_to_user_id?: string;
  reviewer_user_id?: string;
  linked_case_id?: string;
  linked_customer_id?: string;
  created_by_user_id?: string;
  search?: string;
  date_from?: string;
  date_to?: string;
  overdue_only?: boolean;
}

export interface ReportAssignRequest {
  assigned_to_user_id?: string;
  reviewer_user_id?: string;
}

export interface ReportReopenRequest {
  reason: string;
}

export interface ReportAttachmentRead {
  id: string;
  filename: string;
  content_type: string;
  size_bytes: number;
  storage_key: string;
  uploaded_at: string;
}

export interface ReportAttachmentRequest {
  filename: string;
  content_type: string;
  size_bytes: number;
  storage_key: string;
}

export interface ReportMutationResponse {
  id: string;
  status: string;
  message: string;
}
