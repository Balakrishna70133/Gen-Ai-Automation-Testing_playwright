// login page class
import { Page } from "@playwright/test";
import { BasePage } from "./basepage"
 
class LoginPage extends BasePage{
    page: Page;           //# is used to declare private variable in typescript
    txtUserName;
    txtPassword;
    btnLogin;
    constructor(page: Page){
        super(page);
        this.page = page;
        this.txtUserName = this.page.locator('input[name="username"]').describe("Username Textbox");
        this.txtPassword = this.page.locator('input[name="password"]').describe("Password Textbox");
        this.btnLogin = this.page.locator('button[type="submit"]').describe("Login Button");
    }
    async LoginToApplication(username: string, password: string){
        await this.txtUserName.fill(username);
        console.log("Entered username: " + username);
        await this.txtPassword.fill(password);
        console.log("Entered password: " + password);
    }
    
    async EnterUserName(username: string){
        await this.txtUserName.fill(username);
        console.log("Entered username: " + username);
    }
    async EnterPassword(password: string){
        await this.txtPassword.fill(password);
        console.log("Entered password: " + password);
    }
    async ClickLogin(){
        await this.btnLogin.click();
        console.log("Clicked on Login button");
    }
}
export default LoginPage;
