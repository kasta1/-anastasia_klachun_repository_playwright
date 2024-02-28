import { test } from '@playwright/test';
import AddCarPopup from '../pages/AddCarPopup';
import AddExpensePopup from '../pages/AddExpensePopup';
import FuelExpensesPage from '../pages/FuelExpensesPage';

export const addCar1 = async () => {
    const addCarPopup = new AddCarPopup(test.page);
    await addCarPopup.addCarBtnMain.click();
    await addCarPopup.carBrandInput.selectOption({ label: 'Audi' });
    await addCarPopup.carModelInput.selectOption({ label: 'Q7' });
    await addCarPopup.carMileageInput.fill('2');
    await addCarPopup.addCarBtn.click();
};

export const addCar2 = async () => {
    const addCarPopup = new AddCarPopup(test.page);
    await addCarPopup.addCarBtnMain.click()
    await addCarPopup.carBrandInput.selectOption({ label: 'BMW' });
    await addCarPopup.carModelInput.selectOption({ label: '3' });
    await addCarPopup.carMileageInput.fill('2');
    await addCarPopup.addCarBtn.click();
};

export const addExpense = async () => {
    const addExpensePopup = new AddExpensePopup(test.page);
    await addExpensePopup.addExpenseBtn.isEnabled();
    await addExpensePopup.addExpenseBtn.click();
    await addExpensePopup.popupPage.isVisible();
    await addExpensePopup.cancelBtn.click();
};