//npx playwright test
//npx playwright show-report

const { test, expect } = require('@playwright/test')

test.describe('example tests', () => {
  test.describe('asaf', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/')
    })

    test('has (Guest log in) text', async ({ page }) => {
      await expect(page.locator('.-guest')).toHaveText('Guest log in')
    })

    test('Check text (Garage)', async ({ page }) => {
      await page.locator('.-guest').click()
      await expect(page.locator('.panel-page_heading')).toHaveText(
        'GarageAdd car',
      )
    })
  })
})

// test.beforeAll(()=>{
//   console.log('before all')
// })
// test.afterAll(()=>{
//   console.log('after all')
// })
// test.beforeEach(async ({page})=>{
//   await page.goto(('/'))
//   console.log('before each')
// })
// test.afterEach(()=>{
//   console.log('after each')
// })
