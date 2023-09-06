import { URL_BASE } from "../config.js";
import SignUpElements from "../elements/signup.elements.js"

export default class SignUpPage {

    constructor(driver) {
        this.driver = driver;
        this.signUpElements = new SignUpElements(driver);
    }

    navigate() {
        this.driver.get(URL_BASE + "sign_up")
    }

    async typeNome(nome) {
        let inputEmail = await this.signUpElements.getInputNome()
        inputEmail.sendKeys(nome)
    }

    async typeEmail(email) {
        let inputEmail = await this.signUpElements.getInputEmail()
        inputEmail.sendKeys(email)
    }

    async typePassword(password) {
        let inputPassword = await this.signUpElements.getInputPassword()
        inputPassword.sendKeys(password)
    }

    async typeConfirmaPassword(password) {
        let inputPassword = await this.signUpElements.getInputConfirmaPassword()
        inputPassword.sendKeys(password)
    }

    async clickEntrar() {
        let buttonEntrar = await this.signUpElements.getButtonEntrar()
        buttonEntrar.click()
    }

    async getTextoMensagem() {
        let tostMessage = await this.signUpElements.getTostMessage()
        return tostMessage.getText()
    }

    async cadastrarUsuario(nome,email,password, confirmaPassword) {
        await this.typeNome(nome)
        await this.typeEmail(email)
        await this.typePassword(password)
        await this.typeConfirmaPassword(confirmaPassword)
        await this.clickEntrar()
    }
}