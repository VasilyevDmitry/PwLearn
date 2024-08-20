import {test as base, expect as baseExpect ,request as apiRequest} from "@playwright/test"
import GaragePage from "../pageObjects/garagePage/GargePage.js";
import { USER1_STORAGE_STATE_PATH} from "../data/constats.js";
import CarsController from "../controllers/CarsControllers.js";
import { CAR_BRAND_PORSCHE } from "../data/carBrand.js";

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

        storageState: USER1_STORAGE_STATE_PATH
    })

    await use(ctx)

    await ctx.dispose()
},

carsController:  async ({request}, use)=>{
    await use(new CarsController(request))
},

createCar: async ({carsController}, use)=>{

    const requestBody = {
        "carBrandId": CAR_BRAND_PORSCHE.Porsche.id,
        "carModelId": CAR_BRAND_PORSCHE.Porsche.model.Cayenne.id,
        "mileage": Math.floor(Math.random() * 100),
    }
    const response = await carsController.createCar(requestBody)
                
    const createdCarBody = await response.json()
        
    use(createdCarBody)
}

})

export const expect = baseExpect