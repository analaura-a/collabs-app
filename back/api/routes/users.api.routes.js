import { Router } from 'express';
import * as controllers from '../controllers/controller.api.users.js';
import { validateUserCreate, validateUserPatch } from '../../middleware/users.validate.middleware.js'

const route = Router();

/* API USUARIOS */
//Obtener todos los usuarios
route.get('/users', controllers.getUsers);

//Obtener un usuario en especifico
route.get('/users/:id', controllers.getUserById);

//Crear un nuevo usuario
route.post('/users', [validateUserCreate], controllers.createUser);

//Editar usuario
route.patch('/users/:id', [validateUserPatch], controllers.editUser);

export default route;