// @ts-check
import { test, expect } from '@playwright/test';
import RegistrationPage from '../../src/pageObjects/formSignUp/RegistrationPage';

test.describe('check for field Name in form Sign up', () => {
let signUpPopup
  
test.beforeEach('Sign up', async ({ page }) => {
    const registrationPage = new RegistrationPage(page)
    await registrationPage.openPage()
    signUpPopup = await registrationPage.signUp.clickSignUpButton()
});

test('check empty field Name', async ({ page }) => {
  
  await signUpPopup.clickName()
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldName, 'empty Name, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'empty Name > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'empty Name > error in error name').toContainText('Name required')
  await expect(signUpPopup.textInvalidFeedback, 'empty Name > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for wrong with letters data in field Name', async ({ page }) => {
  
  const fieldName = page.locator('#signupName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await signUpPopup.fillName('тррр')
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldName, 'wrong Name, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'wrong Name > letters > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'wrong Name > letters > error in error name').toContainText('Name is invalid')
  await expect(signUpPopup.textInvalidFeedback, 'wrong Name > letters > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for wrong data with numbers in field Name', async ({ page }) => {
  
  const fieldName = page.locator('#signupName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await signUpPopup.fillName('438848')
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldName, 'wrong Name > numbers > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'wrong Name > numbers > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'wrong Name > numbers > error in error name').toContainText('Name is invalid')
  await expect(signUpPopup.textInvalidFeedback, 'wrong Name > numbers > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong data with symbols in field Name', async ({ page }) => {
  
  const fieldName = page.locator('#signupName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await signUpPopup.fillName('dj@j')
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldName, 'wrong Name, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'wrong Name > symbols, error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'wrong Name > symbols, error in error name').toContainText('Name is invalid')
  await expect(signUpPopup.textInvalidFeedback, 'wrong Name > symbols, error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong input min length in field Name', async ({ page }) => {

  await signUpPopup.fillName('r')
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldName, 'wrong Name > minLength > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'wrong Name > minLength > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'wrong Name > minLength > error in error name').toContainText('Name has to be from 2 to 20 characters long')
  await expect(signUpPopup.textInvalidFeedback, 'wrong Name > minLength > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong input max length in field Name', async ({ page }) => {

  await signUpPopup.fillName('VeryVeryVeryVeryLongN')
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldName, 'wrong Name > maxLength > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'wrong Name > maxLength > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'wrong Name > maxLength > error in error name').toContainText('Name has to be from 2 to 20 characters long')
  await expect(signUpPopup.textInvalidFeedback, 'wrong Name > maxLength > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

});