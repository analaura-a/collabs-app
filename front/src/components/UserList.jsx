import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import UserListItem from "./UserListItem";

const UserList = () => {

    return (
        <>
            <form action="">
                <input
                    className="form-control form-control-lg mt-5"
                    type="text"
                    placeholder="Buscar personas..."
                    aria-label=".form-control-lg example"
                />
            </form>

            <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-4 mt-5">
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
            </ul>
        </>
    );
};

export default UserList;