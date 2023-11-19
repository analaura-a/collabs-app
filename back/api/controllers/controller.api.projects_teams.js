import * as service from "../../services/projects_teams.services.js";

//Obtener el equipo de un proyecto en particular
const getTeamByProjectId = (req, res) => {

    const id = req.params.id;
    service.getTeamByProjectId(id).then((team) => {
        if (team) {
            res.status(200).json(team);
        } else {
            res.status(404).json();
        }
    });

}


export {
    getTeamByProjectId
}