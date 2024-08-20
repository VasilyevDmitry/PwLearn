import { faker } from '@faker-js/faker';

export const USERS = {
    USER1 : {
        email: 'dmitryv1800@gmail.com',
        password: 'Dmitryv1800'
    }
}

let password = faker.internet.password()

export let RequestBody = {
    "name": faker.person.firstName(),
    "lastName": faker.person.lastName(),
    "email": faker.internet.email(),
    "password": password,
    "repeatPassword": password
}