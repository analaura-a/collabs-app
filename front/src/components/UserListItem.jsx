import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const UserListItem = () => {

    return (

        <li className="col">
            <div className="card h-100">
                <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">Lara Becker</h2>
                    <p className="card-text">
                        Buenos Aires, Argentina
                    </p>
                    <p className="card-text">
                        ¡Hola! Soy Lara, estudiante de Diseño y Desarrollo Web en Da Vinci. En la actualidad me estoy capacitando para crear soluciones digit...
                    </p>

                    <h3 className="card-text">Perfil profesional</h3>
                    <ul>
                        <li>UX/UI Designer</li>
                        <li>Web Designer</li>
                        <li>Fullstack Developer</li>
                    </ul>

                </div>
            </div>
        </li>

    );
};

export default UserListItem;