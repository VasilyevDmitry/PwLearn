// @ts-check
import { test, expect } from '@playwright/test';
import FormSignUp from '../../src/pageObjects/formSignUp/FormSignUp';

test.describe('check for field ReEnterPassword in form Sign up', () => {
  let signUpPopup
  
  test.beforeEach('Sign up', async ({ page }) => {
      const formSignUp = new FormSignUp(page)
      await formSignUp.openPage()
      signUpPopup = await formSignUp.signUp.clickSignUpButton()
  });

test('check empty field ReEnterPassword', async ({ page }) => {
  
  await signUpPopup.click_RepeatPassword() 
  await signUpPopup.fieldLastName.focus() 

  await expect(signUpPopup.fieldRepeatPassword, 'empty ReEnterPassword > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'empty ReEnterPassword > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'empty ReEnterPassword > error in error name').toContainText('Re-enter password required')
  await expect(signUpPopup.textInvalidFeedback, 'empty ReEnterPassword > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check field matching ReEnterPassword and Password', async ({ page }) => {
  
  await signUpPopup.fill_Password("Password123")
  await signUpPopup.fill_RepeatPassword('Password321') 
  await signUpPopup.fieldLastName.focus() 

  await expect(signUpPopup.fieldRepeatPassword, 'invalid Password >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'invalid Password > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > error in error name').toContainText('Passwords do not match')
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});


});