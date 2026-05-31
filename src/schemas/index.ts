import { z } from 'zod';

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  two_factor_code: z.string().optional(),
});

export const signupSchema = z.object({
  organization_name: z.string().min(2, 'Organization name must be at least 2 characters'),
  organization_slug: z.string()
    .min(3, 'Slug must be at least 3 characters')
    .max(50, 'Slug must be at most 50 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  country: z.string().min(2, 'Country is required'),
  services: z.array(z.string()).min(1, 'At least one service must be selected'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  full_name: z.string().min(2, 'Full name must be at least 2 characters'),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Token is required'),
  new_password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

export const verifyEmailSchema = z.object({
  token: z.string().min(1, 'Token is required'),
});

export const resendVerifyEmailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

// Customer schemas
export const customerStatusPatchSchema = z.object({
  status: z.enum(['active', 'inactive', 'suspended', 'under_review']),
  reason: z.string().optional(),
});

export const customerNoteSchema = z.object({
  body: z.string().min(1, 'Note cannot be empty').max(5000, 'Note must be less than 5000 characters'),
});

export const customerWatchSchema = z.object({
  reason: z.string().optional(),
});

export const customerOwnerPatchSchema = z.object({
  owner_user_id: z.string().uuid('Invalid user ID').optional(),
});

// Transaction schemas
export const transactionIngestSchema = z.object({
  account_id: z.string().uuid('Invalid account ID'),
  merchant_id: z.string().uuid('Invalid merchant ID').optional(),
  amount: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Invalid amount format'),
  currency: z.string().length(3, 'Currency must be a 3-letter code'),
  transaction_type: z.enum(['purchase', 'refund', 'transfer', 'withdrawal', 'deposit'], { message: 'Invalid transaction type' }),
  channel: z.enum(['web', 'mobile', 'pos', 'atm', 'api'], { message: 'Invalid channel' }),
  status: z.enum(['pending', 'authorized', 'declined', 'settled', 'cancelled'], { message: 'Invalid status' }),
  occurred_at: z.string().datetime('Invalid datetime format'),
  external_reference: z.string().optional(),
  idempotency_key: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

// Case schemas
export const caseCreateSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(200, 'Title must be less than 200 characters'),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'critical'], { message: 'Invalid priority' }).default('medium'),
  status: z.enum(['open', 'in_progress', 'under_review', 'closed'], { message: 'Invalid status' }).default('open'),
  transaction_id: z.string().uuid('Invalid transaction ID').optional(),
});

export const caseUpdateSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(200, 'Title must be less than 200 characters').optional(),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'critical'], { message: 'Invalid priority' }).optional(),
});

export const caseNoteSchema = z.object({
  body: z.string().min(1, 'Note cannot be empty').max(5000, 'Note must be less than 5000 characters'),
});

export const caseAssignSchema = z.object({
  assignee_user_id: z.string().uuid('Invalid user ID'),
});

export const caseStatusSchema = z.object({
  status: z.enum(['open', 'in_progress', 'under_review', 'closed', 'resolved'], { message: 'Invalid status' }),
});

// Alert schemas
export const alertSuppressionRuleCreateSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(200, 'Name must be less than 200 characters'),
  description: z.string().optional(),
  condition_json: z.record(z.string(), z.any()),
  duration_minutes: z.number().int().min(1, 'Duration must be at least 1 minute'),
  enabled: z.boolean().default(true),
});

export const alertSuppressionRuleUpdateSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(200, 'Name must be less than 200 characters').optional(),
  description: z.string().optional(),
  condition_json: z.record(z.string(), z.any()).optional(),
  duration_minutes: z.number().int().min(1, 'Duration must be at least 1 minute').optional(),
  enabled: z.boolean().optional(),
});

// Settings schemas
export const teamInviteSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  role: z.enum(['admin', 'analyst', 'viewer', 'operator'], { message: 'Invalid role' }),
  full_name: z.string().min(2, 'Full name must be at least 2 characters'),
});

export const teamRolePatchSchema = z.object({
  role: z.enum(['admin', 'analyst', 'viewer', 'operator'], { message: 'Invalid role' }),
});

export const teamStatusPatchSchema = z.object({
  is_active: z.boolean(),
});

// Fraud Rule schemas
export const fraudRuleCreateSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(200, 'Name must be less than 200 characters'),
  slug: z.string()
    .min(3, 'Slug must be at least 3 characters')
    .max(100, 'Slug must be less than 100 characters')
    .regex(/^[a-z0-9-_]+$/, 'Slug can only contain lowercase letters, numbers, hyphens, and underscores'),
  description: z.string().optional(),
  category: z.string().optional(),
  severity: z.enum(['low', 'medium', 'high', 'critical'], { message: 'Invalid severity' }),
  weight: z.number().min(0).max(100),
  conditions_json: z.record(z.string(), z.any()),
  action_json: z.record(z.string(), z.any()).optional(),
  enabled: z.boolean().default(true),
  dry_run_only: z.boolean().default(false),
  version: z.number().int().min(1).default(1),
  priority: z.number().int().min(0).max(100).optional(),
});

export const fraudRuleUpdateSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(200, 'Name must be less than 200 characters').optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  severity: z.enum(['low', 'medium', 'high', 'critical'], { message: 'Invalid severity' }).optional(),
  weight: z.number().min(0).max(100).optional(),
  conditions_json: z.record(z.string(), z.any()).optional(),
  action_json: z.record(z.string(), z.any()).optional(),
  enabled: z.boolean().optional(),
  dry_run_only: z.boolean().optional(),
  rule_status: z.enum(['active', 'inactive', 'archived'], { message: 'Invalid rule status' }).optional(),
  priority: z.number().int().min(0).max(100).optional(),
});

export const fraudRuleTestSchema = z.object({
  context: z.record(z.string(), z.any()),
});

// Screening schemas
export const screeningDecisionSchema = z.object({
  reason: z.string().optional(),
  create_case: z.boolean().default(false),
  trigger_edd: z.boolean().default(false),
});

export const watchlistCreateSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(200, 'Name must be less than 200 characters'),
  watchlist_type: z.enum(['sanctions', 'pep', 'internal', 'custom'], { message: 'Invalid watchlist type' }),
  source_provider: z.string().optional(),
  is_active: z.boolean().default(true),
});

export const rescreenSchema = z.object({
  scope: z.enum(['all', 'single'], { message: 'Invalid scope' }),
  customer_id: z.string().uuid('Invalid customer ID').optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

// Report schemas
export const reportCreateSchema = z.object({
  report_type: z.enum(['str', 'ctr', 'internal', 'sar'], { message: 'Invalid report type' }),
  title: z.string().min(3, 'Title must be at least 3 characters').max(200, 'Title must be less than 200 characters'),
  summary: z.string().optional(),
  narrative: z.string().optional(),
  linked_case_id: z.string().uuid('Invalid case ID').optional(),
  linked_customer_id: z.string().uuid('Invalid customer ID').optional(),
  linked_transaction_ids: z.array(z.string().uuid()).optional(),
  assigned_to_user_id: z.string().uuid('Invalid user ID').optional(),
  reviewer_user_id: z.string().uuid('Invalid user ID').optional(),
  due_at: z.string().datetime('Invalid datetime format').optional(),
  external_reference: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

export const reportUpdateSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(200, 'Title must be less than 200 characters').optional(),
  summary: z.string().optional(),
  narrative: z.string().optional(),
  linked_customer_id: z.string().uuid('Invalid customer ID').optional(),
  linked_transaction_ids: z.array(z.string().uuid()).optional(),
  due_at: z.string().datetime('Invalid datetime format').optional(),
  external_reference: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

export const reportAssignSchema = z.object({
  assigned_to_user_id: z.string().uuid('Invalid user ID').optional(),
  reviewer_user_id: z.string().uuid('Invalid user ID').optional(),
});

export const reportReopenSchema = z.object({
  reason: z.string().min(1, 'Reason is required'),
});

export const reportAttachmentSchema = z.object({
  filename: z.string().min(1, 'Filename is required'),
  content_type: z.string().min(1, 'Content type is required'),
  size_bytes: z.number().int().min(0),
  storage_key: z.string().min(1, 'Storage key is required'),
});

// Document schemas
export const identityVerificationSessionCreateSchema = z.object({
  customer_id: z.string().uuid('Invalid customer ID').optional(),
  account_id: z.string().uuid('Invalid account ID').optional(),
  applicant_reference: z.string().optional(),
  metadata_json: z.record(z.string(), z.any()).optional(),
});

export const faceMatchSchema = z.object({
  document_id: z.string().uuid('Invalid document ID'),
  selfie_document_id: z.string().uuid('Invalid selfie document ID'),
});

export const livenessSchema = z.object({
  selfie_document_id: z.string().uuid('Invalid selfie document ID'),
});

// Organization schemas
export const organizationSettingsPatchSchema = z.object({
  settings: z.record(z.string(), z.any()).optional(),
});

export const organizationServiceSettingsPatchSchema = z.object({
  country: z.string().optional(),
  services: z.array(z.string()).optional(),
});

// Billing schemas
export const checkoutSchema = z.object({
  plan_id: z.string().uuid('Invalid plan ID').optional(),
  plan_slug: z.string().optional(),
  success_url: z.string().url('Invalid URL'),
  cancel_url: z.string().url('Invalid URL'),
});

export const portalSchema = z.object({
  return_url: z.string().url('Invalid URL'),
});

export const cancelSchema = z.object({
  at_period_end: z.boolean().default(true),
});

export const changePlanSchema = z.object({
  target_plan_id: z.string().uuid('Invalid plan ID').optional(),
  target_plan_slug: z.string().optional(),
});

export const quotaCheckSchema = z.object({
  feature_key: z.string().min(1, 'Feature key is required'),
  increment: z.number().int().min(1).default(1),
});

// Type exports
export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type VerifyEmailInput = z.infer<typeof verifyEmailSchema>;
export type ResendVerifyEmailInput = z.infer<typeof resendVerifyEmailSchema>;
export type CustomerStatusPatchInput = z.infer<typeof customerStatusPatchSchema>;
export type CustomerNoteInput = z.infer<typeof customerNoteSchema>;
export type CustomerWatchInput = z.infer<typeof customerWatchSchema>;
export type CustomerOwnerPatchInput = z.infer<typeof customerOwnerPatchSchema>;
export type TransactionIngestInput = z.infer<typeof transactionIngestSchema>;
export type CaseCreateInput = z.infer<typeof caseCreateSchema>;
export type CaseUpdateInput = z.infer<typeof caseUpdateSchema>;
export type CaseNoteInput = z.infer<typeof caseNoteSchema>;
export type CaseAssignInput = z.infer<typeof caseAssignSchema>;
export type CaseStatusInput = z.infer<typeof caseStatusSchema>;
export type AlertSuppressionRuleCreateInput = z.infer<typeof alertSuppressionRuleCreateSchema>;
export type AlertSuppressionRuleUpdateInput = z.infer<typeof alertSuppressionRuleUpdateSchema>;
export type TeamInviteInput = z.infer<typeof teamInviteSchema>;
export type TeamRolePatchInput = z.infer<typeof teamRolePatchSchema>;
export type TeamStatusPatchInput = z.infer<typeof teamStatusPatchSchema>;
export type FraudRuleCreateInput = z.infer<typeof fraudRuleCreateSchema>;
export type FraudRuleUpdateInput = z.infer<typeof fraudRuleUpdateSchema>;
export type FraudRuleTestInput = z.infer<typeof fraudRuleTestSchema>;
export type ScreeningDecisionInput = z.infer<typeof screeningDecisionSchema>;
export type WatchlistCreateInput = z.infer<typeof watchlistCreateSchema>;
export type RescreenInput = z.infer<typeof rescreenSchema>;
export type ReportCreateInput = z.infer<typeof reportCreateSchema>;
export type ReportUpdateInput = z.infer<typeof reportUpdateSchema>;
export type ReportAssignInput = z.infer<typeof reportAssignSchema>;
export type ReportReopenInput = z.infer<typeof reportReopenSchema>;
export type ReportAttachmentInput = z.infer<typeof reportAttachmentSchema>;
export type IdentityVerificationSessionCreateInput = z.infer<typeof identityVerificationSessionCreateSchema>;
export type FaceMatchInput = z.infer<typeof faceMatchSchema>;
export type LivenessInput = z.infer<typeof livenessSchema>;
export type OrganizationSettingsPatchInput = z.infer<typeof organizationSettingsPatchSchema>;
export type OrganizationServiceSettingsPatchInput = z.infer<typeof organizationServiceSettingsPatchSchema>;
export type CheckoutInput = z.infer<typeof checkoutSchema>;
export type PortalInput = z.infer<typeof portalSchema>;
export type CancelInput = z.infer<typeof cancelSchema>;
export type ChangePlanInput = z.infer<typeof changePlanSchema>;
export type QuotaCheckInput = z.infer<typeof quotaCheckSchema>;
