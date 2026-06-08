import {test, expect} from '@playwright/test'

test('verify shadow dom elements', async ({page})=>{
    await page.goto('https://vibetestq.com/testweb/sandbox/');
    // #1: using shadow selector
    await page.click('text=Drag, Drop & Shadow');
    await page.fill('input#shadow-txt', 'welcome to playwright');
     
    let shadowText = await page.locator('input#shadow-txt').inputValue();
    console.log("Text in shadow dom is " + shadowText);
    await page.waitForTimeout(5000);
    expect(shadowText).toBe('welcome to playwright');


    // await page.locator('input#shadow-txt').click();
    // await page.getbyText('text=shadow DOM button').click();
    // await page.locator('Drag, Drop & Shadow').click();

})