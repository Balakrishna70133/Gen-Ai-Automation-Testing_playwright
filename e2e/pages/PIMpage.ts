//pim page class
import { Page } from "@playwright/test";
import { BasePage } from "./basepage";

class PIMPage extends BasePage {
    pimHeader;
    btnAdd;
    verifyPIMPage;
    ClickAdd: any;

    constructor(page: Page) {
        super(page);
        this.pimHeader = page.locator('//h6[text()="PIM"]').describe("PIM Header");
        this.btnAdd = page.locator('//button[normalize-space()="Add"]').describe("Add Employee Button");
        this.verifyPIMPage = () => this.page.locator('h6').filter({ hasText: 'PIM' });
        this.ClickAdd = () => this.btnAdd.click();
    }
}

export default PIMPage;