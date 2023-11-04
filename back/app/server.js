import express from "express";
import ApiProjectsRoute from '../api/routes/projects.api.routes.js'
import ApiUsersRoute from '../api/routes/users.api.routes.js'

const app = express(); //El servidor
app.listen(3333);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("public"));

app.use('/api', ApiProjectsRoute);
app.use('/api', ApiUsersRoute);