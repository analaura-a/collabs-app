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

//Obtener un proyecto en particular
export function getProject(id) {
    return call({ uri: `projects/${id}` })
}

export default {
    getProjects,
    getProject
}
