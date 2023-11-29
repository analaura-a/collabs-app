import { call } from "./http.service";

//Obtener todos los usuarios
export function getUsers() {
    return call({ uri: 'users' })
}

//Obtener un usuario en particular
export function getUserById(id) {
    return call({ uri: `users/${id}` })
}

//Crear nuevo perfil de usuario (asociado a una cuenta creada)
export function createUser(userData) {
    return call({ uri: "/users", method: "POST", body: userData })
}

export default {
    getUsers,
    getUserById,
    createUser
}
