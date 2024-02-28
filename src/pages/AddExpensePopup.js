export default class AddExpensePopup {
    constructor(page) {
        this.page = page;
        this.addExpenseBtn = this.page.getByRole('button', { name: 'Add an expense' });
        this.popupPage = this.page.locator('.modal-content');
        this.canselBtn = this.page.getByRole('button', { name: 'Cancel' });
        this.addExpenseMileage = this.page.locator('#addExpenseMileage');
        this.addExpenseLiters = this.page.locator('#addExpenseLiters');
        this.addExpenseTotalCost = this.page.locator('#addExpenseTotalCost');
        this.addBtn = this.page.getByRole('button', { name: 'Add' });

    }
}