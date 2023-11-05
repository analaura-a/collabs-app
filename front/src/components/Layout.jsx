import { Link } from "react-router-dom";

import '../css/Layout.css'

const Layout = ({ children }) => {
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
                                <Link to="/" className="nav-link active">Home</Link>
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
                                        <Link to="/explorar" className="dropdown-item">Proyectos</Link>
                                    </li>
                                    <li>
                                        <Link to="/colaboradores" className="dropdown-item">Colaboradores</Link>
                                    </li>
                                </ul>
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