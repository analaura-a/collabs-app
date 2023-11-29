import { call } from "./http.service";

//Obtener todos los usuarios
export function getUsers() {
    return call({ uri: 'users' })
}

//Obtener un usuario en particular
export function getUserById(id) {
    return call({ uri: `users/${id}` })
}

export default {
    getUsers,
    getUserById
}
