import { test, expect } from '@playwright/test';

test.describe('Authentication - Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should display login form', async ({ page }) => {
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should show validation error for empty email', async ({ page }) => {
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Email is required')).toBeVisible();
  });

  test('should show validation error for empty password', async ({ page }) => {
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Password is required')).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.locator('input[name="email"]').fill('invalid@example.com');
    await page.locator('input[name="password"]').fill('wrongpassword');
    await page.locator('button[type="submit"]').click();
    
    await expect(page.locator('text=Invalid email or password')).toBeVisible({ timeout: 5000 });
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    const email = process.env.TEST_USER_EMAIL || 'test@example.com';
    const password = process.env.TEST_USER_PASSWORD || 'testpassword123';
    
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button[type="submit"]').click();
    
    // Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('text=Dashboard')).toBeVisible();
  });

  test('should handle 2FA when enabled', async ({ page }) => {
    // This test would require a user with 2FA enabled
    const email = process.env.TEST_2FA_USER_EMAIL;
    const password = process.env.TEST_2FA_USER_PASSWORD;
    
    if (!email || !password) {
      test.skip();
      return;
    }
    
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button[type="submit"]').click();
    
    // Should show 2FA input
    await expect(page.locator('input[name="twoFactorCode"]')).toBeVisible({ timeout: 5000 });
    
    // Enter valid 2FA code (would need to be generated or provided)
    await page.locator('input[name="twoFactorCode"]').fill('123456');
    await page.locator('button[type="submit"]').click();
    
    await expect(page).toHaveURL('/dashboard');
  });

  test('should remember email with "Remember me"', async ({ page }) => {
    const email = process.env.TEST_USER_EMAIL || 'test@example.com';
    const password = process.env.TEST_USER_PASSWORD || 'testpassword123';
    
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('input[name="remember"]').check();
    await page.locator('button[type="submit"]').click();
    
    await expect(page).toHaveURL('/dashboard');
    
    // Navigate back to login
    await page.goto('/login');
    
    // Email should be pre-filled
    await expect(page.locator('input[name="email"]')).toHaveValue(email);
  });
});
