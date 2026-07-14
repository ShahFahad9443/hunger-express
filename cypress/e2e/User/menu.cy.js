describe('menu',()=>{
     it('should display menu items',()=>{
        cy.viewport(1280, 720);
        cy.visit('/');
        cy.get('[href="/menu"] > .flex > .font-medium').click()
        cy.get('.bg-white > .flex').should('contain.text', 'All Items','Pizza','Burgers','Desserts')
        cy.get('#Pizza').should('contain.text', 'Add to Cart')
        
       
     });
});