import { test, expect } from '@playwright/test';

test.describe.skip('Dashboard - Alert Review (superseded ambient contract)', () => {
  test.beforeEach(async ({ page }) => {
    const email = process.env.TEST_USER_EMAIL || 'test@example.com';
    const password = process.env.TEST_USER_PASSWORD || 'testpassword123';
    
    await page.goto('/login');
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('should display alerts list', async ({ page }) => {
    await page.goto('/dashboard/alerts');
    await expect(page.locator('text=Alerts')).toBeVisible();
    await expect(page.locator('[data-testid="alerts-list"]')).toBeVisible();
  });

  test('should display alert statistics', async ({ page }) => {
    await page.goto('/dashboard/alerts');
    await expect(page.locator('[data-testid="alert-stats"]')).toBeVisible();
    await expect(page.locator('[data-testid="total-alerts"]')).toBeVisible();
    await expect(page.locator('[data-testid="high-severity-alerts"]')).toBeVisible();
  });

  test('should filter alerts by status', async ({ page }) => {
    await page.goto('/dashboard/alerts');
    
    // Filter by open status
    await page.locator('[data-testid="status-filter"]').selectOption('open');
    
    // Wait for filtered results
    await page.waitForTimeout(1000);
    
    // Verify filter is applied
    const filterValue = await page.locator('[data-testid="status-filter"]').inputValue();
    expect(filterValue).toBe('open');
  });

  test('should filter alerts by severity', async ({ page }) => {
    await page.goto('/dashboard/alerts');
    
    // Filter by high severity
    await page.locator('[data-testid="severity-filter"]').selectOption('high');
    
    // Wait for filtered results
    await page.waitForTimeout(1000);
    
    // Verify filter is applied
    const filterValue = await page.locator('[data-testid="severity-filter"]').inputValue();
    expect(filterValue).toBe('high');
  });

  test('should view alert details', async ({ page }) => {
    await page.goto('/dashboard/alerts');
    
    // Click on first alert
    await page.locator('[data-testid="alert-item"]').first().click();
    
    // Verify details panel
    await expect(page.locator('[data-testid="alert-details"]')).toBeVisible();
    await expect(page.locator('[data-testid="alert-timeline"]')).toBeVisible();
  });

  test('should dismiss alert', async ({ page }) => {
    await page.goto('/dashboard/alerts');
    
    // Click on first alert
    await page.locator('[data-testid="alert-item"]').first().click();
    
    // Click dismiss button
    await page.locator('[data-testid="dismiss-button"]').click();
    
    // Add dismissal reason
    await page.locator('textarea[name="dismissal_reason"]').fill('False positive - verified with customer');
    
    // Confirm dismissal
    await page.locator('[data-testid="confirm-dismiss-button"]').click();
    
    // Verify success
    await expect(page.locator('text=Alert dismissed successfully')).toBeVisible();
  });

  test('should escalate alert', async ({ page }) => {
    await page.goto('/dashboard/alerts');
    
    // Click on first alert
    await page.locator('[data-testid="alert-item"]').first().click();
    
    // Click escalate button
    await page.locator('[data-testid="escalate-button"]').click();
    
    // Select escalation target
    await page.locator('[data-testid="escalation-target"]').selectOption('compliance');
    
    // Add escalation notes
    await page.locator('textarea[name="escalation_notes"]').fill('Requires compliance review');
    
    // Confirm escalation
    await page.locator('[data-testid="confirm-escalate-button"]').click();
    
    // Verify success
    await expect(page.locator('text=Alert escalated successfully')).toBeVisible();
  });

  test('should add note to alert', async ({ page }) => {
    await page.goto('/dashboard/alerts');
    
    // Click on first alert
    await page.locator('[data-testid="alert-item"]').first().click();
    
    // Click add note button
    await page.locator('[data-testid="add-note-button"]').click();
    
    // Enter note
    await page.locator('textarea[name="note"]').fill('Investigation note: customer verified transaction');
    
    // Submit note
    await page.locator('button[type="submit"]').click();
    
    // Verify note added
    await expect(page.locator('text=Note added successfully')).toBeVisible();
  });

  test('should search alerts', async ({ page }) => {
    await page.goto('/dashboard/alerts');
    
    // Enter search term
    await page.locator('[data-testid="search-input"]').fill('fraud');
    
    // Wait for search results
    await page.waitForTimeout(1000);
    
    // Verify search results
    await expect(page.locator('[data-testid="alerts-list"]')).toBeVisible();
  });

  test('should export alerts', async ({ page }) => {
    await page.goto('/dashboard/alerts');
    
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
});
