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
 
     async fill_Name (name) {
     name && await this.fieldName.fill(name)
     }

     async fill_LastName (lastName) {
          lastName && await this.fieldLastName.fill(lastName)
     }

     async fill_Email (email) {
          email && await this.fieldEmail.fill(email)
     }

     async fill_Password (password) {
          password && await this.fieldPassword.fill(password)
     }

     async fill_RepeatPassword (repeatPassword) {
          repeatPassword && await this.fieldRepeatPassword.fill(repeatPassword)
     }

     async click_Email() {
          await this.fieldEmail.click()
     }

     async click_btnRegister () {
          await this.btnRegister.click()
     }

     async click_Name () {
          await this.fieldName.click()
     }

     async click_LastName () {
          await this.fieldLastName.click()
     }

     async click_Password () {
          await this.fieldPassword.click()
     }
     
     async click_RepeatPassword () {
          await this.fieldRepeatPassword.click()
     }
 }