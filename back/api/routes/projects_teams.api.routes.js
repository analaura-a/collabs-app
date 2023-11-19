import { Router } from 'express';
import * as controllers from '../controllers/controller.api.projects_teams.js';

const route = Router();

/* API EQUIPOS DE PROYECTOS */
//Obtener el equipo de un proyecto en particular
route.get('/projects/:id/team', controllers.getTeamByProjectId);


export default route;