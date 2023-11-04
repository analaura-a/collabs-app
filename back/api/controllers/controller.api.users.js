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

    const user = {
        profile_pic: req.body.profile_pic,
        name: req.body.name,
        last_name: req.body.last_name,
        bio: req.body.bio,
        location: req.body.location,
        professional_profile: req.body.professional_profile,
        skills: req.body.skills,
        experience_level: req.body.experience_level,
        availability: req.body.availability,
        portfolio: req.body.portfolio,
        preferences: req.body.preferences
    };

    service
        .createUser(user)
        .then((newUser) => {
            res.status(201).json(newUser);
        })
        .catch((error) => {
            res.status(500).json();
        });

};

export {
    getUsers,
    getUserById,
    createUser
}