import { test, expect } from '@playwright/test';

test('login test using CSS selectors', async ({ page }) => {
    // navigate to application
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    await page.fill('input[name="username"]', "testadmin");
    await page.locator('input[name="password"]').fill("Vibetestq@123#");
    await page.click('button[type="submit"]');
        // verify user is able to login successfully
    await expect(page.locator('h6')).toHaveText("Dashboard");





})