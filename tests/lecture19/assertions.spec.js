import{test} from '@playwright/test'
import {expect} from "playwright/test";
test.describe('assertions',()=>{
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

test('non retrying assertion',async ({page})=>{
const signInBtn = await page.locator('.btn',{hasText:'sign in'})
  const  title = await signInBtn.textContent()
  await  expect(title).toBe('sign in')
})

    test(' autoretrying assertion',async ({page})=>{
        const signInBtn = await page.locator('.btn',{hasText:'sign in'})

       await expect.soft(signInBtn,'autoretry').toHaveText('sign in',{ignoreCase: true});
    })

    test(' to have screenshot',async ({page})=>{
        const heroDesc = await page.locator('.hero-descriptor')

        await expect(heroDesc).toHaveScreenshot('hero-desc.png',{maxDiffPixelRatio:0.02})
    })



})