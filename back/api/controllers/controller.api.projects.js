import * as service from "../../services/projects.services.js";

//Traer todos los proyectos
const getProjects = (req, res) => {

    const filter = req.query;

    service.getProjects(filter)
        .then((projects) => {
            res.status(200).json(projects);
        })
        .catch((error) => {
            res.status(404).json();
        });

};

//Traer todos los proyectos creados por un usuario en particular
const getProjectsByUser = (req, res) => {

    const id = req.params.id;
    service.getProjectsByUser(id).then((projects) => {
        if (projects) {
            res.status(200).json(projects);
        } else {
            res.status(404).json();
        }
    });

};

//Traer un proyecto en particular
const getProjectById = (req, res) => {
    const id = req.params.id;
    service.getProjectById(id).then((project) => {
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json();
        }
    });
};

//Crear un nuevo proyecto
const createProject = (req, res) => {

    const project = {
        type: req.body.type,
        status: req.body.status,
        name: req.body.name,
        about: req.body.about,
        img: req.body.img,
        required_availability: req.body.required_availability,
        link: req.body.link,
        open_positions: req.body.open_positions,
        founder_id: req.body.founder_id
    };

    service
        .createProject(project)
        .then((newProject) => {
            res.status(201).json(newProject);
        })
        .catch((error) => {
            res.status(500).json();
        });
};

//Editar un proyecto
const editProject = (req, res) => {
    const id = req.params.id;

    const project = {};

    if (req.body.type) {
        project.type = req.body.type;
    }

    if (req.body.status) {
        project.status = req.body.status;
    }

    if (req.body.name) {
        project.name = req.body.name;
    }

    if (req.body.about) {
        project.about = req.body.about;
    }

    if (req.body.img) {
        project.img = req.body.img;
    }

    if (req.body.required_availability) {
        project.required_availability = req.body.required_availability;
    }

    if (req.body.link) {
        project.link = req.body.link;
    }

    service.editProject(id, project).then((editedProject) => {
        if (editedProject) {
            res.status(200).json(editedProject);
        } else {
            res.status(404).json();
        }
    });

};

//Eliminar un proyecto
const deleteProject = (req, res) => {

    const id = req.params.id;

    service
        .deleteProject(id)
        .then(() => {
            res.status(204).json();
        })
        .catch((error) => res.status(500).json());

};

export {
    getProjects,
    getProjectsByUser,
    getProjectById,
    createProject,
    editProject,
    deleteProject
}
