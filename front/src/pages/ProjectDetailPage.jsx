import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectDetailPage = () => {

    const [project, setProject] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Iniciando componente");
        fetch(`http://localhost:3333/api/projects/${id}`)
            .then((res) => {
                if (!res.ok || res.status === 401) {
                    navigate("/explorar/proyectos", { replace: true });
                }
                return res.json();
            })
            .then((data) => setProject(data));
    }, []);

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

                <div className="mt-5 pb-5">
                    <h2>Quiero colaborar como...</h2>

                    <form action="">
                        {
                            project.open_positions.map((position, index) => (

                                <div className="form-check" key={index}>
                                    <input className="form-check-input" type="radio" name="default" id={index}></input>
                                    <label className="form-check-label" htmlFor={index}>
                                        {position.profile}
                                    </label>
                                </div>

                            ))
                        }
                        <button type="submit" className="btn btn-primary mt-3">Postularme</button>
                    </form>


                </div>

            </>
        ) : (
            <div>
                <h1>Cargando...</h1>
            </div>
        )

    )
}

export default ProjectDetailPage;