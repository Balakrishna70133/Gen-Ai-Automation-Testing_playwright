# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WorkingWithTabs.spec.ts >> Verify Tabs
- Location: tests/WorkingWithTabs.spec.ts:3:5

# Error details

```
TimeoutError: browserContext.waitForEvent: Timeout 10000ms exceeded while waiting for event "page"
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e12]:
        - generic [ref=e14]:
          - generic [ref=e15]:
            - generic [ref=e16]: 
            - generic [ref=e17]: Username
          - textbox "Username" [ref=e19]
        - generic [ref=e21]:
          - generic [ref=e22]:
            - generic [ref=e23]: 
            - generic [ref=e24]: Password
          - textbox "Password" [ref=e26]
        - button "Login" [ref=e28] [cursor=pointer]
        - paragraph [ref=e30] [cursor=pointer]: Forgot your password?
      - generic [ref=e31]:
        - generic [ref=e32]:
          - link [ref=e33] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e36] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e39] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e45]:
          - paragraph [ref=e46]: OrangeHRM OS 5.8
          - paragraph [ref=e47]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [active] [ref=e48] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e50]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('Verify Tabs',async({page})=>{
  4  | 
  5  |     //Browser
  6  |     //Context
  7  |     //Page
  8  | 
  9  |     await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
  10 |     //click link that opens another tab
  11 |     await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click();
  12 | 
> 13 |     await page.context().waitForEvent("page");
     |                          ^ TimeoutError: browserContext.waitForEvent: Timeout 10000ms exceeded while waiting for event "page"
  14 | 
  15 |     //get all pages opened in the browser
  16 |     let allPages = page.context().pages();
  17 |     console.log("Number of pages opened " + allPages.length);
  18 | 
  19 |     //get title of all pages    for(let i=0;i<allPages.length;i++){
  20 |     for(let i=0;i<allPages.length;i++){
  21 |         const pageAtIndex = allPages[i];
  22 |         if (!pageAtIndex) continue;
  23 |         let title = await pageAtIndex.title();
  24 |         console.log("Title of page " + i + " is " + title);
  25 |     }
  26 | 
  27 |     //switch to new tab
  28 |     let newPage = allPages[1];
  29 |     await page.waitForTimeout(5000);
  30 |     await newPage?.getByPlaceholder("Your email address").fill("Balakrishna70133@gmail.com"); 
  31 |     await page.waitForTimeout(5000);
  32 |     newPage?.close();
  33 | 
  34 | 
  35 | })
  36 | 
  37 |     // browser :    // 1. single tab browser : it will have only one page object
  38 |     //               // 2. multi tab browser : it will have multiple page objects
  39 |     // context  : in this context is any link is avalible then when we click that it will open in the new tab.
  40 |     // page    : each tab or page opened in browser is called page.
  41 | 
```