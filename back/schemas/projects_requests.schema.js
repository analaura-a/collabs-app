import yup from "yup"

const requestSchemaCreate = yup.object({
    project_id: yup.string().required(),
    candidate: yup.object().required(),
    position: yup.string().required(),
    status: yup.string().required(),
})

const requestSchemaPatch = yup.object({
    project_id: yup.string(),
    candidate: yup.object(),
    position: yup.string(),
    status: yup.string(),
})

export {
    requestSchemaCreate,
    requestSchemaPatch
}