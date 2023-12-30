import InventoryPage from '../pages/inventoryPage.js';
import '../support/commands.js';



describe('Inventory Functionality', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should add items to the shopping cart', () => {
    const baseUrl = Cypress.config('baseUrl');
    InventoryPage.addToCart('Sauce Labs Backpack');
    InventoryPage.getShoppingCartBadgeCount().should('eq', '1');
    InventoryPage.goToShoppingCart();
    cy.url().should('eq', `${baseUrl}/cart.html`);
  });


});