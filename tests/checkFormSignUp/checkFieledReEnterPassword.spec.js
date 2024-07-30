// @ts-check
import { test, expect } from '@playwright/test';
import RegistrationPage from '../../src/pageObjects/formSignUp/RegistrationPage';

test.describe('check for field ReEnterPassword in form Sign up', () => {
  let signUpPopup
  
  test.beforeEach('Sign up', async ({ page }) => {
      const registrationPage = new RegistrationPage(page)
      await registrationPage.openPage()
      signUpPopup = await registrationPage.signUp.clickSignUpButton()
  });

test('check empty field ReEnterPassword', async ({ page }) => {
  
  await signUpPopup.clickRepeatPassword() 
  await signUpPopup.fieldLastName.focus() 

  await expect(signUpPopup.fieldRepeatPassword, 'empty ReEnterPassword > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'empty ReEnterPassword > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'empty ReEnterPassword > error in error name').toContainText('Re-enter password required')
  await expect(signUpPopup.textInvalidFeedback, 'empty ReEnterPassword > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check field matching ReEnterPassword and Password', async ({ page }) => {
  
  await signUpPopup.fillPassword("Password123")
  await signUpPopup.fillRepeatPassword('Password321') 
  await signUpPopup.fieldLastName.focus() 

  await expect(signUpPopup.fieldRepeatPassword, 'invalid Password >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'invalid Password > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > error in error name').toContainText('Passwords do not match')
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});


});