import ProjectList from '../components/ProjectList'

const ExplorePage = () => {

    const productos = [
        { id: 1, nombre: "cafe con leche", precio: 500, descripcion: "texto" },
        { id: 2, nombre: "cafe descremado", precio: 1000, descripcion: "texto" },
        { id: 3, nombre: "cafe con crema", precio: 1500, descripcion: "texto" },
        { id: 4, nombre: "cafe capuchino", precio: 2000, descripcion: "texto" },
        { id: 5, nombre: "cafe mocha", precio: 2500, descripcion: "texto" },
    ]

    return <>
        <h1 className="mt-5">Descubre oportunidades de colaboración</h1>

        <ProjectList productosRecibidos={productos} />

    </>
};

export default ExplorePage