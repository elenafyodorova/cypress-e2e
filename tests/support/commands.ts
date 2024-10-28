Cypress.Commands.add("getCy", (selector: string) => {
    return cy.get(`[data-cy=${selector}]`)
})

Cypress.Commands.add('stepScreenshot', (screenshotName: string) => {
    cy.window().then((window) => {
        const width = window.innerWidth;
        const prefix = width === 375 ? 'mobile' : 'desktop';
        cy.screenshot(`${screenshotName}-${prefix}`);
    });
});