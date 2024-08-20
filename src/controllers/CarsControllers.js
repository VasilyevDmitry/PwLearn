
export default class CarsController {
    #GET_CAR_BRANDS_PATH = '/api/cars/brands'
    #GET_CAR_BRANDS_ID_PATH = (id) =>  `/api/cars/brands/${id}`
    #GET_CAR_MODELS_PATH = '/api/cars/models'
    #GET_CAR_MODELS_ID_PATH = (id) => `/api/cars/models/${id}`
    #GET_CARS_PATH = '/api/cars' 

    #POST_CAR_CREATE_PATH = '/api/cars'

    #GET_CARS_ID_FOR_CURRENT_USER_PATH = (id) =>`/api/cars/${id}`

    #PUT_CARS_ID_FOR_EDITS_PATH  = (id) => `/api/cars/${id}`

    #DELETE_CAR_PATH = (id) => `/api/cars/${id}`

    constructor(request){
        this._request = request
    }
   
    async getCarsBrands(){
        console.log("Get all brands's cars")
        return this._request.get(this.#GET_CAR_BRANDS_PATH)
    }
    async getCarBrandId(id){
        console.log("Get brand car by id")
        return this._request.get(this.#GET_CAR_BRANDS_ID_PATH(id))
    }

    async getCarsModels(){
        console.log("Get all models's cars")
        return this._request.get(this.#GET_CAR_MODELS_PATH)
    }

    async getCarModelsId(id){
        console.log("Get model car by id")
        return this._request.get(this.#GET_CAR_MODELS_ID_PATH(id))
    }


    async getCars(){
        console.log("Get cars all user's")
        return this._request.get(this.#GET_CARS_PATH)
    }

    async createCar(requestBody){
        console.log("Create car with data: ", requestBody)
        return this._request.post(this.#POST_CAR_CREATE_PATH, {
            data: requestBody
        })
    }

    async getCarCurrentUser(id){
        console.log("Gets current user by id")
        return this._request.get(this.#GET_CARS_ID_FOR_CURRENT_USER_PATH(id))
    }

    async editCars(id, requestBody){
        console.log("edit car")
        return this._request.put(this.#PUT_CARS_ID_FOR_EDITS_PATH(id), {
            data: requestBody
        })
    }

    async deleteCar(id){
        console.log(`Delete car bt id: ${id}`)
        return this._request.delete(this.#DELETE_CAR_PATH(id))
    }
}