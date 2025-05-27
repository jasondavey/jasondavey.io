// Tests for contact features including WhatsApp integration
describe('Contact Features', () => {
  beforeEach(() => {
    // Just visit the homepage and add debugging
    cy.visit('/');
    cy.log('Visiting homepage for contact test');
    
    // Log page information for debugging
    cy.document().then((doc) => {
      cy.log('Page title: ' + doc.title);
      cy.log('Body content found: ' + (doc.body ? 'Yes' : 'No'));
    });
  });

  // Basic test to check if any content loaded
  it('checks if page content loaded', () => {
    cy.get('body').should('exist');
    cy.get('#root').should('exist');
  });
  
  // Look for any contact section or related elements
  it('looks for contact section elements', () => {
    // Try to find contact section by id or containing text
    cy.get('body').then($body => {
      // Log number of links on the page
      const links = $body.find('a');
      cy.log(`Found ${links.length} links on the page`);
      
      // Look for any links with WhatsApp
      const whatsappLinks = $body.find('a[href*="wa.me"]');
      cy.log(`Found ${whatsappLinks.length} WhatsApp links on the page`);
      
      if (whatsappLinks.length > 0) {
        cy.log(`WhatsApp link href: ${whatsappLinks.first().attr('href')}`);
      }
      
      // Look for any form elements
      const forms = $body.find('form');
      cy.log(`Found ${forms.length} forms on the page`);
    });
  });
});
