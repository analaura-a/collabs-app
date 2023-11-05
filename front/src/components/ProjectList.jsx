import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projectsReceived }) => {


    const [projects, setProjects] = React.useState(projectsReceived)

    const onChangeFilter = (event) => {

        const filterText = event.target.value.toLowerCase();
        console.log(filterText)

        if (filterText !== '') {

            const filtrado = projects.filter(project => project.name.toLowerCase().includes(filterText))
            setProjects(filtrado)
            console.log(filtrado)

        } else {
            setProjects(projectsReceived)
        }


    }

    useEffect(() => {
        setProjects(projectsReceived)
    }, [projectsReceived])


    return (
        <>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <input
                    className="form-control form-control-lg mt-5"
                    type="text"
                    onChange={onChangeFilter}
                    placeholder="Buscar proyectos de..."
                    aria-label=".form-control-lg example"
                />
            </form>

            <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    projects.map(project => <ProjectListItem key={project._id} project={project} />)
                }

            </ul>
        </>
    );
};

export default ProjectList;