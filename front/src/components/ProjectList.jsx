import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ productosRecibidos }) => {


    const [productos, setProductos] = React.useState(productosRecibidos)

    const onChangeFilter = (event) => {

        const filterText = event.target.value.toLowerCase();
        console.log(filterText)

        const filtrado = productos.filter(producto => producto.name.toLowerCase().includes(filterText))
        setProductos(filtrado)
        console.log(filtrado)
    }

    useEffect(() => {
        setProductos(productosRecibidos)
    }, [productosRecibidos])

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
                    productos.map(producto => <ProjectListItem key={producto._id} producto={producto} />)
                }

            </ul>
        </>
    );
};

export default ProjectList;