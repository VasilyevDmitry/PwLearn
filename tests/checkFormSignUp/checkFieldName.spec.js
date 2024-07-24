// @ts-check
import { test, expect } from '@playwright/test';

test.describe('check for field Name in form Sign up', () => {
  
  test.beforeEach('Sign up', async ({ page }) => {
    await page.goto('/');

    const btnSignUp = page.getByText('Sign up')
  
    await btnSignUp.click()
});

test('check empty field Name', async ({ page }) => {
  
  const fieldName = page.locator('#signupName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')
  
  await fieldName.click() 
  await forShiftFocus.focus() 

  await expect(fieldName, 'empty Name, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'empty Name > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'empty Name > error in error name').toContainText('Name required')
  await expect(textInvalidFeedback, 'empty Name > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for wrong with letters data in field Name', async ({ page }) => {
  
  const fieldName = page.locator('#signupName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldName.fill('тррр')
  await forShiftFocus.focus() 

  await expect(fieldName, 'wrong Name, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'wrong Name > letters > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'wrong Name > letters > error in error name').toContainText('Name is invalid')
  await expect(textInvalidFeedback, 'wrong Name > letters > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for wrong data with numbers in field Name', async ({ page }) => {
  
  const fieldName = page.locator('#signupName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldName.fill('438848')
  await forShiftFocus.focus() 

  await expect(fieldName, 'wrong Name > numbers > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'wrong Name > numbers > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'wrong Name > numbers > error in error name').toContainText('Name is invalid')
  await expect(textInvalidFeedback, 'wrong Name > numbers > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong data with symbols in field Name', async ({ page }) => {
  
  const fieldName = page.locator('#signupName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldName.fill('dj@j')
  await forShiftFocus.focus() 

  await expect(fieldName, 'wrong Name, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'wrong Name > symbols, error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'wrong Name > symbols, error in error name').toContainText('Name is invalid')
  await expect(textInvalidFeedback, 'wrong Name > symbols, error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong input min length in field Name', async ({ page }) => {
  
  const fieldName = page.locator('#signupName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldName.fill('r')
  await forShiftFocus.focus() 

  await expect(fieldName, 'wrong Name > minLength > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'wrong Name > minLength > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'wrong Name > minLength > error in error name').toContainText('Name has to be from 2 to 20 characters long')
  await expect(textInvalidFeedback, 'wrong Name > minLength > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong input max length in field Name', async ({ page }) => {
  
  const fieldName = page.locator('#signupName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupLastName')

  await fieldName.fill('VeryVeryVeryVeryLongN')
  await forShiftFocus.focus() 

  await expect(fieldName, 'wrong Name > maxLength > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'wrong Name > maxLength > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'wrong Name > maxLength > error in error name').toContainText('Name has to be from 2 to 20 characters long')
  await expect(textInvalidFeedback, 'wrong Name > maxLength > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

});