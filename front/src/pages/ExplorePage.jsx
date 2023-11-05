import React, { useEffect, useState } from "react";
import ProjectList from '../components/ProjectList'

const ExplorePage = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/api/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, [])

    useEffect(() => { }, [projects])

    return <>
        <h1 className="mt-5">Descubre oportunidades de colaboración</h1>

        <ProjectList projectsReceived={projects} />

    </>
};

export default ExplorePage