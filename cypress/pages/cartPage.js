class CartPage {
    //Selectors
    checkoutBtn = '.btn.btn_action.btn_medium.checkout_button'

    visit() {
        cy.visit('/cart');
    }

    proceedToCheckout() {
        cy.get(this.checkoutBtn).click();
    }
}

export default new CartPage();