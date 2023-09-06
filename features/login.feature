@esm
Feature: Login

  Scenario: Login com usuario invalido
    Given Estou tentando realizar login
    When Informo um usuario e senha "guilherme.lisboa@ultima.com" "12345678"
    Then O sistema exibe uma mensagem "Email ou senha inválidos."

 Scenario: Login com usuario valido
    Given Estou tentando realizar login
    When Informo um usuario e senha "guilherme.lisboa+0609@ultima.com" "123456"
    Then O sistema exibe uma mensagem "Logado com sucesso."