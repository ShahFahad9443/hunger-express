describe('Adminlogin Test', ()=>{
     it('should login sucessfully', ()=>{
              cy.fixture('login').then((user) => {

        cy.viewport(1280, 720);
        cy.visit('https://hunger-express-nu.vercel.app/');
        cy.contains('Account').click()
        cy.contains('Sign In').click()
        
        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);
        cy.get('button[type="submit"]').click();

        cy.wait(5000);
        cy.url().should('include','/admin');

     });
    });

});