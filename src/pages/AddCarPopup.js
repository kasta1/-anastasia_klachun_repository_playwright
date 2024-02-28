export default class AddCarPopup {
    constructor(page) {
        this.page = page;
        this.carBrandInput = this.page.locator('#addCarBrand');
        this.carModelInput = this.page.locator('#addCarModel');
        this.carMileageInput = this.page.locator('#addCarMileage');
        this.addCarBtn = this.page.getByRole('button', { name: 'Add' });
        this.addCarBtnMain = this.page.getByText('Add car');
    }
}