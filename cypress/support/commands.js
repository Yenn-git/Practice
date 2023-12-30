// cypress/support/commands.js
import LoginPage from '../pages/loginPage';
import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/cartPage';


Cypress.Commands.add('login', () => {
    
    LoginPage.visit();
    LoginPage.fillUsername();
    LoginPage.fillPassword();
    LoginPage.submit();
  });

Cypress.Commands.add('addProduct', (itemName) => {
    
    InventoryPage.addToCart(itemName);
    InventoryPage.goToShoppingCart();

  });

Cypress.Commands.add('proceedToCheckout', () => {
    
    CartPage.proceedToCheckout();
  });
