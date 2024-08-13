import {test as base, expect as baseExpect ,request as apiRequest} from "@playwright/test"
import GaragePage from "../pageObjects/garagePage/GargePage.js";
import { USER1_STORAGE_STATE_PATH } from "../data/constats.js";



export const loginApi = base.extend({

context: async ({browser}, use) =>{

    const ctx = await browser.newContext({
        storageState: USER1_STORAGE_STATE_PATH
    })

    await use (ctx)
},

garagePage: async ({page}, use)=>{
      
    const gp = new GaragePage(page)

    use(gp);

},
request: async ({}, use)=>{
    const ctx = await apiRequest.newContext({
        //  get from file
        storageState: USER1_STORAGE_STATE_PATH
    })

    await use(ctx)

    await ctx.dispose()
},

})

export const expect = baseExpect