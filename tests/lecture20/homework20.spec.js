const {test,expect} = require('@playwright/test')
const { default: WelcomePage } = require('../../src/pages/WelcomePage');
test.describe('registration flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        const signUpBtn = await page.getByRole('button', { name: 'Sign Up' });
        await  signUpBtn.click();
    })

    test('Check sign up positive test and delete user', async ({ page }) => {
        const welcomePage = new WelcomePage(page);
        await welcomePage.signUpName.fill('Anastasiia');
        await welcomePage.signUpLastName.fill('Klachun');
        await welcomePage.signUpEmail.fill('aqa-test-user@test.com');
        await welcomePage.signUpPassword.fill('Dragon2000');
        await welcomePage.signUpRepeatPassword.fill('Dragon2000');
        await page.getByRole('button', { name: 'Register' }).click();
        const btn = page.getByRole('button', { name: 'Add car' });
        await expect(btn).toBeVisible();
        //delete user
        await welcomePage.userNavDropdown.click();
        await page.getByText('Settings').last().click();
        await page.getByRole('button', { name: 'Remove my account' }).click();
        await page.getByRole('button', { name: 'Remove' }).click();
    })

    test('Check Name field negative test, non english ', async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.signUpName.fill('анастасія');
        await welcomePage.signUpLastName.click()
        const alert = page.getByText('Name is invalid');
        await expect(alert).toBeVisible();
    })

    test('Check Name field negative test, lenght ', async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.signUpName.fill('a');
        await welcomePage.signUpLastName.click()
        const alert = page.getByText('Name has to be from 2 to 20 characters long');
        await expect(alert).toBeVisible();
    })

    test('Check Name field negative test, empty field ', async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.signUpName.fill('');
        await welcomePage.signUpLastName.click()
        const alert = page.getByText('Name required');
        await expect(alert).toBeVisible();
    })

    test('Check Last Name field negative test, non english ', async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.signUpLastName.fill('клачун');
        await welcomePage.signUpName.click()
        const alert = page.getByText('Last name is invalid');
        await expect(alert).toBeVisible();
    })

    test('Check Last Name field negative test, lenght ', async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.signUpLastName.fill('a');
        await welcomePage.signUpName.click()
        const alert = page.getByText('Last name has to be from 2 to 20 characters long');
        await expect(alert).toBeVisible();
    })

    test('Check Last Name field negative test, empty field ', async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.signUpLastName.fill('');
        await welcomePage.signUpName.click()
        const alert = page.getByText('Last name required');
        await expect(alert).toBeVisible();
    })

    test('Check Email field negative test, empty field ', async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.signUpEmail.fill('');
        await welcomePage.signUpName.click()
        const alert = page.getByText('Email required');
        await expect(alert).toBeVisible();
    })

    test('Check Email field negative test, invalid data ', async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.signUpEmail.fill('dgvh');
        await welcomePage.signUpName.click()
        const alert = page.getByText('Email is incorrect');
        await expect(alert).toBeVisible();
    })
})