const elements = require ('./elements').ELEMENTS;
import example from '../../fixtures/example.json'
require('cypress-xpath');

class HomePage{
    acessHomePage(){
        cy.visit(example.link)
    }
    validateHomePage(){
        cy.get(elements.LOGIN_BUTTON).should('exist')
    }
}

export default new HomePage();