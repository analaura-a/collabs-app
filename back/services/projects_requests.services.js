import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://alumnos:alumnos@cluster0.rufodhz.mongodb.net");
const db = client.db("AH20232CP1");

//Obtener las postulaciones de un proyecto en particular
async function getRequestsByProjectId(id) {
    return db.collection("projects_requests").find({ project_id: id }).toArray();
}

//Agregar una nueva postulación
async function createRequest(request) {
    const requests = await db.collection("projects_requests").insertOne(request);
    request._id = requests.insertedId;

    return request;
}

export {
    getRequestsByProjectId,
    createRequest
}