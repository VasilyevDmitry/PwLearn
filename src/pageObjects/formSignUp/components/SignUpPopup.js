import BaseComponents from "../../../components/BaseComponents.js";

export default class SignUpPopup extends BaseComponents {
     constructor(page) {
          super(page,  page.getByText('Sign up'))

     this.fieldName = page.locator('#signupName')
     this.fieldLastName = page.locator('#signupLastName')
     this.fieldEmail = page.locator('#signupEmail')
     this.fieldPassword = page.locator('#signupPassword')
     this.fieldRepeatPassword = page.locator('#signupRepeatPassword')
     this.btnRegister = page.getByRole('button', { name: 'Register'})
     this.btnMyProfileIsVisible = page.getByRole('button', { name: 'My profile'})
     this.textInvalidFeedback = page.locator('.invalid-feedback')
     }
 
     async fillName (name) {
          await this.fieldName.fill(name)
     }

     async fillLastName (lastName) {
          await this.fieldLastName.fill(lastName)
     }

     async fillEmail (email) {
          await this.fieldEmail.fill(email)
     }

     async fillPassword (password) {
          await this.fieldPassword.fill(password)
     }

     async fillRepeatPassword (repeatPassword) {
          await this.fieldRepeatPassword.fill(repeatPassword)
     }

     async clickEmail() {
          await this.fieldEmail.click()
     }

     async clickBtnRegister () {
          await this.btnRegister.click()
     }

     async clickName () {
          await this.fieldName.click()
     }

     async clickLastName () {
          await this.fieldLastName.click()
     }

     async clickPassword () {
          await this.fieldPassword.click()
     }

     async clickRepeatPassword () {
          await this.fieldRepeatPassword.click()
     }
 }