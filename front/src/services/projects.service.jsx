import { call } from "./http.service";

//Obtener proyectos (todos y por tipo)
export async function getProjects(type) {

    let endpoint = 'projects';

    if (type) {
        endpoint = `projects/${type}`;
    }

    try {
        // const response = await fetch(endpoint, {
        //     headers: {
        //         "auth-token": localStorage.getItem("token")
        //     },
        // });

        // const data = await response.json();

        // return data
        return call({ uri: endpoint })

    } catch (error) {
        console.error('Error fetching projects: ', error);
    }

}

//Obtener proyectos creados por un usuario
export function getProjectsCreatedByUser(id) {
    return call({ uri: `user/${id}/projects` })
}

//Obtener un proyecto en particular
export function getProject(id) {
    return call({ uri: `projects/${id}` })
}

//Crear una nueva convocatoria de proyecto (personal)
export function createPersonalProject(projectData) {
    return call({ uri: "/projects/personal", method: "POST", body: projectData })
}

export default {
    getProjects,
    getProjectsCreatedByUser,
    getProject,
    createPersonalProject
}
