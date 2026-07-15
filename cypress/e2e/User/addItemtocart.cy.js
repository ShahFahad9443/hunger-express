describe('add item to cart', () => {
  it('should add item to cart', () => {
    cy.visit('/');
    cy.get('.flex > :nth-child(1) > a > .inline-flex').click();
    cy.get('.pt-24 > .container > .text-center').should('contain.text', 'Our Menu');
    cy.contains('Malai Boti Pizza').parentsUntil('.rounded-lg').parent().contains('button', 'Add to Cart').click();
    
    cy.get('svg.lucide-shopping-cart').parent().filter(':visible').click();
    cy.get('.overflow-auto > .mb-4').should('contain.text', 'Malai Boti Pizza').and('contain.text', 'Rs. 2000');
  })
})
