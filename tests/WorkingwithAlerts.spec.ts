import {test, expect} from '@playwright/test'

test('Verify javaScript Alerts and Popups',async({page})=>{

 await page.goto("https://apsrtconline.in/oprs-web/");


// here is used page.on because in this case we have multiple alerts and we want to handle all the alerts in the same way. so we can use page.on to handle all the alerts in the same way. if we use page.once then it will handle only one alert and then it will stop listening for the alerts. so it's better to use page.on in this case.
await page.on("dialog", async (alert) => {
    // await page.waitForTimeout(2000);
    console.log(alert.message());
    await alert.dismiss();
});

await page.waitForTimeout(2000);
await page.click("input[id='searchBtn']");


  await page.locator('input[id="fromPlaceName"]').fill("Hyderabad");
  await page.locator ('//span[text()="HYDERABAD" ]').click();

 await page.waitForTimeout(2000);
  await page.click("input[id='searchBtn']");

   await page.locator('input[id="toPlaceName"]').fill("Vijayawada");
 await page.locator ('//span[text()="VIJAYAWADA" ]').click();

  await page.click("input[id='searchBtn']");
  

});


// import { test, expect } from '@playwright/test'

// test('Verify javascript Alerts and popup', async ({ page }) => {
//     await page.goto("https://www.apsrtconline.in/oprs-web/");

//     // page.on('dialog', async (alert) => {
//     //     await alert.dismiss();
//     // });

// here is used page.once because in this case we have multiple alerts and we want to handle each alert differently. so we can use page.once to handle each alert differently. if we use page.on then it will handle all the alerts in the same way. so it's better to use page.once in this case.
//     page.once('dialog', async (alert) => {
//         await page.waitForTimeout(2000);
//         if (alert.message().includes("Please select start place.")) {
//             console.log("Start place validation alert is displayed with message " + alert.message());
//             await alert.accept();
//         } else {
//             console.log("start place validation alert is not displayed");
//         }
//     });

//     await page.waitForTimeout(2000);
//     await page.click("input[id='searchBtn']");


//     await page.locator("input[id='fromPlaceName']").fill("Hyderabad");
//     await page.locator("//span[text()='HYDERABAD']").click();

//     page.once('dialog', async (alert) => {
//         await page.waitForTimeout(2000);
//         if (alert.message().includes("Please select end place.")) {
//             console.log("End place validation alert is displayed with message " + alert.message());
//             await alert.accept();
//         } else {
//             console.log("End place validation alert is not displayed");
//         }
//     });
//     // await page.waitForTimeout(2000);
//     await page.click("input[id='searchBtn']");

//     await page.locator("input[id='toPlaceName']").fill("Vijayawada");
//     await page.locator("//span[text()='VIJAYAWADA']").click();
//     // await page.locator("input[id='txtJourneyDate']").fill("30/05/2026");
//     // await page.keyboard.press("Escape");
//     await page.click("input[id='txtJourneyDate']");
//     await page.locator("(//a[text()='30'])[1]").click();
//     await page.click("input[id='searchBtn']");

// })