import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../services/projects.service";
import { getTeamProjectById } from "../services/projects_teams";
import UserListItem from "../components/UserListItem";

const MyProjectDashboard = () => {

    const [project, setProject] = useState({});
    const [teamProject, setTeamProject] = useState({
        "members": []
    })

    const { id } = useParams();

    useEffect(() => {
        console.log("Iniciando componente");

        getProject(id)
            .then((data) => setProject(data))
            .catch(err => console.log(err))

        getTeamProjectById(id)
            .then((team) => {
                console.log(team)
                setTeamProject(team)
            })
            .catch(err => console.log(err))

    }, []);

    useEffect(() => { }, [teamProject])

    return project.name !== undefined ? (

        <section className="mt-5">

            <h1>Dashboard del proyecto "{project.name}"</h1>

            <h2 className="fw-6 mt-5">Acerca del proyecto</h2>
            <p>{project.about}</p>

            <h2 className="fw-6 mt-5">Equipo del proyecto</h2>
            <ul className="mt-2 list-unstyled row row-cols-1 row-cols-md-3 g-4">
                {
                    teamProject.members.map((member, index) => (
                        <UserListItem key={index} user={member}></UserListItem>
                    ))
                }
            </ul>

        </section>

    ) : (
        <div>
            <h1>Cargando...</h1>
        </div>
    )

}

export default MyProjectDashboard;