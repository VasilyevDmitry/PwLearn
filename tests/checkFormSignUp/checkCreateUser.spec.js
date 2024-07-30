// @ts-check
import { test, expect } from '@playwright/test';
import FormSignUp from '../../src/pageObjects/formSignUp/FormSignUp';

test.describe('create User', () => {
  
  test('check сreate User', async ({ page }) => {
    let email = `aqa-myEmail${Math.round(Math.random()*100)}@email.com`
    let signUpPopup

    const formSignUp = new FormSignUp(page)
    await formSignUp.openPage()
    signUpPopup = await formSignUp.signUp.clickSignUpButton()

    await signUpPopup.fill_Name('Name')
    await signUpPopup.fill_LastName('lastName')
    await signUpPopup.fill_Email(email)
    await signUpPopup.fill_Password('Password123')
    await signUpPopup.fill_RepeatPassword('Password123') 
    await signUpPopup.click_btnRegister()

    await expect(signUpPopup.btnMyProfileIsVisible, 'сreate User > User did not create').toBeVisible()

});

});