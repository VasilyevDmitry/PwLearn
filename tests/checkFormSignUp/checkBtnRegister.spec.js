// @ts-check
import { test, expect } from '@playwright/test';
import FormSignUp from '../../src/pageObjects/formSignUp/FormSignUp';

test.describe('check for btn Register in form Sign up', () => {
  let signUpPopup

  test.beforeEach(async ({page})=>{
    const formSignUp = new FormSignUp(page)
    await formSignUp.openPage()
    signUpPopup = await formSignUp.signUp.clickSignUpButton()

    await signUpPopup.fill_Name('Name')
    await signUpPopup.fill_LastName('lastName')
    await signUpPopup.fill_Email('my@email.com')
    await signUpPopup.fill_Password('Password123')

})

test('check disabled btn Register', async ({ page }) => {
  
  await signUpPopup.fill_RepeatPassword('Password123!') 

  await expect(signUpPopup.btnRegister, 'btnRegister > error disabled').toBeDisabled();
  
});

test('check enabled btn Register', async ({ page }) => {
  
  await signUpPopup.fill_RepeatPassword('Password123') 

  await expect(signUpPopup.btnRegister, 'btnRegister > error disabled').toBeEnabled();
  
});

});