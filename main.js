import Drivers from "./drivers.js";
import { USUARIO_NAO_CADASTRO } from "./data/usarios/usuarios.js";
import LoginPage from "./pages/login.pages.js";

const driver = await Drivers.getChromeDriver()
await driver.manage().setTimeouts({implicit: 500});


let loginPage = new LoginPage(driver);

loginPage.navigate()

loginPage.login(USUARIO_NAO_CADASTRO.email, USUARIO_NAO_CADASTRO.senha)
         .then(async ()=> {
            let mensagem = await loginPage.getTextoMensagem()
            console.log(mensagem)
        })


