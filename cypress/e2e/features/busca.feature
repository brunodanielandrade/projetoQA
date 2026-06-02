Feature: Busca no Portal da Transparência

  Scenario: Realizar uma busca por termo válido
    Given que o usuário acessa o Portal da Transparência
    When o usuário pesquisa por "Ministério da Saúde"
    Then os resultados da busca devem ser exibidos

  Scenario: Realizar uma busca por termo inválido
    Given que o usuário acessa o Portal da Transparência
    When o usuário pesquisa por "xyzabcdef123"
    Then uma mensagem de nenhum resultado deve ser exibida

  Scenario Outline: Busca por diferentes termos governamentais
    Given que o usuário acessa o Portal da Transparência
    When o usuário pesquisa por "<termo>"
    Then os resultados da busca devem ser exibidos

    Examples:
      | termo                  |
      | Ministério da Educação |
      | Ministério da Saúde    |