import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRequestsByUserId, deleteRequest } from "../services/projects_requests";
import { useUserProfile } from '../context/SessionContext'

const SentRequests = () => {

    const [requests, setRequests] = useState([]);

    const userProfile = useUserProfile()

    useEffect(() => {

        console.log("Iniciando componente");

        getRequestsByUserId(userProfile._id)
            .then((requests) => {
                console.log(requests)
                setRequests(requests)
            })
            .catch(err => console.log(err))

    }, []);

    useEffect(() => { }, [requests])

    const onDeleteRequest = (id) => {

        deleteRequest(id)
            .then((deletedRequest) => {
                console.log(deletedRequest)
            })
            .catch(err => console.log(err))

    }

    return (
        <section className="mt-5">
            <h1>Mis postulaciones</h1>

            {requests.length > 0 ? (

                <>
                    <p className="lead mt-2">Sigue el estado de los proyectos a los que apliques para unirte a colaborar.</p>

                    <div className="table-responsive mt-5">
                        <table className="table">

                            <thead>
                                <tr>
                                    <th scope="col">Proyecto</th>
                                    <th scope="col">Organizador</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Estado</th>
                                </tr>
                            </thead>

                            <tbody className="table-group-divider">

                                {requests.map((request, index) => (
                                    <tr key={index}>
                                        <td scope="row">{request.project.name}</td>
                                        <td>{request.project.founder.name + " " + request.project.founder.last_name}</td>
                                        <td>{request.position}</td>
                                        <td>{request.status}</td>

                                        {request.status === "Aprobada" ? (
                                            <td><Link
                                                to={`/explorar/proyectos/${request.project_id}`} className="btn btn-primary d-inline-block"
                                            >
                                                Ver convocatoria
                                            </Link></td>
                                        ) : (
                                            <td><Link
                                            to={`/explorar/proyectos/${request.project_id}`} className="btn btn-primary d-inline-block"
                                        >
                                            Ver convocatoria
                                        </Link> <button className="btn btn-primary" onClick={() => onDeleteRequest(request._id)}>Cancelar postulación</button></td>
                                        )}

                                    </tr>
                                ))}

                            </tbody>

                        </table>
                    </div>
                </>

            ) : (
                <div className="mt-5 text-center">
                    <h2>Aún no te has postulado a ningún proyecto</h2>
                    <p>Cuando hayas solicitado unirte a colaborar en algún proyecto, podrás seguir el estado de tu postulación aquí.</p>
                    <Link
                        to={"/explorar/proyectos"} className="btn btn-primary"
                    >Explorar proyectos</Link>
                </div>
            )}

        </section >
    )

}

export default SentRequests