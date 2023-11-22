import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTeamProjectById } from "../services/projects_teams";

const MyProjectsListItem = ({ project }) => {

    const [teamProject, setTeamProject] = useState({
        "members": []
    })

    const fetchTeam = () => {

        try {
            getTeamProjectById(project._id)
                .then((team) => {
                    console.log(team)
                    setTeamProject(team)
                });

        } catch (error) {
            console.error('Error fetching projects: ', error);
        }
    };

    useEffect(() => {
        fetchTeam();

        console.log("Iniciando componente");

    }, []);

    // useEffect(() => { }, [teamProject])


    return (

        <li className="col">
            <Link
                to={`/explorar/proyectos`} className="text-decoration-none"
            >
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h2 className="card-title fs-3">{project.name}</h2>
                        <p className="card-subtitle mt-2 mb-2 text-body-secondary">{project.type}</p>
                        <p className="card-text">{project.about}</p>

                        <h3 className="fs-6">Colaboradores</h3>
                        <ul>

                            {
                                teamProject.members.map((member, index) => (
                                    <li key={index}>{member.name}</li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </Link>
        </li>

    );
};

export default MyProjectsListItem;