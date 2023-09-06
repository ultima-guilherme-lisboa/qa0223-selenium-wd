import { By, until} from "selenium-webdriver";

export default class LoginElements {

    constructor(driver) {
        this.driver = driver;
    }

    async getInputEmail() {
        return await this.driver.findElement(By.id('user_email'));
    }

    async getInputPassword() {
        return await this.driver.findElement(By.id('user_password'));
    }

    async getButtonEntrar() {
        return await this.driver.findElement(By.css('input[value="Entrar"]'));
    }

    async getTostMessage() {
        let tost
        const condition = until.elementLocated(By.css("#toast-container .toast-message"))
        await this.driver.wait(condition, 30000)
              .then(el => {
                tost = el;
              })
       return tost;
    }


}