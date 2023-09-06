import { Given ,When, Then, BeforeAll, AfterAll } from '@cucumber/cucumber'

import LoginPage from "../../pages/login.pages.js";
let loginPage
let driver
import Drivers from "../../drivers.js";
import * as assert from 'assert';

BeforeAll(async ()=> {
    driver = await Drivers.getChromeDriver()
    await driver.manage().setTimeouts({implicit: 30000});
    loginPage = new LoginPage(driver);
})

Given('Estou tentando realizar login', async function () {
    await loginPage.navigate();
  });

When("Informo um usuario e senha {string} {string}", async (email, senha) => {
    await loginPage.login(email, senha);
})


Then("O sistema exibe uma mensagem {string}", async (mensagem)=> {
    let mensagemLogin = await loginPage.getTextoMensagem()
    assert.strictEqual(mensagemLogin, mensagem);
})

AfterAll(async ()=> {
    driver.close()
})


