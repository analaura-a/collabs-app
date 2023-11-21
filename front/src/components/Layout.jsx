import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../css/Layout.css'

const Layout = ({ children }) => {

    const navigate = useNavigate()

    const onLogout = async () => {

        await fetch('http://localhost:3333/api/auth/logout', {
            headers: {
                "auth-token": localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            method: "DELETE",
        })

        localStorage.removeItem("token")
        navigate("/login", { replace: true })
    }

    return (
        <div>

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

                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={onLogout}>Cerrar sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



            <div className="container">
                {children}
            </div>


        </div>
    );
};

export default Layout;