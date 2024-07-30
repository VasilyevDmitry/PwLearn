import {expect} from "@playwright/test";
import SignUp from "../components/SignUP.js";

export default class BasePage {
    constructor(page, url, waitPageLocator) {
        this._page = page
        this._url = url
        this._waitPageLocator = waitPageLocator
        this.signUp = new SignUp(page)
    }
    async openPage(){
        await this._page.goto(this._url)
        await expect(this._waitPageLocator).toBeVisible()
    }
}
