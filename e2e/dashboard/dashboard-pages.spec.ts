import { expect, test, type Page } from '@playwright/test';
import { loginTenant } from '../support/auth';
import { collectConsoleErrors } from '../support/console';

// Every dashboard page backed by the shared data loader (src/hooks/use-async-resource.ts),
// loaded against the real seeded API: the page renders, shows no error state, and neither
// throws nor gets a 5xx from the API.
const PAGES: Array<{ path: string; heading: RegExp }> = [
  { path: '/dashboard/alerts', heading: /alert/i },
  { path: '/dashboard/cases', heading: /case/i },
  { path: '/dashboard/transactions', heading: /^Transactions/ },
  { path: '/dashboard/rules', heading: /Rules Engine/ },
  { path: '/dashboard/users', heading: /Customer Registry/ },
  { path: '/dashboard/customer-risk', heading: /Customer Risk Registry/ },
  { path: '/dashboard/screening', heading: /screening/i },
  { path: '/dashboard/reports', heading: /report/i },
  { path: '/dashboard/compliance', heading: /Compliance Workspace/ },
  { path: '/dashboard/compliance-reports', heading: /Compliance Reports/ },
  { path: '/dashboard/notifications', heading: /Inbox/ },
  { path: '/dashboard/settings', heading: /Institutional Settings/ },
  { path: '/dashboard/devices', heading: /Device Registry/ },
  { path: '/dashboard/onboarding', heading: /Onboarding Reviews/ },
  { path: '/dashboard/audit', heading: /Audit Trails/ },
  { path: '/dashboard/models', heading: /Models/ },
  { path: '/dashboard/integrations', heading: /Integrations/ },
  { path: '/dashboard/webhooks', heading: /Webhooks/ },
  { path: '/dashboard/billing', heading: /Billing/ },
  { path: '/dashboard/usage', heading: /Usage & Billing/ },
  { path: '/dashboard/support', heading: /Support Center/ },
  { path: '/dashboard/explainability', heading: /Explainability/ },
  { path: '/dashboard/analytics', heading: /Analytics/ },
];

const ERROR_STATE = /failed to load|could not be loaded|something went wrong/i;

function collectServerErrors(page: Page): string[] {
  const failures: string[] = [];
  page.on('response', (response) => {
    if (response.url().includes('/api/v1/') && response.status() >= 500) {
      failures.push(`${response.status()} ${response.request().method()} ${new URL(response.url()).pathname}`);
    }
  });
  return failures;
}

test.describe('Dashboard pages load real data', () => {
  test('every data page renders without errors', async ({ page }) => {
    test.setTimeout(PAGES.length * 30_000 + 60_000);
    // A missing optional resource is a 4xx the page handles; those show up as console noise.
    const consoleErrors = collectConsoleErrors(page, [/status of 40[34]/]);
    const serverErrors = collectServerErrors(page);
    await loginTenant(page);

    for (const { path, heading } of PAGES) {
      await test.step(path, async () => {
        await page.goto(path);
        // Soft assertions: one run reports every broken page, not just the first.
        await expect.soft(page.getByRole('heading', { level: 1, name: heading }).first()).toBeVisible({ timeout: 45_000 });
        // Let the page's requests settle before judging it.
        await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => undefined);
        // A service the tenant hasn't enabled must be explained as such, never shown as a load failure.
        await expect.soft(page.getByText(ERROR_STATE), `generic error state on ${path}`).toHaveCount(0);
        expect.soft(serverErrors.splice(0), `API 5xx on ${path}`).toEqual([]);
        expect.soft(consoleErrors.splice(0), `console errors on ${path}`).toEqual([]);
      });
    }
  });

  test('notifications refetch when the filter changes', async ({ page }) => {
    test.setTimeout(120_000);
    const consoleErrors = collectConsoleErrors(page, [/status of 40[34]/]);
    await loginTenant(page);
    await page.goto('/dashboard/notifications');
    await expect(page.getByRole('heading', { level: 1, name: /Inbox/ })).toBeVisible({ timeout: 45_000 });

    const refetch = page.waitForRequest((request) => request.url().includes('/notifications') && request.url().includes('unread_only=true'));
    await page.getByRole('button', { name: /unread/i }).first().click();
    await refetch;
    await expect(page.getByText(ERROR_STATE)).toHaveCount(0);
    expect(consoleErrors).toEqual([]);
  });

  test('compliance workspace refresh reloads every panel', async ({ page }) => {
    test.setTimeout(120_000);
    await loginTenant(page);
    await page.goto('/dashboard/compliance');
    await expect(page.getByRole('heading', { level: 1, name: /Compliance Workspace/ })).toBeVisible({ timeout: 45_000 });
    await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => undefined);

    const reloaded = new Set<string>();
    page.on('request', (request) => {
      const path = new URL(request.url()).pathname;
      for (const resource of ['/alerts', '/cases', '/screening', '/customers', '/reports']) {
        if (path.includes(resource)) reloaded.add(resource);
      }
    });
    await page.getByRole('button', { name: /refresh/i }).first().click();
    await expect.poll(() => reloaded.size, { timeout: 20_000 }).toBe(5);
  });
});

test.describe('Settings save to the API', () => {
  test('a changed retention period survives a reload', async ({ page }) => {
    test.setTimeout(150_000);
    await loginTenant(page);
    await page.goto('/dashboard/settings');
    await expect(page.getByRole('heading', { level: 1, name: /Institutional Settings/ })).toBeVisible({ timeout: 45_000 });
    await page.getByText('Retention Policies', { exact: true }).click();

    const field = page.getByLabel('Alert Retention (Days)');
    await expect(field).toBeVisible({ timeout: 30_000 });
    const next = (Number(await field.inputValue()) % 3000) + 7;
    await field.fill(String(next));
    const saved = page.waitForResponse(
      (response) => response.url().includes('/settings/retention') && response.request().method() === 'PATCH',
    );
    await page.getByRole('button', { name: 'Save Changes' }).click();
    expect((await saved).status()).toBe(200);
    await expect(page.getByText('Retention policies saved.')).toBeVisible();

    await page.reload();
    await page.getByText('Retention Policies', { exact: true }).click();
    await expect(page.getByLabel('Alert Retention (Days)')).toHaveValue(String(next), { timeout: 30_000 });
  });

  test('security toggles are real switches', async ({ page }) => {
    test.setTimeout(120_000);
    await loginTenant(page);
    await page.goto('/dashboard/settings');
    await page.getByText('Security & Access', { exact: true }).click();
    const mfa = page.getByRole('switch', { name: 'Require Multi-Factor Auth (MFA)' });
    await expect(mfa).toBeVisible({ timeout: 30_000 });
    const before = await mfa.getAttribute('aria-checked');
    await mfa.click();
    await expect(mfa).toHaveAttribute('aria-checked', before === 'true' ? 'false' : 'true');
  });
});
