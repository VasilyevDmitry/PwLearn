
import {expect, loginApi as test} from "../../../src/fixtures/loginApi.js";

test.describe("Get car current User", ()=> {

    test(`Get car current User by id`, async({carsController, createCar })=>{
            
        const requestCarId = await carsController.getCarCurrentUser(createCar.data.id)
        const responseCarIdBody = await requestCarId.json()

        console.log('currentUserCars:', createCar);      

        expect(responseCarIdBody).toEqual({
            "status": "ok",
            "data": {
            "id": createCar.data.id,
            "carBrandId": createCar.data.carBrandId,
            "carModelId": createCar.data.carModelId,
            "initialMileage": createCar.data.initialMileage,
            "updatedMileageAt": expect.any(String),
            "carCreatedAt": expect.any(String),
            "mileage": createCar.data.mileage,
            "brand":  createCar.data.brand,
            "model": createCar.data.model,
            "logo": createCar.data.logo
        } 
    }) 
})
})
        
        

