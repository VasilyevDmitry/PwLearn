// @ts-check
import { test, expect } from '@playwright/test';

test.describe('check for field Password in form Sign up', () => {
  
  test.beforeEach('Sign up', async ({ page }) => {
    await page.goto('/');

    const btnSignUp = page.getByText('Sign up')
  
    await btnSignUp.click()
});

test('check empty field Password', async ({ page }) => {
  
  const fieldPassword = page.locator('#signupPassword')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')
  
  await fieldPassword.click() 
  await forShiftFocus.focus() 

  await expect(fieldPassword, 'empty Password > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'empty Password > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'empty Password > error in error name').toContainText('Password required')
  await expect(textInvalidFeedback, 'empty Password > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Password" length = 7', async ({ page }) => {
  
  const fieldPassword = page.locator('#signupPassword')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldPassword.fill('Dima123')
  await forShiftFocus.focus() 

  await expect(fieldPassword, 'invalid Password > length =7 >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'invalid Password > length =7 > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'invalid Password > length =7 > error in error name').toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(textInvalidFeedback, 'invalid Password > length =7 > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for invalid "Password" length = 16', async ({ page }) => {
  
  const fieldPassword = page.locator('#signupPassword')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldPassword.fill('Dima123451234588')
  await forShiftFocus.focus() 

  await expect(fieldPassword, 'invalid Password > length = 16 >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'invalid Password > length = 16 > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'invalid Password > length = 16 > error in error name').toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(textInvalidFeedback, 'invalid Password > length = 16 > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Password" oneInteger', async ({ page }) => {
  
  const fieldPassword = page.locator('#signupPassword')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldPassword.fill('DimaDima')
  await forShiftFocus.focus() 

  await expect(fieldPassword, 'invalid Password > oneInteger >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'invalid Password > oneInteger > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'invalid Password > oneInteger > error in error name').toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(textInvalidFeedback, 'invalid Password > oneInteger > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Password" oneCapital', async ({ page }) => {
  
  const fieldPassword = page.locator('#signupPassword')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldPassword.fill('dimadima12')
  await forShiftFocus.focus() 

  await expect(fieldPassword, 'invalid Password > oneCapital >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'invalid Password > oneCapital > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'invalid Password > oneCapital > error in error name').toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(textInvalidFeedback, 'invalid Password > oneCapital > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for invalid "Password" oneSmall', async ({ page }) => {
  
  const fieldPassword = page.locator('#signupPassword')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldPassword.fill('DIMA121222')
  await forShiftFocus.focus() 

  await expect(fieldPassword, 'invalid Password > oneSmall >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'invalid Password > oneSmall > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'invalid Password > oneSmall > error in error name').toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  await expect(textInvalidFeedback, 'invalid Password > oneSmall > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

});