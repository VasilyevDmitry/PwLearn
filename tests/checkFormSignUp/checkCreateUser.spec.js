// @ts-check
import { test, expect } from '@playwright/test';
import RegistrationPage from '../../src/pageObjects/formSignUp/RegistrationPage';

test.describe.only('create User', () => {
  
  test('check сreate User', async ({ page }) => {
    let email = `aqa-myEmail${Math.round(Math.random()*100)}@email.com`
    let signUpPopup

    const registrationPage = new RegistrationPage(page)
    await registrationPage.openPage()
    signUpPopup = await registrationPage.signUp.clickSignUpButton()

    await signUpPopup.fillName('Name')
    await signUpPopup.fillLastName('lastName')
    await signUpPopup.fillEmail(email)
    await signUpPopup.fillPassword('Password123')
    await signUpPopup.fillRepeatPassword('Password123') 
    await signUpPopup.clickBtnRegister()

    await expect(signUpPopup.btnMyProfileIsVisible, 'сreate User > User did not create').toBeVisible()

});

});