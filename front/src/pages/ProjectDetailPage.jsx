import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProject } from "../services/projects.service";
import { createRequest } from "../services/projects_requests";
import { useUserProfile } from '../context/SessionContext'

const ProjectDetailPage = () => {

    const [project, setProject] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');

    const userProfile = useUserProfile()

    const { id } = useParams();

    useEffect(() => {
        console.log("Iniciando componente");

        getProject(id)
            .then((data) => setProject(data));
    }, []);

    const onChangeSelectedRole = (event) => {
        const selected = event.target.value;
        setSelectedRole(selected)
        console.log(selected)
    }

    const requestData = {
        project_id: project._id,
        project: project,
        candidate: userProfile,
        position: selectedRole,
        status: "Pending",
    }

    const onSubmit = (e) => {

        e.preventDefault();

        createRequest(requestData)
            .then((request) => {
                console.log(request)
            })
            .catch(err => console.log(err))

    }

    return (
        project.name !== undefined ? (
            <>
                <Link
                    to={'/explorar/proyectos'} className="text-decoration-none d-block fw-bold mt-5"
                >Atrás</Link>

                <div className="mt-5">
                    <h1>{project.name}</h1>
                    <p className="mt-2">Publicado el 19 de octubre, 2023</p>
                    <img src={project.img} alt={project.name} className="mt-4 rounded-4" />
                </div>

                <div className="mt-5">
                    <h2>Acerca del proyecto</h2>
                    <p>{project.about}</p>
                    <dl className="mt-3">
                        <dt>Tipo</dt>
                        <dd>{project.type}</dd>
                        <dt className="mt-2">Disponibilidad requerida</dt>
                        <dd>{project.required_availability}</dd>
                    </dl>
                </div>

                <div className="mt-5">
                    <h2>Colaboradores buscados</h2>
                    <ul>
                        {
                            project.open_positions.map((position, index) => (

                                <li className="mb-4" key={index}>

                                    <p key={index} className="fs-4">{position.profile}</p>

                                    <h3 className="fs-6 mt-2">Skills requeridas</h3>
                                    <ul>
                                        {
                                            position.required_skills.map((skill, indice) => (
                                                <li key={indice}>{skill}</li>
                                            ))
                                        }
                                    </ul>

                                    <h3 className="fs-6 mt-2">Skills deseables</h3>
                                    <ul>
                                        {
                                            position.desired_skills.map((skill, otroIndice) => (
                                                <li key={otroIndice}>{skill}</li>
                                            ))
                                        }
                                    </ul>

                                </li>

                            ))
                        }
                    </ul>
                </div>

                <div className="mt-5">
                    <h2>Organizador del proyecto</h2>

                    <Link
                        to={`/user/${project.founder._id}`} className="text-decoration-none fs-3 mb-0"
                    >{project.founder.name} {project.founder.last_name}</Link>
                    <p>{project.founder.location}</p>

                    <h3 className="fs-5">Biografía</h3>
                    <p>{project.founder.bio}</p>

                    <h3 className="fs-5">Rol en el proyecto</h3>
                    <p>Frontend Developer</p>
                </div>

                {project.type === "Personal" ? (
                    <div className="mt-5 pb-5">
                        <h2>Quiero colaborar como...</h2>

                        <form onSubmit={onSubmit}>
                            {
                                project.open_positions.map((position, index) => (

                                    <div className="form-check" key={index}>

                                        <input className="form-check-input" type="radio" name="roles" id={position.profile} value={position.profile} checked={selectedRole === position.profile}
                                            onChange={onChangeSelectedRole}></input>

                                        <label className="form-check-label" htmlFor={position.profile}>
                                            {position.profile}
                                        </label>

                                    </div>

                                ))
                            }
                            <button type="submit" className="btn btn-primary mt-3 mb-5">Postularme</button>
                        </form>


                    </div>

                ) : (
                    <a className="btn btn-primary mt-3 mb-5" href={project.url} target="_blank">Quiero colaborar</a>
                )}


            </>
        ) : (
            <div>
                <h1>Cargando...</h1>
            </div>
        )

    )
}

export default ProjectDetailPage;