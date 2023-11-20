import * as service from "../../services/users.services.js";

//Traer todos los usuarios
const getUsers = (req, res) => {

    service.getUsers()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((error) => {
            res.status(404).json();
        });

};

//Traer un usuario en particular
const getUserById = (req, res) => {

    const id = req.params.id;

    service.getUserById(id).then((user) => {
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json();
        }
    });

};

//Crear un nuevo usuario
const createUser = (req, res) => {

    service
        .createUser(req.body)
        .then((newUser) => {
            res.status(201).json(newUser);
        })
        .catch((error) => {
            res.status(500).json();
        });

};

//Editar un usuario
const editUser = (req, res) => {

    const id = req.params.id;

    service.editUser(id, req.body)
        .then((editedUser) => {
            if (editedUser) {
                res.status(200).json(editedUser);
            } else {
                res.status(404).json();
            }
        });

}

export {
    getUsers,
    getUserById,
    createUser,
    editUser
}