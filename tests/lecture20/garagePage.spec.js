import {test, expect } from '@playwright/test';
import GaragePage from '../../src/pages/GaragePage';
test. describe('Garage page', () => {
    test.only('should have Add btn',
        async ({ page }) => {
            const garagePage = new GaragePage (page);
            await
                garagePage.navigate();
        });
});