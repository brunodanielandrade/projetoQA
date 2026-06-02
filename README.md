# Projeto VA02 de QA - BDD com Cypress + Cucumber + Gherkin

## Descrição

Projeto de automação de testes end-to-end utilizando **Cypress**, **Cucumber** e **Gherkin**, desenvolvido como parte da disciplina de Qualidade de Software. Os testes foram implementados sobre o [Portal da Transparência do Governo Federal](https://portaldatransparencia.gov.br/), um site público de acesso livre.

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/) >= 13
- [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
- JavaScript (ES6+)

---

## Estrutura do Projeto

```
cypress/
  e2e/
    features/
      navegacao.feature        # Cenários de navegação geral
      busca.feature            # Cenários de busca global
      servidores.feature       # Cenários de consulta de servidores
    steps/
      navegacaoSteps.js        # Steps da feature de navegação
      buscaSteps.js            # Steps da feature de busca
      servidoresSteps.js       # Steps da feature de servidores
  pages/
    navegacao.page.js          # Page Object da navegação
    busca.page.js              # Page Object da busca
    servidores.page.js         # Page Object dos servidores
  support/
    commands.js                # Comandos customizados do Cypress
    e2e.js                     # Configurações globais de suporte
```

---

## Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- npm instalado

---

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

2. Instale as dependências:
```bash
npm install
```

---

## Executando os Testes

Abra o Cypress em modo interativo:
```bash
npx cypress open
```

Selecione **E2E Testing**, escolha o navegador e clique no arquivo `.feature` que deseja executar.

---

## Cenários de Teste

### `navegacao.feature` — Navegação no Portal da Transparência
| Cenário | Descrição |
|---|---|
| Acessar a página inicial | Verifica se o site carrega corretamente |
| Verificar o título da página | Valida que o título contém "Portal da Transparência" |
| Verificar se o menu principal está visível | Confirma que o header está visível na página |

### `busca.feature` — Busca Global
| Cenário | Descrição |
|---|---|
| Realizar uma busca por termo válido | Pesquisa por "Ministério da Saúde" e verifica redirecionamento |
| Realizar uma busca por termo inválido | Pesquisa por termo inexistente e verifica comportamento |

### `servidores.feature` — Consulta de Servidores
| Cenário | Descrição |
|---|---|
| Acessar a página de consulta de servidores | Verifica se a página de servidores carrega corretamente |
| Buscar um servidor pelo nome | Preenche o campo de nome e realiza a busca |

---

## Padrões Utilizados

- **BDD (Behavior Driven Development):** cenários escritos em Gherkin (português)
- **Page Object Model (POM):** separação da lógica de interação com a UI em classes reutilizáveis
- **Step Definitions:** implementação dos passos Gherkin em arquivos separados por feature

---

## Configuração do Cucumber

No `cypress.config.js`:
```js
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
```

No `package.json`:
```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": false,
  "step_definitions": "cypress/e2e/steps"
}
```

---

## Site Testado

**Portal da Transparência do Governo Federal**
- URL: https://portaldatransparencia.gov.br/
- Mantido pela Controladoria-Geral da União (CGU)
- Acesso público e gratuito
