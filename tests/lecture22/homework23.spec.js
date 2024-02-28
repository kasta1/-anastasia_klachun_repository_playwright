const {test,expect} = require('@playwright/test')
import { addCar1 } from '../../src/fixture/addCar';
const AddCarPopup = require('../../src/pages/AddCarPopup').default;
const AddExpensePopup= require('../../src/pages/AddExpensePopup').default;
const FuelExpensesPage= require('../../src/pages/FuelExpensesPage').default;
test.describe('logged user', () => {
    let addCarPopup;
    let addExpensePopup;
    let fuelExpensesPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const guestLogIn = await page.getByRole('button', { name: 'Guest log in' });
        await guestLogIn.click();
        addCarPopup = new AddCarPopup(page);
        addExpensePopup = new AddExpensePopup(page);
        fuelExpensesPage = new FuelExpensesPage(page);
    });

    test('user doesn\'t have a car', async ({ page }) => {
        await fuelExpensesPage.goToFuelPage.click();
        await addExpensePopup.addExpenseBtn.isDisabled()
        await page.locator('svg[width="128"][height="128"]').isVisible()
        await page.getByText('You don’t have any cars in ').isVisible()
        await page.getByRole('link', { name: 'your garage' }).isVisible()
        await page.getByRole('link', { name: 'your garage' }).click()
        await page.getByRole('heading', { name: 'Garage' }).isVisible()
    });
    test('user has the car but no expenses', async ({ page }) => {
        await addCarPopup.addCarBtnMain.click();
        await addCarPopup.carBrandInput.selectOption({ label: 'Audi' });
        await addCarPopup.carModelInput.selectOption({ label: 'Q7' });
        await addCarPopup.carMileageInput.fill('2');
        await addCarPopup.addCarBtn.click();
        await fuelExpensesPage.goToFuelPage.click();
        await addExpensePopup.addExpenseBtn.isEnabled()
        await addExpensePopup.addExpenseBtn.click()
        await addExpensePopup.popupPage.isVisible()
        await addExpensePopup.canselBtn.click()
        await page.getByRole('heading', { name: 'Fuel expenses' }).isVisible()
        await page.locator('svg[width="128"][height="128"]').isVisible()
        await page.getByText('You don’t have any fuel expenses filed in').isVisible()
    });

    test('fuel expenses table', async ({ page }) => {
        await addCarPopup.addCarBtnMain.click()
        await addCarPopup.carBrandInput.selectOption({ label: 'BMW' });
        await addCarPopup.carModelInput.selectOption({ label: '3' });
        await addCarPopup.carMileageInput.fill('2');
        await addCarPopup.addCarBtn.click();
        await addCarPopup.addCarBtnMain.click();
        await addCarPopup.carBrandInput.selectOption({ label: 'Audi' });
        await addCarPopup.carModelInput.selectOption({ label: 'Q7' });
        await addCarPopup.carMileageInput.fill('2');
        await addCarPopup.addCarBtn.click();
        await fuelExpensesPage.goToFuelPage.click();
        await addExpensePopup.addExpenseBtn.isEnabled()
        await addExpensePopup.addExpenseBtn.click()
        await addExpensePopup.addExpenseMileage.fill('3');
        await addExpensePopup.addExpenseLiters.fill('1');
        await addExpensePopup.addExpenseTotalCost.fill('10');
        await addExpensePopup.addBtn.click()
        await addExpensePopup.addExpenseBtn.click()
        await addExpensePopup.addExpenseMileage.fill('4');
        await addExpensePopup.addExpenseLiters.fill('12');
        await addExpensePopup.addExpenseTotalCost.fill('12');
        await addExpensePopup.addBtn.click()
        await page.getByRole('heading', { name: 'Fuel expenses' }).isVisible()
        await page.locator('#carSelectDropdown').isVisible();
        await page.locator('#carSelectDropdown').click();
        await page.getByText('Audi Q7').click()
        await page.locator('#carSelectDropdown').click();
        await page.getByText('BMW 3').click()
        await page.getByRole('heading', { name: 'Date' }).isVisible()
        await page.getByRole('heading', { name: 'Mileage' }).isVisible()
        await page.getByRole('heading', { name: 'Liters used' }).isVisible()
        await page.getByRole('heading', { name: 'Total cost' }).isVisible()
    });

    test('The user can remove expense entries', async ({ page }) => {
        await addCarPopup.addCarBtnMain.click()
        await addCarPopup.carBrandInput.selectOption({ label: 'BMW' });
        await addCarPopup.carModelInput.selectOption({ label: '3' });
        await addCarPopup.carMileageInput.fill('2');
        await addCarPopup.addCarBtn.click();
        await fuelExpensesPage.goToFuelPage.click();
        await addExpensePopup.addExpenseBtn.click()
        await addExpensePopup.addExpenseMileage.fill('3');
        await addExpensePopup.addExpenseLiters.fill('1');
        await addExpensePopup.addExpenseTotalCost.fill('10');
        await addExpensePopup.addBtn.click()
        await page.locator('.font-weight-bold').hover()
        await page.locator('.icon-delete').isVisible()
        await page.locator('.btn-delete').click();
        await page.locator('.modal-content').isVisible();
        await page.getByText('Do you really want to remove fuel expense entry from').isVisible()
        await page.getByRole('button', { name: 'Cancel' }).isVisible();
        await page.getByRole('button', { name: 'Cancel' }).click();
        await page.locator('.modal-content').isHidden();
        await page.locator('.font-weight-bold').hover()
        await page.locator('.btn-delete').click();
        await page.getByRole('button', { name: 'Remove' }).isVisible();
        await page.getByRole('button', { name: 'Remove' }).click()
        await page.locator('.modal-content').isHidden();
        await page.getByText('Do you really want to remove fuel expense entry from').isVisible()

    });
    test('user can edit expense entries', async ({ page }) => {
        await addCarPopup.addCarBtnMain.click()
        await addCarPopup.carBrandInput.selectOption({ label: 'BMW' });
        await addCarPopup.carModelInput.selectOption({ label: '3' });
        await addCarPopup.carMileageInput.fill('2');
        await addCarPopup.addCarBtn.click();
        await fuelExpensesPage.goToFuelPage.click();
        await addExpensePopup.addExpenseBtn.click()
        await addExpensePopup.addExpenseMileage.fill('3');
        await addExpensePopup.addExpenseLiters.fill('1');
        await addExpensePopup.addExpenseTotalCost.fill('10');
        await addExpensePopup.addBtn.click()
        await page.locator('.font-weight-bold').hover()
        await page.locator('.icon-edit').isVisible()
        await page.locator('.btn-edit').click();
        await page.locator('.modal-content').isVisible();
    });

})