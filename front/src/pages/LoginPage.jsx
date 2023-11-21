import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

        // console.log("Email:", email, "Password:", password)

        fetch("http://localhost:3333/api/auth/login", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ email: email, password: password })
        })

            .then(async (response) => {

                console.log(response.ok)

                if (!response.ok) {
                    throw await response.json()
                }

                return await response.json()
            })

            .then(({ account, token }) => {
                console.log(account, token)
                localStorage.setItem("token", token)
                navigate("/", { replace: true })
            })
            .catch(err => setError(err.error.message))
    }

    return (
        <section className="container mt-5">

            <h1>Iniciar sesión</h1>

            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={onChangeEmail} value={email}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" placeholder="********" onChange={onChangePassword} value={password}></input>
                </div>
                <p> {error} </p>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
            {/* <form onSubmit={onSubmit}>
                <h1>Iniciar sesion</h1>
                <label>Nombre de usuario</label>
                <input type="text" onChange={onChangeUserName} value={userName} />
                <label>Contraseña</label>
                <input type="password" onChange={onChangePass} value={pass} />
                <p> {error} </p>
                <button type="submit">Ingresar</button>
            </form> */}

        </section>
    );
};

export default LoginPage;