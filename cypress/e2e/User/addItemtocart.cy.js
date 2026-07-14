describe('add item to cart', () => {
  it('should add item to cart', () => {
    cy.visit('https://hunger-express-nu.vercel.app/');
    // The 'Add to Cart' button for 'Malai Boti Pizza' is visible.
    cy.get('div:nth-child(1) > div.border > div.p-5 > div.items-center > button.font-medium')
      .should('contain.text', 'Add to Cart')
    // The 'Add to Cart' button for 'Double patti Burger.' is visible.
    cy.get('div:nth-child(2) > div.border > div.p-5 > div.items-center > button.font-medium')
      .should('contain.text', 'Add to Cart')
    // The shopping cart icon is visible.
    cy.get('div:nth-child(1) > button.relative > svg.h-5')
      .should('not.be.visible')
    
    cy.get('div:nth-child(1) > div.border > div.p-5 > div.items-center > button.font-medium').click();
    // A success notification 'Malai Boti Pizza added to cart' is displayed.
    cy.get('div.Toastify--animate')
      .should(($el) => {
        expect($el).to.be.visible
        expect($el).to.contain.text('Malai Boti Pizza		 added to cart')
      })
    // The shopping cart item count is now visible and shows '1'.
    cy.get('div.font-bold')
      .should(($el) => {
        expect($el).to.not.be.visible
        expect($el).to.contain.text('1')
      })
    
    cy.get('div:nth-child(2) > div.border > div.p-5 > div.items-center > button.font-medium').click();
    // The cart item count changed from 1 to 2.
    cy.get('div.font-semibold')
      .should(($el) => {
        expect($el).to.not.be.visible
        expect($el).to.contain.text('2')
      })
    // A toast notification appeared with the message 'Double patti Burger. added to cart'.
    cy.get('div.Toastify--animate')
      .should(($el) => {
        expect($el).to.be.visible
        expect($el).to.contain.text('Double patti Burger. added to cart')
      })
    // The cart item count changed from 1 to 2.
    cy.get('div:nth-child(1) > button.relative > div.absolute')
      .should('contain.text', '2')
    
    cy.get('button.mr-2').click();
    // The shopping cart sidebar is visible.
    cy.get('#radix-_R_12lujb_')
      .should('be.visible')
    // The shopping cart title is 'Your Cart'.
    cy.get('#radix-_R_12lujbH1_')
      .should(($el) => {
        expect($el).to.be.visible
        expect($el).to.contain.text('Your Cart')
      })
    // The item 'Malai Boti Pizza' is in the cart.
    cy.get('#radix-_R_12lujb_ div:nth-child(1) div.items-start div.flex-1 h4.font-medium')
      .should(($el) => {
        expect($el).to.be.visible
        expect($el).to.contain.text('Malai Boti Pizza')
      })
    // The item 'Double patti Burger.' is in the cart.
    cy.get('#radix-_R_12lujb_ div:nth-child(2) > div.items-start > div.flex-1 > h4.font-medium')
      .should(($el) => {
        expect($el).to.be.visible
        expect($el).to.contain.text('Double patti Burger.')
      })
    
    // The total amount is 'Rs. 3050'.
    cy.get('#radix-_R_12lujb_ div.font-semibold span:nth-child(2)')
      .should(($el) => {
        expect($el).to.be.visible
        expect($el).to.contain.text('Rs. 3050')
      })
    
  })
})
