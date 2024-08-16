import {expect, loginApi as test} from "../../../src/fixtures/loginApi";
import {CAR_BRANDS} from "../../../src/data/carBrands.js";

test.describe("Create fuel expenses", ()=>{
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

    test('Create fuel expenses for one model and brand', async({request})=>{
        const requestBodyCar = {
            "carBrandId": CAR_BRANDS.Audi.id,
            "carModelId": CAR_BRANDS.Audi.model.TT.id,  
            "mileage": Math.floor(Math.random() * 100),
        }
        const responseCar = await request.post('/api/cars', {
            data: requestBodyCar
        })

        const car = await responseCar.json()

        const requestExpenses ={
            "carId": car.data.id,
            "reportedAt": new Date().toISOString(),
            "mileage": car.data.initialMileage + Math.floor(Math.random() * 10),
            "liters": Math.floor(Math.random() * 100),
            "totalCost": Math.floor(Math.random() * 1000),
        }

        const responsExpenses = await request.post('/api/expenses', {
            data: requestExpenses
        })

        expect(responsExpenses.status(), "Status code should be valid").toBe(200)

        const resultExpenses = await responsExpenses.json()

        expect(resultExpenses).toEqual({
            "status": "ok",
            "data": {
                "carId": requestExpenses.carId,
                "reportedAt": requestExpenses.reportedAt,
                "liters": requestExpenses.liters,
                "id": expect.any(Number),
                "mileage": requestExpenses.mileage,
                "totalCost": requestExpenses.totalCost
            }
            
        })
    })
})
