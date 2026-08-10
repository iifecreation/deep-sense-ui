import { test, expect } from '@playwright/test';

test.describe.skip('Authentication - Logout (superseded ambient contract)', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    const email = process.env.TEST_USER_EMAIL || 'test@example.com';
    const password = process.env.TEST_USER_PASSWORD || 'testpassword123';
    
    await page.goto('/login');
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('should logout successfully', async ({ page }) => {
    // Click logout button (would need to adjust selector based on actual UI)
    await page.locator('[data-testid="logout-button"]').click();
    
    // Should redirect to login
    await expect(page).toHaveURL('/login');
    
    // Should not be able to access protected routes
    await page.goto('/dashboard');
    await expect(page).toHaveURL('/login');
  });

  test('should clear authentication tokens on logout', async ({ page }) => {
    // Check for auth token before logout
    const cookiesBefore = await page.context().cookies();
    const hasAuthTokenBefore = cookiesBefore.some(c => c.name.includes('auth') || c.name.includes('token'));
    
    await page.locator('[data-testid="logout-button"]').click();
    await expect(page).toHaveURL('/login');
    
    // Check for auth token after logout
    const cookiesAfter = await page.context().cookies();
    const hasAuthTokenAfter = cookiesAfter.some(c => c.name.includes('auth') || c.name.includes('token'));
    
    expect(hasAuthTokenAfter).toBe(false);
  });

  test('should handle session expiry gracefully', async ({ page }) => {
    // Simulate session expiry by clearing cookies
    await page.context().clearCookies();
    
    // Try to access protected route
    await page.goto('/dashboard');
    
    // Should redirect to login with session expiry message
    await expect(page).toHaveURL('/login');
    await expect(page.locator('text=Session expired')).toBeVisible();
  });
});
