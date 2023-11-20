import { Router } from 'express';
import * as controllers from '../controllers/controller.api.projects_requests.js';
import { validateRequestCreate } from '../../middleware/projects_requests.validate.middleware.js'

const route = Router();

/* API POSTULACIONES DE PROYECTOS */
//Obtener las postulaciones de un proyecto en particular
route.get('/projects/:id/requests', controllers.getRequestsByProjectId);

//Agregar una nueva postulación
route.post('/project_requests', [validateRequestCreate], controllers.createRequest);

//Eliminar una postulación
route.delete('/project_requests/:id', controllers.deleteRequest);

export default route;