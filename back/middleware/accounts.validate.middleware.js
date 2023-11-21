import { accountSchema } from '../schemas/accounts.schema.js'

function validateAccount(req, res, next) {

    return accountSchema.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then((account) => {
            req.body = account
            next()
        })
        .catch((error) => res.status(500).json(error))
}

export {
    validateAccount
}