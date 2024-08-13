
import {test as base, expect as baseExpect} from "@playwright/test"
import GaragePage from "../pageObjects/garagePage/GargePage.js";
import { USER1_STORAGE_STATE_PATH } from "../data/constats.js";
import ProfilePage from "../pageObjects/profilePage/ProfilePage.js";

export const loggedInAsUser = base.extend({
    page: async ({browser}, use)=>{
        const ctx = await browser.newContext({
            storageState: USER1_STORAGE_STATE_PATH
        });
        const page = await ctx.newPage()

        await use(page)

        await page.close()
    },
    garagePage: async ({page}, use)=>{
      
        const gp = new GaragePage(page)

        use(gp);
  
    },
    profilePage: async ({page}, use)=>{

        const pp = new ProfilePage(page)

        use(pp);
    }
    
})
export const expect = baseExpect