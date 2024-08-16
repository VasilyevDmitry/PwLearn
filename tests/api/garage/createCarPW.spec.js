import {expect, loginApi as test} from "../../../src/fixtures/loginApi.js";
import {CAR_BRANDS} from "../../../src/data/carBrands.js";

test.describe("Create car", ()=> {

    test.afterEach(async ({request})=>{
        const carsList = await request.get('/api/cars')
        const {data: cars} = await carsList.json()
        
        await Promise.all(
          cars.map((car)=>(async ()=>{
            const res = await request.delete(`/api/cars/${car.id}`)
            await expect(res).toBeOK()
          })())
        )
      })

    Object.values(CAR_BRANDS).forEach(brandDetails => {
            // Перебираем каждую модель внутри бренда
        Object.values(brandDetails.model).forEach(model => {
            test(`Create car with brand ${brandDetails.title} and model ${model.title}`, async({request})=>{
                // Arrange
                 let requestBody = {
                    "carBrandId": brandDetails.id,
                    "carModelId": model.id,
                    "mileage": Math.floor(Math.random() * 100)
                }
                // ACT
                console.log('Request Body:', requestBody);
                const response = await request.post('/api/cars', {
                    data: requestBody
                })

                console.log('Response Status:', response.status());

                // Assert
                expect(response.status(), "Status code should be valid").toBe(201)
                
                const actualBody = await response.json()

                console.log('Response Body:', actualBody);
                expect(actualBody).toEqual({
                    "status": "ok",
                    "data": {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brandDetails.title,
                        "model": model.title,
                        "logo": brandDetails.logoFilename
                    }
                })
            })
        })
    })

})
