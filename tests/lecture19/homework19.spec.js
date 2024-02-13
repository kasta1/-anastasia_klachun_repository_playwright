import { expect, test } from 'playwright/test'
test.describe('registration flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    const signUpBtn = await page.getByRole('button', { name: 'Sign Up' });
    await  signUpBtn.click();
  })

  test('Check sign up positive test and delete user', async ({ page }) => {
    await page.locator('#signupName').fill('Anastasiia');
    await page.locator('#signupLastName').fill('Klachun');
    await page.locator('#signupEmail').fill('aqa-test-user@test.com');
    await page.locator('#signupPassword').fill('Dragon2000');
    await page.locator('#signupRepeatPassword').fill('Dragon2000');
    await page.getByRole('button', { name: 'Register' }).click();
    const btn = page.getByRole('button', { name: 'Add car' });
    await expect(btn).toBeVisible();
    //delete user
    await page.locator('#userNavDropdown').click();
    await page.getByText('Settings').last().click();
    await page.getByRole('button', { name: 'Remove my account' }).click();
    await page.getByRole('button', { name: 'Remove' }).click();
  })

  test('Check Name field negative test, non english ', async ({ page }) => {
    await page.locator('#signupName').fill('анастасія');
    await page.locator('#signupLastName').click()
    const alert = page.getByText('Name is invalid');
    await expect(alert).toBeVisible();
  })

  test('Check Name field negative test, lenght ', async ({ page }) => {
    await page.locator('#signupName').fill('a');
    await page.locator('#signupLastName').click()
    const alert = page.getByText('Name has to be from 2 to 20 characters long');
    await expect(alert).toBeVisible();
  })

  test('Check Name field negative test, empty field ', async ({ page }) => {
    await page.locator('#signupName').fill('');
    await page.locator('#signupLastName').click()
    const alert = page.getByText('Name required');
    await expect(alert).toBeVisible();
  })

   test('Check Last Name field negative test, non english ', async ({ page }) => {
    await page.locator('#signupLastName').fill('клачун');
    await page.locator('#signupName').click()
    const alert = page.getByText('Last name is invalid');
    await expect(alert).toBeVisible();
  })

  test('Check Last Name field negative test, lenght ', async ({ page }) => {
    await page.locator('#signupLastName').fill('a');
    await page.locator('#signupName').click()
    const alert = page.getByText('Last name has to be from 2 to 20 characters long');
    await expect(alert).toBeVisible();
  })

  test('Check Last Name field negative test, empty field ', async ({ page }) => {
    await page.locator('#signupLastName').fill('');
    await page.locator('#signupName').click()
    const alert = page.getByText('Last name required');
    await expect(alert).toBeVisible();
  })

  test('Check Email field negative test, empty field ', async ({ page }) => {
    await page.locator('#signupEmail').fill('');
    await page.locator('#signupName').click()
    const alert = page.getByText('Email required');
    await expect(alert).toBeVisible();
  })

  test('Check Email field negative test, invalid data ', async ({ page }) => {
    await page.locator('#signupEmail').fill('dgvh');
    await page.locator('#signupName').click()
    const alert = page.getByText('Email is incorrect');
    await expect(alert).toBeVisible();
  })
})
