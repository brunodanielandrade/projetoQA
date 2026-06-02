/// <reference types="cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import navegacaoPage from "../../pages/navegacao.page";

Given("que o usuário acessa o Portal da Transparência", () => {
  navegacaoPage.acessarPaginaInicial();
});

Then("a página deve carregar com sucesso", () => {
  navegacaoPage.verificarURL();
});

Then("o título da página deve conter {string}", (titulo) => {
  navegacaoPage.verificarTitulo();
});

Then("o menu principal deve estar visível", () => {
  navegacaoPage.verificarMenu();
});