// @ts-check
import { test, expect } from '@playwright/test';
import FormSignUp from '../../src/pageObjects/formSignUp/FormSignUp';

test.describe('check for field Last Name in form Sign up', () => {
let signUpPopup
  
test.beforeEach('Sign up', async ({ page }) => {
    const formSignUp = new FormSignUp(page)
    await formSignUp.openPage()
    signUpPopup = await formSignUp.signUp.clickSignUpButton()
});

test('check empty field Last Name', async ({ page }) => {
  
  await signUpPopup.click_LastName()
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldLastName, 'empty LastName > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'empty LastName > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'empty LastName > error in error name').toContainText('Last name required')
  await expect(signUpPopup.textInvalidFeedback, 'empty LastName > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for wrong with letters data in field Last Name', async ({ page }) => {
  
  await signUpPopup.fill_LastName('тррр')
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldLastName, 'wrong Name, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'wrong LastName > letters > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'wrong LastName > letters > error in error name').toContainText('Last name is invalid')
  await expect(signUpPopup.textInvalidFeedback, 'wrong LastName > letters > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for wrong data with numbers in Last Name', async ({ page }) => {
  
  await signUpPopup.fill_LastName('438848')
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldLastName, 'wrong Name > numbers > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'wrong LastName > numbers > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'wrong LastName > numbers > error in error name').toContainText('Last name is invalid')
  await expect(signUpPopup.textInvalidFeedback, 'wrong LastName > numbers > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong data with symbols in Last Name', async ({ page }) => {
  
  await signUpPopup.fill_LastName('dj@j')
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldLastName, 'wrong Name, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'wrong LastName > symbols, error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'wrong LastName > symbols, error in error name').toContainText('Last name is invalid')
  await expect(signUpPopup.textInvalidFeedback, 'wrong LastName > symbols, error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong input min length in Last Name', async ({ page }) => {
  
  await signUpPopup.fill_LastName('r')
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldLastName, 'wrong Name > minLength > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'wrong LastName > minLength > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'wrong LastName > minLength > error in error name').toContainText('Last name has to be from 2 to 20 characters long')
  await expect(signUpPopup.textInvalidFeedback, 'wrong LastName > minLength > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong input max length in Last Name', async ({ page }) => {
  
  await signUpPopup.fill_LastName('VeryVeryVeryVeryLongN')
  await signUpPopup.fieldPassword.focus() 

  await expect(signUpPopup.fieldLastName, 'wrong Name > maxLength > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'wrong LastName > maxLength > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'wrong LastName > maxLength > error in error name').toContainText('Last name has to be from 2 to 20 characters long')
  await expect(signUpPopup.textInvalidFeedback, 'wrong LastName > maxLength > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

});