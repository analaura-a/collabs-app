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
                    <svg width="135" height="38" viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="38" height="38" rx="11.6533" fill="#586BEE" />
                        <rect x="15.1992" y="14.6934" width="8.10667" height="8.86667" rx="4.05333" fill="#121213" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.929 18.7666C9.70556 18.7666 7.09242 16.1535 7.09242 12.93C7.09242 9.70652 9.70556 7.09338 12.929 7.09338C16.1525 7.09338 18.7656 9.70652 18.7656 12.93C18.7656 13.0096 18.764 13.0888 18.7609 13.1676L18.7652 13.1633C18.7652 15.9649 18.7652 17.3657 18.0648 18.0661C17.3644 18.7664 15.9636 18.7664 13.162 18.7664L13.1667 18.7618C13.0878 18.765 13.0086 18.7666 12.929 18.7666Z" fill="#F7F7F7" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.929 19.2333C9.70556 19.2333 7.09242 21.8464 7.09242 25.0699C7.09242 28.2934 9.70556 30.9065 12.929 30.9065C16.1525 30.9065 18.7656 28.2934 18.7656 25.0699C18.7656 24.9903 18.764 24.9111 18.7609 24.8323L18.7652 24.8366C18.7652 22.035 18.7652 20.6342 18.0648 19.9338C17.3644 19.2334 15.9636 19.2334 13.162 19.2334L13.1667 19.238C13.0878 19.2349 13.0086 19.2333 12.929 19.2333Z" fill="#F7F7F7" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.0671 19.2333C28.2905 19.2333 30.9037 21.8464 30.9037 25.0699C30.9037 28.2934 28.2905 30.9065 25.0671 30.9065C21.8436 30.9065 19.2305 28.2934 19.2305 25.0699C19.2305 24.9903 19.2321 24.911 19.2352 24.8322L19.2308 24.8365C19.2308 22.035 19.2308 20.6342 19.9312 19.9338C20.6316 19.2334 22.0324 19.2334 24.834 19.2334L24.8294 19.238C24.9082 19.2349 24.9874 19.2333 25.0671 19.2333Z" fill="#F7F7F7" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.0671 18.7666C28.2905 18.7666 30.9037 16.1535 30.9037 12.93C30.9037 9.70652 28.2905 7.09338 25.0671 7.09338C21.8436 7.09338 19.2305 9.70652 19.2305 12.93C19.2305 13.0096 19.2321 13.0889 19.2352 13.1677L19.2308 13.1633C19.2308 15.9649 19.2308 17.3657 19.9312 18.0661C20.6316 18.7665 22.0324 18.7665 24.834 18.7665L24.8294 18.7618C24.9082 18.765 24.9874 18.7666 25.0671 18.7666Z" fill="#F7F7F7" />
                        <circle cx="1.87472" cy="1.87472" r="1.87472" transform="matrix(-1 0 0 1 15.5117 17.1327)" fill="#121213" />
                        <path d="M17.3659 18.5334C16.432 18.7202 15.7316 18.5334 15.0312 17.7163V20.2844C15.7316 19.4673 16.432 19.2338 17.3659 19.4673V18.5334Z" fill="#121213" />
                        <circle cx="24.3591" cy="19.0075" r="1.87472" fill="#121213" />
                        <path d="M20.6302 18.5336C21.5641 18.7203 22.2645 18.5336 22.9648 17.7164V20.2845C22.2645 19.4674 21.5641 19.2339 20.6302 19.4674V18.5336Z" fill="#121213" />
                        <circle cx="19.0081" cy="24.363" r="1.87472" transform="rotate(90 19.0081 24.363)" fill="#121213" />
                        <path d="M19.4798 20.6344C19.293 21.5682 19.4798 22.2686 20.2969 22.969H17.7288C18.5459 22.2686 18.7794 21.5682 18.5459 20.6344H19.4798Z" fill="#121213" />
                        <circle cx="1.87472" cy="1.87472" r="1.87472" transform="matrix(0 -1 -1 0 20.8828 15.5116)" fill="#121213" />
                        <path d="M19.4798 17.3656C19.293 16.4318 19.4798 15.7314 20.2969 15.031H17.7288C18.5459 15.7314 18.7794 16.4318 18.5459 17.3656H19.4798Z" fill="#121213" />
                        <path d="M59.111 28.9338C53.7976 28.9338 49.6797 24.5899 49.6797 18.9402C49.6797 13.3172 53.7976 9 59.111 9C63.8931 9 67.7187 12.1979 68.436 16.9149H65.3277C64.7963 13.8236 62.299 11.6383 59.1376 11.6383C55.365 11.6383 52.7083 14.703 52.7083 18.9402C52.7083 23.2308 55.365 26.2955 59.1376 26.2955C62.299 26.2955 64.7963 24.0836 65.3277 20.9923H68.436C67.7187 25.7359 63.8931 28.9338 59.111 28.9338Z" fill="#131314" />
                        <path d="M76.564 28.8005C72.579 28.8005 69.6566 25.6559 69.6566 21.4719C69.6566 17.288 72.579 14.1433 76.564 14.1433C80.5491 14.1433 83.4715 17.288 83.4715 21.4719C83.4715 25.6559 80.5491 28.8005 76.564 28.8005ZM76.564 26.4287C78.8754 26.4287 80.7085 24.5633 80.7085 21.4719C80.7085 18.3806 78.8754 16.5418 76.564 16.5418C74.2527 16.5418 72.4461 18.3806 72.4461 21.4719C72.4461 24.5633 74.2527 26.4287 76.564 26.4287Z" fill="#131314" />
                        <path d="M87.4555 28.534H84.7456V9.39974H87.4555V28.534Z" fill="#131314" />
                        <path d="M92.4285 28.534H89.7187V9.39974H92.4285V28.534Z" fill="#131314" />
                        <path d="M103.22 28.534V26.3488C102.343 27.9211 100.776 28.8005 98.7033 28.8005C95.7809 28.8005 93.8681 27.1216 93.8681 24.5366C93.8681 21.7651 96.0732 20.326 100.271 20.326C101.094 20.326 101.759 20.3527 102.901 20.4859V19.4466C102.901 17.4212 101.812 16.2753 99.952 16.2753C97.986 16.2753 96.7905 17.4479 96.7108 19.4199H94.2666C94.3994 16.2487 96.6576 14.1433 99.952 14.1433C103.432 14.1433 105.451 16.1154 105.451 19.4732V28.534H103.22ZM96.4185 24.4567C96.4185 25.9224 97.5078 26.8818 99.2346 26.8818C101.493 26.8818 102.901 25.4694 102.901 23.3108V22.1648C101.865 22.0316 101.121 22.0049 100.43 22.0049C97.7469 22.0049 96.4185 22.8044 96.4185 24.4567Z" fill="#131314" />
                        <path d="M121.021 21.4719C121.021 25.7092 118.576 28.8005 114.777 28.8005C112.785 28.8005 111.085 27.7879 110.075 26.0023V28.534H107.578V9.39974H110.261V16.8349C111.244 15.1027 112.865 14.1433 114.777 14.1433C118.55 14.1433 121.021 17.1814 121.021 21.4719ZM118.231 21.4719C118.231 18.274 116.557 16.5151 114.246 16.5151C112.014 16.5151 110.261 18.2474 110.261 21.4186C110.261 24.5366 111.961 26.4021 114.246 26.4021C116.557 26.4021 118.231 24.6166 118.231 21.4719Z" fill="#131314" />
                        <path d="M134.268 24.3234C134.268 27.095 132.116 28.8005 128.37 28.8005C124.651 28.8005 122.446 26.9617 122.18 23.9237H124.757C124.864 25.6826 126.272 26.7752 128.424 26.7752C130.31 26.7752 131.558 26.1089 131.558 24.7765C131.558 23.6039 130.841 23.0976 129.088 22.7511L126.803 22.3247C124.199 21.8184 122.738 20.4859 122.738 18.354C122.738 15.8756 124.89 14.1433 128.158 14.1433C131.532 14.1433 133.817 15.9555 134.056 18.8603H131.479C131.319 17.1547 130.071 16.1687 128.184 16.1687C126.484 16.1687 125.342 16.8882 125.342 18.1141C125.342 19.26 126.059 19.793 127.759 20.1128L130.15 20.5659C132.94 21.0722 134.268 22.2981 134.268 24.3234Z" fill="#131314" />
                    </svg>
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