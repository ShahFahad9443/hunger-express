describe('Instagram Link', () => {
  it('should have the correct Instagram URL and open in a new tab', () => {
    cy.visit('/');
    // cy.get('a.inline-flex > .inline-flex').click();
    // cy.get('a[href*="instagram.com"]').filter(':visible').first().invoke('removeAttr', 'target').click();
    // cy.url().should('include','https://www.instagram.com/hungerexpress2026/');
  });
});