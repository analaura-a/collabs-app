import yup from "yup"

const requestSchemaCreate = yup.object({
    project_id: yup.string().required(),
    candidate: yup.object().required(),
    position: yup.string().required(),
    status: yup.string().required(),
})

export {
    requestSchemaCreate
}