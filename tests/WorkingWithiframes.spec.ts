import { test, expect } from '@playwright/test';

test('verify iframes', async ({ page }) => {
    await page.goto('https://api.jquery.com/dblclick/');
    // switch to iframe
   let frame = page.frameLocator("div.code-demo iframe");
   await frame.locator("body > div").dblclick();
   await page.waitForTimeout(5000);



})