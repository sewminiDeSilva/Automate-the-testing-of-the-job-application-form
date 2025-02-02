import { test, expect } from '@playwright/test';

test('identify all mandatory fields and validate error messages', async ({ page }) => {
  // Step 1: Navigate to the form page
  await page.goto('https://demoqa.com/automation-practice-form');

  // Step 2: Submit the form without filling any fields
  await page.click('#submit');

  // Step 3: Identify mandatory fields by checking for invalid states
  const mandatoryFields = await page.locator('.form-control.is-invalid, .form-control:invalid').elementHandles();

  // Ensure there are mandatory fields marked as invalid
  expect(mandatoryFields.length).toBeGreaterThan(0);

  // Step 4: Initialize a list to collect errors
  const errors = [];

  // Step 5: Validate each mandatory field
  for (const field of mandatoryFields) {
    const fieldId = await field.getAttribute('id'); // Get the field's ID
    console.log(`Mandatory Field Detected: ${fieldId}`);

    try {
      // Check if there is an associated validation message
      const validationMessage = await field.evaluate((el) => el.validationMessage || '');
      console.log(`Validation Message for ${fieldId}: ${validationMessage}`);

      // Assert that the validation message is not empty
      expect(validationMessage).not.toBe('');

      // Check for visible error message near each mandatory field
      const errorMessageLocator = page.locator(`#${fieldId} + .error-message`); // Adjust selector based on actual HTML structure
      const isVisible = await errorMessageLocator.isVisible();

      expect(isVisible).toBe(true); // Ensure that an error message is visible

      const errorMessageText = await errorMessageLocator.textContent();
      console.log(`Error Message for ${fieldId}: ${errorMessageText}`);

      expect(errorMessageText).toContain("This field is required"); // Adjust based on actual text displayed
    } catch (error) {
      // Collect errors instead of stopping the test
      errors.push(`Field ${fieldId} failed validation: ${error.message}`);
    }
  }

  // Step 6: Log all errors at the end of the test
  if (errors.length > 0) {
    console.error('Validation Errors:', errors);
    throw new Error(`Validation failed for some fields:\n${errors.join('\n')}`);
  }

  // Optional: Take a screenshot of the form with highlighted errors
  await page.screenshot({ path: 'mandatory-fields-error.png' });
});
