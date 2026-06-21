import { test, expect } from '@playwright/test';
import { execSync } from 'child_process';

test.describe('Onboarding and Dashboard Features Integration', () => {
  const uniqueId = Date.now();
  const email = `test-user-${uniqueId}@example.com`;
  const companyName = `Test Enterprise ${uniqueId}`;
  const companySlug = `test-slug-${uniqueId}`;
  const password = 'Password123!';

  test('should complete the entire registration, email verification, login, sidebar filtering, services settings update, support, and notifications flow', async ({ page }) => {
    test.setTimeout(120000);
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', exception => console.log(`Uncaught exception: "${exception.message}"`));
    // 1. Navigation & Registration Step 1
    await page.goto('/register');
    await expect(page.locator('h1')).toContainText('Create Account');

    // Verify industry field exists and select option
    const industryDropdown = page.locator('select#industry');
    await expect(industryDropdown).toBeVisible();
    await industryDropdown.selectOption({ label: 'Finance / Fintech' });

    // Fill registration Step 1
    await page.locator('input#fullName').fill('E2E Test User');
    await page.locator('input#companyName').fill(companyName);
    await page.locator('input#companySlug').fill(companySlug);
    await page.locator('input#email').fill(email);
    await page.locator('input#password').fill(password);
    
    // Country dropdown should be pre-populated
    const countryDropdown = page.locator('select#country');
    await expect(countryDropdown).toBeVisible();
    // Wait for at least one option (like US) to be attached
    await expect(countryDropdown.locator('option[value="US"]')).toBeAttached({ timeout: 15000 });

    // Proceed to Step 2
    await page.locator('button:has-text("Choose Target Services")').click();

    // 2. Registration Step 2
    await expect(page.locator('h1')).toContainText('Select Services');
    
    // Select Adverse Media and Sanctions Screening (which corresponds to 'screening')
    const adverseMediaCheckbox = page.locator('input[value="adverse_media"]');
    const screeningCheckbox = page.locator('input[value="screening"]');
    
    await adverseMediaCheckbox.check();
    await screeningCheckbox.check();

    // Acknowledge terms
    await page.locator('#agree').click();

    // Click submit
    await page.locator('button:has-text("Initialize Cloud Environment")').click();

    // Should redirect to verify email page
    await expect(page).toHaveURL(new RegExp(`/verify-email\\?email=${encodeURIComponent(email)}`), { timeout: 20000 });
    await expect(page.locator('h1')).toContainText('Verify Your Email');

    // 3. Email Verification
    // Retrieve the PIN from the database via Python CLI helper
    let pin = '';
    try {
      pin = execSync(`../deep-sense-api/backend/.venv/bin/python ../deep-sense-api/backend/find_pin_cli.py ${email}`).toString().trim();
      console.log(`Retrieved email verification PIN from DB: ${pin}`);
    } catch (e) {
      throw new Error(`Failed to retrieve PIN from DB: ${e.message}`);
    }
    expect(pin).toHaveLength(6);

    // Type PIN into boxes by focusing the first box and typing sequentially
    const pinInputs = page.locator('input[type="text"]');
    await expect(pinInputs).toHaveCount(6);
    await pinInputs.first().focus();
    await page.keyboard.type(pin, { delay: 100 });

    // Submit verification
    await page.locator('button[type="submit"]:has-text("Verify Account")').click();

    // Should verify and redirect to login
    await expect(page).toHaveURL(/\/login\?verified=true/, { timeout: 15000 });

    // 4. Log in
    await page.goto('/login');
    await page.locator('input#email').fill(email);
    await page.locator('input#password').fill(password);
    await page.locator('button[type="submit"]').click();

    // Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard', { timeout: 15000 });
    await expect(page.locator('h1:has-text("Dashboard Overview")')).toBeVisible();

    // 5. Sidebar Navigation Link Filtering
    // Only enabled services (Screening) and common/help links should be visible.
    // 'Transactions', 'Alerts', 'Cases', 'Devices', 'Rules' should be hidden.
    const sidebar = page.locator('aside');
    await expect(sidebar.locator('text=Screening Center')).toBeVisible();
    await expect(sidebar.locator('text=Transactions')).not.toBeVisible();
    await expect(sidebar.locator('text=Alerts')).not.toBeVisible();
    await expect(sidebar.locator('text=Cases')).not.toBeVisible();
    await expect(sidebar.locator('text=Devices')).not.toBeVisible();

    // 6. Settings Page -> Services Tab
    await page.goto('/dashboard/settings');
    // Click the Services tab button
    await page.locator('button:has-text("Services")').click();

    // Verify services state in Settings using paragraph class checking
    const adverseMediaText = page.locator('p:has-text("Adverse Media Screening")');
    const screeningText = page.locator('p:has-text("Sanctions & PEP Screening")');
    await expect(adverseMediaText).toHaveClass(/text-brand-lime/);
    await expect(screeningText).toHaveClass(/text-brand-lime/);

    // Enable Device Fingerprinting in Settings
    const deviceFingerprintingCard = page.locator('div.cursor-pointer:has(p:has-text("Device Fingerprinting"))');
    const deviceFingerprintingText = deviceFingerprintingCard.locator('p:has-text("Device Fingerprinting")');
    await expect(deviceFingerprintingText).not.toHaveClass(/text-brand-lime/);
    
    // Register dialog handler to auto-dismiss prompt/alerts
    page.once('dialog', async (dialog) => {
      expect(dialog.message()).toContain('Services updated successfully');
      await dialog.accept();
    });

    await deviceFingerprintingCard.click();
    await expect(deviceFingerprintingText).toHaveClass(/text-brand-lime/);
    
    // Save changes
    await page.locator('button:has-text("Save Services")').click();
    
    // Wait for page reload & navigate back to settings
    await page.waitForURL('**/settings', { timeout: 15000 });

    // Now, Devices should be visible in the sidebar navigation!
    await expect(sidebar.locator('text=Devices')).toBeVisible();

    // 7. Support Ticket Page
    await page.goto('/dashboard/support');
    await expect(page.locator('h1')).toContainText('Support Center');

    // Create a support ticket
    await page.locator('#new-ticket-btn').click();
    await page.locator('input[placeholder="Describe your issue briefly..."]').fill('E2E Integration Support Request');
    await page.locator('textarea[placeholder="Provide all context so our staff can resolve this quickly..."]').fill('This is an automated test support ticket description.');
    await page.locator('button[type="submit"]:has-text("Submit Ticket")').click();

    // Check it is listed
    await expect(page.locator('text=E2E Integration Support Request').first()).toBeVisible();

    // 8. Notifications Page
    await page.goto('/dashboard/notifications');
    await expect(page.locator('h1')).toContainText('Inbox');
  });
});
