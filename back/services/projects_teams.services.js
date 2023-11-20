import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://alumnos:alumnos@cluster0.rufodhz.mongodb.net");
const db = client.db("AH20232CP1");

//Obtener el equipo de un proyecto en particular
async function getTeamByProjectId(id) {
    return db.collection("projects_teams").findOne({ project_id: id });
}

//Crear un nuevo equipo
async function createTeam(team) {
    const teams = await db.collection("projects_teams").insertOne(team);
    team._id = teams.insertedId;
    return team;
}

//Editar un equipo
async function editTeam(id, team) {
    const editedTeam = await db.collection("projects_teams").updateOne({ _id: new ObjectId(id) }, { $set: team });
    return editedTeam;
}

//Agregar miembro a un equipo particular
async function addMemberToTeam(projectId, newMember) {

    const editedTeam = await db.collection("projects_teams").findOneAndUpdate(
        { project_id: projectId },
        { $push: { members: newMember } },
        { returnDocument: 'after' }
    );
    return editedTeam;
}

//Eliminar un equipo
async function deleteTeam(id) {
    const deletedTeam = await db.collection("projects_teams").deleteOne({ _id: new ObjectId(id) })
    return deletedTeam;
}

export {
    getTeamByProjectId,
    createTeam,
    editTeam,
    addMemberToTeam,
    deleteTeam
}