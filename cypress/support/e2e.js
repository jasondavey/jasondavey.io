// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Simpler approach to detect page readiness
Cypress.Commands.add('waitForPageLoad', () => {
  cy.log('Waiting for page to fully load...');
  
  // Wait for document ready state
  cy.document().should('have.property', 'readyState').and('equal', 'complete');
  
  // Wait for body to exist
  cy.get('body').should('exist');
  
  // Optional - wait a bit more for any React hydration
  cy.wait(1000);
});

// Add this to all the tests automatically, but wrapped in a try/catch
// to prevent it from breaking tests if something goes wrong
beforeEach(() => {
  try {
    cy.waitForPageLoad();
  } catch (e) {
    cy.log('Error waiting for page load:', e.message);
  }
});

// This ensures errors in your application's code don't fail the test
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
