import { Given ,When, Then, BeforeAll, AfterAll } from '@cucumber/cucumber'

import SignUpPage from "../../pages/signup.pages.js";
let signUp
let driver
import Drivers from "../../drivers.js";
import * as assert from 'assert';

BeforeAll(async ()=> {
    driver = await Drivers.getChromeDriver()
    await driver.manage().setTimeouts({implicit: 30000});
    signUp = new SignUpPage(driver);
})

Given('Estou tentando cadastrar um usuario', async function () {
    await signUp.navigate();
  });

When("Informo um nome, email, senha e sua confirmação {string} {string} {string}", async (nome ,email, senha) => {
    nome = `${nome} ${String.fromCharCode(65+Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 9)}`
    email = `${String.fromCharCode(65+Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 9)}${email}`
    console.log(nome)
    console.log(email)
    console.log(senha)
    await signUp.cadastrarUsuario(nome ,email, senha, senha);
})


Then("O sistema exibe uma mensagem apos cadastrar {string}", async (mensagem)=> {
    let mensagemCadastro = await signUp.getTextoMensagem()
    assert.strictEqual(mensagemCadastro, mensagem);
})

AfterAll(async ()=> {
    driver.close()
})


