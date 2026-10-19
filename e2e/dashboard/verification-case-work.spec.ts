import { expect, request, test, type Page } from '@playwright/test';
import { compliancePersona, loginTenant, tenantCredentials } from '../support/auth';
import { collectConsoleErrors } from '../support/console';

// Routes compile on first visit under `next dev`.
const FIRST_VISIT = { timeout: 60_000 };
const API_URL = process.env.NEXT_PUBLIC_SANDBOX_API_URL || 'http://127.0.0.1:18000';

/** Adds an internal watchlist entry through the screening API, so ongoing monitoring has something to match. */
async function addWatchlistEntry(fullName: string): Promise<void> {
  const api = await request.newContext({ baseURL: API_URL });
  try {
    const login = await api.post('/api/v1/identity/login', {
      data: { email: tenantCredentials.email, password: tenantCredentials.password, environment: 'sandbox' },
    });
    expect(login.ok()).toBeTruthy();
    const { access_token: token } = await login.json();
    const upload = await api.post('/api/v1/screening/watchlists/internal/upload', {
      headers: { Authorization: `Bearer ${token}` },
      data: { csv_text: `full_name,entity_type\n${fullName},person\n`, watchlist_name: 'E2E monitoring watchlist' },
    });
    expect(upload.ok(), await upload.text()).toBeTruthy();
  } finally {
    await api.dispose();
  }
}

/** A proof-of-address-only level with four-eyes on every decision, a review deadline, retention and monitoring. */
async function createCaseWorkLevel(page: Page, name: string, displayName: string) {
  await page.getByRole('button', { name: 'New level' }).click();
  const dialog = page.getByRole('dialog');
  await dialog.getByLabel('Level name (slug)').fill(name);
  await dialog.getByLabel('Display name').fill(displayName);
  for (const step of ['Consent', 'Document', 'Selfie']) {
    await dialog.getByRole('button', { name: `Remove ${step}` }).click();
  }
  await dialog.getByRole('combobox', { name: 'Add step' }).click();
  await page.getByRole('option', { name: 'Proof Of Address' }).click();
  await dialog.getByLabel('Max document age (days)').fill('60');
  await dialog.getByLabel('Min name similarity').fill('0.8');
  await dialog.getByText('Policy & timing').click();
  await dialog.getByLabel('Four-eyes from risk score').fill('0');
  await dialog.getByLabel('Review deadline (hours)').fill('24');
  await dialog.getByLabel('Auto-redact after (days)').fill('365');
  await dialog.getByRole('switch', { name: 'Ongoing monitoring' }).click();
  await dialog.getByRole('button', { name: 'Create level' }).click();
  const policy = page.getByTestId(`level-policy-${name}`);
  await expect(policy).toContainText('Four-eyes: ≥ 0');
  await expect(policy).toContainText('Review within 24 h');
  await expect(policy).toContainText('Retention: 365 days');
  await expect(policy).toContainText('Monitoring ≥ 0.85');
}

test.describe('Verification flows: case work', () => {
  test('proof of address, four-eyes with two reviewers, notes, legal hold, monitoring hit', async ({ page, browser }) => {
    test.setTimeout(300_000);
    // The proposer's own confirm attempt is an expected 403.
    const errors = collectConsoleErrors(page, [/status of 403 \(Forbidden\)/]);
    const suffix = Date.now().toString(36);
    const levelName = `e2e-case-${suffix}`;
    const reference = `e2e-case-${suffix}`;
    // Letters only, so the name stays distinctive for screening.
    const lastName = `Quillfeather${suffix.replace(/[0-9]/g, '').toUpperCase() || 'X'}`;
    const fullName = `Zorander ${lastName}`;

    await loginTenant(page);

    // 1. Level with the new policy fields and a proof-of-address step config.
    await page.goto('/dashboard/verification/levels');
    await expect(page.getByRole('heading', { name: /Verification Levels/i })).toBeVisible(FIRST_VISIT);
    await createCaseWorkLevel(page, levelName, `E2E case work ${suffix}`);

    // 2. An inquiry on it.
    await page.goto('/dashboard/verification');
    await expect(page.getByRole('heading', { name: /Verification Inquiries/i })).toBeVisible(FIRST_VISIT);
    await page.getByRole('button', { name: 'New inquiry' }).click();
    const createDialog = page.getByRole('dialog');
    await createDialog.getByRole('combobox', { name: 'Level' }).click();
    await page.getByRole('option', { name: new RegExp(`E2E case work ${suffix}`) }).click();
    await createDialog.getByLabel('Reference ID').fill(reference);
    await createDialog.getByLabel('First name').fill('Zorander');
    await createDialog.getByLabel('Last name').fill(lastName);
    await createDialog.getByRole('button', { name: 'Create inquiry' }).click();
    await expect(page).toHaveURL(/\/dashboard\/verification\/inquiries\/[0-9a-f-]{36}$/, FIRST_VISIT);
    const inquiryUrl = page.url();
    await expect(page.getByTestId('inquiry-status')).toContainText(/created/i, FIRST_VISIT);

    // 3. Proof of address: a mismatching name fails with the failed checks listed...
    await page.getByTestId('poa-card').getByRole('button', { name: 'Evaluate document' }).click();
    let poaDialog = page.getByRole('dialog');
    await poaDialog.getByLabel('Name on document').fill('Someone Else Entirely');
    await poaDialog.getByLabel('Address on document').fill('12 Marina Rd, Lagos Island');
    await poaDialog.getByLabel('Extraction confidence (optional)').fill('0.93');
    await poaDialog.getByRole('button', { name: 'Evaluate' }).click();
    await expect(page.getByTestId('poa-failures')).toContainText(/name/i);
    await expect(page.getByTestId('poa-age')).toContainText('0 days');
    await expect(page.getByTestId('poa-age')).toContainText('max 60');
    await expect(page.getByTestId('inquiry-step-proof_of_address')).toContainText('PROOF_OF_ADDRESS_MISMATCH');
    await expect(page.getByTestId('inquiry-status')).toContainText(/needs review/i);

    // A retry decline resets the step straight away: it can be undone, so it needs no second reviewer.
    await page.getByRole('button', { name: 'Review', exact: true }).click();
    const declineDialog = page.getByRole('dialog');
    await declineDialog.getByRole('radio', { name: 'Decline' }).click();
    await declineDialog.getByRole('checkbox', { name: 'PROOF_OF_ADDRESS_MISMATCH' }).click();
    await declineDialog.getByRole('button', { name: 'Submit decline' }).click();
    await expect(page.getByTestId('inquiry-status')).toContainText(/resubmission requested/i);
    await expect(page.getByTestId('pending-decision')).toHaveCount(0);

    // ...and the applicant's own name passes, completing the inquiry.
    await page.getByTestId('poa-card').getByRole('button', { name: 'Evaluate document' }).click();
    poaDialog = page.getByRole('dialog');
    await poaDialog.getByLabel('Name on document').fill(fullName.toUpperCase());
    await poaDialog.getByLabel('Address on document').fill('12 Marina Rd, Lagos Island');
    await poaDialog.getByRole('button', { name: 'Evaluate' }).click();
    await expect(page.getByTestId('inquiry-status')).toContainText(/completed|needs review/i);
    await expect(page.getByTestId('poa-name-similarity')).toHaveText('100%');
    await expect(page.getByTestId('poa-result')).toContainText('Failed checks');
    await expect(page.getByTestId('poa-result')).toContainText('None');
    await expect(page.getByTestId('review-due')).not.toContainText('No deadline');

    // 4. Assignment from the org's users, and the queue filter.
    await page.getByTestId('queue-card').getByRole('button', { name: 'Assign to me' }).click();
    await expect(page.getByTestId('inquiry-assignee')).toHaveText('Browser Owner');
    await page.goto('/dashboard/verification');
    await expect(page.getByRole('heading', { name: /Verification Inquiries/i })).toBeVisible(FIRST_VISIT);
    await page.getByLabel('Filter by reference ID').fill(reference);
    await page.getByRole('button', { name: 'Search' }).click();
    const rows = page.locator('[data-testid^="inquiry-row-"]');
    await expect(rows).toHaveCount(1);
    await page.getByRole('button', { name: 'Unassigned' }).click();
    await expect(rows).toHaveCount(0);
    await page.getByRole('button', { name: 'Assigned to me' }).click();
    await expect(rows).toHaveCount(1);
    await expect(rows.first().getByTestId('inquiry-assignee')).toHaveText('Browser Owner');
    await page.goto(inquiryUrl);
    await expect(page.getByTestId('inquiry-status')).toContainText(/completed|needs review/i, FIRST_VISIT);

    // 5. Four-eyes: the owner's approval becomes a proposal they can't confirm themselves.
    await page.getByRole('button', { name: 'Review', exact: true }).click();
    const reviewDialog = page.getByRole('dialog');
    await reviewDialog.getByLabel('Internal note (never shown to applicant)').fill('Address verified');
    await reviewDialog.getByRole('button', { name: 'Submit approve' }).click();
    const proposal = page.getByTestId('pending-decision');
    await expect(proposal).toBeVisible();
    await expect(proposal.getByTestId('proposed-decision')).toHaveText('Approve');
    await expect(proposal.getByTestId('proposed-by')).toContainText('Browser Owner');
    await expect(proposal).toContainText('Address verified');
    await expect(page.getByTestId('inquiry-status')).toContainText(/completed|needs review/i);
    await expect(page.getByRole('button', { name: 'Review', exact: true })).toBeDisabled();
    await proposal.getByRole('button', { name: 'Confirm' }).click();
    await expect(page.getByTestId('pending-decision-error')).toContainText("can't confirm it");

    // A second reviewer confirms it.
    const reviewerContext = await browser.newContext();
    const reviewerPage = await reviewerContext.newPage();
    try {
      await loginTenant(reviewerPage, compliancePersona);
      // Collected after login: the /dashboard landing page calls analytics, which a reviewer can't read (403).
      const reviewerErrors = collectConsoleErrors(reviewerPage);
      await reviewerPage.goto(inquiryUrl);
      const reviewerProposal = reviewerPage.getByTestId('pending-decision');
      await expect(reviewerProposal).toBeVisible(FIRST_VISIT);
      await expect(reviewerProposal.getByTestId('proposed-by')).toHaveText('Browser Owner');
      await reviewerProposal.getByRole('button', { name: 'Confirm' }).click();
      await expect(reviewerPage.getByTestId('inquiry-status')).toContainText(/approved/i);
      await expect(reviewerPage.getByTestId('pending-decision')).toHaveCount(0);
      const approval = reviewerPage.getByTestId('review-record').filter({ hasText: 'Proposed by' });
      await expect(approval).toContainText('Proposed by Browser Owner · confirmed by Browser Compliance');
      await expect(approval).toContainText('Address verified');
      expect(reviewerErrors).toEqual([]);
    } finally {
      await reviewerContext.close();
    }

    await page.reload();
    await expect(page.getByTestId('inquiry-status')).toContainText(/approved/i, FIRST_VISIT);
    await expect(page.getByTestId('review-due')).toContainText('No deadline');

    // 6. Notes and tags.
    const notes = page.getByTestId('inquiry-notes');
    await notes.getByLabel('Add note').fill('Called the applicant to confirm the address.');
    await notes.getByRole('button', { name: 'Add note' }).click();
    await expect(notes.getByTestId('inquiry-note').last()).toContainText('Called the applicant to confirm the address.');
    await expect(notes.getByTestId('inquiry-note').last()).toContainText('Browser Owner');
    await page.getByRole('button', { name: 'Edit tags' }).click();
    await page.getByLabel('Tags').fill('VIP, corporate, vip');
    await page.getByRole('button', { name: 'Save tags' }).click();
    await expect(page.getByTestId('inquiry-tags')).toContainText('corporate');
    await expect(page.getByTestId('inquiry-tags').getByText('vip', { exact: true })).toHaveCount(1);

    // 7. Legal hold blocks redaction until it's released.
    await page.getByRole('button', { name: 'Legal hold' }).click();
    const holdDialog = page.getByRole('dialog');
    await holdDialog.getByLabel('Reason').fill('SAR filed 2026-10');
    await holdDialog.getByRole('button', { name: 'Place hold' }).click();
    await expect(page.getByTestId('legal-hold-banner')).toContainText('SAR filed 2026-10');
    await expect(page.getByRole('button', { name: 'Redact' })).toBeDisabled();
    await expect(page.getByTestId('inquiry-events')).toContainText('inquiry.legal-hold-placed');
    await page.getByTestId('legal-hold-banner').getByRole('button', { name: 'Release hold' }).click();
    await expect(page.getByTestId('legal-hold-banner')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Redact' })).toBeEnabled();
    await expect(page.getByTestId('inquiry-events')).toContainText('inquiry.legal-hold-released');

    // 8. Ongoing monitoring: a new watchlist entry matching the applicant raises a hit.
    const monitoring = page.getByTestId('monitoring-card');
    await monitoring.getByRole('button', { name: 'Screen now' }).click();
    await expect(monitoring.getByTestId('monitoring-status')).toContainText(/clear/i);
    await addWatchlistEntry(fullName);
    await monitoring.getByRole('button', { name: 'Screen now' }).click();
    await expect(monitoring.getByTestId('monitoring-status')).toContainText(/hit/i);
    await expect(monitoring.getByTestId('monitoring-hit')).toHaveCount(1);
    await expect(monitoring.getByTestId('monitoring-hit')).toContainText('E2E monitoring watchlist');

    await page.getByRole('link', { name: 'Applicant', exact: true }).click();
    await expect(page.getByTestId('applicant-status')).toContainText(/monitoring hit/i, FIRST_VISIT);
    await page.goBack();
    await expect(page.getByTestId('monitoring-card')).toBeVisible(FIRST_VISIT);

    // Resolve as a false positive: the match is dismissed and isn't raised again.
    await page.getByTestId('monitoring-card').getByRole('button', { name: 'Resolve' }).click();
    const resolveDialog = page.getByRole('dialog');
    await expect(resolveDialog.getByRole('radio', { name: 'False positive' })).toBeChecked();
    await resolveDialog.getByLabel('Comment').fill('Different date of birth and nationality');
    await resolveDialog.getByRole('button', { name: 'Dismiss as false positive' }).click();
    await expect(page.getByTestId('monitoring-card').getByTestId('monitoring-status')).toContainText(/clear/i);
    await expect(page.getByTestId('monitoring-card').getByTestId('monitoring-hit')).toHaveCount(0);
    await expect(page.getByTestId('inquiry-status')).toContainText(/approved/i);
    await expect(notes).toContainText('Monitoring hit resolved as false_positive');
    await page.getByTestId('monitoring-card').getByRole('button', { name: 'Screen now' }).click();
    await expect(page.getByText('No new matches').first()).toBeVisible();
    await expect(page.getByTestId('monitoring-card').getByTestId('monitoring-status')).toContainText(/clear/i);

    expect(errors).toEqual([]);
  });

  test('retention preview on the levels page', async ({ page }) => {
    test.setTimeout(120_000);
    const errors = collectConsoleErrors(page);
    await loginTenant(page);
    await page.goto('/dashboard/verification/levels');
    await expect(page.getByRole('heading', { name: /Verification Levels/i })).toBeVisible(FIRST_VISIT);
    const panel = page.getByTestId('retention-panel');
    await panel.getByRole('button', { name: 'Preview (dry run)' }).click();
    await expect(panel.getByTestId('retention-result')).toContainText(/Would redact \d+ inquir/);
    await page.getByTestId('monitoring-panel').getByRole('button', { name: 'Run monitoring now' }).click();
    await expect(page.getByTestId('monitoring-run-result')).toContainText(/Screened \d+ applicant/);
    expect(errors).toEqual([]);
  });
});
