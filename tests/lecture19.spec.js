import { expect, test } from 'playwright/test'

test.describe('queries', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('Check 2 btns locators', async ({ page }) => {
        const aboutBtn = page.getByRole('button', { name: 'About' })
        const aboutBtn2 = page.locator('.btn', { hasText: 'About' })
        await expect(aboutBtn).toBeVisible()
        await expect(aboutBtn2).toBeVisible()
    })

    test('Check btn locators', async ({ page }) => {
        const btns = page.locator('.btn.header-link');
        await expect(btns.first()).toBeVisible();
        await expect(btns.last()).toBeVisible();
        await expect(btns.nth(1)).toBeVisible();

        const btnsNumber = await btns.count();
        for (let idx =0; idx<btnsNumber; idx++){
            await expect(btns.nth(idx)).toBeVisible();
        }
        for(const btn of await btns.all()) {
            await expect(btn).toBeVisible();
        }
    })

    test('locator changing', async ({page})=> {
        const headerLeftBtns = page.locator('.header-left').locator('.btn');
        const headerLeftBtns2 = page.locator('.header-left').getByRole('button');
        const button = page.getByRole('button').and(page.getByTitle('Subscribe'));
    });

    test('locator filtering', async ({page})=> {
        const Btns = page.locator('.btn.header-link');
        const headerContainer = page.locator('.container',{has: page.locator('.header_inner')});
        console.log(await headerContainer.count());

        const aboutBtns = Btns.filter({hasText:'About'});
        await  expect(aboutBtns).toHaveText('About')

    });

})
