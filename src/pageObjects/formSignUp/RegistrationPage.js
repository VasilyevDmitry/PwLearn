import SignUp from "../../components/SignUP.js";
import BasePage from "../BasePage.js";

export default class RegistrationPage extends BasePage {
    constructor(page) {
        super(page, '/', page.locator('.header-link.-guest') )
        this.signUp = new SignUp(page)
    }
}