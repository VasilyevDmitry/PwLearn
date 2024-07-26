// @ts-check
import { test, expect } from '@playwright/test';

test.describe('check for field ReEnterPassword in form Sign up', () => {
  
  test.beforeEach('Sign up', async ({ page }) => {
    await page.goto('/');

    const btnSignUp = page.getByText('Sign up')
  
    await btnSignUp.click()
});

test('check empty field ReEnterPassword', async ({ page }) => {
  
  const fieldRepeatPassword = page.locator('#signupRepeatPassword')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')
  
  await fieldRepeatPassword.click() 
  await forShiftFocus.focus() 

  await expect(fieldRepeatPassword, 'empty ReEnterPassword > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'empty ReEnterPassword > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'empty ReEnterPassword > error in error name').toContainText('Re-enter password required')
  await expect(textInvalidFeedback, 'empty ReEnterPassword > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check field matching ReEnterPassword and Password', async ({ page }) => {
  
  const fieldPassword = page.locator('#signupPassword')
  const fieldRepeatPassword = page.locator('#signupRepeatPassword')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')
  
  await fieldPassword.fill('Password123')
  await fieldRepeatPassword.fill('Password321')
  await forShiftFocus.focus() 

  await expect(fieldRepeatPassword, 'invalid Password >, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'invalid Password > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'invalid Password > error in error name').toContainText('Passwords do not match')
  await expect(textInvalidFeedback, 'invalid Password > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});


});