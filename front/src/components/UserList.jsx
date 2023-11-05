import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import UserListItem from "./UserListItem";

const UserList = ({ usersReceived }) => {

    const [users, setUsers] = React.useState(usersReceived)

    const onChangeFilter = (event) => {

        const filterText = event.target.value.toLowerCase();
        console.log(filterText)

        if (filterText !== '') {

            const filtrado = users.filter(user => user.name.toLowerCase().includes(filterText) || user.last_name.toLowerCase().includes(filterText))
            setUsers(filtrado)
            console.log(filtrado)

        } else {
            setUsers(usersReceived)
        }

    }

    useEffect(() => {
        setUsers(usersReceived)
    }, [usersReceived])

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <input
                    className="form-control form-control-lg mt-5"
                    type="text"
                    onChange={onChangeFilter}
                    placeholder="Buscar personas..."
                    aria-label=".form-control-lg example" />
            </form>

            <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    users.map(user => <UserListItem key={user._id} user={user} />)
                }
            </ul>
        </>
    );
};

export default UserList;