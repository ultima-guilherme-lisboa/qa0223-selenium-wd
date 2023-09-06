import { URL_BASE } from "../config.js";
import LoginElements from "../elements/login.elements.js";

export default class LoginPage {

    constructor(driver) {
        this.driver = driver;
        this.loginElements = new LoginElements(driver);
    }

    navigate() {
        this.driver.get(URL_BASE + "sign_in")
    }

    async typeEmail(email) {
        let inputEmail = await this.loginElements.getInputEmail()
        inputEmail.sendKeys(email)
    }

    async typePassword(password) {
        let inputPassword = await this.loginElements.getInputPassword()
        inputPassword.sendKeys(password)
    }

    async clickEntrar() {
        let buttonEntrar = await this.loginElements.getButtonEntrar()
        buttonEntrar.click()
    }

    async getTextoMensagem() {
        let tostMessage = await this.loginElements.getTostMessage()
        return tostMessage.getText()
    }

    async login(email,password) {
        await this.typeEmail(email)
        await this.typePassword(password)
        await this.clickEntrar()
    }
}