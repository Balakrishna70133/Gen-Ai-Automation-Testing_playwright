// import { Given, When, Then, After, setDefaultTimeout } from '@cucumber/cucumber';
// import { chromium, BrowserContext, Page, expect, Browser } from '@playwright/test';

// setDefaultTimeout(120 * 1000);
// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

// Given('I navigate to the login page', async function () {
//     browser = await chromium.launch({ headless: false });
//     context = await browser.newContext();
//     page = await context.newPage();
//     await page.goto('https://vibetestq-osondemand.orangehrm.com/auth/login', { timeout: 60000 });
// });

// When('I login with valid credentials {string} and {string}', async function (username, password) {
//     await page.getByPlaceholder('Username').fill(username);
//     await page.getByPlaceholder('Password').fill(password);
//     await Promise.all([
//         page.waitForNavigation({ waitUntil: 'networkidle' }),
//         page.locator("//button[@type='submit']").click(),
//     ]);
// });

// Then('I should be redirected to the dashboard page', async function () {
//     await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible({ timeout: 120000 });
// });

// When('I click on the PIM module', async function () {
//     await page.locator("//a[normalize-space()='PIM']").click();
// });

// Then('I should see the PIM module', async function () {
//     await expect(page.locator("//h6[text()='PIM']")).toBeVisible({ timeout: 120000 });
// });

// When('I click on add button', async function () {
//     await page.locator("//button[normalize-space()='Add']").click();
// });

// Then('I should see the add employee form', async function () {
//     await expect(page.locator("//h6[text()='Add Employee']")).toBeVisible({ timeout: 120000 });
// });

// When('I add a new employee with unique details', async function () {
//     const firstName = 'Chandu';
//     const lastName = 'Kataru';

//     await page.locator("//input[@placeholder='First Name']").fill(firstName);
//     await page.locator("//input[@placeholder='Last Name']").fill(lastName);

//     const empid = await page.locator("//label[text()='Employee Id']/../..//input").inputValue();
//     console.log("Employee Id is " + empid);
//     await Promise.all([
//         page.waitForNavigation({ waitUntil: 'networkidle' }).catch(() => {}),
//         page.locator("//button[normalize-space()='Save']").click(),
//     ]);
// });

// Then('I should see the Personal Details page for the new employee', async function () {
//     await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible({ timeout: 120000 });
// });

// After(async function () {
//     if (browser) {
//         await browser.close();
//     }
// });

