import { test, expect } from '@playwright/test';

test('valid form submission', async ({ page }) => {
    // Navigate to the form page
    await page.goto('https://demoqa.com/automation-practice-form');

    // Fill out the form fields with valid data
    await page.fill('#firstName', 'John');
    await page.fill('#lastName', 'Doe');
    await page.fill('#userEmail', 'john.doe@example.com');
    await page.check('label[for="gender-radio-1"]'); // Select Male gender
    await page.fill('#userNumber', '1234567890');

    // Fill Birth Date (bypass date picker)
    await page.fill('#dateOfBirthInput', '01 Jan 1990');

    // Add subjects
    await page.fill('#subjectsInput', 'Math');
    await page.press('#subjectsInput', 'Enter'); // Press Enter

    // Choose Hobbies
    await page.check('label[for="hobbies-checkbox-1"]'); // Sports

    // Upload Picture (ensure you have a valid file path)
    const filePath = 'Referances/picture.png'; 
    await page.setInputFiles('#uploadPicture', filePath);

    // Fill Address
    await page.fill('#currentAddress', '123 Main St');

    // Select State and City
    await page.click('#state');
    await page.click('div[id^="react-select-3-option"]'); // Select first state option

    await page.click('#city');
    await page.click('div[id^="react-select-4-option"]'); // Select first city option

    // Submit the form
    await page.click('#submit');

    // Validate success message
    const successMessage = await page.textContent('.modal-title');
    
    expect(successMessage).toContain("Thanks for submitting the form");
});
