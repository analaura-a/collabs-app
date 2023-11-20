import * as service from "../../services/projects_requests.services.js";

//Obtener las postulaciones de un proyecto en particular
const getRequestsByProjectId = (req, res) => {

    const id = req.params.id;

    service.getRequestsByProjectId(id).then((requests) => {
        if (requests) {
            res.status(200).json(requests);
        } else {
            res.status(404).json();
        }
    });

}

//Agregar una nueva postulación
const createRequest = (req, res) => {

    const request = {
        project_id: req.body.project_id,
        candidate: req.body.candidate,
        position: req.body.position,
        status: req.body.status,
    };

    service
        .createRequest(request)
        .then((newRequest) => {
            res.status(201).json(newRequest);
        })
        .catch((error) => {
            res.status(500).json();
        });
}

export {
    getRequestsByProjectId,
    createRequest
}
