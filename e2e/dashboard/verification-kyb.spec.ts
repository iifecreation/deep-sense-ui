import { expect, request, test, type APIRequestContext } from '@playwright/test';
import { loginTenant, tenantCredentials } from '../support/auth';
import { collectConsoleErrors } from '../support/console';

// Routes compile on first visit under `next dev`.
const FIRST_VISIT = { timeout: 60_000 };
const API_URL = process.env.NEXT_PUBLIC_SANDBOX_API_URL || 'http://127.0.0.1:18000';
const BASE = '/api/v1/verification';

async function apiSession(): Promise<{ api: APIRequestContext; headers: Record<string, string> }> {
  const api = await request.newContext({ baseURL: API_URL });
  const login = await api.post('/api/v1/identity/login', {
    data: { email: tenantCredentials.email, password: tenantCredentials.password, environment: 'sandbox' },
  });
  expect(login.ok()).toBeTruthy();
  const { access_token: token } = await login.json();
  return { api, headers: { Authorization: `Bearer ${token}` } };
}

async function post<T>(api: APIRequestContext, headers: Record<string, string>, url: string, data: unknown): Promise<T> {
  const response = await api.post(url, { headers, data });
  expect(response.ok(), `${url}: ${await response.text()}`).toBeTruthy();
  return (await response.json()) as T;
}

test.describe('Verification flows: business beneficiaries', () => {
  test('business waits for its UBO to pass KYC, then is approved', async ({ page }) => {
    test.setTimeout(180_000);
    const errors = collectConsoleErrors(page);
    const suffix = Date.now().toString(36);
    const personLevel = `e2e-kyc-${suffix}`;
    const businessLevel = `e2e-kyb-${suffix}`;
    const { api, headers } = await apiSession();
    // Levels and a business inquiry whose registry check has already passed.
    await post(api, headers, `${BASE}/levels`, {
      name: personLevel,
      display_name: `E2E person ${suffix}`,
      steps: [{ type: 'document' }],
      auto_approve_enabled: true,
    });
    await post(api, headers, `${BASE}/levels`, {
      name: businessLevel,
      display_name: `E2E business ${suffix}`,
      applicant_type: 'business',
      steps: [{ type: 'kyb_registry' }],
      auto_approve_enabled: true,
      beneficiary_level_name: personLevel,
    });
    const business = await post<{ id: string }>(api, headers, `${BASE}/inquiries`, {
      level_name: businessLevel,
      reference_id: `e2e-company-${suffix}`,
      fields: { business_name: 'E2E Holdings Ltd' },
    });
    const businessId = business.id;
    const completed = await post<{ status: string }>(
      api,
      headers,
      `${BASE}/inquiries/${businessId}/steps/kyb_registry`,
      { status: 'passed', risk_score: 0.1 },
    );
    expect(completed.status).toBe('completed');

    await loginTenant(page);
    await page.goto(`/dashboard/verification/inquiries/${businessId}`);
    const card = page.getByTestId('beneficiaries-card');
    await expect(card).toBeVisible(FIRST_VISIT);
    await expect(card.getByTestId('beneficiaries-blocking')).toContainText('at least one');

    // Add the UBO through the dialog and start their KYC.
    await card.getByRole('button', { name: 'Add', exact: true }).click();
    const dialog = page.getByRole('dialog');
    await dialog.getByLabel('First name').fill('Ada');
    await dialog.getByLabel('Last name').fill('Obi');
    await dialog.getByLabel('Ownership %').fill('75');
    await dialog.getByRole('button', { name: 'Add beneficiary' }).click();
    await expect(card.getByRole('row', { name: /Hidden.*Ubo.*75%/ })).toBeVisible();
    await expect(card.getByTestId('beneficiaries-blocking')).toContainText('1 required beneficiary has');

    await card.getByRole('button', { name: 'Start KYC' }).click();
    await expect(card.getByRole('link', { name: 'Open' })).toBeVisible();
    await expect(card.getByText(/in progress/i)).toBeVisible();

    // Revealing PII shows the name.
    await page.getByRole('button', { name: /Reveal \(audited\)/ }).click();
    await expect(card.getByText('Ada Obi')).toBeVisible();

    // The person passes their own KYC (server-side result); the business is then approved automatically.
    const href = await card.getByRole('link', { name: 'Open' }).getAttribute('href');
    const personId = href!.split('/').pop()!;
    const person = await post<{ status: string }>(api, headers, `${BASE}/inquiries/${personId}/steps/document`, {
      status: 'passed',
      risk_score: 0.05,
    });
    expect(person.status).toBe('approved');
    await api.dispose();

    await page.reload();
    await expect(page.getByTestId('inquiry-status')).toContainText(/approved/i, FIRST_VISIT);
    await expect(page.getByTestId('beneficiaries-card').getByText(/verified/i)).toBeVisible();
    await expect(page.getByTestId('beneficiaries-blocking')).toHaveCount(0);

    // The person's page links back through its metadata and is a normal approved inquiry.
    await page.getByTestId('beneficiaries-card').getByRole('link', { name: 'Open' }).click();
    await expect(page.getByTestId('inquiry-status')).toContainText(/approved/i, FIRST_VISIT);

    expect(errors).toEqual([]);
  });

  test('level form shows beneficiary settings for business levels only', async ({ page }) => {
    test.setTimeout(120_000);
    await loginTenant(page);
    await page.goto('/dashboard/verification/levels');
    await expect(page.getByRole('heading', { name: /Verification Levels/i })).toBeVisible(FIRST_VISIT);
    await page.getByRole('button', { name: 'New level' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByTestId('level-beneficiaries')).toHaveCount(0);
    await dialog.getByRole('combobox', { name: /Applicant type/i }).click();
    await page.getByRole('option', { name: /Business/i }).click();
    await dialog.getByText('Policy & timing').click();
    await expect(dialog.getByTestId('level-beneficiaries')).toBeVisible();
    await expect(dialog.getByRole('checkbox', { name: 'Require ubo' })).toBeChecked();
    await expect(dialog.getByRole('checkbox', { name: 'Require director' })).not.toBeChecked();
  });
});
