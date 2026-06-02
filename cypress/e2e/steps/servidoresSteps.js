/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import servidoresPage from "../../pages/servidores.page";
import navegacaoPage from "../../pages/navegacao.page";

Given("que o usuário acessa o Portal da Transparência", () => {
  navegacaoPage.acessarPaginaInicial();
});

When("o usuário navega para a página de servidores", () => {
  servidoresPage.navegarParaServidores();
});

Then("a página de servidores deve ser exibida", () => {
  servidoresPage.verificarPaginaServidores();
});

And("o usuário busca pelo servidor {string}", (nome) => {
  servidoresPage.buscarServidor(nome);
});

Then("os resultados da consulta devem ser exibidos", () => {
  servidoresPage.verificarResultados();
});