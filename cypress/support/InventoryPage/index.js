const elements = require ('./elements').ELEMENTS;
import example from '../../fixtures/example.json'
require('cypress-xpath');

class InventoryPage{

    validateInventoryPage(){
        cy.get(elements.MENU_BUTTON).should('exist')
    }

}

export default new InventoryPage();