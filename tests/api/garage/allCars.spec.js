
import { creatNewUser as test, expect} from "../../../src/fixtures/createNewUser.js";

test.describe.only("Get cars", ()=> {
    
    // test.afterEach(async ({ userControllers })=>{
    //     const deleteUser = await userControllers.deleteUser()
    //     const deleteUserBody = await deleteUser.json()
    //     console.log('Delete User:', deleteUserBody);

    //   })
      
      test('Get all cars', async({newCar, carsController})=>{

        const response = await carsController.getCars()
        const resultBody = await response.json()
        
        console.log('newCar:', newCar);
        
        expect(resultBody).toEqual({
            "status": "ok",
            "data": [{
            "id": newCar.data.id,
            "carBrandId": newCar.data.carBrandId,
            "carModelId": newCar.data.carModelId,
            "initialMileage": newCar.data.initialMileage,
            "updatedMileageAt": expect.any(String),
            "carCreatedAt": expect.any(String),
            "mileage": newCar.data.mileage,
            "brand":  newCar.data.brand,
            "model": newCar.data.model,
            "logo": newCar.data.logo
        }]
    })
})
})