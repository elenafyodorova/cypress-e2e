// SELECTORS
const BUTTON = "button";

export default class ButtonComponent {
	clickOnButton(text: string): void {
		cy.getCy(BUTTON).contains(text).click()
	}
}