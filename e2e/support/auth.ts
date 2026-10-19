import { expect, type Page } from '@playwright/test';

export const tenantCredentials = {
  email: process.env.TEST_USER_EMAIL || 'owner@browser.deepsense.example.com',
  password: process.env.TEST_USER_PASSWORD || 'BrowserOnly-P1.8A-Password1!',
};

/** A second seeded tenant user (role `reviewer`), e.g. for four-eyes review. */
export const compliancePersona = {
  email: 'compliance@browser.deepsense.example.com',
  password: tenantCredentials.password,
  displayName: 'Browser Compliance',
};

export async function loginTenant(
  page: Page,
  persona: { email: string; password: string; displayName: string } = { ...tenantCredentials, displayName: 'Browser Owner' },
): Promise<void> {
  await page.goto('/login');
  await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
  await page.getByLabel('Work Email', { exact: true }).fill(persona.email);
  await page.getByLabel('Secure Password', { exact: true }).fill(persona.password);
  await page.getByRole('button', { name: 'Sign into Dashboard' }).click();
  await expect(page).toHaveURL('/dashboard', { timeout: 45_000 });
  await expect(page.getByText(persona.displayName, { exact: true })).toBeVisible({ timeout: 20_000 });
  await expect(page.getByText('DeepSense Browser Certification Bank', { exact: true })).toBeVisible();
  // The access token lives only in memory (src/lib/api/client.ts); it must never be persisted.
  const persisted = await page.evaluate(() => localStorage.getItem('deep_sense_sandbox_access_token'));
  expect(persisted).toBeNull();
}
