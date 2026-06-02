class NavegacaoPage {
  acessarPaginaInicial() {
    cy.visit("https://portaldatransparencia.gov.br/");
  }

  verificarURL() {
    cy.url().should("include", "portaldatransparencia.gov.br");
  }

  verificarTitulo() {
    cy.title().should("include", "Portal da Transparência");
  }
  
    verificarMenu() {
  cy.get("header").should("be.visible");
}
  }

const navegacaoPage = new NavegacaoPage();
export default navegacaoPage;