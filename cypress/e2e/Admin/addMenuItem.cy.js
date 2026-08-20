// describe('Add Menu Item', () => {


    describe('Add Menu Item', () => {

    beforeEach(() => {
        cy.adminLogin();
    });

    it('should login as admin', () => {

        cy.url().should('include', '/admin');
        cy.contains('Menu Management').click();
        cy.get('#radix-_r_5_-trigger-items').click()
        cy.get('#radix-_r_5_-trigger-add').click()
    


        cy.fixture('addItem.json').then((item) => {
        cy.get('[name="name"]').clear().type(item.name);
       cy.get(':nth-child(4) > [name="description"]').clear().type(item.description);
        cy.get('[name="price"]').clear().type(item.price);
        // cy.get('.grid > :nth-child(1) > :nth-child(3) > .flex').select(item.category);
        // cy.get('button[role="combobox"]').click();
        //   cy.contains(item.category).click();

        cy.get('button[role="combobox"]').click();
        cy.contains('span', 'Snacks').should('be.visible').click();
       cy.get('input[type="file"]').selectFile('cypress/fixtures/wallpaper.jpeg', {force: true});
        cy.get('.text-primary-foreground').click();

});

    });

});