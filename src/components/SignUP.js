import SignUpPopup from "../pageObjects/formSignUp/components/SignUpPopup.js";
import BaseComponents from "./BaseComponents.js";

export default class SignUp extends BaseComponents {
    constructor(page) {
        super(page)
        this.btnSignUp = page.getByText('Sign up')
    }
    async clickSignUpButton(){
        await this.btnSignUp.click()
        return new SignUpPopup(this._page)
    }
}