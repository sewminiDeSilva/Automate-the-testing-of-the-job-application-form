import { test, expect } from '@playwright/test';

test('invalid email format validation', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');

    // Fill in valid first and last names
    await page.fill('#firstName', 'John');
    await page.fill('#lastName', 'Doe');

    // Fill in an invalid email format
    const invalidEmail = "invalid-email";
    await page.fill('#userEmail', invalidEmail);

    // Submit the form
    await page.click('#submit');

    // Step 1: Validate that the email input has a red border and error icon
    const emailField = await page.locator('#userEmail');

    // Check if the field has the class indicating it's invalid
    const isInvalid = await emailField.evaluate((el) => el.matches(':invalid'));
    expect(isInvalid).toBe(true); // Ensure that the field is marked as invalid

    // Step 2: Validate border color
    const borderColor = await emailField.evaluate((el) => getComputedStyle(el).borderColor);
    expect(borderColor).toBe('rgb(220, 53, 69)'); // Check for red border color

    // Step 3: Check for visible error message near the email field
    const errorMessageLocator = page.locator('input#userEmail + .error-message'); // Adjust selector based on actual HTML structure
    const errorMessageVisible = await errorMessageLocator.isVisible();
    
    expect(errorMessageVisible).toBe(true); // Ensure that the error message is visible

    // Step 4: Validate that the correct error message is displayed
    const errorMessageText = await errorMessageLocator.textContent();
    console.log(`Error Message for Email Field: ${errorMessageText}`);
    
    expect(errorMessageText).toContain("Please match the requested format."); // Adjust as necessary based on actual text

    // Optional: Take a screenshot for debugging purposes
    await page.screenshot({ path: 'invalid-email-error.png' });
});
