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

//Crear un nuevo equipo
const createTeam = (req, res) => {

    const team = {
        project_id: req.body.project_id,
        members: req.body.members,
    };

    service
        .createTeam(team)
        .then((newTeam) => {
            res.status(201).json(newTeam);
        })
        .catch((error) => {
            res.status(500).json();
        });

}

//Editar un equipo
const editTeam = (req, res) => {

    const id = req.params.id;

    const team = {};

    if (req.body.members) {
        team.members = req.body.members;
    }

    service.editTeam(id, team)
        .then((editedTeam) => {
            if (editedTeam) {
                res.status(200).json(editedTeam);
            } else {
                res.status(404).json();
            }
        });

}

//Agregar miembro a un equipo particular
const addMemberToTeam = (req, res) => {

    const projectId = req.params.id;
    const newMember = req.body;

    service.addMemberToTeam(projectId, newMember)

        .then((editedTeam) => {
            if (editedTeam) {
                res.status(200).json(editedTeam);
            } else {
                res.status(404).json();
            }
        });

}

//Eliminar un equipo
const deleteTeam = (req, res) => {

    const id = req.params.id;

    service
        .deleteTeam(id)
        .then(() => {
            res.status(204).json();
        })
        .catch((error) => res.status(500).json());

}


export {
    getTeamByProjectId,
    createTeam,
    editTeam,
    addMemberToTeam,
    deleteTeam
}