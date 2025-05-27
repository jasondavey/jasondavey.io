// Tests for contact features including WhatsApp integration
describe('Contact Features', () => {
  beforeEach(() => {
    cy.visit('/#contact');
  });

  it('ensures WhatsApp link has correct format', () => {
    // Find the WhatsApp link
    cy.get('a[href^="https://wa.me/"]').as('whatsappLink');
    
    // The link should exist
    cy.get('@whatsappLink').should('exist');
    
    // Check link format - should only contain numbers in the phone portion
    cy.get('@whatsappLink').invoke('attr', 'href').should('match', /https:\/\/wa\.me\/\d+/);
    
    // Should have proper attributes for external links
    cy.get('@whatsappLink').should('have.attr', 'target', '_blank');
    cy.get('@whatsappLink').should('have.attr', 'rel', 'noopener noreferrer');
    
    // Should have proper aria-label
    cy.get('@whatsappLink').should('have.attr', 'aria-label', 'WhatsApp call');
    
    // Should contain the WhatsApp icon
    cy.get('@whatsappLink').find('svg').should('exist');
  });

  it('tests contact form validation', () => {
    // Form should exist
    cy.get('form').should('exist');
    
    // Test validation - try to submit empty form
    cy.get('button[type="submit"]').should('be.disabled');
    
    // Fill in with invalid data
    cy.get('input[name="name"]').type('A');
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('textarea[name="message"]').type('Short message');
    
    // Button should still be disabled with invalid data
    cy.get('button[type="submit"]').should('be.disabled');
    
    // Check validation messages
    cy.get('p[id="name-validation"]').should('not.be.empty');
    cy.get('p[id="email-validation"]').should('not.be.empty');
    cy.get('p[id="message-validation"]').should('not.be.empty');
    
    // Clear and fill with valid data
    cy.get('input[name="name"]').clear().type('Test User');
    cy.get('input[name="email"]').clear().type('test@example.com');
    cy.get('textarea[name="message"]').clear().type('This is a test message that should be long enough to pass validation. Just adding some more text to make sure it meets the minimum length requirement for the message field.');
    
    // Button should now be enabled
    cy.get('button[type="submit"]').should('not.be.disabled');
  });
});
