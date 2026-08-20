describe('Gallery Page', () => {

  beforeEach(() => {
    cy.visit('https://hunger-express-nu.vercel.app/gallery')
  })

  it('should open gallery page', () => {
    cy.url().should('include', '/gallery')
  })

})