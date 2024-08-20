import {expect, loginApi as test} from "../../../src/fixtures/loginApi.js";
import CarsController from "../../../src/controllers/CarsControllers.js";
import {ALL_MODELS, ID_MODELS} from "../../../src/data/carsData.js";


test.describe("Get car models", ()=> {
    let carsController

    test.beforeEach(async ({ request }) => {
        carsController = new CarsController(request)
        
    });

    test("All models", async()=>{

        const getAllCarModels = await carsController.getCarsModels()
        const respnsCarAllModels= await getAllCarModels.json()
        
        expect(respnsCarAllModels.status).toBe('ok')
        expect(respnsCarAllModels.data, 'car brands does not equal').toEqual(ALL_MODELS)
       
     }),
    
    test("Model by id", async()=>{

        const getCarBrandsId = await carsController.getCarModelsId(ID_MODELS.id)
        const respnsCarBrandsId = await getCarBrandsId.json()

        console.log(respnsCarBrandsId.data);

        expect(respnsCarBrandsId.status).toBe('ok')
        expect(respnsCarBrandsId.data, 'car brands id don not equal').toEqual(ID_MODELS)
       
     })

})
        
        

