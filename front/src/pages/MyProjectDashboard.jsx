import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProject } from "../services/projects.service";
import { getTeamProjectById } from "../services/projects_teams";
import { getRequestsByProjectId, editRequest } from "../services/projects_requests";
import TeamMemberCard from "../components/TeamMemberCard";
import { addTeamMember } from "../services/projects_teams";

const MyProjectDashboard = () => {

    const [project, setProject] = useState({});
    const [teamProject, setTeamProject] = useState({
        "members": []
    })
    const [requests, setRequests] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        console.log("Iniciando componente");

        getProject(id)
            .then((data) => setProject(data))
            .catch(err => console.log(err))

        getTeamProjectById(id)
            .then((team) => {
                // console.log(team)
                setTeamProject(team)
            })
            .catch(err => console.log(err))

        getRequestsByProjectId(id)
            .then((requests) => {
                // console.log(requests)
                setRequests(requests)
            })
            .catch(err => console.log(err))

    }, []);

    useEffect(() => { }, [teamProject])

    const onAddTeamMember = (request, teamMember) => {

        // console.log(teamMember)
        // console.log(request)

        const teamMemberData = {
            ...teamMember,
            project_details: {
                role: "Collaborator",
                profile: request.position,
                active: true
            }
        }

        addTeamMember(project._id, teamMemberData)
            .then((teamMemberAdded) => {

                console.log(teamMemberAdded)

                // setTeamProject((oldTeam) => [
                //     ...oldTeam,
                //     teamMemberAdded
                // ])

                editRequest(request._id, { status: "Aprobada" })
                    .then(async (updatedRequest) => {
                        console.log(updatedRequest)

                        //Actualizo la interfaz con los nuevos cambios
                        const newTeam = await getTeamProjectById(id)
                        setTeamProject(newTeam)     

                        const newRequests = await getRequestsByProjectId(id)
                        setRequests(newRequests)  

                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }

    return project.name !== undefined ? (

        <section className="mt-5">

            <h1>Dashboard del proyecto "{project.name}"</h1>

            <h2 className="fw-6 mt-5">Acerca del proyecto</h2>
            <p>{project.about}</p>

            <h2 className="fw-6 mt-5">Equipo del proyecto</h2>
            <ul className="mt-2 list-unstyled row row-cols-1 row-cols-md-3 g-4">
                {
                    teamProject.members.map((member, index) => (
                        <TeamMemberCard key={index} user={member}></TeamMemberCard>
                    ))
                }
            </ul>

            <h2 className="fw-6 mt-5">Postulaciones</h2>
            <p>Revisa las postulaciones de las personas interesadas en unirse a colaborar en el proyecto.</p>

            {
                requests.length === 0 ? (

                    <p className="fw-semibold text-secondary mt-4 pb-4">Aún no has recibido postulaciones.</p>

                ) : (

                    <div className="mt-3 pb-5">
                        <p className="fw-semibold text-secondary mt-4 pb-4">Haz recibido {requests.length} postulaciones.</p>

                        <div className="table-responsive">

                            <table className="table">

                                <thead>
                                    <tr>
                                        <th scope="col">Colaborador</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Disponibilidad</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">

                                    {requests.map((request, index) => (


                                        <tr key={index}>

                                            <td scope="row">
                                                <Link
                                                    to={`/user/${request.candidate._id}`} className="btn btn-outline-secondary d-inline-block"
                                                >
                                                    {request.candidate.name + ' ' + request.candidate.last_name}
                                                </Link>
                                            </td>
                                            <td>{request.position}</td>
                                            <td>{request.candidate.availability}</td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => onAddTeamMember(request, request.candidate)}>Agregar al proyecto</button>
                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>
                )
            }

        </section>

    ) : (
        <div>
            <h1>Cargando...</h1>
        </div>
    )

}

export default MyProjectDashboard;