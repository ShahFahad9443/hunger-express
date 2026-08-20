describe('Adminlogin Test', ()=>{

    beforeEach(() => {
        cy.adminLogin();
    });
     it('should logout sucessfully', ()=>{
                   
       cy.get('.inline-flex > .font-medium').click()
       cy.get('.bg-destructive').click()
       cy.wait(3000)
       cy.url().should('include','https://hunger-express-nu.vercel.app/');

     
    });

});