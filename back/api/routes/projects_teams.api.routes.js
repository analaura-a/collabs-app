import { Router } from 'express';
import * as controllers from '../controllers/controller.api.projects_teams.js';

const route = Router();

/* API EQUIPOS DE PROYECTOS */
//Obtener el equipo de un proyecto en particular
route.get('/projects/:id/team', controllers.getTeamByProjectId);

//Agregar un nuevo equipo
route.post('/teams', controllers.createTeam);

//Editar un equipo
route.patch('/teams/:id', controllers.editTeam);

//Eliminar un equipo
route.delete("/teams/:id", controllers.deleteTeam);

export default route;