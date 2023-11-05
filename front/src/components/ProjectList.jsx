import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projectsReceived, setFilter }) => {

    const [projects, setProjects] = useState(projectsReceived);

    useEffect(() => {
        setProjects(projectsReceived)
    }, [projectsReceived])

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

    return projects.length > 0 ?
        (
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

                <div className="mt-3">
                    <button className="btn btn-primary me-2" onClick={() => setFilter('personal')}>
                        Personales
                    </button>
                    <button className="btn btn-primary me-2" onClick={() => setFilter('open-source')}>
                        Open-source
                    </button>
                    <button className="btn btn-primary" onClick={() => setFilter('')}>
                        Todos
                    </button>
                </div>

                <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        projects.map(project => <ProjectListItem key={project._id} project={project} />)
                    }

                </ul>
            </>
        )
        : (
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

                <h2 className="mt-5">No hay resultados para tu búsqueda...</h2>
            </>
        )

};

ProjectList.propTypes = {
    projectsReceived: PropTypes.array.isRequired
}

export default ProjectList;