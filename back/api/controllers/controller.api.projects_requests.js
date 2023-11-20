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

export {
    getRequestsByProjectId
}
