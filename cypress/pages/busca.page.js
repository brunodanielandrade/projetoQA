class BuscaPage {
  pesquisar(termo) {
    cy.get('input[type="search"], input[placeholder*="Buscar"], input[placeholder*="buscar"], input[placeholder*="Pesquisar"]')
      .first()
      .type(termo + "{enter}");
  }

  verificarResultados() {
    cy.url().should("include", "busca");
  }

  verificarSemResultados() {
  cy.url().should("include", "busca?termo=xyzabcdef123");
  cy.get("body").should("be.visible");
}
}

const buscaPage = new BuscaPage();
export default buscaPage;