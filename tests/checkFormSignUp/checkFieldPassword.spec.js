// @ts-check
import { test, expect } from '@playwright/test';
import RegistrationPage from '../../src/pageObjects/formSignUp/RegistrationPage';

test.describe('check for field Password in form Sign up', () => {
  
let signUpPopup
  
  test.beforeEach('Sign up', async ({ page }) => {
      const registrationPage = new RegistrationPage(page)
      await registrationPage.openPage()
      signUpPopup = await registrationPage.signUp.clickSignUpButton()
  });

test('check empty field Password', async ({ page }) => {
  
  await signUpPopup.clickPassword()
  await signUpPopup.fieldLastName.focus() 

  await expect(signUpPopup.fieldPassword, 'empty Password > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'empty Password > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'empty Password > error in error name').toContainText('Password required')
  await expect(signUpPopup.textInvalidFeedback, 'empty Password > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Password" length = 7', async ({ page }) => {
  
  await signUpPopup.fillPassword("Dima123")
  await signUpPopup.fieldLastName.focus() 

  await expect(signUpPopup.fieldPassword, 'invalid Password > length =7 >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'invalid Password > length =7 > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > length =7 > error in error name').toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > length =7 > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for invalid "Password" length = 16', async ({ page }) => {
  
  await signUpPopup.fillPassword("Dima123451234588")
  await signUpPopup.fieldLastName.focus() 

  await expect(signUpPopup.fieldPassword, 'invalid Password > length = 16 >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'invalid Password > length = 16 > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > length = 16 > error in error name').toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > length = 16 > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Password" oneInteger', async ({ page }) => {
  
  await signUpPopup.fillPassword("DimaDima")
  await signUpPopup.fieldLastName.focus()

  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > oneInteger >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'invalid Password > oneInteger > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > oneInteger > error in error name').toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > oneInteger > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Password" oneCapital', async ({ page }) => {

  await signUpPopup.fillPassword("dimadima12")
  await signUpPopup.fieldLastName.focus()

  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > oneCapital >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'invalid Password > oneCapital > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > oneCapital > error in error name').toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > oneCapital > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Password" oneSmall', async ({ page }) => {
  
  await signUpPopup.fillPassword("DIMA121222")
  await signUpPopup.fieldLastName.focus()

  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > oneSmall >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'invalid Password > oneSmall > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > oneSmall > error in error name').toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(signUpPopup.textInvalidFeedback, 'invalid Password > oneSmall > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

});