
# Job Application Form Automation Testing

This project automates the testing of a job application form using Playwright. The tests cover various scenarios to ensure the form behaves as expected.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Test Scenarios](#test-scenarios)
- [Setup Instructions](#setup-instructions)
- [Running the Tests](#running-the-tests)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
- **Playwright**: A powerful automation library for browser testing.
- **JavaScript**: The programming language used for writing tests.

## Test Scenarios
The following test scenarios are automated:
1. **Valid Form Submission**: Tests the submission of the form with all correct inputs.
2. **Mandatory Fields Left Blank**: Tests that appropriate error messages are displayed when mandatory fields are not filled.
3. **Invalid Email Format Validation**: Tests that an error message is shown when an invalid email format is entered.

## Setup Instructions
To set up this project locally, follow these steps:

1. **Clone the Repository**:
   ```
   git clone https://github.com/yourusername/job-application-form-testing.git
   cd job-application-form-testing
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed. Then, run:
   ```
   npm install
   ```

3. **Ensure Playwright Browsers Are Installed**:
   Run the following command to install the necessary browsers:
   ```
   npx playwright install
   ```

## Running the Tests
To execute the tests, use the following command:
```
npx playwright test
```

### Test Results
After running the tests, you will see results in the terminal indicating which tests passed or failed. Screenshots of failed tests will be saved in the project directory for review.

## Contributing
Contributions are welcome! If you have suggestions for improvements or additional tests, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
