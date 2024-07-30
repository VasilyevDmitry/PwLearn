// @ts-check
import { test, expect } from '@playwright/test';
import RegistrationPage from '../../src/pageObjects/formSignUp/RegistrationPage';

test.describe('check for field Email in form Sign up', () => {
  let signUpPopup
  
  test.beforeEach('Sign up', async ({ page }) => {
    const registrationPage = new RegistrationPage(page)
    await registrationPage.openPage()
    signUpPopup = await registrationPage.signUp.clickSignUpButton()
});

test('check empty field Email', async ({ page }) => {
  
  await signUpPopup.clickEmail()
  await signUpPopup.fieldLastName.focus() 

  await expect(signUpPopup.fieldEmail, 'empty Email > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'empty Email > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'empty Email > error in error name').toContainText('Email required')
  await expect(signUpPopup.textInvalidFeedback, 'empty Email > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Email" input One', async ({ page }) => {
  
  await signUpPopup.fillEmail('dmitryv449@')
  await signUpPopup.fieldLastName.focus() 

  await expect(signUpPopup.fieldEmail, 'invalid Email One > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'invalid Email One > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'invalid Email One > error in error name').toContainText('Email is incorrect')
  await expect(signUpPopup.textInvalidFeedback, 'invalid Email One > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Email" input Two', async ({ page }) => {
  
  await signUpPopup.fillEmail('/@dkkkdcom')
  await signUpPopup.fieldLastName.focus() 

  await expect(signUpPopup.fieldEmail, 'invalid Email Two > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'invalid Email Two > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'invalid Email Two > error in error name').toContainText('Email is incorrect')
  await expect(signUpPopup.textInvalidFeedback, 'invalid Email Two > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Email" input Three', async ({ page }) => {

  await signUpPopup.fillEmail('fkfk*@dkkkdcom')
  await signUpPopup.fieldLastName.focus()

  await expect(signUpPopup.fieldEmail, 'invalid Email Three > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(signUpPopup.textInvalidFeedback,'invalid Email Three > error of visible' ).toBeVisible()
  await expect(signUpPopup.textInvalidFeedback, 'invalid Email Three > error in error name').toContainText('Email is incorrect')
  await expect(signUpPopup.textInvalidFeedback, 'invalid Email Three > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

});