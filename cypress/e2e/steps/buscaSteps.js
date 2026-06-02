/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import buscaPage from "../../pages/busca.page";
import navegacaoPage from "../../pages/navegacao.page";

Given("que o usuário acessa o Portal da Transparência", () => {
  navegacaoPage.acessarPaginaInicial();
});

When("o usuário pesquisa por {string}", (termo) => {
  buscaPage.pesquisar(termo);
});

Then("os resultados da busca devem ser exibidos", () => {
  buscaPage.verificarResultados();
});

Then("uma mensagem de nenhum resultado deve ser exibida", () => {
  buscaPage.verificarSemResultados();
});