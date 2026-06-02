import { test, expect } from '@playwright/test';

test.describe('Dashboard - Document Upload', () => {
  test.beforeEach(async ({ page }) => {
    const email = process.env.TEST_USER_EMAIL || 'test@example.com';
    const password = process.env.TEST_USER_PASSWORD || 'testpassword123';
    
    await page.goto('/login');
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('should navigate to document upload page', async ({ page }) => {
    await page.goto('/dashboard/documents/upload');
    await expect(page.locator('text=Upload Document')).toBeVisible();
  });

  test('should validate file type', async ({ page }) => {
    await page.goto('/dashboard/documents/upload');
    
    // Try to upload invalid file type
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('tests/fixtures/invalid.exe');
    
    // Should show error
    await expect(page.locator('text=Invalid file type')).toBeVisible();
  });

  test('should validate file size', async ({ page }) => {
    await page.goto('/dashboard/documents/upload');
    
    // Try to upload file exceeding size limit
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('tests/fixtures/large.pdf');
    
    // Should show error
    await expect(page.locator('text=File size exceeds limit')).toBeVisible();
  });

  test('should upload valid PDF document', async ({ page }) => {
    await page.goto('/dashboard/documents/upload');
    
    // Upload valid PDF
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('tests/fixtures/document.pdf');
    
    // Fill document metadata
    await page.locator('input[name="label"]').fill('Test Document');
    await page.locator('textarea[name="description"]').fill('Test document description');
    
    // Submit upload
    await page.locator('button[type="submit"]').click();
    
    // Verify success
    await expect(page.locator('text=Document uploaded successfully')).toBeVisible();
  });

  test('should upload valid image document', async ({ page }) => {
    await page.goto('/dashboard/documents/upload');
    
    // Upload valid image
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('tests/fixtures/document.jpg');
    
    // Fill document metadata
    await page.locator('input[name="label"]').fill('Test Image');
    
    // Submit upload
    await page.locator('button[type="submit"]').click();
    
    // Verify success
    await expect(page.locator('text=Document uploaded successfully')).toBeVisible();
  });

  test('should show upload progress', async ({ page }) => {
    await page.goto('/dashboard/documents/upload');
    
    // Upload file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('tests/fixtures/document.pdf');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify progress bar is visible
    await expect(page.locator('[data-testid="upload-progress"]')).toBeVisible();
  });

  test('should handle upload error gracefully', async ({ page }) => {
    await page.goto('/dashboard/documents/upload');
    
    // Mock upload failure by using invalid file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('tests/fixtures/corrupt.pdf');
    
    // Submit
    await page.locator('button[type="submit"]').click();
    
    // Verify error message
    await expect(page.locator('text=Upload failed')).toBeVisible();
  });

  test('should display uploaded documents list', async ({ page }) => {
    await page.goto('/dashboard/documents');
    
    // Verify documents list is visible
    await expect(page.locator('[data-testid="documents-list"]')).toBeVisible();
  });

  test('should delete uploaded document', async ({ page }) => {
    await page.goto('/dashboard/documents');
    
    // Click on first document
    await page.locator('[data-testid="document-item"]').first().click();
    
    // Click delete button
    await page.locator('[data-testid="delete-button"]').click();
    
    // Confirm deletion
    await page.locator('[data-testid="confirm-delete-button"]').click();
    
    // Verify success message
    await expect(page.locator('text=Document deleted successfully')).toBeVisible();
  });

  test('should generate signed URL for document download', async ({ page }) => {
    await page.goto('/dashboard/documents');
    
    // Click on first document
    await page.locator('[data-testid="document-item"]').first().click();
    
    // Click download button
    await page.locator('[data-testid="download-button"]').click();
    
    // Verify download started
    const downloadPromise = page.waitForEvent('download');
    await downloadPromise;
  });
});
