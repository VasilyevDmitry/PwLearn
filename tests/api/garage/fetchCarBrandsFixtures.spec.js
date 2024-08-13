import { loginApi as test, expect} from "../../../src/fixtures/loginApi"

test.describe("Cars", ()=>{

    // test.afterEach(async ({request})=>{
    //     const carsList = await request.get('/api/cars')
    //     const {data: cars} = await carsList.json()

    //     await Promise.all(
    //         cars.map((car)=>(async ()=>{
    //                 const res = await request.delete(`/api/cars/${car.id}`)
    //                 await expect(res).toBeOK()
    //         })())
    //     )
    // })

    test("create car", async({request})=>{
        const requestBody = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 122
        }
        const response = await request.post('/api/cars', {
            data: requestBody
        })
        const body = await response.json()

        await expect(body.data, "Car should be created").toMatchObject(requestBody)
    })
    test("should fail when carBrandId is missing", async({request}) => {
        const requestBody = {
          "carModelId": 1,
          "mileage": 122
        };
    
        const response = await request.post('/api/cars', {
          data: requestBody
        });
    
        const body = await response.json();
    
        await expect(response.status()).toBe(400);
        await expect(body.message).toContain('Car brand id is required');
      });

      test("should fail when mileage is invalid", async({request}) => {
        const requestBody = {
          "carBrandId": 1,
          "carModelId": 1,
          "mileage": -10
        };
    
        const response = await request.post('/api/cars', {
          data: requestBody
        });
    
        const body = await response.json();
    
        await expect(response.status()).toBe(400);
        await expect(body.message).toContain('Mileage has to be from 0 to 999999');
      });
})