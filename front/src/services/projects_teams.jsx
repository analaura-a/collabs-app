import { call } from "./http.service";

//Obtener equipo de un proyecto particular
export function getTeamProjectById(id) {
    return call({ uri: `projects/${id}/team` })
}

//Crear un nuevo equipo (asociado a un proyecto)
export function createTeam(teamData) {
    return call({ uri: "project_teams", method: "POST", body: teamData })
}

export default {
    getTeamProjectById,
    createTeam
}
