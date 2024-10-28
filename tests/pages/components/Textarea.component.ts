const SELECTORS = {
    TEXTAREA: "textarea",
};

export default class TextareaComponent {
    verifyTextarea(): void {
        cy.get(SELECTORS.TEXTAREA).should('be.visible');
    }

    enterQuery(text: string): void {
        cy.get(SELECTORS.TEXTAREA).first().should('be.visible').type(text);
    }
}