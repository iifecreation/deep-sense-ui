import { test, expect } from '@playwright/test';

test.describe.skip('Authentication - Forgot Password (superseded ambient contract)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should navigate to forgot password page', async ({ page }) => {
    await page.locator('text=Forgot password').click();
    await expect(page).toHaveURL('/forgot-password');
    await expect(page.locator('input[name="email"]')).toBeVisible();
  });

  test('should show validation error for empty email', async ({ page }) => {
    await page.goto('/forgot-password');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Email is required')).toBeVisible();
  });

  test('should show validation error for invalid email format', async ({ page }) => {
    await page.goto('/forgot-password');
    await page.locator('input[name="email"]').fill('invalid-email');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Invalid email format')).toBeVisible();
  });

  test('should show success message for valid email', async ({ page }) => {
    await page.goto('/forgot-password');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('button[type="submit"]').click();
    
    await expect(page.locator('text=If an account exists with this email')).toBeVisible();
  });

  test('should not reveal if email exists or not', async ({ page }) => {
    await page.goto('/forgot-password');
    
    // Try with non-existent email
    await page.locator('input[name="email"]').fill('nonexistent@example.com');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=If an account exists with this email')).toBeVisible();
    
    // Try with existing email (if available)
    const existingEmail = process.env.TEST_USER_EMAIL;
    if (existingEmail) {
      await page.goto('/forgot-password');
      await page.locator('input[name="email"]').fill(existingEmail);
      await page.locator('button[type="submit"]').click();
      await expect(page.locator('text=If an account exists with this email')).toBeVisible();
    }
  });

  test('should allow navigation back to login', async ({ page }) => {
    await page.goto('/forgot-password');
    await page.locator('text=Back to login').click();
    await expect(page).toHaveURL('/login');
  });
});
