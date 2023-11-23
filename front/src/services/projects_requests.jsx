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

//Eliminar una postulación
export function deleteRequest(id) {
    return call({ uri: `project_requests/${id}`, method: "DELETE" })
}

export default {
    getRequestsByProjectId,
    createRequest,
    deleteRequest
}