Feature: Navegação no Portal da Transparência

  Scenario: Acessar a página inicial
    Given que o usuário acessa o Portal da Transparência
    Then a página deve carregar com sucesso

  Scenario: Verificar o título da página
    Given que o usuário acessa o Portal da Transparência
    Then o título da página deve conter "Portal da Transparência"

  Scenario: Verificar se o menu principal está visível
    Given que o usuário acessa o Portal da Transparência
    Then o menu principal deve estar visível