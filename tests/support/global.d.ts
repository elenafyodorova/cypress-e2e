declare namespace Cypress {
    interface Chainable {
        getCy(selector: string)
        stepScreenshot(screenshotName: string)
    }
}