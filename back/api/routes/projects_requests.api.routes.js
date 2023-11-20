import { Router } from 'express';
import * as controllers from '../controllers/controller.api.projects_requests.js';

const route = Router();

/* API POSTULACIONES DE PROYECTOS */
//Obtener las postulaciones de un proyecto en particular
route.get('/projects/:id/requests', controllers.getRequestsByProjectId);

export default route;