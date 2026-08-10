import { expect, type Page } from '@playwright/test';

export const tenantCredentials = {
  email: process.env.TEST_USER_EMAIL || 'owner@browser.deepsense.example.com',
  password: process.env.TEST_USER_PASSWORD || 'BrowserOnly-P1.8A-Password1!',
};

export async function loginTenant(page: Page): Promise<void> {
  await page.goto('/login');
  await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
  await page.getByLabel('Work Email', { exact: true }).fill(tenantCredentials.email);
  await page.getByLabel('Secure Password', { exact: true }).fill(tenantCredentials.password);
  await page.getByRole('button', { name: 'Sign into Dashboard' }).click();
  await expect(page).toHaveURL('/dashboard', { timeout: 45_000 });
  await expect(page.getByText('Browser Owner', { exact: true })).toBeVisible({ timeout: 20_000 });
  await expect(page.getByText('DeepSense Browser Certification Bank', { exact: true })).toBeVisible();
  const token = await page.evaluate(() => localStorage.getItem('deep_sense_sandbox_access_token'));
  expect(token?.split('.')).toHaveLength(3);
}
