import * as service from "../../services/accounts.services.js";
import * as tokenService from "../../services/token.service.js";

const createAccount = async (req, res) => {

    return service.createAccount(req.body)
        .then(() => res.status(201).json({ message: "Cuenta creada con éxito" }))
        .catch((err) => res.status(400).json({ error: { message: err.message } }))

}

const login = async (req, res) => {

    return service.login(req.body)

        .then(async (account) => {
            return { token: await tokenService.createToken(account), account }
        })
        .then((auth) =>
            res.status(200).json(auth)
        )

        .catch((err) => res.status(404).json({ error: { message: err.message } }))

}

export {
    createAccount,
    login
}