# Projeto de Testes Automatizados com Cypress

Este projeto tem como objetivo praticar **testes automatizados end-to-end (E2E)** utilizando o framework **[Cypress](https://www.cypress.io/)**.  
A aplicacao escolhida para os testes foi o site [Sauce Demo](https://www.saucedemo.com/), um e-commerce ficticio criado para fins de aprendizado e pratica de automacao de testes.

---

## Indice

- [Objetivo do Projeto](#objetivo-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pre-requisitos](#pre-requisitos)
- [Instalacao](#instalacao)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrao Page Object Model (POM)](#padrao-page-object-model-pom)
- [Fixtures - Massa de Dados](#fixtures---massa-de-dados)
- [Cenarios de Teste Implementados](#cenarios-de-teste-implementados)
- [Modos de Execucao](#modos-de-execucao)
- [Configuracao do Cypress](#configuracao-do-cypress)
- [Contribuicao](#contribuicao)
- [Licenca](#licenca)

---

## Objetivo do Projeto

- Estudar e aplicar boas praticas de automacao de testes E2E com **Cypress**.
- Utilizar o padrao **Page Object Model (POM)** para manter o codigo limpo, organizado e reutilizavel.
- Centralizar seletores de elementos da UI em arquivos `elements.js` dedicados, facilitando a manutencao.
- Organizar dados sensiveis e massa de dados (usuarios, senhas, URLs) em **fixtures** (`cypress/fixtures/`).
- Validar fluxos criticos de uma aplicacao web, como acesso a pagina inicial, login e navegacao.

---

## Tecnologias Utilizadas

| Tecnologia | Versao | Descricao |
|---|---|---|
| [Node.js](https://nodejs.org/) | >= 18.x | Ambiente de execucao JavaScript server-side |
| [npm](https://www.npmjs.com/) | >= 9.x | Gerenciador de pacotes do Node.js |
| [Cypress](https://www.cypress.io/) | ^15.0.0 | Framework de testes E2E moderno e rapido |
| [cypress-xpath](https://github.com/cypress-io/cypress-xpath) | ^2.0.1 | Plugin para utilizar seletores XPath no Cypress |
| JavaScript (ES6+) | - | Linguagem de programacao utilizada nos testes |

---

## Pre-requisitos

Antes de rodar o projeto, certifique-se de ter instalado em sua maquina:

- **[Node.js](https://nodejs.org/)** (versao 18 ou superior recomendada)
- **[npm](https://www.npmjs.com/)** (ja vem incluso com o Node.js)
- **[Git](https://git-scm.com/)** (para clonar o repositorio)

Para verificar se ja estao instalados, execute no terminal:

```bash
node -v
npm -v
git --version
```

---

## Instalacao

1. **Clone o repositorio:**

```bash
git clone https://github.com/leonardogit/PocEstudosCypress.git
```

2. **Acesse a pasta do projeto:**

```bash
cd PocEstudosCypress
```

3. **Instale as dependencias:**

```bash
npm install
```

> Isso ira instalar o Cypress e o plugin `cypress-xpath` conforme definido no `package.json`.

---

## Estrutura do Projeto

```
PocEstudosCypress/
|
|-- cypress/
|   |-- e2e/                        # Arquivos de especificacao dos testes
|   |   |-- test1.cy.js             # Suite de testes principal (login E2E)
|   |
|   |-- fixtures/                   # Massa de dados externa (JSON)
|   |   |-- example.json            # Dados de teste: URL, usuario e senha
|   |
|   |-- support/                    # Page Objects e configuracoes de suporte
|       |-- HomePage/               # Page Object da pagina Home (Login)
|       |   |-- elements.js         # Seletores CSS da HomePage
|       |   |-- index.js            # Acoes e validacoes da HomePage
|       |
|       |-- LoginPage/              # Page Object da pagina de Login
|       |   |-- elements.js         # Seletores CSS da LoginPage
|       |   |-- index.js            # Acoes de preenchimento e clique do Login
|       |
|       |-- InventoryPage/          # Page Object da pagina de Inventario
|       |   |-- elements.js         # Seletores CSS da InventoryPage
|       |   |-- index.js            # Validacoes da InventoryPage
|       |
|       |-- commands.js             # Comandos customizados do Cypress
|       |-- e2e.js                  # Arquivo de suporte global (carregado antes dos testes)
|
|-- cypress.config.js               # Configuracao principal do Cypress
|-- package.json                    # Dependencias e scripts do projeto
|-- package-lock.json               # Lock file das dependencias
|-- .gitignore                      # Arquivos/pastas ignorados pelo Git
|-- README.md                       # Documentacao do projeto
```

---

## Padrao Page Object Model (POM)

Este projeto utiliza o padrao **Page Object Model** para organizar o codigo de teste. Cada pagina da aplicacao e representada por uma pasta dentro de `cypress/support/` contendo:

- **`elements.js`** - Objeto com todos os seletores CSS dos elementos da pagina. Centralizar seletores aqui facilita a manutencao: se um seletor muda na aplicacao, basta alterar em um unico lugar.

```javascript
// Exemplo: cypress/support/LoginPage/elements.js
export const ELEMENTS = {
    USERNAME_INPUT: '#user-name',
    PASSWORD_INPUT: '#password',
    LOGIN_BUTTON: '#login-button',
    MENU_BUTTON: '#menu_button_container'
}
```

- **`index.js`** - Classe que encapsula as acoes e validacoes da pagina, utilizando os seletores de `elements.js` e dados de `fixtures`.

```javascript
// Exemplo: cypress/support/LoginPage/index.js
class LoginPage {
    fillUsername() {
        cy.get(elements.USERNAME_INPUT).click().type(example.userValue)
    }
    fillPassword() {
        cy.get(elements.PASSWORD_INPUT).click().type(example.passwordValue)
    }
    clickLogin() {
        cy.get(elements.LOGIN_BUTTON).click()
    }
}
export default new LoginPage();
```

### Page Objects disponiveis

| Page Object | Arquivo | Responsabilidade |
|---|---|---|
| **HomePage** | `cypress/support/HomePage/` | Acessar a URL da aplicacao e validar que a pagina de login foi carregada |
| **LoginPage** | `cypress/support/LoginPage/` | Preencher campos de usuario/senha e clicar no botao de login |
| **InventoryPage** | `cypress/support/InventoryPage/` | Validar que a pagina de inventario foi carregada apos o login |

---

## Fixtures - Massa de Dados

Os dados de teste sao armazenados em arquivos JSON dentro da pasta `cypress/fixtures/`. Isso permite:

- Separar dados do codigo de teste
- Facilitar a troca de dados sem alterar a logica dos testes
- Manter dados sensiveis organizados

**Arquivo:** `cypress/fixtures/example.json`

```json
{
  "link": "https://www.saucedemo.com/",
  "userValue": "standard_user",
  "passwordValue": "secret_sauce"
}
```

| Campo | Descricao |
|---|---|
| `link` | URL base da aplicacao sob teste (Sauce Demo) |
| `userValue` | Nome de usuario para login |
| `passwordValue` | Senha para login |

---

## Cenarios de Teste Implementados

Os testes estao localizados em `cypress/e2e/test1.cy.js`.

### Test Suite: "Test Suit part 1"

| # | Cenario | Descricao | Validacao |
|---|---|---|---|
| 1 | Acess home page | Acessa a URL da aplicacao, valida a home page, faz login e valida a pagina de inventario | `#login-button` existe na home; `#menu_button_container` existe no inventario |

**Fluxo detalhado do teste:**

1. **`HomePage.acessHomePage()`** - Navega ate `https://www.saucedemo.com/`
2. **`HomePage.validateHomePage()`** - Verifica que o botao de login (`#login-button`) esta presente na pagina
3. **`LoginPage.fillUsername()`** - Preenche o campo de usuario com `standard_user`
4. **`LoginPage.fillPassword()`** - Preenche o campo de senha com `secret_sauce`
5. **`LoginPage.clickLogin()`** - Clica no botao de login
6. **`InventoryPage.validateInventoryPage()`** - Verifica que o menu (`#menu_button_container`) esta visivel, confirmando que o login foi bem-sucedido

---

## Modos de Execucao

O Cypress oferece dois modos principais de execucao:

### 1. Modo Interativo (Cypress Test Runner - GUI)

Abre a interface grafica do Cypress, onde voce pode selecionar e acompanhar os testes em tempo real no navegador.

```bash
npx cypress open
```

**Caracteristicas:**
- Interface visual com navegador embutido
- Permite selecionar testes individuais para execucao
- Time-travel debugging (voltar no tempo e ver cada passo do teste)
- Hot-reload automatico ao salvar alteracoes nos arquivos de teste
- Ideal para **desenvolvimento e depuracao** de testes

### 2. Modo Headless (Linha de Comando - CI/CD)

Executa todos os testes no terminal sem abrir interface grafica. Ideal para integracoes com pipelines de CI/CD.

```bash
npx cypress run
```

**Caracteristicas:**
- Execucao rapida sem interface grafica
- Gera videos e screenshots automaticamente em caso de falha
- Saida de resultados no terminal (compativel com CI/CD)
- Ideal para **pipelines de integracao continua**

### 3. Execucao com Navegador Especifico

Voce pode escolher o navegador para rodar os testes:

```bash
# Chrome
npx cypress run --browser chrome

# Firefox
npx cypress run --browser firefox

# Edge
npx cypress run --browser edge

# Electron (padrao)
npx cypress run --browser electron
```

### 4. Executar um Teste Especifico

Para rodar apenas um arquivo de teste:

```bash
# Modo headless
npx cypress run --spec "cypress/e2e/test1.cy.js"

# Modo interativo
npx cypress open --e2e
```

### 5. Execucao com Variavel de Ambiente

O Cypress permite passar variaveis de ambiente em tempo de execucao:

```bash
npx cypress run --env userValue=locked_out_user,passwordValue=secret_sauce
```

### Resumo dos Comandos

| Comando | Descricao | Uso recomendado |
|---|---|---|
| `npx cypress open` | Abre a interface interativa do Cypress | Desenvolvimento e depuracao |
| `npx cypress run` | Executa testes em modo headless | CI/CD e execucao automatizada |
| `npx cypress run --browser chrome` | Executa em um navegador especifico | Teste cross-browser |
| `npx cypress run --spec "path"` | Executa um teste especifico | Execucao direcionada |
| `npx cypress run --headed` | Executa em modo headless mas com navegador visivel | Depuracao em modo run |
| `npx cypress run --record` | Grava os resultados no Cypress Dashboard | Monitoramento em equipe |

---

## Configuracao do Cypress

A configuracao principal do Cypress esta no arquivo `cypress.config.js`:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

### Principais opcoes de configuracao disponiveis

| Opcao | Descricao | Exemplo |
|---|---|---|
| `baseUrl` | URL base da aplicacao (evita repetir em cada `cy.visit()`) | `"https://www.saucedemo.com/"` |
| `viewportWidth` | Largura da viewport do navegador | `1280` |
| `viewportHeight` | Altura da viewport do navegador | `720` |
| `defaultCommandTimeout` | Timeout padrao para comandos Cypress (ms) | `10000` |
| `video` | Habilita gravacao de video dos testes | `true` |
| `screenshotOnRunFailure` | Captura screenshot em caso de falha | `true` |
| `retries` | Numero de retentativas em caso de falha | `{ runMode: 2, openMode: 0 }` |

---

## Contribuicao

Contribuicoes sao bem-vindas! Para contribuir:

1. Faca um **fork** do projeto
2. Crie uma nova **branch** para sua feature:
   ```bash
   git checkout -b feature/minha-feature
   ```
3. Faca o **commit** das suas alteracoes:
   ```bash
   git commit -m "feat: adiciona nova feature"
   ```
4. Faca o **push** para a branch:
   ```bash
   git push origin feature/minha-feature
   ```
5. Abra um **Pull Request**

---

## Licenca

Este projeto esta licenciado sob a licenca **ISC**. Consulte o arquivo [package.json](package.json) para mais detalhes.

---

> **Nota:** Este projeto e exclusivamente para fins de estudo e pratica de automacao de testes com Cypress. A aplicacao testada ([Sauce Demo](https://www.saucedemo.com/)) e publica e gratuita.
