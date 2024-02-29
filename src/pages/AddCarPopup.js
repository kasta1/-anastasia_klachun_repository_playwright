export default class AddCarPopup {
    constructor(page) {
        this.page = page;
        this.carBrandInput = this.page.locator('#addCarBrand');
        this.carModelInput = this.page.locator('#addCarModel');
        this.carMileageInput = this.page.locator('#addCarMileage');
        this.addCarBtn = this.page.getByRole('button', { name: 'Add' });
        this.addCarBtnMain = this.page.getByText('Add car');
    }

    async addAudi() {
        await this.addCarBtnMain.click();
        await this.carBrandInput.selectOption({ label: 'Audi' });
        await this.carModelInput.selectOption({ label: 'Q7' });
        await this.carMileageInput.fill('2');
        await this.addCarBtn.click();
    }

    async addBmw(text) {
        await this.addCarBtnMain.click()
        await this.carBrandInput.selectOption({ label: 'BMW' });
        await this.carModelInput.selectOption({ label: '3' });
        await this.carMileageInput.fill('2');
        await this.addCarBtn.click();
    }
}