
export default class UserControllers {
    #POST_CREATE_USER_PATH = 'api/auth/signup'
    #DELETE_USERS_PATH = '/api/users'
    #POST_SIGNIN_USER_PATH ='/api/auth/signin'

    constructor(request){
        this._request = request
    }
   
    async postCreareUser(reuestBody){
        console.log("Create user")
        return this._request.post(this.#POST_CREATE_USER_PATH,{data: reuestBody})
    }
    async deleteUser(){
        console.log("Delete user")
        return this._request.delete(this.#DELETE_USERS_PATH)
    }
    async postSignIn(reuestBody){
        console.log("post SignIn")
        return this._request.post(this.#POST_SIGNIN_USER_PATH,{data: reuestBody})
    }

}