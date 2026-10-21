import { expect, request, test } from '@playwright/test';
import { loginTenant, tenantCredentials } from '../support/auth';
import { collectConsoleErrors } from '../support/console';

const FIRST_VISIT = { timeout: 60_000 };
const API_URL = process.env.NEXT_PUBLIC_SANDBOX_API_URL || 'http://127.0.0.1:18000';
const APP_URL = process.env.BASE_URL || 'http://127.0.0.1:3100';
// A real 1x1 PNG, so the page's JPEG re-encode path runs before upload.
const PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64',
);

test.describe('Verification flows: applicant capture', () => {
  test('applicant photographs their ID; the file is attached and viewable by staff', async ({ page, browser }) => {
    test.setTimeout(180_000);
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
    await call('/levels', { name: `e2e-cap-${suffix}`, display_name: `E2E capture ${suffix}`, steps: [{ type: 'document' }] });
    const inquiry = await call('/inquiries', { level_name: `e2e-cap-${suffix}`, reference_id: `e2e-cap-${suffix}` });
    const { code } = await call(`/inquiries/${inquiry.id}/one-time-links`, {});
    await api.dispose();

    const context = await browser.newContext();
    const applicant = await context.newPage();
    const applicantErrors = collectConsoleErrors(applicant);
    await applicant.goto(`${APP_URL}/verify?code=${code}`);
    const capture = applicant.getByTestId('capture-document');
    await expect(capture).toBeVisible(FIRST_VISIT);
    await capture.getByLabel(/Take a photo or choose a file/).setInputFiles({ name: 'id.png', mimeType: 'image/png', buffer: PNG });
    await expect(applicant.getByTestId('capture-preview-document')).toBeVisible();
    await capture.getByRole('button', { name: 'Upload' }).click();
    await expect(applicant.getByTestId('applicant-step-document')).toHaveAttribute('data-status', 'submitted', FIRST_VISIT);
    await context.close();

    const errors = collectConsoleErrors(page);
    await loginTenant(page);
    await page.goto(`/dashboard/verification/inquiries/${inquiry.id}`);
    const view = page.getByTestId('view-upload-document');
    await expect(view).toBeVisible(FIRST_VISIT);
    const popup = page.waitForEvent('popup');
    await view.click();
    await popup;

    expect(applicantErrors).toEqual([]);
    expect(errors).toEqual([]);
  });
});
