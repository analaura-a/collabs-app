import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const ProjectListItem = ({ project }) => {

    const { _id, name, about, img, founder, open_positions } = project;

    return (

        <li className="col">
            <Link
                to={`/explorar/proyectos/${_id}`} className="text-decoration-none"
            >
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">
                            {about}
                        </p>

                        <p className="card-text mt-2">
                            Organizado por <span className="fw-bold">{founder.name + " " + founder.last_name}</span>
                        </p>

                        <h3 className="card-text">Buscando</h3>

                        <ul>
                            {
                                open_positions.map((position, index) => (
                                    <li key={index}>{position.profile}</li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </Link>
        </li>

    );
};

ProjectListItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectListItem;