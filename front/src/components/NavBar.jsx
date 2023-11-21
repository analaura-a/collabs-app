import { useContext } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth.service";
import { SessionContext } from '../context/SessionContext'

const NavBar = () => {

    const navigate = useNavigate()

    const onLogout = async () => {

        logout()
            .then((account) => { console.log(account) })

        localStorage.removeItem("token")
        navigate("/login", { replace: true })
    }

    const { userProfile } = useContext(SessionContext)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <Link to="/" className="navbar-brand">Collabs</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Explorar
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/explorar/proyectos" className="dropdown-item">Proyectos</Link>
                                </li>
                                <li>
                                    <Link to="/explorar/colaboradores" className="dropdown-item">Colaboradores</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item nav-link" role="button" onClick={onLogout}>
                            Cerrar sesión
                        </li>

                        <li className="nav-item">
                            <Link to={`/user/${userProfile._id}`} className="nav-link">Mi perfil ({userProfile.name})</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default NavBar