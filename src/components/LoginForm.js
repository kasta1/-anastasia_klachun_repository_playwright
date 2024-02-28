import BaseComponent from './BaseComponent'
export default  class  LoginForm extends BaseComponent{
    constructor(page) {
        super(page,'app-signin-modal');
        this.emailInput = this._container.locator('#signinEmail');
        this.errorMsg = this._container.locator('.invalid-feedback');
    }
}


// export default class LoginForm {
//     constructor (page) {
//         this._page = page;
//         this._container = this._page.locator('app-signin-modal');
//         this.emailInput = this._container.locator('#signinEmail');
//         this.errorMsg = this._container.locator('.invalid-feedback');
//     }
//     get emailInput() {
//
//     }
// }