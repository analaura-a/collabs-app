import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/auth.service";

const LoginPage = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        login({ email, password })
            .then(({ account, token }) => {
                console.log(account, token)
                localStorage.setItem("token", token)
                navigate("/", { replace: true })
            })
            .catch(err => setError(err.error.message))
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <p className="navbar-brand">Collabs</p>
                </div>
            </nav>

            <section className="container mt-5">

                <h1>Iniciar sesión</h1>
                <p className="lead">¿Aún no tienes una cuenta? <Link to="/signup" className="fw-semibold text-primary text-decoration-none">Regístrate</Link></p>

                <form onSubmit={onSubmit} className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-medium">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={onChangeEmail} value={email}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-medium">Contraseña</label>
                        <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" placeholder="********" onChange={onChangePassword} value={password}></input>
                    </div>
                    <p> {error} </p>
                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                </form>

            </section>
        </>

    );
};

export default LoginPage;