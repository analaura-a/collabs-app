import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const ProjectListItem = () => {

    return (

        <li className="col">
            <div className="card h-100">
                <img src="https://www.alkemy.org/wp-content/uploads/2022/04/como-conseguir-el-primer-empleo-en-it.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">Web para mascotas</h2>
                    <p className="card-text">
                        La idea es crear una web para que las mascotas sin hogar puedan ser adoptadas por personas que estén buscando un nuevo com...
                    </p>

                    <p className="card-text mt-2">
                        Organizado por <span>Ana Laura Almirón</span>
                    </p>

                    <h3 className="card-text">Buscando</h3>
                    <ul>
                        <li>UX Designer</li>
                        <li>Frontend Developer</li>
                        <li>Backend Developer</li>
                    </ul>

                </div>
            </div>
        </li>

    );
};

export default ProjectListItem;