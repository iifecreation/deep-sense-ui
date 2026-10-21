import { expect, request, test } from '@playwright/test';
import { loginTenant, tenantCredentials } from '../support/auth';
import { collectConsoleErrors } from '../support/console';

// Routes compile on first visit under `next dev`.
const FIRST_VISIT = { timeout: 60_000 };
const API_URL = process.env.NEXT_PUBLIC_SANDBOX_API_URL || 'http://127.0.0.1:18000';
const APP_URL = process.env.BASE_URL || 'http://127.0.0.1:3100';

// Needs the API started with VIDEO_IDENT_PROVIDER=sandbox.
test.describe('Verification flows: video identification', () => {
  test('applicant books a call, agent runs it and passes the checklist', async ({ page, browser }) => {
    test.setTimeout(180_000);
    const errors = collectConsoleErrors(page);
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
      name: `e2e-video-${suffix}`,
      display_name: `E2E video ${suffix}`,
      steps: [{ type: 'video_ident' }],
      auto_approve_enabled: true,
    });
    const inquiry = await call('/inquiries', { level_name: `e2e-video-${suffix}`, reference_id: `e2e-video-${suffix}` });
    const { code } = await call(`/inquiries/${inquiry.id}/one-time-links`, {});
    await api.dispose();

    // 1. The applicant books a slot soon enough for the agent to start it (calls open 15 minutes early).
    const context = await browser.newContext();
    const applicant = await context.newPage();
    const applicantErrors = collectConsoleErrors(applicant);
    await applicant.goto(`${APP_URL}/verify?code=${code}`);
    const video = applicant.getByTestId('applicant-video');
    await expect(video).toBeVisible(FIRST_VISIT);
    const soon = await applicant.evaluate(() => {
      const date = new Date(Date.now() + 10 * 60_000);
      const pad = (n: number) => String(n).padStart(2, '0');
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
    });
    await video.getByLabel('Call time').fill(soon);
    await video.getByRole('button', { name: 'Book call' }).click();
    await expect(applicant.getByTestId('applicant-video-booked')).toBeVisible();

    // 2. The agent starts the call from the dashboard.
    await loginTenant(page);
    await page.goto(`/dashboard/verification/inquiries/${inquiry.id}`);
    const card = page.getByTestId('video-sessions-card');
    await expect(card).toBeVisible(FIRST_VISIT);
    await card.getByRole('button', { name: 'Start call' }).click();
    await expect(card.getByTestId('agent-join-url')).toHaveAttribute('href', /\/agent\//);

    // 3. The applicant now sees a join link.
    await applicant.reload();
    await expect(applicant.getByTestId('applicant-video-join')).toHaveAttribute('href', /\/join\//, FIRST_VISIT);

    // 4. The agent records a clean checklist; the step passes and the inquiry is approved.
    await card.getByRole('button', { name: 'Record outcome' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('button', { name: 'Fail video identification' })).toBeVisible();
    for (const checkbox of await dialog.getByRole('checkbox').all()) await checkbox.click();
    await dialog.getByLabel('Recording ID').fill(`rec-${suffix}`);
    await dialog.getByRole('button', { name: 'Pass video identification' }).click();
    // Completing records the step, re-runs the decision and refetches several resources.
    await expect(page.getByTestId('inquiry-status')).toContainText(/approved/i, { timeout: 30_000 });
    await expect(card.getByText(/completed/i)).toBeVisible();
    await expect(page.getByTestId('inquiry-step-video_ident')).toContainText(/passed/i);

    await context.close();
    expect(applicantErrors).toEqual([]);
    expect(errors).toEqual([]);
  });
});
