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

export {
    getTeamByProjectId,
    createTeam
}