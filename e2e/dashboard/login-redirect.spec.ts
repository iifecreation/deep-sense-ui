import { expect, test } from '@playwright/test';
import { tenantCredentials } from '../support/auth';

const FIRST_VISIT = { timeout: 60_000 };

async function signIn(page: import('@playwright/test').Page) {
  await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible(FIRST_VISIT);
  await page.getByLabel('Work Email', { exact: true }).fill(tenantCredentials.email);
  await page.getByLabel('Secure Password', { exact: true }).fill(tenantCredentials.password);
  await page.getByRole('button', { name: 'Sign into Dashboard' }).click();
}

test.describe('Login redirect', () => {
  test('returns to the exact page, including "%", spaces and the query string', async ({ page }) => {
    test.setTimeout(120_000);
    // A reference ID containing "%" and a space, plus a query string.
    const target = '/dashboard/verification/applicants/acme%25%20ltd?tab=history';
    await page.goto(target);
    await expect(page).toHaveURL(/\/login\?redirect=/, FIRST_VISIT);
    const redirect = new URL(page.url()).searchParams.get('redirect');
    expect(redirect).toBe(target); // encoded exactly once
    await signIn(page);
    await page.waitForURL((url) => `${url.pathname}${url.search}` === target, FIRST_VISIT);
  });

  test('never redirects to another site after login', async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto('/login?redirect=' + encodeURIComponent('https://evil.example/phish'));
    await signIn(page);
    await expect(page).toHaveURL(/\/dashboard$/, FIRST_VISIT);
  });
});
