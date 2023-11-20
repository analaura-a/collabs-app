import * as service from "../../services/accounts.services.js";

const createAccount = async (req, res) => {

    return service.createAccount(req.body)
        .then(() => res.status(201).json({ message: "Cuenta creada con éxito" }))
        .catch((err) => res.status(400).json({ error: { message: err.message } }))

}

const login = async (req, res) => {

    return service.login(req.body)
        .then((account) => res.status(200).json({ message: "Cuenta encontrada con éxito", account }))
        .catch((err) => res.status(404).json({ error: { message: err.message } }))

}

export {
    createAccount,
    login
}