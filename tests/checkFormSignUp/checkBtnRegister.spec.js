// @ts-check
import { test, expect } from '@playwright/test';

test.describe('check for btn Register in form Sign up', () => {
  
  test.beforeEach('Sign up', async ({ page }) => {
    await page.goto('/');

    const btnSignUp = page.getByText('Sign up')
  
    await btnSignUp.click()

    const fieldName = page.locator('#signupName')
    const fieldLastName = page.locator('#signupLastName')
    const fieldEmail = page.locator('#signupEmail')
    const fieldPassword = page.locator('#signupPassword')


    await fieldName.fill('Name') 
    await fieldLastName.fill('lastName') 
    await fieldEmail.fill('my@email.com') 
    await fieldPassword.fill('Password123') 

});

test('check disabled btn Register', async ({ page }) => {
  
  const fieldRepeatPassword = page.locator('#signupRepeatPassword')
  const btnRegister = page.getByRole('button', { name: 'Register'})

  await fieldRepeatPassword.fill('Password123!') 

  await expect(btnRegister, 'btnRegister > error disabled').toBeDisabled();
  
});

test('check enabled btn Register', async ({ page }) => {
  
  const fieldRepeatPassword = page.locator('#signupRepeatPassword')
  const btnRegister = page.getByRole('button', { name: 'Register'})

  await fieldRepeatPassword.fill('Password123') 

  await expect(btnRegister, 'btnRegister > error disabled').toBeEnabled();
  
});

});