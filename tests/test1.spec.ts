import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
    // navigate to application
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    await page.getByRole("textbox", { name: "Username" }).fill("testadmin");
    await page.getByRole("textbox", { name: "Password" }).fill("Vibetestq@123#");
    await page.getByRole("button", { name: "Login" }).click();
        // verify user is able to login successfully
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible({ timeout: 10000 });
    await page.getByRole("link", { name:"PIM" }).click();
    await page.getByRole("button", { name: "Add" }).click();
    // await page.getByRole("textbox", { name: "firstName" }).fill("MS");
    await page.fill('input[name="firstName"]', "Philip");
    await page.fill('input[name="lastName"]', "salt");
    // await page.getByRole("textbox",{ name: "Employee Id" }).fill("12345");
    await page.getByRole('button',{ name:"save"}).click();
    await page.getByRole('link',{ name:"Admin" }).click();
    await page.getByRole('button',{ name:"Add"}).click();
    // await expect(page.getByRole('heading',{ name: "Add User"})).toBeVisible({timeout:10000});
    await page.getByText(" -- Select --").first().click();
    await page.getByRole('option', { name: 'ESS' }).first().click();
    await page.getByRole("textbox", { name: "Type for hints..." }).first().fill("Philip salt");
    await page.getByText("philip salt").first().click();
    // await page.getByRole("textbox",{ name:"Type for hints..."}).nth(2).fill("Salt");
    await page.getByText(" -- Select --").click();
    await page.getByRole('option', { name: 'Enabled' }).first().click();
    await page.getByText("Enabled").first().click();
    await page.locator("//label[normalize-space()='Username']/../..//input[1]").fill("philip.salt");
    await page.locator("//label[normalize-space()='Password']/../..//input[1]").fill("Salt@123");
    await page.locator("//label[normalize-space()='Confirm Password']/../..//input[1]").fill("Salt@123");
    await page.getByRole("button", { name: "Save" }).click();
    // await expect(page.getByRole("generic",{ name:""})).toBeVisible({timeout:10000});
})


// playwright selectors
//1. Role selector
//2. Text selector
//3. CSS selector
//4. XPath selector


// getByRole() - role based selector,
// it is used to select elements based on their role and name.
// it is the most recommended selector as it is more stable and less prone to changes in the UI.