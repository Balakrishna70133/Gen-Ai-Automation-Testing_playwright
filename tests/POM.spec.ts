import { test, expect } from '@playwright/test';
import LoginPage from "../e2e/pages/loginpage";
import DashboardPage from '../e2e/pages/Dashboardpage';
import PIMPage from '../e2e/pages/PIMpage';
import AddEmployeePage from '../e2e/pages/addemppage';
import PersonalDetailsPage from '../e2e/pages/personaldetailspage';
import { BasePage } from '../e2e/pages/basepage';
// test is used define tests
// expect is used create assertions

// syntax of test is test('test description', async ({page}) => { // test code })

test('Create and Delete Employee using Xpath and CSS', async ({ page }) => {

    let basepage = new BasePage(page);

    // Navigate to Application

    basepage.navigateToURL("https://vibetestq-osondemand.orangehrm.com/auth/login");

    // await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");

   // login page application
    let loginpage = new LoginPage(page);
    await loginpage.EnterUserName('testadmin');
    await loginpage.EnterPassword('Vibetestq@123#');
    await loginpage.ClickLogin();

   // dashboard page
let dashboardpage = new DashboardPage(page);
    await dashboardpage.verifyDashboardPage();
    await dashboardpage.ClickPIM();

    let pimpage = new PIMPage(page);
    await pimpage.verifyPIMPage();
    await pimpage.ClickAdd();

    let addemppage = new AddEmployeePage(page);
    await addemppage.EnterFirstName("ben");
    await addemppage.EnterLastName("Ducket");
    await addemppage.ClickSave();

    let personaldetailspage = new PersonalDetailsPage(page);
    await personaldetailspage.verifyPersonalDetailsPage();


//    let dashboardpage=new DashboardPage(page);  
//    await dashboardpage.verifyPIMPage();
//    await pimpage.ClickAddButton()


// let pimpage=new PIMPage(page);
// await pimpage.verifyPIMPage();
// await pimpage.ClickAddButton();


// let addEmployeePage=new AddEmployeePage(page);
//     await addEmployeePage.EnterFirstName("John");
//     await addEmployeePage.EnterLastName("Smith");
//     await addEmployeePage.ClickSave();

//     let personaldetailspage=new PersonalDetailsPage(page);
//     await personaldetailspage.VerifyPersonalDetailsPageIsDisplayed();


    // Login to Application
    // await loginpage.txtUserName.fill('testadmin');
    // await loginpage.txtPassword.fill('Vibetestq@123#');
    // await loginpage.btnLogin.click();
    //Verify Dashboard Page is displayed
    // await expect(dashboardpage.dashboardHeader).toBeVisible();
    // await dashboardpage.lnkPIM.click();
    //Verify PIM Page is displayed
    // await expect(pimpage.pimHeader).toBeVisible({timeout: 10000});
    // await pimpage.btnAdd.click();
    // await addemppage.txtFirstName.fill("John");
    // await addemppage.txtLastName.fill("Smith");
    // await addemppage.btnSave.click();
    // await expect(personaldetailspage.personalDetailsHeader).toBeVisible({timeout: 10000});

});
