// Tests for verifying all links work correctly
describe('Link Functionality Tests', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/');
  });

  it('verifies all navigation links', () => {
    // Test each navigation link in the navbar
    cy.get('nav a[href^="#"]').each(($link) => {
      const href = $link.attr('href');
      if (href && href.startsWith('#')) {
        // Click the link
        cy.wrap($link).click({force: true});
        
        // Verify the section is visible (using the ID without the #)
        const sectionId = href.substring(1);
        cy.get(`#${sectionId}`).should('exist');
      }
    });
  });

  it('verifies external links have correct attributes', () => {
    // Check that all external links have target="_blank" and rel="noopener noreferrer"
    cy.get('a[href^="http"], a[href^="https"]').each(($el) => {
      cy.wrap($el).should('have.attr', 'target', '_blank');
      cy.wrap($el).should('have.attr', 'rel', 'noopener noreferrer');
    });
  });

  it('checks contact links have correct formats', () => {
    // Navigate to contact section
    cy.get('a[href="#contact"]').first().click({force: true});
    
    // Check phone link
    cy.get('a[href^="tel:"]').should('exist');
    
    // Check WhatsApp link
    cy.get('a[href^="https://wa.me/"]').should('exist')
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener noreferrer');
    
    // Check email link
    cy.get('a[href^="mailto:"]').should('exist');
  });

  it('verifies document download links exist', () => {
    // Check that PDF links exist without trying to download them
    cy.get('a[href$=".pdf"]').should('exist');
    
    // Verify specific resume and patent links if they exist
    cy.get('a[href*="jasonrdavey.pdf"]').should('have.attr', 'download');
    cy.get('a[href*="JasonDaveyPatent.pdf"]').should('have.attr', 'target', '_blank');
  });

  it('checks theme toggle exists', () => {
    // Just verify the theme toggle button exists without clicking it
    cy.get('button[aria-label*="mode"], button[aria-label*="theme"], button[aria-label*="Mode"], button[aria-label*="Theme"], button:has(svg), button:has(.sun), button:has(.moon)')
      .should('exist');
    cy.log('Theme toggle button exists');
  });
});
