const base = require('@playwright/test');
const AddCarPopup = require("../pages/AddCarPopup");

module.exports = {
        addCar1: async ({ page }, use) => {
                const addCarPopup = new AddCarPopup(page);
                await addCarPopup.addCarBtnMain.click();
                await addCarPopup.carBrandInput.selectOption({ label: 'Audi' });
                await addCarPopup.carModelInput.selectOption({ label: 'Q7' });
                await addCarPopup.carMileageInput.fill('2');
                await addCarPopup.addCarBtn.click();
                await use(addCar1);
        },
}