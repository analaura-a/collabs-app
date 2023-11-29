import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyProjectsListItem from "../components/MyProjectsListItem";
import { getProjectsCreatedByUser } from "../services/projects.service";
import { useUserProfile } from '../context/SessionContext'

const MyProjectsPage = () => {

    const [projects, setProjects] = useState([]);

    const userProfile = JSON.parse(localStorage.getItem("user"))

    const id = userProfile._id;
    // console.log(id)

    const fetchMyProjects = () => {

        try {
            getProjectsCreatedByUser(id)
                .then((projects) => {
                    // console.log(projects)
                    setProjects(projects)
                });

        } catch (error) {
            console.error('Error fetching projects: ', error);
        }
    };

    useEffect(() => {
        fetchMyProjects();

        console.log("Iniciando componente");

    }, []);

    useEffect(() => { }, [projects])

    return (

        <section className="mt-5">

            <div className="d-md-flex justify-content-between">
                <h1>Mis proyectos</h1>
                <Link
                    to={"/crear-convocatoria"} className="btn btn-primary"
                >Crear convocatoria para proyecto</Link>

            </div>

            {projects.length != 0 ? (

                <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-4 mt-5">

                    {
                        projects.map(project => <MyProjectsListItem key={project._id} project={project} />)
                    }

                </ul>

            ) : (
                <p className="mt-5 fs-5 text-center text-secondary">Aún no has creado ninguna convocatoria para proyecto.</p>
            )}

        </section >

    )

}

export default MyProjectsPage;