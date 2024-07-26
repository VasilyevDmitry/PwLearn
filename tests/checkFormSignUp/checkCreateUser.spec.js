// @ts-check
import { test, expect } from '@playwright/test';

test.describe('create User', () => {
  
  test('check сreate User', async ({ page }) => {
    let email = `aqa-myEmail${Math.round(Math.random()*100)}@email.com`
    await page.goto('/');

    const btnSignUp = page.getByText('Sign up')
  
    await btnSignUp.click()

    const fieldName = page.locator('#signupName')
    const fieldLastName = page.locator('#signupLastName')
    const fieldEmail = page.locator('#signupEmail')
    const fieldPassword = page.locator('#signupPassword')
    const fieldRepeatPassword = page.locator('#signupRepeatPassword')
    const btnRegister = page.getByRole('button', { name: 'Register'})
    const btnMyProfileIsVisible = page.getByRole('button', { name: 'My profile'})

    await fieldName.fill('Name') 
    await fieldLastName.fill('lastName') 
    await fieldEmail.fill(email) 
    await fieldPassword.fill('Password123') 
    await fieldRepeatPassword.fill('Password123') 
    await btnRegister.click()

    await expect(btnMyProfileIsVisible, 'сreate User > User did not create').toBeVisible()


});

});