
import { test } from '@playwright/test';
import RegistrationPage from '../../src/pageObjects/formSignUp/RegistrationPage';

test.describe('Session Storage', ()=>{

    test('guest cars shuold be sorted in local storage ', async({page})=>{

        const registrationPage = new RegistrationPage(page)
        await registrationPage.openPage()
     })
})

