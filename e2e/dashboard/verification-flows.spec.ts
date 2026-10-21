import { expect, request, test } from '@playwright/test';
import { loginTenant, tenantCredentials } from '../support/auth';
import { collectConsoleErrors } from '../support/console';

// Routes compile on first visit under `next dev`.
const FIRST_VISIT = { timeout: 30_000 };
const API_URL = process.env.NEXT_PUBLIC_SANDBOX_API_URL || 'http://127.0.0.1:18000';
const APP_URL = process.env.BASE_URL || 'http://127.0.0.1:3100';

test.describe('Verification flows', () => {
  test('create inquiry -> one-time link -> applicant consent', async ({ page, browser }) => {
    const dashboardErrors = collectConsoleErrors(page);
    const suffix = Date.now().toString(36);
    const levelName = `e2e-${suffix}`;
    const reference = `e2e-applicant-${suffix}`;
    const consentText = `I agree to be verified by E2E level ${suffix}.`;

    await loginTenant(page);

    // 1. Create a level with the step builder: consent (required) + questionnaire (optional).
    await page.goto('/dashboard/verification/levels');
    await expect(page.getByRole('heading', { name: /Verification Levels/i })).toBeVisible(FIRST_VISIT);
    await page.getByRole('button', { name: 'New level' }).click();
    const dialog = page.getByRole('dialog');
    await dialog.getByLabel('Level name (slug)').fill(levelName);
    await dialog.getByLabel('Display name').fill(`E2E level ${suffix}`);
    await dialog.getByLabel('Consent text shown to the applicant').fill(consentText);
    await dialog.getByRole('button', { name: 'Remove Document' }).click();
    await dialog.getByRole('button', { name: 'Remove Selfie' }).click();
    await dialog.getByRole('combobox', { name: 'Add step' }).click();
    await page.getByRole('option', { name: 'Questionnaire' }).click();
    await expect(dialog.getByTestId('step-questionnaire')).toBeVisible();
    await dialog.getByRole('switch', { name: 'Questionnaire required' }).click();
    await dialog.getByRole('button', { name: 'Create level' }).click();
    await expect(page.getByTestId(`level-row-${levelName}`)).toContainText('v1');

    // 2. Create an inquiry on that level.
    await page.getByRole('link', { name: 'Inquiries' }).click();
    await expect(page.getByRole('heading', { name: /Verification Inquiries/i })).toBeVisible(FIRST_VISIT);
    await page.getByRole('button', { name: 'New inquiry' }).click();
    const createDialog = page.getByRole('dialog');
    await createDialog.getByRole('combobox', { name: 'Level' }).click();
    await page.getByRole('option', { name: new RegExp(`E2E level ${suffix}`) }).click();
    await createDialog.getByLabel('Reference ID').fill(reference);
    await createDialog.getByLabel('Email').fill(`${suffix}@applicant.example.com`);
    await createDialog.getByRole('button', { name: 'Create inquiry' }).click();
    await expect(page).toHaveURL(/\/dashboard\/verification\/inquiries\/[0-9a-f-]{36}$/, FIRST_VISIT);
    const inquiryUrl = page.url();
    await expect(page.getByRole('heading', { name: new RegExp(reference, 'i') })).toBeVisible(FIRST_VISIT);
    await expect(page.getByTestId('inquiry-status')).toContainText(/created/i);

    // 3. Generate a one-time link.
    await page.getByRole('button', { name: 'One-time link' }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Generate link' }).click();
    const urlField = page.getByTestId('one-time-link-url');
    await expect(urlField).toHaveValue(/\/verify\?code=otl_/);
    const hostedUrl = await urlField.inputValue();
    await page.getByRole('dialog').getByRole('button', { name: 'Done' }).click();

    // 4. The applicant opens the link in a separate, unauthenticated browser context.
    const applicantContext = await browser.newContext();
    const applicant = await applicantContext.newPage();
    const applicantErrors = collectConsoleErrors(applicant);
    await applicant.goto(hostedUrl);
    await expect(applicant.getByTestId('applicant-level-name')).toHaveText(`E2E level ${suffix}`, FIRST_VISIT);
    // The spent code is dropped from the address bar.
    await expect(applicant).toHaveURL(/\/verify$/);
    const consentStep = applicant.getByTestId('applicant-step-consent');
    await expect(consentStep).toHaveAttribute('data-status', 'not_started');
    // The hosted page shows the consent text configured on the level.
    await expect(applicant.getByTestId('consent-text')).toHaveText(consentText);
    await consentStep.getByRole('checkbox', { name: 'I agree' }).click();
    await consentStep.getByRole('button', { name: 'Give consent' }).click();
    await expect(consentStep).toHaveAttribute('data-status', 'passed');
    // Consent was the only required step, so the inquiry completes.
    await expect(applicant.getByTestId('applicant-done')).toBeVisible();

    // Reusing the link fails: codes are single use.
    const reuse = await applicantContext.newPage();
    await reuse.goto(hostedUrl);
    await expect(reuse.getByText(/invalid, already used or expired/i)).toBeVisible();
    await applicantContext.close();

    // 5. Back on the dashboard the inquiry reflects the applicant's consent.
    await page.goto(inquiryUrl);
    await expect(page.getByTestId('inquiry-step-consent')).toContainText(/passed/i);
    await expect(page.getByTestId('inquiry-status')).toContainText(/completed|needs review|approved/i);
    await expect(page.getByTestId('inquiry-events')).toContainText('inquiry.step-submitted');

    expect(applicantErrors).toEqual([]);
    expect(dashboardErrors).toEqual([]);
  });

  test('reloading /verify after approval shows the outcome, not "session expired"', async ({ browser }) => {
    test.setTimeout(120_000);
    const suffix = Date.now().toString(36);
    const api = await request.newContext({ baseURL: API_URL });
    const login = await api.post('/api/v1/identity/login', {
      data: { email: tenantCredentials.email, password: tenantCredentials.password, environment: 'sandbox' },
    });
    expect(login.ok()).toBeTruthy();
    const headers = { Authorization: `Bearer ${(await login.json()).access_token}` };
    const call = async (url: string, data: unknown) => {
      const response = await api.post(`/api/v1/verification${url}`, { headers, data });
      expect(response.ok(), await response.text()).toBeTruthy();
      return response.json();
    };
    await call('/levels', {
      name: `e2e-auto-${suffix}`,
      display_name: `E2E auto ${suffix}`,
      steps: [{ type: 'consent' }],
      auto_approve_enabled: true,
    });
    const inquiry = await call('/inquiries', { level_name: `e2e-auto-${suffix}`, reference_id: `e2e-auto-${suffix}` });
    const { code } = await call(`/inquiries/${inquiry.id}/one-time-links`, {});
    await api.dispose();

    const context = await browser.newContext();
    const applicant = await context.newPage();
    // The reload's GET /verify/session is an expected 401: approval revoked the session.
    const errors = collectConsoleErrors(applicant);
    await applicant.goto(`${APP_URL}/verify?code=${code}`);
    const consentStep = applicant.getByTestId('applicant-step-consent');
    await expect(consentStep).toBeVisible(FIRST_VISIT);
    await consentStep.getByRole('checkbox', { name: 'I agree' }).click();
    await consentStep.getByRole('button', { name: 'Give consent' }).click();
    await expect(applicant.getByTestId('applicant-done')).toContainText("You're verified");

    await applicant.reload();
    const finished = applicant.getByTestId('applicant-finished');
    await expect(finished).toContainText("You're verified", FIRST_VISIT);
    await expect(finished).toContainText(`E2E auto ${suffix}`);
    await expect(applicant.getByText(/session has expired/i)).toHaveCount(0);
    expect(errors).toEqual([]);
    await context.close();
  });
});
