import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyProjectsListItem from "../components/MyProjectsListItem";
import { getProjectsCreatedByUser } from "../services/projects.service";
import { useUserProfile } from '../context/SessionContext'

const MyProjectsPage = () => {

    const [projects, setProjects] = useState([]);

    const userProfile = useUserProfile()

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

            <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-4 mt-5">

                {
                    projects.map(project => <MyProjectsListItem key={project._id} project={project} />)
                }

            </ul>

        </section >
    )

}


export default MyProjectsPage;