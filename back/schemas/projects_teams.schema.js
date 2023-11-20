import yup from 'yup'

const teamSchemaCreate = yup.object({
    project_id: yup.string().required(),
    members: yup.array().of(yup.object()).min(0).required(),
})

const teamSchemaPatch = yup.object({
    project_id: yup.string(),
    members: yup.array().of(yup.object()).min(0)
})

const teamMemberSchemaPatch = yup.object({
    _id: yup.string().required(),
    profile_pic: yup.string().nullable(),
    name: yup.string().required(),
    last_name: yup.string().required(),
    bio: yup.string().nullable(),
    location: yup.string().nullable(),
    professional_profile: yup.array().of(yup.string()).required(),
    skills: yup.array().of(yup.string()).required(),
    experience_level: yup.string().required(),
    availability: yup.string().required(),
    portfolio: yup.string().url().nullable(),
    preferences: yup.array().of(yup.string()).nullable(),
    project_details: yup.object().required(),
})

export {
    teamSchemaCreate,
    teamSchemaPatch,
    teamMemberSchemaPatch
}