//import LoginForm from '../components/LoginForm';
export default class WelcomePage{
    constructor(page){
        this.page = page;
        this.signUpName = this.page.locator('#signupName');
        this.signUpLastName = this.page.locator('#signupLastName');
        this.signUpEmail = this.page.locator('#signupEmail');
        this.signUpPassword = this.page.locator('#signupPassword');
        this.signUpRepeatPassword = this.page.locator('#signupRepeatPassword');
        this.userNavDropdown = this.page.locator('#userNavDropdown');
        // this.signInBtn = this.page.locator('.header_signin');
        // this.loginForm = new LoginForm(this._page);
    }
    // async navigate() {
    //     this._page.goto('/');
    // }
}

