const {test,expect} = require('@playwright/test')
const { default: WelcomePage } = require('../../src/pages/welcomePage/WelcomePage');
test.describe('logged user', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
        const signUpBtn = await page.getByRole('button', { name: 'Sign Up' });
        await  signUpBtn.click();
    })


    test('user should be able to add car', async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.signUpName.fill('a');
        await welcomePage.signUpLastName.click()
        const alert = page.getByText('Name has to be from 2 to 20 characters long');
        await expect(alert).toBeVisible();
    })
})