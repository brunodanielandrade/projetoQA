Feature: Consulta de Servidores no Portal da Transparência

  Scenario: Acessar a página de consulta de servidores
    Given que o usuário acessa o Portal da Transparência
    When o usuário navega para a página de servidores
    Then a página de servidores deve ser exibida

  Scenario: Buscar um servidor pelo nome
    Given que o usuário acessa o Portal da Transparência
    When o usuário navega para a página de servidores
    And o usuário busca pelo servidor "João"
    Then os resultados da consulta devem ser exibidos