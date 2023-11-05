import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const UserListItem = ({ user }) => {

    const { _id, name, last_name, bio, location, profile_pic, professional_profile } = user;

    return (

        <li className="col">
            <div className="card h-100">
                <img src={profile_pic} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h2 className="card-title">{name} {last_name}</h2>
                    <p className="card-text">
                        {location}
                    </p>
                    <p className="card-text">
                        {bio}
                    </p>

                    <h3 className="card-text">Perfil profesional</h3>
                    <ul>
                        {
                            professional_profile.map((profile, index) => (
                                <li key={index}>{profile}</li>
                            ))
                        }

                    </ul>

                </div>
            </div>
        </li>

    );
};

export default UserListItem;