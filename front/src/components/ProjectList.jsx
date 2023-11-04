import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {

    return (
        <>

            <form action="">
                <input
                    className="form-control form-control-lg mt-5"
                    type="text"
                    placeholder="Buscar proyectos de..."
                    aria-label=".form-control-lg example"
                />
            </form>

            <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-4 mt-5">
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
            </ul>
        </>
    );
};

export default ProjectList;