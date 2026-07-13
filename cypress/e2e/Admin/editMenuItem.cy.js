describe('editMenuItem',()=>{
     beforeEach(()=>{
        cy.adminLogin();
     })

     it('should edit menu item',()=>{
       cy.url().should('include', '/admin');
        cy.contains('Menu Management').click();
        cy.get('#radix-_r_b_').click();
        cy.contains('Edit').click();
        cy.get('[name="price"]').click().clear().type(2000);
        cy.get(':nth-child(4) > [name="description"]').click().clear().type('its edited by testing');
        cy.get('.text-primary-foreground').click();
        cy.contains('Menu item updated successfully!')
  .should('be.visible');

})

});