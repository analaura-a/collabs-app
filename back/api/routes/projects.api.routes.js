import { Router } from 'express';
import * as controllers from '../controllers/controller.api.projects.js';
import { validatePersonalProjectCreate, validateOpenSourceProjectCreate, validatePersonalProjectPatch, validateOpenSourceProjectPatch } from '../../middleware/projects.validate.middleware.js'

const route = Router();

/* API PROYECTOS */
//Obtener todos los proyectos
route.get('/projects', controllers.getProjects);

//Obtener los proyectos de tipo personal
route.get('/projects/personal', controllers.getProjectsPersonal)

//Obtener los proyectos de tipo open-source
route.get('/projects/open-source', controllers.getProjectsOpenSource)

//Obtener todos los proyectos que creó un usuario en particular
route.get('/user/:id/projects', controllers.getProjectsByUser);

//Obtener un proyecto en especifico
route.get('/projects/:id', controllers.getProjectById)

//Agregar un nuevo proyecto personal
route.post('/projects/personal', [validatePersonalProjectCreate], controllers.createProject);

//Agregar un nuevo proyecto open-source
route.post('/projects/open-source', [validateOpenSourceProjectCreate], controllers.createProject);

//Editar un proyecto personal
route.patch('/projects/personal/:id', [validatePersonalProjectPatch], controllers.editProject);

//Editar un proyecto open-source
route.patch('/projects/open-source/:id', [validateOpenSourceProjectPatch], controllers.editProject);

//Borrar un proyecto (eliminado lógico)
route.delete("/projects/:id", controllers.deleteProject);

export default route;