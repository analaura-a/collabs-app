import { call } from "./http.service";

//Obtener equipo de un proyecto particular
export function getTeamProjectById(id) {
    return call({ uri: `projects/${id}/team` })
}

//Crear un nuevo equipo (asociado a un proyecto)
export function createTeam(teamData) {
    return call({ uri: "project_teams", method: "POST", body: teamData })
}

//Agregar colaborador al equipo de un proyecto particular
export function addTeamMember(projectId, teamMemberData) {
    return call({ uri: `projects/${projectId}/team`, method: "PATCH", body: teamMemberData })
}

export default {
    getTeamProjectById,
    createTeam,
    addTeamMember
}
