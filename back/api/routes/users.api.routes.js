import { Router } from 'express';
import * as controllers from '../controllers/controller.api.users.js';
import { validateUserCreate, validateUserPatch } from '../../middleware/users.validate.middleware.js'
import { validateTokenMiddleware } from "../../middleware/token.validate.middleware.js"

const route = Router();

/* API PERFIL DE USUARIOS */
//Obtener todos los usuarios
route.get('/users', controllers.getUsers);

//Obtener un usuario en especifico
route.get('/users/:id', controllers.getUserById);

//Obtener el perfil del usuario que inició sesión
route.get("/user/profile", [validateTokenMiddleware], controllers.getUserProfile)

//Crear nuevo perfil de usuario (asociado a una cuenta creada)
route.post('/users', [validateTokenMiddleware, validateUserCreate], controllers.createUser)

//Editar usuario
route.patch('/users/:id', [validateUserPatch], controllers.editUser);

export default route;