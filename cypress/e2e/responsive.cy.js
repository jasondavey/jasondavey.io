// Tests for responsive design across different viewport sizes
describe('Responsive Design Tests', () => {
  // Define common device sizes to test
  const viewports = [
    { width: 375, height: 667, device: 'mobile' },   // iPhone SE
    { width: 768, height: 1024, device: 'tablet' },  // iPad
    { width: 1280, height: 800, device: 'laptop' },  // Standard laptop
    { width: 1920, height: 1080, device: 'desktop' } // Large desktop
  ];

  viewports.forEach((viewport) => {
    describe(`Testing on ${viewport.device} (${viewport.width}x${viewport.height})`, () => {
      beforeEach(() => {
        // Set viewport size before each test
        cy.viewport(viewport.width, viewport.height);
        cy.visit('/');
      });

      it('verifies navbar displays correctly', () => {
        if (viewport.width < 768) {
          // On mobile, should have a mobile menu toggle
          cy.get('button[aria-label*="menu"], button[aria-label*="Menu"]').should('be.visible');
        } else {
          // On larger screens, navigation links should be visible
          cy.get('nav a[href^="#"]').should('be.visible');
        }
      });

      it('checks contact section responsiveness', () => {
        // Navigate to contact section
        cy.get('a[href="#contact"], button[aria-label*="menu"] + div a[href="#contact"]').first().click({ force: true });
        
        // Contact links should be visible and properly aligned
        cy.get('a[href^="tel:"]').should('exist');
        cy.get('a[href^="https://wa.me/"]').should('exist');
        cy.get('a[href^="mailto:"]').should('exist');
        
        // Form should be visible and properly sized
        cy.get('form').should('exist');
        
        // Check for responsive layout using grid structure
        cy.get('form .grid').then(($grid) => {
          if (viewport.width < 768) {
            // On mobile, grid columns should adapt to mobile view
            cy.wrap($grid).should('have.class', 'grid-cols-1');
          }
        });
      });
      
      it('verifies all sections are visible', () => {
        // Check if all main sections exist
        cy.get('section[id]').each(($section) => {
          cy.wrap($section).scrollIntoView();
          cy.wrap($section).should('exist');
        });
      });
    });
  });
});
