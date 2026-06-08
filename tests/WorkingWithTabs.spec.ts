import {test,expect} from '@playwright/test'

test('Verify Tabs',async({page})=>{

    //Browser
    //Context
    //Page

    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    //click link that opens another tab
    await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    await page.context().waitForEvent("page");

    //get all pages opened in the browser
    let allPages = page.context().pages();
    console.log("Number of pages opened " + allPages.length);

    //get title of all pages    for(let i=0;i<allPages.length;i++){
    for(let i=0;i<allPages.length;i++){
        let title = await allPages[i].title();
        console.log("Title of page " + i + " is " + title);
    }

    //switch to new tab
    let newPage = allPages[1];
    await page.waitForTimeout(5000);
    await newPage.getByPlaceholder("Your email address").fill("Balakrishna70133@gmail.com"); 

    newPage.close();
    await page.waitForTimeout(5000);


})

    // browser :    // 1. single tab browser : it will have only one page object
    //               // 2. multi tab browser : it will have multiple page objects
    // context  : in this context is any link is avalible then when we click that it will open in the new tab.
    // page    : each tab or page opened in browser is called page.
