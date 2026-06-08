import { test, expect } from '@playwright/test';

// test(' verify Apsrtc website ', async ({ page }) => {
//   await page.goto('https://apsrtconline.in/oprs-web/');
//   await page.locator('input[id="fromPlaceName"]').fill("Hyderabad");
//   await page.locator ('//span[text()="HYDERABAD" ]').click();
// //   await expect(page).toHaveTitle(/APSRTC/);
//  await page.locator('input[id="toPlaceName"]').fill("Vijayawada");
//  await page.locator ('//span[text()="VIJAYAWADA" ]').click();
// //  await page.locator('input[id="txtJourneyDate"]').fill("30/05/2026");
// //  await page.locator('//input[@id="searchBtn"]').click();
//  await page.click('input[id="txtJourneyDate"]');
//  await page.locator('(//a[text()="30"])[1]').click();
//  await page.click('input[id="searchBtn"]');
//  await expect(page.getByText("Book ticket in advance")).toBeVisible();
//  await page.locator("//span[text()='Bus Type']").click();
//  await page.locator("//span[normalize-space()='A/C CLASS']").click();

//  // # interview question :visible (is a playwright feature)is used here fetch the all ac services numbers which are visible on the page.
//  let acservices=await page.locator("div.srvceNO:visible").all();
// // here it's a interview question  important: how can create in xpath to fetch all ac services numbers 
// // //div[@class='srvceNO' and not(ancestor::div[@style='display: none;'])]
//  console.log("total ac services" +  acservices.length);
//  for (let i=0; i<acservices.length; i++){
//     let text=(await acservices[i].innerText()).trim();
//     console.log(text);
//  }
// });



test('Verify APSRTC website',async({page})=>{
    await page.goto("https://www.apsrtconline.in/oprs-web/");
    await page.locator("input[id='fromPlaceName']").fill("Hyderabad");
    await page.locator("//span[text()='HYDERABAD']").click();
    await page.locator("input[id='toPlaceName']").fill("Vijayawada");
    await page.locator("//span[text()='VIJAYAWADA']").click();
    // await page.locator("input[id='txtJourneyDate']").fill("30/05/2026");
    // await page.keyboard.press("Escape");
    await page.click("input[id='txtJourneyDate']");
    await page.locator("(//a[text()='30'])[1]").click();
    await page.click("input[id='searchBtn']");
    await expect(page.getByText("Book ticket in advance")).toBeVisible();
    await page.locator("//span[text()='Bus Type']").click();
    await page.locator("//span[normalize-space()='A/C CLASS']").click();

    let acServices = await page.locator("div.srvceNO:visible").all();

    //div[@class='srvceNO' and not(ancestor::div[@style='display: none;'])]

    console.log("Number of A/C CLASS services " + acServices.length);
    for (const service of acServices) {
        const text = (await service.innerText()).trim();
        console.log(text);
    }
});
