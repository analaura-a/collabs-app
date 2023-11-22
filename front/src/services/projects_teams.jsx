import { call } from "./http.service";

//Obtener equipo de un proyecto particular
export function getTeamProjectById(id) {
    return call({ uri: `/projects/${id}/team` })
}

export default {
    getTeamProjectById
}
