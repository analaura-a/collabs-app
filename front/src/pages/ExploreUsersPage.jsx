import React, { useEffect, useState } from "react";
import UserList from '../components/UserList'

const ExploreUsersPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/api/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, [])

    useEffect(() => { }, [users])

    return <>
        <h1 className="mt-5">Encuentra colaboradores para tus proyectos</h1>

        <UserList usersReceived={users} />

    </>
};

export default ExploreUsersPage