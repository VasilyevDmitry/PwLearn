// @ts-check
import { test, expect } from '@playwright/test';

test.describe('check for field Email in form Sign up', () => {
  
  test.beforeEach('Sign up', async ({ page }) => {
    await page.goto('/');

    const btnSignUp = page.getByText('Sign up')
  
    await btnSignUp.click()
});

test('check empty field Email', async ({ page }) => {
  
  const fieldEmail = page.locator('#signupEmail')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')
  
  await fieldEmail.click() 
  await forShiftFocus.focus() 

  await expect(fieldEmail, 'empty Email > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'empty Email > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'empty Email > error in error name').toContainText('Email required')
  await expect(textInvalidFeedback, 'empty Email > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Email" input One', async ({ page }) => {
  
  const fieldEmail = page.locator('#signupEmail')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldEmail.fill('dmitryv449@')
  await forShiftFocus.focus() 

  await expect(fieldEmail, 'invalid Email One > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'invalid Email One > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'invalid Email One > error in error name').toContainText('Email is incorrect')
  await expect(textInvalidFeedback, 'invalid Email One > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Email" input Two', async ({ page }) => {
  
  const fieldEmail = page.locator('#signupEmail')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldEmail.fill('/@dkkkdcom')
  await forShiftFocus.focus() 

  await expect(fieldEmail, 'invalid Email Two > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'invalid Email Two > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'invalid Email Two > error in error name').toContainText('Email is incorrect')
  await expect(textInvalidFeedback, 'invalid Email Two > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for invalid "Email" input Three', async ({ page }) => {
  
  const fieldEmail = page.locator('#signupEmail')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldEmail.fill('fkfk*@dkkkdcom')
  await forShiftFocus.focus() 

  await expect(fieldEmail, 'invalid Email Three > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'invalid Email Three > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'invalid Email Three > error in error name').toContainText('Email is incorrect')
  await expect(textInvalidFeedback, 'invalid Email Three > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

});