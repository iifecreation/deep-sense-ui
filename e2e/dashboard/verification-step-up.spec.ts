import { expect, test, type Page } from '@playwright/test';
import { loginTenant } from '../support/auth';
import { collectConsoleErrors } from '../support/console';

// Routes compile on first visit under `next dev`.
const FIRST_VISIT = { timeout: 30_000 };

/** Creates a consent-only level through the level builder. */
async function createLevel(page: Page, name: string, displayName: string, kind: 'Onboarding' | 'Action (step-up)') {
  await page.getByRole('button', { name: 'New level' }).click();
  const dialog = page.getByRole('dialog');
  await dialog.getByLabel('Level name (slug)').fill(name);
  await dialog.getByLabel('Display name').fill(displayName);
  if (kind !== 'Onboarding') {
    await dialog.getByRole('combobox', { name: 'Level kind' }).click();
    await page.getByRole('option', { name: kind }).click();
  }
  await dialog.getByRole('button', { name: 'Remove Document' }).click();
  await dialog.getByRole('button', { name: 'Remove Selfie' }).click();
  await dialog.getByRole('button', { name: 'Create level' }).click();
  await expect(page.getByTestId(`level-row-${name}`)).toContainText('v1');
}

test.describe('Verification flows: step-up actions', () => {
  test('simulate approval -> start action -> applicant profile', async ({ page }) => {
    // Longer than the default: it compiles four routes under `next dev` and creates two levels.
    test.setTimeout(150_000);
    // The duplicate-action attempt below is an expected 409.
    const errors = collectConsoleErrors(page, [/status of 409 \(Conflict\)/]);
    const suffix = Date.now().toString(36);
    const onboardingLevel = `e2e-onb-${suffix}`;
    const actionLevel = `e2e-act-${suffix}`;
    const reference = `e2e-stepup-${suffix}`;
    const externalActionId = `withdrawal-${suffix}`;

    await loginTenant(page);

    // 1. An onboarding level and an action level.
    await page.goto('/dashboard/verification/levels');
    await expect(page.getByRole('heading', { name: /Verification Levels/i })).toBeVisible(FIRST_VISIT);
    await createLevel(page, onboardingLevel, `E2E onboarding ${suffix}`, 'Onboarding');
    await createLevel(page, actionLevel, `E2E action ${suffix}`, 'Action (step-up)');
    await expect(page.getByTestId(`level-row-${onboardingLevel}`)).toContainText(/onboarding/i);
    await expect(page.getByTestId(`level-row-${actionLevel}`)).toContainText(/action/i);

    // 2. An onboarding inquiry.
    await page.getByRole('link', { name: 'Inquiries' }).click();
    await expect(page.getByRole('heading', { name: /Verification Inquiries/i })).toBeVisible(FIRST_VISIT);
    await page.getByRole('button', { name: 'New inquiry' }).click();
    const createDialog = page.getByRole('dialog');
    await createDialog.getByRole('combobox', { name: 'Level' }).click();
    // Action levels can't be used to create inquiries directly.
    await expect(page.getByRole('option', { name: new RegExp(`E2E action ${suffix}`) })).toHaveCount(0);
    await page.getByRole('option', { name: new RegExp(`E2E onboarding ${suffix}`) }).click();
    await createDialog.getByLabel('Reference ID').fill(reference);
    await createDialog.getByRole('button', { name: 'Create inquiry' }).click();
    await expect(page).toHaveURL(/\/dashboard\/verification\/inquiries\/[0-9a-f-]{36}$/, FIRST_VISIT);
    const parentUrl = page.url();
    await expect(page.getByTestId('inquiry-status')).toContainText(/created/i, FIRST_VISIT);
    await expect(page.getByTestId('inquiry-kind')).toContainText(/onboarding/i);
    // Not approved yet: no action can be started.
    await expect(page.getByRole('button', { name: 'Start action' })).toHaveCount(0);

    // 3. Approve it with the sandbox simulation.
    await page.getByRole('button', { name: 'Simulate review' }).click();
    const simulateDialog = page.getByRole('dialog');
    await expect(simulateDialog.getByRole('radio', { name: 'Approve' })).toBeChecked();
    await simulateDialog.getByRole('button', { name: 'Simulate approve' }).click();
    await expect(page.getByTestId('inquiry-status')).toContainText(/approved/i);
    await expect(page.getByRole('button', { name: 'Simulate review' })).toHaveCount(0);
    await expect(page.getByTestId('inquiry-events')).toContainText('inquiry.approved');

    // 4. Start a step-up action.
    await page.getByRole('button', { name: 'Start action' }).first().click();
    const actionDialog = page.getByRole('dialog');
    await actionDialog.getByRole('combobox', { name: 'Action level' }).click();
    // Only action levels are offered.
    await expect(page.getByRole('option', { name: new RegExp(`E2E onboarding ${suffix}`) })).toHaveCount(0);
    await page.getByRole('option', { name: new RegExp(`E2E action ${suffix}`) }).click();
    await actionDialog.getByLabel('External action ID').fill(externalActionId);
    await actionDialog.getByLabel('Metadata (JSON, optional)').fill('{"amount": 2500, "currency": "EUR"}');
    await actionDialog.getByRole('button', { name: 'Start action' }).click();
    await expect(page).not.toHaveURL(parentUrl, FIRST_VISIT);
    await expect(page.getByTestId('inquiry-kind')).toContainText(/action/i, FIRST_VISIT);
    await expect(page.getByTestId('external-action-id')).toHaveText(externalActionId);
    const actionUrl = page.url();
    // Share tokens, re-verification and nested actions don't apply to actions.
    await expect(page.getByRole('button', { name: 'Share token' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Reverify' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Start action' })).toHaveCount(0);
    await expect(page.getByTestId('inquiry-actions')).toHaveCount(0);

    // 5. The action links back to its parent, which lists it.
    await page.getByTestId('parent-inquiry-link').click();
    await expect(page).toHaveURL(parentUrl);
    await expect(page.getByTestId(`action-row-${externalActionId}`)).toContainText(/created/i, FIRST_VISIT);

    // Reusing the external action ID is a conflict that points at the existing action.
    await page.getByRole('button', { name: 'Start action' }).first().click();
    const duplicateDialog = page.getByRole('dialog');
    await duplicateDialog.getByLabel('External action ID').fill(externalActionId);
    await duplicateDialog.getByRole('button', { name: 'Start action' }).click();
    await expect(duplicateDialog.getByRole('alert')).toContainText(/already exists/i);
    await duplicateDialog.getByRole('link', { name: 'Open existing action' }).click();
    await expect(page).toHaveURL(actionUrl);

    // 6. The applicant profile shows the verified status, the inquiry and the action.
    await page.getByRole('link', { name: 'Applicant', exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/dashboard/verification/applicants/${reference}$`), FIRST_VISIT);
    await expect(page.getByTestId('applicant-status')).toContainText(/verified/i, FIRST_VISIT);
    await expect(page.getByTestId('applicant-inquiries')).toContainText(/approved/i);
    await expect(page.getByTestId('applicant-actions')).toContainText(externalActionId);

    // 7. The queue filters by kind.
    await page.goto(`/dashboard/verification`);
    await expect(page.getByRole('heading', { name: /Verification Inquiries/i })).toBeVisible(FIRST_VISIT);
    await page.getByLabel('Filter by reference ID').fill(reference);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Filter by kind' }).click();
    await page.getByRole('option', { name: 'Step-up actions' }).click();
    const rows = page.locator('[data-testid^="inquiry-row-"]');
    await expect(rows).toHaveCount(1);
    await expect(rows.first()).toContainText(externalActionId);

    expect(errors).toEqual([]);
  });
});
