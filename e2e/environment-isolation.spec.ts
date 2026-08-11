import { test, expect } from '@playwright/test';

test.describe('Environment Isolation', () => {
  test('API calls use the sandbox token when in sandbox environment', async ({ page }) => {
    // Navigate and set sandbox environment & token
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('deep_sense_runtime_environment', 'sandbox');
      localStorage.setItem('deep_sense_sandbox_access_token', 'SANDBOX-TOKEN-123');
      localStorage.setItem('deep_sense_production_access_token', 'PROD-TOKEN-FAIL');
    });

    const requestPromise = page.waitForRequest(
      (request) => request.url().includes('/api/v1/') && request.method() === 'GET'
    );

    // Go to a page that makes API calls
    await page.goto('/dashboard/cases');
    
    // Some routes might not make requests immediately if they use dummy data, 
    // but the ones we wired up using hooks will fire immediately on mount.
    const request = await requestPromise;
    expect(request.headers()['authorization']).toBe('Bearer SANDBOX-TOKEN-123');
  });

  test('API calls use the production token when in production environment', async ({ page }) => {
    // Navigate and set production environment & token
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('deep_sense_runtime_environment', 'production');
      localStorage.setItem('deep_sense_sandbox_access_token', 'SANDBOX-TOKEN-FAIL');
      localStorage.setItem('deep_sense_production_access_token', 'PROD-TOKEN-456');
    });

    const requestPromise = page.waitForRequest(
      (request) => request.url().includes('/api/v1/') && request.method() === 'GET'
    );

    // Go to a page that makes API calls
    await page.goto('/dashboard/alerts');
    
    const request = await requestPromise;
    expect(request.headers()['authorization']).toBe('Bearer PROD-TOKEN-456');
  });
});
