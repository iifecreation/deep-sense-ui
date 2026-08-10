import { expect, test } from '@playwright/test';
import { loginTenant } from '../support/auth';

const currentRoutes = [
  '/dashboard',
  '/dashboard/onboarding',
  '/dashboard/investigations',
  '/dashboard/investigations/beneficiaries',
  '/dashboard/investigations/ato-controls',
  '/dashboard/investigations/cnp-journey',
  '/dashboard/investigations/customer-risk',
  '/dashboard/investigations/unified-risk',
  '/dashboard/compliance',
  '/dashboard/alerts',
  '/dashboard/cases',
  '/dashboard/screening',
  '/dashboard/devices',
  '/dashboard/graph',
  '/dashboard/integrations',
  '/dashboard/settings',
  '/dashboard/settings/providers',
  '/dashboard/billing',
  '/dashboard/usage',
  '/dashboard/reports',
  '/dashboard/risk-operations',
] as const;

test.describe('P1.8A Tenant authoritative workflows', () => {
  test.beforeEach(async ({ page }) => loginTenant(page));

  for (const route of currentRoutes) {
    test(`${route} renders the authenticated tenant contract`, async ({ page }) => {
      await page.goto(route);
      await expect(page).toHaveURL(route);
      await expect(page.locator('main').first()).toBeVisible({ timeout: 20_000 });
      await expect(page.getByRole('heading').first()).toBeVisible({ timeout: 20_000 });
      const body = await page.locator('body').innerText();
      expect(body).not.toContain('Welcome Back');
      expect(body).not.toContain('CoopOS');
    });
  }

  test('owner can log out and cannot reuse the cleared session', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign out' }).click();
    await expect(page).toHaveURL('/login', { timeout: 20_000 });
    expect(await page.evaluate(() => localStorage.getItem('deep_sense_sandbox_access_token'))).toBeNull();
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login\?redirect=%2Fdashboard/, { timeout: 20_000 });
  });

  test('invalid credentials produce the canonical bounded error', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign out' }).click();
    await page.goto('/login');
    await page.getByLabel('Work Email', { exact: true }).fill('invalid@browser.deepsense.example.com');
    await page.getByLabel('Secure Password', { exact: true }).fill('not-the-password');
    await page.getByRole('button', { name: 'Sign into Dashboard' }).click();
    await expect(page.getByText('Invalid email or password', { exact: true })).toBeVisible();
  });

  test('provider preferences remain tenant-safe and allowlisted', async ({ page }) => {
    await page.goto('/dashboard/settings/providers');
    await expect(page.getByRole('heading', { name: 'Provider preferences' })).toBeVisible();
    const body = await page.locator('body').innerText();
    expect(body).not.toContain('SECRET_REF');
    expect(body).not.toContain('Circuit');
    expect(body).not.toContain('api.twilio.com');
  });
});
