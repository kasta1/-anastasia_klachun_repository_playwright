export default class FuelExpensesPage {
    constructor(page) {
        this.page = page;
        this.goToFuelPage = this.page.getByRole('link', { name: 'Fuel expenses', exact: true });
        this.noCarText = this.page.getByText('You don’t have any cars in ');
        this.noCarLink = this.page.getByRole('link', { name: 'your garage' });
        this.noExpensesText = this.page.getByText('You don’t have any fuel expenses filed in');

    }
}