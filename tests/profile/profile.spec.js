// import {loggedInAsUser as test, expect} from "../../src/fixtures/loggedInAsUser";

import {loggedInAsUser as test, expect} from '../../src/fixtures/loggedInAsUser'

import { profile, checkName } from "../../src/data/profile";

test.describe('Profile', () => {
    test.beforeEach(async ({ profilePage}) => {
        await profilePage.openPage()
    })

test('should show my data', async ({profilePage, page}) => {   
    await page.route("/api/users/profile", async route =>{
        await route.fulfill({
            status: 200,
            json: profile
        })
    })
    await page.reload()
    
    await expect(profilePage.btnEditProfile).toBeVisible();
        
    await expect(profilePage.editProfile.profileName).toHaveText(checkName)

})

})