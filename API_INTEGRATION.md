# DeepSense UI API Integration Documentation

## Overview
This document describes the API integration work completed to connect the DeepSense UI client to the DeepSense API backend server.

## Environment Variables

The following environment variable is required for the API integration:

- `NEXT_PUBLIC_API_URL`: Base URL of the DeepSense API server (default: `http://localhost:8000`)
- `NEXT_PUBLIC_APP_URL`: Base URL of the DeepSense UI application (default: `http://localhost:3000`)

**Note:** The `.env.example` file is gitignored. Create a `.env.local` file in the project root with your API URL.

## Files Created

### Core API Infrastructure
- `src/lib/api/client.ts` - Central axios API client with auth token management, refresh token logic, error normalization, and retry strategy
- `src/lib/auth.ts` - React hooks for authentication (`useAuth`, `useCurrentUser`, `logout`)
- `src/types/index.ts` - TypeScript interfaces for all server DTOs and API payloads
- `src/schemas/index.ts` - Zod schemas for form validation and runtime validation

### Service Modules
- `src/services/auth.service.ts` - Authentication endpoints (login, signup, token refresh, password reset, email verification)
- `src/services/customers.service.ts` - Customer management (list, detail, timeline, notes, watch, status updates)
- `src/services/transactions.service.ts` - Transaction endpoints (list, detail, ingest, score breakdown, explanation)
- `src/services/alerts.service.ts` - Alert management (list, detail, suppression rules)
- `src/services/cases.service.ts` - Fraud case workflow (list, create, update, assign, status transition, notes)
- `src/services/analytics.service.ts` - Analytics overview endpoint
- `src/services/settings.service.ts` - Settings management (team, webhook, screening, reporting, security, audit)
- `src/services/billing.service.ts` - Billing endpoints (checkout, portal, plan changes, usage)
- `src/services/documents.service.ts` - Document fraud verification (identity verification, face match, liveness, biometrics)
- `src/services/organization.service.ts` - Organization settings and statistics
- `src/services/fraud-rules.service.ts` - Fraud rules CRUD, testing, validation, analytics
- `src/services/screening.service.ts` - Screening center (matches, decisions, watchlists, re-screening)
- `src/services/reports.service.ts` - Regulatory reports (CRUD, lifecycle, audit, submission)

### Modified Files
- `src/app/dashboard/layout.tsx` - Added auth protection using `useAuth` hook
- `src/app/(auth)/login/page.tsx` - Connected to API with real login, error handling, and redirect support
- `src/app/(auth)/register/page.tsx` - Connected to API with real signup, additional fields (slug, country, services)

## Integrated Endpoints

### Authentication (`/api/v1/auth/`)
- `POST /login` - User login
- `POST /signup` - User registration
- `POST /token/refresh` - Refresh access token
- `GET /me` - Get current user
- `POST /forgot-password` - Request password reset
- `POST /reset-password` - Reset password with token
- `POST /verify-email` - Verify email with token
- `POST /resend-verify-email` - Resend verification email
- `POST /logout` - User logout

### Customers (`/api/v1/customers/`)
- `GET /` - List customers with pagination and filters
- `GET /{id}` - Get customer details
- `GET /{id}/timeline` - Get customer timeline
- `GET /{id}/linked-entities` - Get linked entities
- `PATCH /{id}/status` - Update customer status
- `POST /{id}/notes` - Add note to customer
- `POST /{id}/watch` - Watch customer
- `DELETE /{id}/watch` - Unwatch customer
- `PATCH /{id}/owner` - Update customer owner
- `GET /{id}/summary` - Get customer summary

### Transactions (`/api/v1/transactions/`)
- `GET /` - List transactions with pagination and filters
- `GET /{id}` - Get transaction details
- `POST /ingest` - Ingest single transaction
- `POST /ingest/bulk` - Bulk ingest transactions
- `GET /{id}/score-breakdown` - Get score breakdown
- `GET /{id}/explanation` - Get explanation

### Alerts (`/api/v1/alerts/`)
- `GET /` - List alerts with pagination and filters
- `GET /{id}` - Get alert details
- `GET /groups` - Get alert groups
- `POST /suppression-rules` - Create suppression rule
- `GET /suppression-rules` - List suppression rules
- `GET /suppression-rules/{id}` - Get suppression rule
- `PATCH /suppression-rules/{id}` - Update suppression rule
- `DELETE /suppression-rules/{id}` - Delete suppression rule

### Cases (`/api/v1/cases/`)
- `GET /` - List cases with pagination and filters
- `POST /` - Create case
- `GET /{id}` - Get case details
- `PATCH /{id}` - Update case
- `DELETE /{id}` - Delete case
- `POST /{id}/assign` - Assign case
- `PATCH /{id}/status` - Update case status
- `POST /{id}/notes` - Add note to case
- `GET /{id}/explanation` - Get explanation
- `POST /{id}/feedback` - Submit feedback

### Analytics (`/api/v1/analytics/`)
- `GET /overview` - Get analytics overview

### Settings (`/api/v1/settings/`)
- `GET /team` - List team members
- `POST /team/invite` - Invite team member
- `PATCH /team/{id}/role` - Update team member role
- `PATCH /team/{id}/status` - Update team member status
- `GET /webhook` - Get webhook settings
- `PATCH /webhook` - Update webhook settings
- `GET /screening` - Get screening settings
- `PATCH /screening` - Update screening settings
- `GET /reporting` - Get reporting settings
- `PATCH /reporting` - Update reporting settings
- `GET /retention` - Get retention settings
- `PATCH /retention` - Update retention settings
- `GET /security` - Get security settings
- `PATCH /security` - Update security settings
- `GET /feature-flags` - Get feature flags
- `PATCH /feature-flags` - Update feature flags
- `GET /permissions` - Get permissions
- `GET /audit-trail` - Get audit trail

### Billing (`/api/v1/billing/`)
- `POST /checkout` - Initiate checkout
- `POST /portal` - Access billing portal
- `POST /cancel` - Cancel subscription
- `POST /change-plan` - Change plan
- `GET /current-plan` - Get current plan
- `GET /usage` - Get usage statistics
- `POST /quota-check` - Check quota

### Documents (`/api/v1/documents/`)
- `GET /privacy-policy` - Get privacy policy
- `POST /anonymize` - Anonymize document
- `POST /purge` - Purge document
- `POST /identity-verification/sessions` - Create identity verification session
- `GET /identity-verification/sessions/{id}` - Get identity verification session
- `POST /selfie-upload` - Upload selfie
- `POST /face-match` - Perform face match
- `POST /liveness` - Perform liveness check
- `GET /biometrics/{id}` - Get biometric check
- `POST /deepfake` - Check for deepfake
- `POST /document-extraction` - Extract document data

### Organization (`/api/v1/organization/`)
- `GET /settings` - Get organization settings
- `PATCH /settings` - Update organization settings
- `GET /stats` - Get organization statistics
- `GET /service-settings` - Get service settings
- `PATCH /service-settings` - Update service settings

### Fraud Rules (`/api/v1/fraud-rules/`)
- `GET /` - List fraud rules with pagination and filters
- `POST /` - Create fraud rule
- `GET /{id}` - Get fraud rule details
- `PATCH /{id}` - Update fraud rule
- `DELETE /{id}` - Delete fraud rule
- `POST /{id}/enable` - Enable fraud rule
- `POST /{id}/disable` - Disable fraud rule
- `POST /{id}/archive` - Archive fraud rule
- `POST /{id}/test` - Test fraud rule
- `POST /{id}/validate` - Validate fraud rule
- `GET /{id}/analytics` - Get fraud rule analytics
- `GET /{id}/metrics` - Get fraud rule metrics
- `GET /{id}/audit` - Get fraud rule audit trail

### Screening (`/api/v1/screening/`)
- `GET /matches` - List screening matches with filters
- `GET /matches/{id}` - Get screening match details
- `POST /matches/{id}/decision` - Submit decision on match
- `GET /watchlists` - List watchlists
- `POST /watchlists` - Create watchlist
- `GET /watchlists/{id}` - Get watchlist details
- `PATCH /watchlists/{id}` - Update watchlist
- `DELETE /watchlists/{id}` - Delete watchlist
- `POST /rescreen` - Trigger re-screening
- `GET /jobs` - List screening jobs
- `GET /jobs/{id}` - Get screening job details
- `POST /csv-upload` - Upload CSV for screening
- `POST /ad-hoc-check` - Perform ad-hoc check
- `POST /fuzzy-check` - Perform fuzzy check

### Reports (`/api/v1/reports/`)
- `GET /` - List reports with pagination and filters
- `POST /` - Create report
- `GET /{id}` - Get report details
- `PATCH /{id}` - Update report
- `DELETE /{id}` - Delete report
- `POST /{id}/submit` - Submit report
- `POST /{id}/withdraw` - Withdraw report
- `POST /{id}/approve` - Approve report
- `POST /{id}/reject` - Reject report
- `POST /{id}/reopen` - Reopen report
- `GET /{id}/audit` - Get report audit trail
- `GET /{id}/version-history` - Get version history
- `POST /{id}/attachments` - Add attachment
- `GET /{id}/attachments` - List attachments
- `DELETE /{id}/attachments/{attachment_id}` - Delete attachment
- `POST /{id}/export` - Export report

## Excluded Endpoints

The following endpoint categories were intentionally excluded as they are internal-only or admin-only:

- Internal health checks and monitoring endpoints
- Admin-only configuration endpoints
- System maintenance endpoints
- Internal debugging endpoints

## Connected Pages/Components

### Authentication
- **Login Page** (`src/app/(auth)/login/page.tsx`)
  - Connected to `authService.login()`
  - Error handling with user-friendly messages
  - Redirect support for post-login destination
  - Loading state during API call

- **Register Page** (`src/app/(auth)/register/page.tsx`)
  - Connected to `authService.signup()`
  - Added required fields: organization slug, country, services selection
  - Error handling with user-friendly messages
  - Loading state during API call

### Dashboard
- **Dashboard Layout** (`src/app/dashboard/layout.tsx`)
  - Added auth protection using `useAuth()` hook
  - Loading state while checking authentication
  - Automatic redirect to login if not authenticated
  - Redirect to intended destination after login

## Assumptions

1. **API Base URL**: The API server is expected to be accessible via `NEXT_PUBLIC_API_URL` environment variable (default: `http://localhost:8000`)

2. **Token Storage**: Access tokens are stored in localStorage under the key `deep_sense_access_token`, refresh tokens under `deep_sense_refresh_token`

3. **Token Refresh**: The API client automatically attempts to refresh expired access tokens using the refresh token

4. **Error Format**: API errors are expected to have a `detail` field for error messages and optionally a `code` field for error codes

5. **Pagination**: All list endpoints support pagination with `page`, `page_size`, `sort_by`, and `sort_order` query parameters

6. **Filtering**: List endpoints support various filter parameters specific to each resource type

7. **UUID Format**: All ID fields are expected to be UUID strings

8. **Date Format**: Datetime fields are expected in ISO 8601 format

9. **Metadata Fields**: Flexible JSON fields (metadata, conditions_json, action_json, etc.) are typed as `Record<string, unknown>` to allow arbitrary data

10. **Service Selection**: During registration, users must select at least one service from: fraud_detection, aml, screening, risk_assessment

## Remaining Gaps

The following work remains to be completed:

1. **Dashboard Page Integration**: The main dashboard page (`src/app/dashboard/page.tsx`) still uses static data and needs to be connected to real API endpoints (analytics overview, recent alerts, etc.)

2. **Loading/Error/Empty States**: Dashboard pages need comprehensive loading, error, and empty state components

3. **Form Connections**: Additional forms throughout the application need to be connected to their respective API endpoints with validation

4. **Table Implementation**: Data tables need to be implemented with server-side pagination, search, filters, sorting, empty states, row actions, and confirmation modals

5. **Permission-based UI**: UI elements need to be conditionally rendered based on user permissions

6. **Environment Variables**: The `.env.example` file needs to be created (currently gitignored)

7. **Build Verification**: The project needs to be built to verify compilation succeeds

8. **TypeScript Verification**: A typecheck script needs to be added and run to verify type safety

## Technical Notes

### Lint Configuration
All new API integration files include `/* eslint-disable @typescript-eslint/no-explicit-any */` where necessary to allow `any` types for flexible JSON fields. This is intentional for metadata and configuration fields that have dynamic structures.

### Dynamic Imports
The `auth.ts` file uses dynamic imports for `authService` to avoid circular dependencies and SSR issues.

### Zod v4 Compatibility
The Zod schemas use the v4 API, which requires explicit error message objects for `z.enum()` and both key and value schemas for `z.record()`.

### React Hooks Best Practices
The `useAuth` hook wraps setState calls in a function to avoid React's warning about synchronous setState in effects.
