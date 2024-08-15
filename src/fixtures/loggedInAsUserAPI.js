
import {test as base, expect as baseExpect, request as apiRequest} from "@playwright/test";
import GaragePage from "../../src/pageObjects/garagePage/GargePage"
import {USER1_STORAGE_STATE_PATH} from "../data/constants.js";

export const apiTest = base.extend({
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
    request: async ({}, use)=>{

        const ctx = await apiRequest.newContext({
            storageState: USER1_STORAGE_STATE_PATH
        });

        use(ctx);
        await page.dispose()
    }
})

export const expect = baseExpect