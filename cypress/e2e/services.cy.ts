describe('Services Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the services title', () => {
    cy.get('.services__title').should('have.text', 'Serviços');
  });

  it('displays the services subtitle', () => {
    const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    cy.get('.services__subtitle').should('have.text', subtitle);
  });

  it('displays the offered services', () => {
    cy.get('.services__offered-services-grid').within(() => {
      cy.get('.services__grid-card-item').its('length').should('be.gt', 0);

      cy.get('.services__grid-card-item').first().within(() => {
        cy.get('.services__icon').should('be.visible');
        cy.get('.services__service-title').should('have.text', 'RHONCUS PURUS IN');
        cy.get('.services__service-description')
          .should('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
      });
    });
  });
});
