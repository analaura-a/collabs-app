import { call } from "./http.service";

//Obtener postulaciones de un proyecto particular
export function getRequestsByProjectId(id) {
    return call({ uri: `projects/${id}/requests` })
}

export default {
    getRequestsByProjectId
}