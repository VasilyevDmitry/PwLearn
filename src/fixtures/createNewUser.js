import {test as base, expect as baseExpect ,request as apiRequest} from "@playwright/test"
import CarsController from "../controllers/CarsControllers"
import { CAR_BRAND_BMW } from "../data/carBrand";
import { RequestBody } from "../data/users";
import UserControllers from "../controllers/UserControllers";

export const creatNewUser = base.extend({
    userControllers:  async ({request}, use)=>{
        await use(new UserControllers(request))
    },
    newUser: [async ({userControllers }, use)=>{
           
    const us =  await userControllers.postCreareUser(RequestBody)

    const userData = {
        "email": RequestBody.email,
        "password": RequestBody.password,
        "remember": false
    } 
        
        const response = await userControllers.postSignIn(userData)

        await use(await response.json())

        //удалить узера после use
        const deletedUser = await userControllers.deleteUser()
        
    }, {auto:true}],//она будет вызываться всегда но только необходимо обернуть в массив

    
    carsController:  async ({request}, use)=>{
        await use(new CarsController(request))
    },
   
    newCar: async ({carsController}, use)=>{
           
        const requestBody = {
            "carBrandId": CAR_BRAND_BMW.BMW.id,
            "carModelId": CAR_BRAND_BMW.BMW.model[3].id,
            "mileage": Math.floor(Math.random() * 100),
        }
        const response = await carsController.createCar(requestBody)
                    
        const createdCarBody = await response.json()
            
        await use(createdCarBody)

        await carsController.deleteCar(createdCarBody.data.id)

    }

})

export const expect = baseExpect



