// @ts-check
import { test, expect } from '@playwright/test';
import RegistrationPage from '../../src/pageObjects/formSignUp/RegistrationPage';

test.describe('check for btn Register in form Sign up', () => {
  let signUpPopup

  test.beforeEach(async ({page})=>{
    const registrationPage =  new RegistrationPage(page)
    await registrationPage.openPage()
    signUpPopup = await registrationPage.signUp.clickSignUpButton()

    await signUpPopup.fillName('Name')
    await signUpPopup.fillLastName('lastName')
    await signUpPopup.fillEmail('my@email.com')
    await signUpPopup.fillPassword('Password123')

})

test('check disabled btn Register', async ({ page }) => {
  
  await signUpPopup.fillRepeatPassword('Password123!') 

  await expect(signUpPopup.btnRegister, 'btnRegister > error disabled').toBeDisabled();
  
});

test('check enabled btn Register', async ({ page }) => {
  
  await signUpPopup.fillRepeatPassword('Password123') 

  await expect(signUpPopup.btnRegister, 'btnRegister > error disabled').toBeEnabled();
  
});

});