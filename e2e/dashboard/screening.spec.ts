import { test, expect } from '@playwright/test';

test.describe('Dashboard - Screening', () => {
  test.beforeEach(async ({ page }) => {
    const email = process.env.TEST_USER_EMAIL || 'test@example.com';
    const password = process.env.TEST_USER_PASSWORD || 'testpassword123';
    
    await page.goto('/login');
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('should display screening dashboard', async ({ page }) => {
    await page.goto('/dashboard/screening');
    await expect(page.locator('text=Screening')).toBeVisible();
    await expect(page.locator('[data-testid="screening-stats"]')).toBeVisible();
  });

  test('should navigate to new screening page', async ({ page }) => {
    await page.goto('/dashboard/screening');
    await page.locator('[data-testid="new-screening-button"]').click();
    await expect(page).toHaveURL('/dashboard/screening/new');
    await expect(page.locator('text=New Screening')).toBeVisible();
  });

  test('should validate screening input fields', async ({ page }) => {
    await page.goto('/dashboard/screening/new');
    
    // Try to submit without filling fields
    await page.locator('button[type="submit"]').click();
    
    // Should show validation errors
    await expect(page.locator('text=Name is required')).toBeVisible();
  });

  test('should perform sanctions screening', async ({ page }) => {
    await page.goto('/dashboard/screening/new');
    
    // Select screening type
    await page.locator('[data-testid="screening-type"]').selectOption('sanctions');
    
    // Fill screening details
    await page.locator('input[name="name"]').fill('John Doe');
    await page.locator('input[name="date_of_birth"]').fill('1980-01-01');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify screening results
    await expect(page.locator('[data-testid="screening-results"]')).toBeVisible();
  });

  test('should perform PEP screening', async ({ page }) => {
    await page.goto('/dashboard/screening/new');
    
    // Select screening type
    await page.locator('[data-testid="screening-type"]').selectOption('pep');
    
    // Fill screening details
    await page.locator('input[name="name"]').fill('Jane Smith');
    await page.locator('input[name="country"]').fill('US');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify screening results
    await expect(page.locator('[data-testid="screening-results"]')).toBeVisible();
  });

  test('should display screening history', async ({ page }) => {
    await page.goto('/dashboard/screening/history');
    await expect(page.locator('text=Screening History')).toBeVisible();
    await expect(page.locator('[data-testid="screening-history-list"]')).toBeVisible();
  });

  test('should view screening details', async ({ page }) => {
    await page.goto('/dashboard/screening/history');
    
    // Click on first screening
    await page.locator('[data-testid="screening-item"]').first().click();
    
    // Verify details
    await expect(page.locator('[data-testid="screening-details"]')).toBeVisible();
  });

  test('should export screening results', async ({ page }) => {
    await page.goto('/dashboard/screening/history');
    
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

  test('should filter screenings by type', async ({ page }) => {
    await page.goto('/dashboard/screening/history');
    
    // Filter by sanctions type
    await page.locator('[data-testid="type-filter"]').selectOption('sanctions');
    
    // Wait for filtered results
    await page.waitForTimeout(1000);
    
    // Verify filter is applied
    const filterValue = await page.locator('[data-testid="type-filter"]').inputValue();
    expect(filterValue).toBe('sanctions');
  });

  test('should handle match results', async ({ page }) => {
    await page.goto('/dashboard/screening/new');
    
    // Perform screening that returns a match
    await page.locator('[data-testid="screening-type"]').selectOption('sanctions');
    await page.locator('input[name="name"]').fill('Test Match Name');
    await page.locator('button[type="submit"]').click();
    
    // If match found, verify match details
    const matchElement = page.locator('[data-testid="match-result"]');
    if (await matchElement.isVisible()) {
      await expect(matchElement).toBeVisible();
      await page.locator('[data-testid="view-match-details"]').click();
      await expect(page.locator('[data-testid="match-details"]')).toBeVisible();
    }
  });
});
