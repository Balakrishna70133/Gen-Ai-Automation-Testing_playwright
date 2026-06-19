import {Given,When,Then,setDefaultTimeout, After} from "@cucumber/cucumber";
import { chromium, BrowserContext, Page, expect, Browser  } from "playwright/test";

let browser:Browser;
let context:BrowserContext;
let page:Page;

setDefaultTimeout(120000);

Given ("I navigate to the login page", async function(){
    // code for it
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://vibetestq-osondemand.orangehrm.com/',{timeout: 60000});
    
});

When('I login with valid credentials {string} and {string}', async function (username, password) {
  // Fill credentials
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);

  // Submit the login form and wait for navigation
  await Promise.all([
    // page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.locator("//button[@type='submit']").click(),
  ]);

});

Then('I should be redirected to the dashboard page', async function () {
  // Wait for dashboard heading to be visible (increase timeout)
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible({ timeout: 120000 });
});

When('I click on the PIM module', async function () {
  await page.locator("//a[normalize-space()='PIM']").click();

});

Then('I should see the PIM module',async function () {
  await expect(page.locator("//h6[text()='PIM']")).toBeVisible();

});

When('I click on add button', async function () {
   await page.locator("//button[normalize-space()='Add']").click();
});

Then('I should see the add employee form',async function () {
  await expect(page.locator("//h6[text()='Add Employee']")).toBeVisible();
});

When('I add a new employee with unique details',async function () {
    await page.locator("//input[@placeholder='First Name']").fill("Tanguturu");
    await page.locator("//input[@placeholder='Last Name']").fill("Sridhar");
    let empid= await page.locator("//label[text()='Employee Id']/../..//input").inputValue();
    console.log("Employee Id is "+empid);
    await page.locator("//button[normalize-space()='Save']").click();
});

Then('I should see the Personal Details page for the new employee',async function () {
 await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible({timeout: 120000});
});

// Close browser after each scenario
After(async function () {
  try {
    if (browser) {
      await browser.close();
    }
  } catch (err) {
    console.error('Error closing browser:', err);
  }
});
