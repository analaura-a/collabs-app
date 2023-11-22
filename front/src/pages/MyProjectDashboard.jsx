import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../services/projects.service";

const MyProjectDashboard = () => {

    const [project, setProject] = useState({});
    const { id } = useParams();

    useEffect(() => {
        console.log("Iniciando componente");

        getProject(id)
            .then((data) => setProject(data));
    }, []);

    return project.name !== undefined ? (
        
        <section className="mt-5">

            <h1>Dashboard del proyecto "{project.name}"</h1>

        </section>

    ) : (
        <div>
            <h1>Cargando...</h1>
        </div>
    )

}

export default MyProjectDashboard;