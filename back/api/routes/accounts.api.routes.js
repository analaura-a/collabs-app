import { Router } from 'express';
import * as controllers from '../controllers/controller.api.accounts.js';
import { validateAccountCreate } from '../../middleware/accounts.validate.middleware.js'

const route = Router();

/* API CUENTAS DE USUARIO */
//Agregar una nueva cuenta
route.post('/auth/signup', [validateAccountCreate], controllers.createAccount);

//Iniciar sesión
route.post('/auth/login', [validateAccountCreate], controllers.login);

export default route;