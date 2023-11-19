import React, { useEffect, useState } from "react";
import ProjectList from '../components/ProjectList'

const ExploreProjectsPage = () => {

    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('');

    const fetchProjects = async (type) => {
        let endpoint = 'http://localhost:3333/api/projects';

        if (type) {
            endpoint = `http://localhost:3333/api/projects/${type}`;
        }

        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            setProjects(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching projects: ', error);
        }
    };

    useEffect(() => {
        fetchProjects(filter); // Llama a fetchProjects solo cuando cambia el filtro
    }, [filter]);


    return <>
        <h1 className="mt-5">Descubre oportunidades de colaboración</h1>

        <ProjectList projectsReceived={projects} setFilter={setFilter} />

    </>
};

export default ExploreProjectsPage