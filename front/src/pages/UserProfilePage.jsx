import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/users.service";

const UserProfilePage = () => {

    const [user, setUser] = useState([]);
    const { id } = useParams();

    const fetchUser = () => {

        try {
            getUserById(id)
                .then((user) => setUser(user));

        } catch (error) {
            console.error('Error fetching projects: ', error);
        }
    };

    useEffect(() => {
        fetchUser();

        console.log("Iniciando componente: UserProfilePage");

    }, [id]);

    return (
        user.name !== undefined ? (
            <>
                <div className="mt-5">
                    <img src={user.profile_pic} alt={user.name} className="rounded-4" />
                    <h1 className="mt-2">{user.name} {user.last_name}</h1>
                    <p>{user.location}</p>
                </div>
                <div className="mt-5">
                    <h2>Acerca de</h2>
                    <p >{user.bio}</p>
                </div>
                <div className="mt-5">
                    <h2>Quiero unirme a colaborar en proyectos como</h2>
                    <ul>
                        {
                            user.professional_profile.map((profile, index) => (
                                <li key={index}>{profile}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-5">
                    <h2>Skills</h2>
                    <ul>
                        {
                            user.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))
                        }
                    </ul>

                    <dl className="mt-4">
                        <dt>Disponibilidad</dt>
                        <dd>{user.availability}</dd>
                        <dt className="mt-2">Nivel de conocimiento</dt>
                        <dd>{user.experience_level}</dd>
                    </dl>
                </div>
            </>
        ) : (
            <div>
                <h1>Cargando...</h1>
            </div>
        )

    )
}

export default UserProfilePage;