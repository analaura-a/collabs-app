import React, { useEffect, useState } from "react";
import ProjectList from '../components/ProjectList'

const ExplorePage = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/api/projects')
            .then((res) => res.json())
            .then((data) =>setProductos(data));
    }, [])

    useEffect(() => { }, [productos])




    return <>
        <h1 className="mt-5">Descubre oportunidades de colaboración</h1>

        <ProjectList productosRecibidos={productos} />

    </>
};

export default ExplorePage