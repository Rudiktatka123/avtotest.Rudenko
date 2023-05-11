const { test, expect, request } = require('@playwright/test');
const { RegistrationPage } = require('../pages/registrationPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let registrationPage;


test.describe('Login tests', () => {

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.open();
    });

    test('Registration with valid data', async ({ page }) => {
        await registrationPage.register('test haana', 'testautn@test.com', 'Tester_321');
        await expect.toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });

    test('Open Sign Up page from Sign In', async ({ page }) => {
        await loginPage.clickSignUplink();
        await expect.toHaveURL('http://omega-stage.qa.nolimit.school/sign-up');
    });
 

});
