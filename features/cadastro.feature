@esm
Feature: Cadastro

  Scenario: Cadastrar Usuario valido
    Given Estou tentando cadastrar um usuario
    When Informo um nome, email, senha e sua confirmação "Guilherme Lisboa" "guilherme.lisboa@ultima.com" "12345678"
    Then O sistema exibe uma mensagem apos cadastrar "Bem-vindo! Você se registrou com sucesso."