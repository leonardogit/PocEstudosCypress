const elements = require ('./elements').ELEMENTS;
import example from '../../fixtures/example.json'
require('cypress-xpath');

class LoginPage{
    fillUsername(){
        cy.get(elements.USERNAME_INPUT).click().type(example.userValue)
    }
    fillPassword(){
        cy.get(elements.PASSWORD_INPUT).click().type(example.passwordValue)
    }
    clickLogin(){
        cy.get(elements.LOGIN_BUTTON).click()
    }
}

export default new LoginPage();