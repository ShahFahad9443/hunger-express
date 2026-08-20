describe('About Page',()=>{
     it('Visit about page',()=>{
        cy.viewport(1280, 720);
        cy.visit('/');
        cy.get('[href="/about"] > .flex > .font-medium').click()
        cy.get('.pt-24 > .text-white').should('contain.text', 'About Hunger Express','Our Story')
        
       
     });
});