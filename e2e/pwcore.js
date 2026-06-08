const { assert } = require("node:console");
const {chromium, devices} = require("playwright");

(async () => {
    // set up the browser and page.
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext(devices["Desktop Chrome"]);
    const page = await browser.newPage();

    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    await page.getByRole("textbox", { name: "Username" }).fill("testUser");
    await page.getByRole("textbox", { name: "Password" }).fill("Vibetestq@123#");
    await page.getByRole("button", { name: "Login" }).click();

    // Teardown the browser.
    await browser.close();
    await browser.close();
})();
