import { Router } from 'express';
import * as controllers from '../controllers/controller.api.projects_teams.js';

const route = Router();

/* API EQUIPOS DE PROYECTOS */
//Obtener el equipo de un proyecto en particular
route.get('/projects/:id/team', controllers.getTeamByProjectId);

//Agregar un nuevo equipo
route.post('/project_teams', controllers.createTeam);

//Editar un equipo
route.patch('/project_teams/:id', controllers.editTeam);

//Agregar miembro a un equipo particular
route.patch('/projects/:id/team', controllers.addMemberToTeam);

//Eliminar un equipo
route.delete("/project_teams/:id", controllers.deleteTeam);

export default route;