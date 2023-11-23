import { call } from "./http.service";

//Obtener postulaciones de un proyecto particular
export function getRequestsByProjectId(id) {
    return call({ uri: `projects/${id}/requests` })
}

//Crear una nueva postulación para un proyecto particular
export function createRequest(requestData) {
    return call({
        uri: 'project_requests', method: "POST", body: requestData
    })
}

export default {
    getRequestsByProjectId,
    createRequest
}