import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup, login } from "../services/auth.service";
import { createUser } from "../services/users.service";

const SignupPage = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [error, setError] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeLastname = (e) => {
        setLastname(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const userData = {
        profile_pic: "https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg",
        name: name,
        last_name: lastname,
        bio: "",
        location: "",
        professional_profile: ["Frontend Developer"],
        skills: ["Skill 1", "Skill 2", "Skill 3"],
        experience_level: "Principiante",
        availability: "Baja (1-2 horas/día)",
        portfolio: "",
        preferences: ["Open-source"]
    }

    const onSubmit = (e) => {

        e.preventDefault();

        signup({ email, password })
            .then(() => {

                login({ email, password })
                    .then(({ account, token }) => {
                        console.log("Inició sesión:", account, "con el token:", token)
                        localStorage.setItem("token", token)

                        createUser(userData)
                            .then((userCreated) => {
                                console.log(userCreated)
                                navigate("/", { replace: true })
                            })
                            .catch((err => console.log(err)))

                    })
                    .catch(err => setError(err.error.message))

            })
            .catch(err => console.log(err.error.message))
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <p className="navbar-brand">Collabs</p>
                </div>
            </nav>

            <section className="container mt-5">

                <h1>Crea tu cuenta</h1>
                <p className="lead">¿Ya tienes una cuenta? <Link to="/login" className="fw-semibold text-primary text-decoration-none">Inicia sesión</Link></p>

                <form className="mt-5" onSubmit={onSubmit}>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-medium">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Nombre" value={name} onChange={onChangeName}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label fw-medium">Apellido</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Apellido" value={lastname} onChange={onChangeLastname}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-medium">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" value={email} onChange={onChangeEmail}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-medium">Contraseña</label>
                        <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" placeholder="********" value={password} onChange={onChangePassword}></input>
                        <div id="passwordHelpBlock" className="form-text">
                            Debe contener al menos 6 caracteres.
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Crear cuenta</button>

                </form>

            </section>
        </>
    )
}

export default SignupPage;