const base = require('@playwright/test');
const AddCarPopup  = require('../pages/AddCarPopup').default;

exports.test = base.test.extend({

    addCarPopup: async ({ page }, use) => {
        await use(new AddCarPopup(page));
    }

});