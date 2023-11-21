import yup from 'yup'

const accountSchema = yup.object({
    email: yup.string().trim().email().required(),
    password: yup.string().required().min(6),
})

export {
    accountSchema
}