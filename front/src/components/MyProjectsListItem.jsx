
import { Link } from "react-router-dom";

const MyProjectsListItem = ({ project }) => {

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
                            <li>Colaborador 1</li>
                            <li>Colaborador 2</li>
                        </ul>
                    </div>
                </div>
            </Link>
        </li>

    );
};

export default MyProjectsListItem;