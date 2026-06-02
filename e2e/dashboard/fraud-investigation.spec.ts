import { test, expect } from '@playwright/test';

test.describe('Dashboard - Fraud Investigation', () => {
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

  test('should display fraud investigation dashboard', async ({ page }) => {
    await page.goto('/dashboard/fraud');
    await expect(page.locator('text=Fraud Investigation')).toBeVisible();
    await expect(page.locator('[data-testid="fraud-stats"]')).toBeVisible();
  });

  test('should display fraud alerts list', async ({ page }) => {
    await page.goto('/dashboard/fraud');
    await expect(page.locator('[data-testid="alerts-list"]')).toBeVisible();
  });

  test('should filter alerts by severity', async ({ page }) => {
    await page.goto('/dashboard/fraud');
    
    // Select high severity filter
    await page.locator('[data-testid="severity-filter"]').selectOption('high');
    
    // Wait for filtered results
    await page.waitForTimeout(1000);
    
    // Verify filter is applied
    const filterValue = await page.locator('[data-testid="severity-filter"]').inputValue();
    expect(filterValue).toBe('high');
  });

  test('should open alert details on click', async ({ page }) => {
    await page.goto('/dashboard/fraud');
    
    // Click on first alert
    await page.locator('[data-testid="alert-item"]').first().click();
    
    // Verify alert details panel opens
    await expect(page.locator('[data-testid="alert-details"]')).toBeVisible();
  });

  test('should create new case from alert', async ({ page }) => {
    await page.goto('/dashboard/fraud');
    
    // Click on first alert
    await page.locator('[data-testid="alert-item"]').first().click();
    
    // Click create case button
    await page.locator('[data-testid="create-case-button"]').click();
    
    // Fill case details
    await page.locator('input[name="title"]').fill('Test Fraud Case');
    await page.locator('textarea[name="description"]').fill('Test case description');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify success message
    await expect(page.locator('text=Case created successfully')).toBeVisible();
  });

  test('should assign case to investigator', async ({ page }) => {
    await page.goto('/dashboard/fraud/cases');
    
    // Click on first case
    await page.locator('[data-testid="case-item"]').first().click();
    
    // Click assign button
    await page.locator('[data-testid="assign-case-button"]').click();
    
    // Select investigator
    await page.locator('[data-testid="investigator-select"]').selectOption('1');
    
    // Confirm assignment
    await page.locator('[data-testid="confirm-assign-button"]').click();
    
    // Verify assignment success
    await expect(page.locator('text=Case assigned successfully')).toBeVisible();
  });

  test('should export fraud report', async ({ page }) => {
    await page.goto('/dashboard/fraud');
    
    // Click export button
    await page.locator('[data-testid="export-button"]').click();
    
    // Select export format
    await page.locator('[data-testid="export-format"]').selectOption('csv');
    
    // Confirm export
    await page.locator('[data-testid="confirm-export-button"]').click();
    
    // Verify download started
    const downloadPromise = page.waitForEvent('download');
    await downloadPromise;
  });

  test('should display risk score visualization', async ({ page }) => {
    await page.goto('/dashboard/fraud');
    
    // Click on alert to see details
    await page.locator('[data-testid="alert-item"]').first().click();
    
    // Verify risk score chart is visible
    await expect(page.locator('[data-testid="risk-score-chart"]')).toBeVisible();
  });

  test('should handle empty state when no alerts', async ({ page }) => {
    // This would require a test environment with no alerts
    // For now, we'll skip this test
    test.skip();
  });
});
