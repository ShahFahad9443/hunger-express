// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// Cypress.Commands.add('adminLogin', ()=>{
//      it('should login sucessfully', ()=>{
//               cy.fixture('login').then((user) => {

//         cy.viewport(1280, 720);
//         cy.visit('https://hunger-express-nu.vercel.app/');
//         cy.contains('Account').click()
//         cy.contains('Sign In').click()
        
//         cy.get('#email').type(user.email);
//         cy.get('#password').type(user.password);
//         cy.get('button[type="submit"]').click();

//         cy.wait(5000);
//         cy.url().should('include','/admin');

//      });
//     });

// });
Cypress.Commands.add('adminLogin', () => {

    cy.fixture('login').then((user) => {

        cy.viewport(1280, 720);

        cy.visit('https://hunger-express-nu.vercel.app/');

        cy.contains('Account').click();
        cy.contains('Sign In').click();

        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);

        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/admin');

    });

});