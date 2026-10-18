import type {
  ActionCreate,
  ApplicantProfileRead,
  InquiryCreate,
  InquiryEventRead,
  InquiryListItem,
  InquiryPage,
  InquiryRead,
  InquiryReviewCreate,
  OneTimeLinkCreate,
  OneTimeLinkRead,
  RejectLabelRead,
  RiskListCreate,
  RiskListItemRead,
  RiskListItemsCreate,
  RiskListItemsResult,
  RiskListMatchRequest,
  RiskListMatchResponse,
  RiskListRead,
  ShareTokenCreate,
  ShareTokenRead,
  ShareTokenRevokeRead,
  SimulateReviewCreate,
  StepResultCreate,
  VerificationLevelBody,
  VerificationLevelCreate,
  VerificationLevelRead,
} from '@/lib/api-client/api';
import { del, get, post } from '@/lib/api/client';

export const STEP_TYPES = [
  'document',
  'selfie',
  'liveness',
  'face_match',
  'kyc_registry',
  'kyb_registry',
  'screening',
  'proof_of_address',
  'questionnaire',
  'phone',
  'email',
  'consent',
  'ubo_declaration',
] as const;
export type StepType = (typeof STEP_TYPES)[number];

export const BUSINESS_ONLY_STEPS: readonly StepType[] = ['kyb_registry', 'ubo_declaration'];

export const INQUIRY_STATUSES = [
  'created',
  'pending',
  'completed',
  'needs_review',
  'resubmission_requested',
  'approved',
  'declined',
  'expired',
] as const;
export type InquiryStatus = (typeof INQUIRY_STATUSES)[number];

export const OPEN_STATUSES: readonly string[] = ['created', 'pending', 'resubmission_requested'];
export const REVIEWABLE_STATUSES: readonly string[] = ['completed', 'needs_review'];
export const TERMINAL_STATUSES: readonly string[] = ['approved', 'declined', 'expired'];

export const LIST_TYPES = ['email', 'phone', 'government_id', 'name', 'ip_address', 'device_fingerprint', 'country'] as const;
export type ListType = (typeof LIST_TYPES)[number];
export const LIST_ACTIONS = ['deny', 'review', 'allow'] as const;
export type ListAction = (typeof LIST_ACTIONS)[number];

export const INQUIRY_KINDS = ['onboarding', 'action'] as const;
export type InquiryKind = (typeof INQUIRY_KINDS)[number];

export const DUPLICATE_MATCH_KEYS = ['government_id', 'email', 'phone', 'device_fingerprint'] as const;

/** One entry of `InquiryRead.duplicate_matches` (typed loosely by the OpenAPI schema). */
export interface DuplicateMatch {
  inquiry_id: string;
  reference_id: string;
  status: string;
  matched_on: string[];
}

export const parseDuplicateMatches = (value: unknown): DuplicateMatch[] =>
  Array.isArray(value)
    ? value
        .filter((item): item is Record<string, unknown> => !!item && typeof item === 'object' && 'inquiry_id' in item)
        .map((item) => ({
          inquiry_id: String(item.inquiry_id),
          reference_id: String(item.reference_id ?? ''),
          status: String(item.status ?? ''),
          matched_on: Array.isArray(item.matched_on) ? item.matched_on.map(String) : [],
        }))
    : [];

export interface InquiryListFilters {
  status?: InquiryStatus;
  kind?: InquiryKind;
  reference_id?: string;
  level_name?: string;
  limit?: number;
  offset?: number;
}

const enc = encodeURIComponent;

export const verificationFlowsService = {
  // Levels
  listLevels: (includeInactive = false) =>
    get<VerificationLevelRead[]>('/verification/levels', { params: { include_inactive: includeInactive } }),
  getLevel: (levelId: string) => get<VerificationLevelRead>(`/verification/levels/${enc(levelId)}`),
  createLevel: (body: VerificationLevelCreate) => post<VerificationLevelRead>('/verification/levels', body),
  publishLevelVersion: (name: string, body: VerificationLevelBody) =>
    post<VerificationLevelRead>(`/verification/levels/by-name/${enc(name)}/versions`, body),
  deactivateLevel: (levelId: string) =>
    post<VerificationLevelRead>(`/verification/levels/${enc(levelId)}/deactivate`),
  listRejectLabels: () => get<RejectLabelRead[]>('/verification/reject-labels'),

  // Inquiries
  listInquiries: (filters: InquiryListFilters = {}) =>
    get<InquiryPage>('/verification/inquiries', { params: filters }),
  listReverificationDue: (limit = 100) =>
    get<InquiryListItem[]>('/verification/inquiries/reverification-due', { params: { limit } }),
  expireStale: () => post<{ expired: number }>('/verification/inquiries/expire-stale'),
  createInquiry: (body: InquiryCreate) => post<InquiryRead>('/verification/inquiries', body),
  getInquiry: (inquiryId: string, includePii = false) =>
    get<InquiryRead>(`/verification/inquiries/${enc(inquiryId)}`, { params: { include_pii: includePii } }),
  listInquiryEvents: (inquiryId: string) =>
    get<InquiryEventRead[]>(`/verification/inquiries/${enc(inquiryId)}/events`),
  recordStepResult: (inquiryId: string, stepType: StepType, body: StepResultCreate) =>
    post<InquiryRead>(`/verification/inquiries/${enc(inquiryId)}/steps/${stepType}`, body),
  reviewInquiry: (inquiryId: string, body: InquiryReviewCreate) =>
    post<InquiryRead>(`/verification/inquiries/${enc(inquiryId)}/review`, body),
  expireInquiry: (inquiryId: string) => post<InquiryRead>(`/verification/inquiries/${enc(inquiryId)}/expire`),
  redactInquiry: (inquiryId: string) => post<InquiryRead>(`/verification/inquiries/${enc(inquiryId)}/redact`),
  reverifyInquiry: (inquiryId: string) => post<InquiryRead>(`/verification/inquiries/${enc(inquiryId)}/reverify`),
  simulateReview: (inquiryId: string, body: SimulateReviewCreate) =>
    post<InquiryRead>(`/verification/inquiries/${enc(inquiryId)}/simulate-review`, body),

  // Step-up actions
  createAction: (inquiryId: string, body: ActionCreate) =>
    post<InquiryRead>(`/verification/inquiries/${enc(inquiryId)}/actions`, body),
  listActions: (inquiryId: string) =>
    get<InquiryListItem[]>(`/verification/inquiries/${enc(inquiryId)}/actions`),

  // Applicants
  getApplicantProfile: (referenceId: string) =>
    get<ApplicantProfileRead>(`/verification/applicants/${enc(referenceId)}`),

  createOneTimeLink: (inquiryId: string, body: OneTimeLinkCreate = {}) =>
    post<OneTimeLinkRead>(`/verification/inquiries/${enc(inquiryId)}/one-time-links`, body),

  // Reusable KYC
  createShareToken: (inquiryId: string, body: ShareTokenCreate) =>
    post<ShareTokenRead>(`/verification/inquiries/${enc(inquiryId)}/share-tokens`, body),
  revokeShareToken: (tokenId: string) =>
    post<ShareTokenRevokeRead>(`/verification/share-tokens/${enc(tokenId)}/revoke`),

  // Risk lists
  listRiskLists: (includeArchived = false) =>
    get<RiskListRead[]>('/verification/lists', { params: { include_archived: includeArchived } }),
  createRiskList: (body: RiskListCreate) => post<RiskListRead>('/verification/lists', body),
  archiveRiskList: (listId: string) => post<RiskListRead>(`/verification/lists/${enc(listId)}/archive`),
  listRiskListItems: (listId: string, limit = 100, offset = 0) =>
    get<RiskListItemRead[]>(`/verification/lists/${enc(listId)}/items`, { params: { limit, offset } }),
  addRiskListItems: (listId: string, body: RiskListItemsCreate) =>
    post<RiskListItemsResult>(`/verification/lists/${enc(listId)}/items`, body),
  archiveRiskListItem: (listId: string, itemId: string) =>
    del<RiskListItemRead>(`/verification/lists/${enc(listId)}/items/${enc(itemId)}`),
  matchRiskLists: (body: RiskListMatchRequest) => post<RiskListMatchResponse>('/verification/lists/match', body),
};

/** Builds the hosted applicant URL for a one-time link code. */
export const hostedVerifyUrl = (code: string): string => {
  const origin = typeof window === 'undefined' ? '' : window.location.origin;
  return `${origin}/verify?code=${enc(code)}`;
};

/** Dashboard URL of an applicant's profile. */
export const applicantProfileHref = (referenceId: string): string =>
  `/dashboard/verification/applicants/${enc(referenceId)}`;

/** HTTP status of an ApiError (undefined for other errors). */
export const errorStatus = (error: unknown): number | undefined =>
  error instanceof Error ? (error as Error & { statusCode?: number }).statusCode : undefined;

export const humanize = (value: string | null | undefined): string =>
  (value ?? '').replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

/** The `details` object of a DeepSense error body (`{error_code, message, details}`). */
const errorDetails = (error: unknown): Record<string, unknown> | undefined => {
  const details = (error as { details?: { details?: unknown } } | null)?.details?.details;
  return details && typeof details === 'object' && !Array.isArray(details) ? (details as Record<string, unknown>) : undefined;
};

/** The existing inquiry named by a 409 `action_exists` error, if any. */
export const conflictingInquiryId = (error: unknown): string | undefined => {
  const id = errorDetails(error)?.inquiry_id;
  return typeof id === 'string' ? id : undefined;
};

/** Human label for a review reason, e.g. `duplicate_applicant:email` -> "Duplicate applicant (email)". */
export const describeReviewReason = (reason: string): string => {
  const [code, detail] = reason.split(':', 2);
  return detail ? `${humanize(code)} (${humanize(detail).toLowerCase()})` : humanize(code);
};

/** Readable message from an ApiError, including pydantic validation details. */
export const describeError = (error: unknown, fallback = 'Request failed'): string => {
  if (!(error instanceof Error)) return fallback;
  const details = (error as Error & { details?: { details?: unknown } }).details?.details;
  if (Array.isArray(details)) {
    const messages = details
      .map((item) => (item && typeof item === 'object' && 'msg' in item ? String((item as { msg: unknown }).msg) : null))
      .filter(Boolean);
    if (messages.length) return `${error.message}: ${messages.join('; ')}`;
  }
  return error.message || fallback;
};
