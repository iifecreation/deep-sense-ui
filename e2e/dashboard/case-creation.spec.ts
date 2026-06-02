import { test, expect } from '@playwright/test';

test.describe('Dashboard - Case Creation', () => {
  test.beforeEach(async ({ page }) => {
    const email = process.env.TEST_USER_EMAIL || 'test@example.com';
    const password = process.env.TEST_USER_PASSWORD || 'testpassword123';
    
    await page.goto('/login');
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('should navigate to case creation page', async ({ page }) => {
    await page.goto('/dashboard/cases/new');
    await expect(page.locator('text=Create New Case')).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    await page.goto('/dashboard/cases/new');
    
    // Try to submit without filling fields
    await page.locator('button[type="submit"]').click();
    
    // Should show validation errors
    await expect(page.locator('text=Title is required')).toBeVisible();
    await expect(page.locator('text=Customer is required')).toBeVisible();
  });

  test('should create case with valid data', async ({ page }) => {
    await page.goto('/dashboard/cases/new');
    
    // Fill required fields
    await page.locator('input[name="title"]').fill('Test Fraud Case');
    await page.locator('[data-testid="customer-select"]').selectOption('1');
    await page.locator('textarea[name="description"]').fill('Test case description for fraud investigation');
    
    // Select case type
    await page.locator('[data-testid="case-type"]').selectOption('fraud');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify success and redirect
    await expect(page).toHaveURL(/\/dashboard\/cases\/\d+/);
    await expect(page.locator('text=Case created successfully')).toBeVisible();
  });

  test('should attach evidence to case', async ({ page }) => {
    await page.goto('/dashboard/cases/new');
    
    // Fill basic case info
    await page.locator('input[name="title"]').fill('Case with Evidence');
    await page.locator('[data-testid="customer-select"]').selectOption('1');
    await page.locator('textarea[name="description"]').fill('Case with evidence attachment');
    
    // Upload evidence file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('tests/fixtures/evidence.pdf');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify evidence was attached
    await expect(page.locator('text=Evidence attached successfully')).toBeVisible();
  });

  test('should set case priority', async ({ page }) => {
    await page.goto('/dashboard/cases/new');
    
    // Fill basic case info
    await page.locator('input[name="title"]').fill('High Priority Case');
    await page.locator('[data-testid="customer-select"]').selectOption('1');
    await page.locator('textarea[name="description"]').fill('High priority case');
    
    // Set priority to high
    await page.locator('[data-testid="priority-select"]').selectOption('high');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify priority is set
    await expect(page.locator('[data-testid="case-priority"]')).toHaveText('High');
  });

  test('should assign case to team member', async ({ page }) => {
    await page.goto('/dashboard/cases/new');
    
    // Fill basic case info
    await page.locator('input[name="title"]').fill('Assigned Case');
    await page.locator('[data-testid="customer-select"]').selectOption('1');
    await page.locator('textarea[name="description"]').fill('Case with assigned investigator');
    
    // Assign to team member
    await page.locator('[data-testid="assignee-select"]').selectOption('1');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify assignment
    await expect(page.locator('[data-testid="case-assignee"]')).toBeVisible();
  });

  test('should save case as draft', async ({ page }) => {
    await page.goto('/dashboard/cases/new');
    
    // Fill partial case info
    await page.locator('input[name="title"]').fill('Draft Case');
    await page.locator('[data-testid="customer-select"]').selectOption('1');
    
    // Save as draft
    await page.locator('[data-testid="save-draft-button"]').click();
    
    // Verify draft saved
    await expect(page.locator('text=Case saved as draft')).toBeVisible();
  });

  test('should cancel case creation', async ({ page }) => {
    await page.goto('/dashboard/cases/new');
    
    // Fill some data
    await page.locator('input[name="title"]').fill('Cancelled Case');
    
    // Click cancel
    await page.locator('[data-testid="cancel-button"]').click();
    
    // Should return to cases list
    await expect(page).toHaveURL('/dashboard/cases');
  });
});
