# Fluz_backend-playwright

A sample framework based on Page Object Model, Selenium, and TestNG using Java.

This framework is based on the Page Object Model (POM).

The framework uses:

Java
Selenium
TestNG
ExtentReport
Log4j
SimpleJavaMail

# Steps to create test cases:
Let's say we want to automate the Google search test.

1.
A page class should typically contain all the elements on the page and corresponding action methods.


2. Create the test class which class the methods of GoogleSearchPage


3. Add the test class in the testng.xml file under the folder src/test/resources/suites/


4. Execute the test cases by maven command mvn clean test

# Reporting
The framework reports in three ways,> **Initial setup**

1. install Playwright 
    - `npm init playwright@latest`

2. Use command '`npx playwright test + file name`' (Example. npx playwright test Registration.spec.ts) to run the specialized test cases 
    or '`npx playwright test`' for all test cases
