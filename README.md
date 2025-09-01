# Projeto de Testes Automatizados com Cypress

Este projeto tem como objetivo praticar **testes automatizados end-to-end (E2E)** utilizando o framework **Cypress**.  
A aplicação escolhida para os testes foi o site [Sauce Demo](https://www.saucedemo.com/), um e-commerce fictício criado para fins de aprendizado.

## 📌 Objetivo do Projeto
- Estudar e aplicar boas práticas de automação de testes com Cypress.
- Utilizar o padrão **Page Object Model (POM)** para manter o código limpo e reutilizável.
- Centralizar seletores em arquivos `elements.js` para facilitar manutenção.
- Organizar dados sensíveis (usuários, senha, URL) em **fixtures**.

## 🧪 Cenários implementados
1. **Acessar a Home Page**  
   - Validar carregamento da tela de login.  
2. **Login com usuário válido**  
   - Preencher credenciais válidas.  
   - Validar que a página de inventário é exibida.  
3. **Validações extras**  
   - Verificar que botões e elementos principais estão visíveis nas páginas.  

## 🛠️ Tecnologias utilizadas
- [Cypress](https://www.cypress.io/)  
- Node.js  
- Page Object Pattern  

## 📂 Estrutura básica do projeto
cypress/
├── e2e/ # Arquivos de testes
│ └── test1.cy.js
├── fixtures/ # Massa de dados
│ └── example.json
├── support/
│ ├── HomePage/ # PageObject da Home
│ ├── LoginPage/ # PageObject do Login
│ └── InventoryPage/ # PageObject do Inventory