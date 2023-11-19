import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {

    const [user, setUser] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Iniciando componente");
        fetch(`http://localhost:3333/api/users/${id}`)
            .then((res) => {
                if (!res.ok || res.status === 401) {
                    navigate("/explorar/colaboradores", { replace: true });
                }
                return res.json();
            })
            .then((data) => setUser(data));
    }, []);


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