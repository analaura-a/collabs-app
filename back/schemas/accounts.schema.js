import yup from 'yup'

const accountSchemaCreate = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
})

export {
    accountSchemaCreate
}