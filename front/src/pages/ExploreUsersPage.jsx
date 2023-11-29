import React, { useEffect, useState } from "react";
import UserList from '../components/UserList'
import { getUsers } from "../services/users.service";

const ExploreUsersPage = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = () => {

        try {
            getUsers()
                .then((users) => setUsers(users));

        } catch (error) {
            console.error('Error fetching projects: ', error);
        }
    };

    useEffect(() => {
        fetchUsers();

        console.log("Iniciando componente");

    }, []);

    useEffect(() => { }, [users])

    return <>
        <h1 className="mt-5">Encuentra colaboradores para tus proyectos</h1>

        <UserList usersReceived={users} />

    </>
};

export default ExploreUsersPage