import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const TeamMemberCard = ({ user }) => {

    const { _id, name, last_name, bio, location, profile_pic, project_details } = user;

    return (

        <li className="col">
            <Link
                to={`/user/${_id}`} className="text-decoration-none"
            >
                <div className="card h-100">
                    <img src={profile_pic} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <span className="badge rounded-pill text-bg-primary" style={{ width: 'fit-content' }}>{project_details.role}</span>
                        <h2 className="card-title mt-3">{name} {last_name}</h2>
                        <p className="card-text text-secondary">
                            {location}
                        </p>
                        <p className="card-text">
                            {bio}
                        </p>

                        <h3 className="card-text fs-5">Rol en el proyecto</h3>
                        <p>{project_details.profile}</p>
                    </div>
                </div>
            </Link>
        </li >

    );
};

TeamMemberCard.propTypes = {
    user: PropTypes.object.isRequired
}

export default TeamMemberCard;