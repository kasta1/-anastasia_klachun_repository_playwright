import BaseComponent from './BaseComponent';
export default class Header extends BaseComponent {
    constructor(page) {
        super(page, 'header');
        this.signIn = this._container.locator('.header_signin');
    }
}