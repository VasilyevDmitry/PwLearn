import {expect, loginApi as test} from "../../../src/fixtures/loginApi.js";
import CarsController from "../../../src/controllers/CarsControllers.js";
import { CAR_BRAND } from "../../../src/data/carBrand.js";

test.describe("Create car", ()=> {

    let carsController
    let carsIdToDelete

    test.afterEach(async ()=>{
        if(carsIdToDelete){
            const res = await carsController.deleteCar(carsIdToDelete)
            await expect(res).toBeOK()
        }
        carsIdToDelete = null
    })

    test(`Create car with brand and model`, async({request})=>{
        carsController = new CarsController(request)
            let requestBody = {
                "carBrandId": CAR_BRAND.Audi.id,
                "carModelId": CAR_BRAND.Audi.model.A8.id,
                "mileage": Math.floor(Math.random() * 100)
            }

        const response = await carsController.createCar(requestBody) 
            
        expect(response.status(), "Status code should be valid").toBe(201)

        const responseBody = await response.json()

        carsIdToDelete = responseBody.data.id

        expect(responseBody).toEqual({
            "status": "ok",
            "data": {
                "id": expect.any(Number),
                "carBrandId": requestBody.carBrandId,
                "carModelId": requestBody.carModelId,
                "initialMileage": requestBody.mileage,
                "updatedMileageAt": expect.any(String),
                "carCreatedAt": expect.any(String),
                "mileage": requestBody.mileage,
                "brand": CAR_BRAND.Audi.title,
                "model": CAR_BRAND.Audi.model.A8.title,
                "logo": CAR_BRAND.Audi.logoFilename
            }
        })
        expect (responseBody.data.id, 'ID shuld be positive number').toBeGreaterThan(0)
     })
})
        
        

