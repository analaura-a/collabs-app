import { Router } from 'express';
import * as controllers from '../controllers/controller.api.accounts.js';
import { validateAccount } from '../../middleware/accounts.validate.middleware.js'

const route = Router();

/* API CUENTAS DE USUARIO */
//Agregar una nueva cuenta
route.post('/auth/signup', [validateAccount], controllers.createAccount);

//Iniciar sesión
route.post('/auth/login', [validateAccount], controllers.login);

//Cerrar sesión
route.delete('/auth/logout', controllers.logout);

export default route;