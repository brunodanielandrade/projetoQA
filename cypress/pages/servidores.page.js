class ServidoresPage {
  navegarParaServidores() {
    cy.visit("https://portaldatransparencia.gov.br/servidores/consulta");
  }

  verificarPaginaServidores() {
    cy.url().should("include", "servidores");
  }

  buscarServidor(nome) {
  cy.get('#nome')
    .type(nome + '{enter}', { force: true });
}

  verificarResultados() {
  cy.url().should("include", "servidores/consulta");
  cy.get("body").should("be.visible");
}
}

const servidoresPage = new ServidoresPage();
export default servidoresPage;