// @ts-check
import { test, expect } from '@playwright/test';

test.describe('check for field Last Name in form Sign up', () => {
  
  test.beforeEach('Sign up', async ({ page }) => {
    await page.goto('/');

    const btnSignUp = page.getByText('Sign up')
  
    await btnSignUp.click()
});

test('check empty field Last Name', async ({ page }) => {
  
  const fieldLastName = page.locator('#signupLastName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupName')
  
  await fieldLastName.click() 
  await forShiftFocus.focus() 

  await expect(fieldLastName, 'empty LastName > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'empty LastName > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'empty LastName > error in error name').toContainText('Last name required')
  await expect(textInvalidFeedback, 'empty LastName > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for wrong with letters data in field Last Name', async ({ page }) => {
  
  const fieldLastName = page.locator('#signupLastName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupName')

  await fieldLastName.fill('тррр')
  await forShiftFocus.focus() 

  await expect(fieldLastName, 'wrong Name, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'wrong LastName > letters > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'wrong LastName > letters > error in error name').toContainText('Last name is invalid')
  await expect(textInvalidFeedback, 'wrong LastName > letters > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

test('check for wrong data with numbers in Last Name', async ({ page }) => {
  
  const fieldLastName = page.locator('#signupLastName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupName')

  await fieldLastName.fill('438848')
  await forShiftFocus.focus() 

  await expect(fieldLastName, 'wrong Name > numbers > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'wrong LastName > numbers > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'wrong LastName > numbers > error in error name').toContainText('Last name is invalid')
  await expect(textInvalidFeedback, 'wrong LastName > numbers > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong data with symbols in Last Name', async ({ page }) => {
  
  const fieldLastName = page.locator('#signupLastName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupName')

  await fieldLastName.fill('dj@j')
  await forShiftFocus.focus() 

  await expect(fieldLastName, 'wrong Name, error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'wrong LastName > symbols, error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'wrong LastName > symbols, error in error name').toContainText('Last name is invalid')
  await expect(textInvalidFeedback, 'wrong LastName > symbols, error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong input min length in Last Name', async ({ page }) => {
  
  const fieldLastName = page.locator('#signupLastName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupName')

  await fieldLastName.fill('r')
  await forShiftFocus.focus() 

  await expect(fieldLastName, 'wrong Name > minLength > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'wrong LastName > minLength > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'wrong LastName > minLength > error in error name').toContainText('Last name has to be from 2 to 20 characters long')
  await expect(textInvalidFeedback, 'wrong LastName > minLength > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});
test('check for wrong input max length in Last Name', async ({ page }) => {
  
  const fieldLastName = page.locator('#signupLastName')
  const textInvalidFeedback = page.locator('.invalid-feedback')
  const forShiftFocus = page.locator('#signupName')

  await fieldLastName.fill('VeryVeryVeryVeryLongN')
  await forShiftFocus.focus() 

  await expect(fieldLastName, 'wrong Name > maxLength > error color').toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(textInvalidFeedback,'wrong LastName > maxLength > error of visible' ).toBeVisible()
  await expect(textInvalidFeedback, 'wrong LastName > maxLength > error in error name').toContainText('Last name has to be from 2 to 20 characters long')
  await expect(textInvalidFeedback, 'wrong LastName > maxLength > error in color for error name').toHaveCSS('color',  'rgb(220, 53, 69)');
});

});