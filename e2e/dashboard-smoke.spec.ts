import { test, expect } from '@playwright/test';

const ROUTES_TO_TEST = [
  '/dashboard/alerts',
  '/dashboard/cases',
  '/dashboard/transactions',
  '/dashboard/rules',
  '/dashboard/users',
  '/dashboard/analytics'
];

test.describe('Dashboard Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Mock all API responses so we don't get Network Errors that crash dev mode
    await page.route('**/api/v1/**', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '[]' });
    });

    // Navigate to a blank page on the domain first so we can set localStorage
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('deep_sense_runtime_environment', 'sandbox');
      localStorage.setItem('deep_sense_sandbox_access_token', 'mock-test-token');
    });
  });

  for (const route of ROUTES_TO_TEST) {
    test(`loads ${route} successfully`, async ({ page }) => {
      const response = await page.goto(route);
      
      // Ensure the page didn't throw a 500 or 404
      expect(response?.status()).toBeLessThan(400);

    });
  }
});
