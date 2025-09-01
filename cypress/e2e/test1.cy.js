import HomePage from "../support/HomePage"
import LoginPage from "../support/LoginPage";
import InventoryPage from "../support/InventoryPage";

describe('Test Suit part 1', () => {

    it('Acess home page', () => {
        HomePage.acessHomePage();
        HomePage.validateHomePage();
        LoginPage.fillUsername();
        LoginPage.fillPassword();
        LoginPage.clickLogin();
        InventoryPage.validateInventoryPage();
    })  

})