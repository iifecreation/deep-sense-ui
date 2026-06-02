# UI Service Connection Audit

**Date**: June 2, 2026  
**Project**: DeepSense Tenant Dashboard UI  
**Purpose**: Audit service file usage and identify connections needed

---

## Service Files Found (20 total)

| Service File | Imported in UI | Connected Page/Component | Missing Page/Component | Status |
|--------------|----------------|-------------------------|------------------------|--------|
| auth.service.ts | ✅ Yes (3 files) | login-form.tsx, register/page.tsx, lib/auth.ts | None | Connected |
| alerts.service.ts | ❌ No | None | /dashboard/alerts | Not Connected |
| analytics.service.ts | ❌ No | None | /dashboard overview | Not Connected |
| billing.service.ts | ❌ No | None | /dashboard/billing | Not Connected |
| cases.service.ts | ❌ No | None | /dashboard/cases | Not Connected |
| customers.service.ts | ❌ No | None | /dashboard/customers | Not Connected |
| decision-policies.service.ts | ❌ No | None | /dashboard/decision-policies | Not Connected |
| documents.service.ts | ❌ No | None | /dashboard/documents | Not Connected |
| fraud-rules.service.ts | ❌ No | None | /dashboard/rules | Not Connected |
| integrations.service.ts | ❌ No | None | /dashboard/integrations | Not Connected |
| interventions.service.ts | ❌ No | None | /dashboard/interventions | Not Connected |
| notifications.service.ts | ❌ No | None | /dashboard/notifications | Not Connected |
| organization.service.ts | ❌ No | None | /dashboard/settings | Not Connected |
| reports.service.ts | ❌ No | None | /dashboard/reports | Not Connected |
| screening.service.ts | ❌ No | None | /dashboard/screening | Not Connected |
| settings.service.ts | ❌ No | None | /dashboard/settings | Not Connected |
| support.service.ts | ❌ No | None | /dashboard/support | Not Connected |
| transactions.service.ts | ❌ No | None | /dashboard/transactions | Not Connected |
| webhooks.service.ts | ❌ No | None | /dashboard/settings/webhooks | Not Connected |
| advanced-fraud.service.ts | ❌ No | None | /dashboard/advanced-fraud | Not Connected |

---

## Summary Statistics

- **Total Service Files**: 20
- **Connected Services**: 1 (5%)
- **Unused Services**: 19 (95%)
- **Critical Gap**: 19 tenant-facing services not connected to UI

---

## Service Details

### Connected Services (1)

#### auth.service.ts
- **Status**: ✅ Connected
- **Imported By**: 
  - src/lib/auth.ts (2 matches)
  - src/app/(auth)/login/login-form.tsx (1 match)
  - src/app/(auth)/register/page.tsx (1 match)
- **Endpoints Exposed**: login, signup, refresh token, forgot password, reset password, verify email
- **Actions Available in UI**: Login, Register, Password Reset
- **Status**: Fully Connected

---

### Unused Services (19)

#### alerts.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/alerts, /dashboard/alerts/[alertId]
- **Endpoints Exposed**: 
  - listAlerts, getAlert, listAlertGroups, getAlertGroup
  - createSuppressionRule, listSuppressionRules, updateSuppressionRule, deleteSuppressionRule
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Core fraud detection feature

#### analytics.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard overview
- **Endpoints Exposed**: getDashboard, getAlertsTrend, getCasesTrend, getTransactionsTrend, getRiskDistribution
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Dashboard overview requires this

#### billing.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/billing, /dashboard/settings/billing
- **Endpoints Exposed**: 
  - createCheckoutSession, createBillingPortalSession
  - cancelSubscription, changePlan
  - getCurrentPlan, getUsage, checkQuota
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Revenue critical

#### cases.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/cases, /dashboard/cases/[caseId]
- **Endpoints Exposed**: 
  - listCases, createCase, getCase, updateCase
  - getCaseNotes, addCaseNote, getCaseTimeline, getCaseExplanation
  - createFeedback, deleteCase
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Core fraud management feature

#### customers.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/customers, /dashboard/customers/[customerId], /dashboard/customer-risk
- **Endpoints Exposed**: 
  - listCustomers, createCustomer, getCustomer, updateCustomer, deleteCustomer
  - getCustomerRisk, getCustomerHistory, getCustomerNotes, addCustomerNote
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Core customer management feature

#### decision-policies.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/decision-policies
- **Endpoints Exposed**: 
  - listPolicies, createPolicy, getPolicy, updatePolicy, deletePolicy
  - simulatePolicy, getTransactionAudit, listPolicyVersions, createPolicyVersion, activatePolicyVersion
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Fraud detection configuration

#### documents.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/documents, /dashboard/documents/[documentId], /dashboard/document-intelligence
- **Endpoints Exposed**: 
  - listDocuments, uploadDocument, getDocument, deleteDocument
  - createUploadSession, getSignedUrl, requestExtraction
  - getExtractionResult, getAnalysisResult
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Document verification feature

#### fraud-rules.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/rules
- **Endpoints Exposed**: 
  - listRules, createRule, getRule, updateRule, deleteRule
  - testRule, enableRule, disableRule, getRulePerformance
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Fraud rule management

#### integrations.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/integrations, /dashboard/settings/api-keys
- **Endpoints Exposed**: 
  - listIntegrations, createIntegration, getIntegration, updateIntegration, deleteIntegration
  - testIntegration
- **Actions Available in UI**: None (needs connection)
- **Priority**: Medium - Platform extensibility

#### interventions.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/interventions
- **Endpoints Exposed**: 
  - listInterventions, createIntervention, getIntervention, updateIntervention, deleteIntervention
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Fraud response automation

#### notifications.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/notifications
- **Endpoints Exposed**: 
  - listNotifications, markAsRead, markAllAsRead
- **Actions Available in UI**: None (needs connection)
- **Priority**: Medium - User engagement

#### organization.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/settings
- **Endpoints Exposed**: 
  - getOrganization, updateOrganization, getOrganizationStats
  - getOrganizationSettings, updateOrganizationSettings
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Organization management

#### reports.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/reports
- **Endpoints Exposed**: 
  - listReports, createReport, getReport, generateReport, downloadReport
  - listTemplates, getTemplate
- **Actions Available in UI**: None (needs connection)
- **Priority**: Medium - Reporting feature

#### screening.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/screening, /dashboard/screening/matches/[matchId], /dashboard/compliance
- **Endpoints Exposed**: 
  - screenEntity, getScreeningMatches, listWatchlist, addToWatchlist, removeFromWatchlist
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Compliance feature

#### settings.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/settings
- **Endpoints Exposed**: 
  - getSettings, updateSettings
- **Actions Available in UI**: None (needs connection)
- **Priority**: Medium - Settings management

#### support.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/support, /dashboard/support/[ticketId]
- **Endpoints Exposed**: 
  - listTickets, createTicket, getTicket, updateTicket
- **Actions Available in UI**: None (needs connection)
- **Priority**: Medium - Customer support

#### transactions.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/transactions, /dashboard/transactions/[transactionId]
- **Endpoints Exposed**: 
  - ingestTransaction, getTransaction, getScoreBreakdown
  - listTransactions, bulkIngest
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Core transaction feature

#### webhooks.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/settings/webhooks
- **Endpoints Exposed**: 
  - listWebhooks, createWebhook, getWebhook, updateWebhook, deleteWebhook
  - testWebhook, listDeliveries
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - API integration feature

#### advanced-fraud.service.ts
- **Status**: ❌ Not Connected
- **Imported By**: None
- **Connected Page/Component**: None
- **Missing Page/Component**: /dashboard/advanced-fraud (multiple sub-features)
- **Endpoints Exposed**: 
  - Deepfake detection, Synthetic identity, Friendly fraud, CNP advanced
  - App scams, Fraud domains, Dispute intelligence, Identity reputation
  - Card intelligence, Consortium (10+ subsystems)
- **Actions Available in UI**: None (needs connection)
- **Priority**: High - Advanced fraud detection features

---

## Dashboard Pages to Investigate

Need to verify which dashboard pages exist and their current implementation status:

- /dashboard (overview)
- /dashboard/alerts
- /dashboard/alerts/[alertId]
- /dashboard/cases
- /dashboard/cases/[caseId]
- /dashboard/transactions
- /dashboard/transactions/[transactionId]
- /dashboard/customers
- /dashboard/customers/[customerId]
- /dashboard/documents
- /dashboard/documents/[documentId]
- /dashboard/screening
- /dashboard/screening/matches/[matchId]
- /dashboard/rules
- /dashboard/decision-policies
- /dashboard/interventions
- /dashboard/billing
- /dashboard/integrations
- /dashboard/settings
- /dashboard/settings/api-keys
- /dashboard/settings/webhooks
- /dashboard/notifications
- /dashboard/support
- /dashboard/support/[ticketId]
- /dashboard/reports
- /dashboard/audit
- /dashboard/advanced-fraud

---

## Next Steps

1. **Phase 2**: Search for mock/static data in dashboard pages
2. **Phase 3-14**: Connect each service to its corresponding UI pages
3. **Phase 15**: Update navigation to include all connected modules
4. **Phase 16**: Create shared data fetching hooks
5. **Phase 17**: Verify no service remains unused
6. **Phase 18**: Build verification

---

**Audit Version**: 1.0  
**Last Updated**: June 2, 2026  
**Status**: Phase 1 Complete - 19/20 services unused (95% gap)
