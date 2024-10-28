import { Before, Given, Then } from '@badeball/cypress-cucumber-preprocessor'

import { MainPage } from '@/tests/pages/Main.page';
import { saveBrowserDetails, saveDeviceDetails } from "@/tests/support/utils";

const page = new MainPage();

Before(() => {
    saveBrowserDetails();
})

Given('Я открываю вебсайт на iphone-6', function () {
    const deviceName = 'iphone-6';
    saveDeviceDetails(deviceName);
    cy.viewport(deviceName);
    cy.visit('/');
})

Given('Я открываю вебсайт на macbook-13', function () {
    const deviceName = 'macbook-13';
    saveDeviceDetails(deviceName);
    cy.viewport(deviceName);
    cy.visit('/');
});

Given('Я на главной странице google.com', function () {
    cy.url().should('eq', 'https://www.google.com/')
})

Given('Я вижу поле для поиска', function () {
    page.textarea.verifyTextarea()
})

Then('ввожу {string} в поле для поиска', function (text: string) {
    page.textarea.enterQuery(text);
})
