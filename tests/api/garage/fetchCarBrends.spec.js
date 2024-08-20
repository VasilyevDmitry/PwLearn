import {expect, loginApi as test} from "../../../src/fixtures/loginApi.js";
import CarsController from "../../../src/controllers/CarsControllers.js";
import { ALL_BRANDS, ID_BRAND } from "../../../src/data/carsData.js";

test.describe("Get car brends", ()=> {
    let carsController

    test.beforeEach(async ({ request }) => {
        carsController = new CarsController(request)
        
    });
    test("All brands", async()=>{

        const getAllCarBrands = await carsController.getCarsBrands()
        const respnsCarAllBrands = await getAllCarBrands.json()
        
        expect(respnsCarAllBrands.status).toBe('ok')
        expect(respnsCarAllBrands.data, 'car brands does not equal').toEqual(ALL_BRANDS)
       
     }),
     test("Brand by id", async()=>{

        const getCarBrandsId = await carsController.getCarBrandId(ID_BRAND.id)
        const respnsCarBrandsId = await getCarBrandsId.json()

        expect(respnsCarBrandsId.status).toBe('ok')
        expect(respnsCarBrandsId.data, 'car brands id don not equal').toEqual(ID_BRAND)
       
     })
})
        
        

