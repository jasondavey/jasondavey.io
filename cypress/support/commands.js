// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to find element with retry and better error messages
Cypress.Commands.add('findElement', (selector, options = {}) => {
  const defaultOptions = { 
    timeout: 10000, 
    retries: 3,
    log: true,
    description: selector
  };
  
  const opts = { ...defaultOptions, ...options };
  
  if (opts.log) {
    Cypress.log({
      name: 'findElement',
      message: `Looking for: ${opts.description}`,
    });
  }
  
  return cy.get(selector, { timeout: opts.timeout });
});

// Custom command to check for WhatsApp link (based on memory of site structure)
Cypress.Commands.add('findWhatsAppLink', () => {
  return cy.findElement('a[href^="https://wa.me/"]', { 
    description: 'WhatsApp Call Link' 
  });
});

// Custom command to check for patent document (based on memory)
Cypress.Commands.add('findPatentDocument', () => {
  return cy.findElement('a[href*="JasonDaveyPatent.pdf"]', { 
    description: 'Patent Document Link' 
  });
});

// Custom command to navigate to a section using navbar
Cypress.Commands.add('navigateToSection', (sectionName) => {
  return cy.findElement(`a[href="#${sectionName}"]`, { 
    description: `${sectionName} section link`
  }).click({ force: true });
});
