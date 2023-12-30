class InventoryPage {
  //selectors
  addToCartBtn = '.btn.btn_primary.btn_small.btn_inventory';
  shoppingCart = '.shopping_cart_link';



  visit() {
    cy.visit('/inventory');
  }

  addToCart(itemName) {
    cy.contains(itemName).click();
    cy.get(this.addToCartBtn).click();
  }
  
  getShoppingCartBadgeCount() {
    return cy.get('.shopping_cart_badge').invoke('text').as('cartBadgeCount');
  }

  goToShoppingCart() {
    cy.get(this.shoppingCart).click();
  }
}

export default new InventoryPage();