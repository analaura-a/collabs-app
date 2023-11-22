import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPersonalProject } from "../services/projects.service";
import { createTeam } from "../services/projects_teams";
import { useUserProfile } from '../context/SessionContext'

const CreatePersonalProjectPage = () => {

    const [name, setName] = useState("")
    const [about, setAbout] = useState("")
    const [availability, setAvailability] = useState("Baja")
    const [collaborators, setCollaborators] = useState([
        {
            profile: "UX/UI Designer",
            required_skills: [
                "Skill1", "Skill2", "Skill3"
            ],
            desired_skills: [
                "Skill1", "Skill2", "Skill3"
            ],
        }
    ]);

    const userProfile = useUserProfile()
    const navigate = useNavigate()

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

    const onChangeProfile = (index, property, value) => {

        const newCollaborators = [...collaborators];
        newCollaborators[index][property] = value;

        setCollaborators(newCollaborators);

        console.log('Colaboradores:', collaborators);
    };

    const handleAddCollaborator = () => {

        setCollaborators([...collaborators, { profile: "UX/UI Designer", required_skills: ["Skill1", "Skill2", "Skill3"], desired_skills: ["Skill1", "Skill2", "Skill3"] }]);

    };

    const projectData = {
        type: "Personal",
        status: "Abierto",
        name: name,
        about: about,
        img: "https://random.imagecdn.app/500/300",
        required_availability: availability,
        open_positions: collaborators,
        founder: userProfile,
        founder_id: userProfile._id,

    }


    const onSubmit = (e) => {

        e.preventDefault();

        createPersonalProject(projectData)
            .then((project) => {

                const teamData = {
                    project_id: project._id,
                    members: [{
                        ...project.founder,
                        project_details: {
                            role: "Founder",
                            profile: "Frontend Designer",
                            active: true
                        }
                    }],
                }

                createTeam(teamData)
                    .then((team) => {
                        console.log(team)
                    })
                    .catch(err => console.log(err))

                navigate("/mis-proyectos", { replace: true })
            })
            .catch(err => console.log(err))

    }


    return (
        <section className="mt-5">

            <h1>Crear nueva convocatoria para proyecto</h1>

            <form className="mt-5" onSubmit={onSubmit}>

                <fieldset>

                    <legend className="mb-2 fw-semibold">Información del proyecto</legend>
                    <p className="mb-4">Añade toda la información del proyecto necesaria para que aquellas personas interesadas en colaborar puedan conocer sobre él.</p>

                    <div className="mb-4">
                        <label htmlFor="name" className="form-label fw-semibold">Nombre del proyecto (*)</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Proyecto de..." value={name} onChange={onChangeName}></input>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="about" className="form-label fw-semibold">Descripción del proyecto (*)</label>
                        <textarea className="form-control" id="about" name="about" rows="5" placeholder="El proyecto consistiría en... y estoy buscando personas que quieran sumarse a colaborar haciendo tareas como... " value={about} onChange={onChangeAbout}></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Disponibilidad requerida (*)</label>
                        <select className="form-select" value={availability} onChange={onChangeAvailability}>
                            <option value="Baja">Baja (1-2 horas/día)</option>
                            <option value="Media">Media (3-4 horas/día)</option>
                            <option value="Alta">Alta (5-6 horas/día)</option>
                            <option value="Fulltime">Fulltime (+7 horas/día)</option>
                        </select>
                    </div>

                </fieldset>

                <fieldset className="mt-5">

                    <legend className="mb-2 fw-semibold">Colaboradores buscados</legend>
                    <p className="mb-4">Añade todos los perfiles que estás buscando para colaborar en el proyecto.</p>

                    {collaborators.map((collaborator, index) => (

                        <div key={index} className="mt-3">

                            <label className="form-label fw-semibold">Perfil profesional: (*)</label>

                            <select className="form-select" value={collaborator.profile} onChange={(e) => onChangeProfile(index, 'profile', e.target.value)}>
                                <option value="UX/UI Designer">UX/UI Designer</option>
                                <option value="Web Designer">Web Designer</option>
                                <option value="Frontend Developer">Frontend Developer</option>
                                <option value="Backend Developer">Backend Developer</option>
                                <option value="Fullstack Developer">Fullstack Developer</option>
                                <option value="Mobile Developer">Mobile Developer</option>
                                <option value="No-code Developer">No-code Developer</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="QA Tester">QA Tester</option>
                            </select>

                        </div>

                    ))}

                    <button type="button" onClick={handleAddCollaborator} className="btn btn-dark mt-3">
                        Agregar nuevo colaborador
                    </button>

                </fieldset>

                <button type="submit" className="btn btn-primary mt-5">Crear convocatoria</button>

            </form>

        </section>
    );

};

export default CreatePersonalProjectPage;