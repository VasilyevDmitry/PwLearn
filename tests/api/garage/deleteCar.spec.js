import {expect, loginApi as test} from "../../../src/fixtures/loginApi.js";
import CarsController from "../../../src/controllers/CarsControllers.js";

test.describe("Delete car", ()=> {
    let carsController

    test.beforeEach(async ({ request }) => {
        carsController = new CarsController(request)
        
    });

    test("Delete car by", async({createCar})=>{

        const requestDeleteCar = await carsController.deleteCar(createCar.data.id)
        const respnsDeleteCar= await requestDeleteCar.json()

        console.log(respnsDeleteCar);
        
        expect(respnsDeleteCar.status, 'delete status is not equal to OK').toBe('ok')
        expect(respnsDeleteCar.data.carId, 'delete status is not equal to carId').toEqual(createCar.data.id)
       
     })
})
        
        

