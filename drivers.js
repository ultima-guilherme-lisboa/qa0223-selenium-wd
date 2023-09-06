import { Builder } from "selenium-webdriver";

export default class Drivers {
    static async getChromeDriver() {
        return await new Builder().forBrowser('chrome').build();
    }
}