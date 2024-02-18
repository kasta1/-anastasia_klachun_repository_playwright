export default class GaragePage {
    constructor(page) {
        this._page = page;
        this.addCarBtn = this._page.getByRole('button', {name: 'Add car'});
    }
    async navigate() {
        return this._page.goto('/panel/garage');
    }
}
