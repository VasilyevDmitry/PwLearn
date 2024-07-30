import BasePage from "../BasePage.js";

export default class FormSignUp extends BasePage {
    constructor(page) {
        super(page, '/', page.locator('.header-link.-guest') )
    }
}