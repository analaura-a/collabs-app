import React, { useEffect, useState } from "react";
import ProjectList from '../components/ProjectList'
import { getProjects } from '../services/projects.service'

const ExploreProjectsPage = () => {

    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('');

    const fetchProjects = (type) => {

        try {
            getProjects(type)
                .then((projects) => setProjects(projects));

        } catch (error) {
            console.error('Error fetching projects: ', error);
        }
    };

    useEffect(() => {
        fetchProjects(filter); // Llama a fetchProjects solo cuando cambia el filtro

        console.log("Iniciando componente");

    }, [filter]);

    useEffect(() => { }, [projects])

    return <>
        <h1 className="mt-5">Descubre oportunidades de colaboración</h1>

        <ProjectList projectsReceived={projects} setFilter={setFilter} />

    </>
};

export default ExploreProjectsPage