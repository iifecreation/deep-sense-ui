import { test, expect } from '@playwright/test';

test.describe.skip('Dashboard - Reports (superseded ambient contract)', () => {
  test.beforeEach(async ({ page }) => {
    const email = process.env.TEST_USER_EMAIL || 'test@example.com';
    const password = process.env.TEST_USER_PASSWORD || 'testpassword123';
    
    await page.goto('/login');
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('should display reports list', async ({ page }) => {
    await page.goto('/dashboard/reports');
    await expect(page.locator('text=Reports')).toBeVisible();
    await expect(page.locator('[data-testid="reports-list"]')).toBeVisible();
  });

  test('should navigate to report creation page', async ({ page }) => {
    await page.goto('/dashboard/reports');
    await page.locator('[data-testid="create-report-button"]').click();
    await expect(page).toHaveURL('/dashboard/reports/new');
    await expect(page.locator('text=Create Report')).toBeVisible();
  });

  test('should validate report fields', async ({ page }) => {
    await page.goto('/dashboard/reports/new');
    
    // Try to submit without filling fields
    await page.locator('button[type="submit"]').click();
    
    // Should show validation errors
    await expect(page.locator('text=Report type is required')).toBeVisible();
  });

  test('should create compliance report', async ({ page }) => {
    await page.goto('/dashboard/reports/new');
    
    // Select report type
    await page.locator('[data-testid="report-type"]').selectOption('compliance');
    
    // Fill report details
    await page.locator('input[name="title"]').fill('Test Compliance Report');
    await page.locator('textarea[name="description"]').fill('Test compliance report description');
    
    // Select date range
    await page.locator('input[name="start_date"]').fill('2024-01-01');
    await page.locator('input[name="end_date"]').fill('2024-12-31');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify success
    await expect(page.locator('text=Report created successfully')).toBeVisible();
  });

  test('should generate report PDF', async ({ page }) => {
    await page.goto('/dashboard/reports');
    
    // Click on first report
    await page.locator('[data-testid="report-item"]').first().click();
    
    // Click generate PDF button
    await page.locator('[data-testid="generate-pdf-button"]').click();
    
    // Wait for generation
    await page.waitForTimeout(3000);
    
    // Verify download started
    const downloadPromise = page.waitForEvent('download');
    await downloadPromise;
  });

  test('should export report data', async ({ page }) => {
    await page.goto('/dashboard/reports');
    
    // Click on first report
    await page.locator('[data-testid="report-item"]').first().click();
    
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

  test('should schedule report generation', async ({ page }) => {
    await page.goto('/dashboard/reports/new');
    
    // Select report type
    await page.locator('[data-testid="report-type"]').selectOption('analytics');
    
    // Fill report details
    await page.locator('input[name="title"]').fill('Scheduled Analytics Report');
    
    // Enable scheduling
    await page.locator('input[name="schedule_enabled"]').check();
    
    // Set schedule
    await page.locator('[data-testid="schedule-frequency"]').selectOption('weekly');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify success
    await expect(page.locator('text=Report scheduled successfully')).toBeVisible();
  });

  test('should view report details', async ({ page }) => {
    await page.goto('/dashboard/reports');
    
    // Click on first report
    await page.locator('[data-testid="report-item"]').first().click();
    
    // Verify details
    await expect(page.locator('[data-testid="report-details"]')).toBeVisible();
    await expect(page.locator('[data-testid="report-metrics"]')).toBeVisible();
  });

  test('should delete report', async ({ page }) => {
    await page.goto('/dashboard/reports');
    
    // Click on first report
    await page.locator('[data-testid="report-item"]').first().click();
    
    // Click delete button
    await page.locator('[data-testid="delete-button"]').click();
    
    // Confirm deletion
    await page.locator('[data-testid="confirm-delete-button"]').click();
    
    // Verify success
    await expect(page.locator('text=Report deleted successfully')).toBeVisible();
  });

  test('should filter reports by type', async ({ page }) => {
    await page.goto('/dashboard/reports');
    
    // Filter by compliance type
    await page.locator('[data-testid="type-filter"]').selectOption('compliance');
    
    // Wait for filtered results
    await page.waitForTimeout(1000);
    
    // Verify filter is applied
    const filterValue = await page.locator('[data-testid="type-filter"]').inputValue();
    expect(filterValue).toBe('compliance');
  });
});
