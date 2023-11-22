import { useState } from "react";
import { createPersonalProject } from "../services/projects.service";
import { useUserProfile } from '../context/SessionContext'

const CreatePersonalProjectPage = () => {

    const [name, setName] = useState("")
    const [about, setAbout] = useState("")
    const [availability, setAvailability] = useState("Baja")

    const userProfile = useUserProfile()

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeAbout = (e) => {
        setAbout(e.target.value)
    }

    const onChangeAvailability = (e) => {
        setAvailability(e.target.value)
        console.log(e.target.value)
    }

    const projectData = {
        type: "Personal",
        status: "Abierto",
        name: name,
        about: about,
        required_availability: availability,
        open_positions: [{}],
        founder: userProfile,
        founder_id: userProfile._id,

    }

    const onSubmit = (e) => {

        e.preventDefault();

        createPersonalProject(projectData)
            .then((a) => {
                console.log(a)

            })
            .catch(err => console.log(err))

    }


    return (
        <section className="mt-5">

            <h1>Crear nueva convocatoria para proyecto</h1>

            <form className="mt-5" onSubmit={onSubmit}>

                <fieldset>

                    <legend className="mb-4 fw-semibold">Información del proyecto</legend>

                    <div className="mb-4">
                        <label htmlFor="name" className="form-label fw-semibold">Nombre del proyecto (*)</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Proyecto de..." value={name} onChange={onChangeName}></input>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="about" className="form-label fw-semibold">Descripción del proyecto (*)</label>
                        <textarea className="form-control" id="about" name="about" rows="5" placeholder="El proyecto consistiría en... y estoy buscando personas que quieran sumarse a colaborar haciendo tareas como... " value={about} onChange={onChangeAbout}></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="availability" className="form-label fw-semibold">Disponibilidad requerida (*)</label>
                        {/* <input type="text" className="form-control" id="name" name="name" placeholder="Proyecto de..." value={availability} onChange={onChangeAvailability}></input> */}
                        <select className="form-select" value={availability} onChange={onChangeAvailability}>
                            <option value="Baja">Baja (1-2 horas/día)</option>
                            <option value="Media">Media (3-4 horas/día)</option>
                            <option value="Alta">Alta (5-6 horas/día)</option>
                            <option value="Fulltime">Fulltime (+7 horas/día)</option>
                        </select>
                    </div>

                </fieldset>

                <fieldset className="mt-5">

                    <legend className="mb-4 fw-semibold">Colaboradores buscados</legend>

                  

                </fieldset>

                <button type="submit" className="btn btn-primary">Crear convocatoria</button>

            </form>

        </section>
    );

};

export default CreatePersonalProjectPage;