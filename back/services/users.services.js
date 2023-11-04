import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://alumnos:alumnos@cluster0.rufodhz.mongodb.net");
const db = client.db("AH20232CP1");

//Obtener todos los usuarios
async function getUsers() {

    return db
        .collection("users")
        .find()
        .toArray();

}

//Obtener un usuario en específico
async function getUserById(id) {
    return db.collection("users").findOne({ _id: new ObjectId(id) });
}

//Crear un nuevo usuario
async function createUser(user) {
    const users = await db.collection("users").insertOne(user);
    user._id = users.insertedId;

    return user;
}

export {
    getUsers,
    getUserById,
    createUser
}