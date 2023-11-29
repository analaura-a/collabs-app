import { Navigate, useLocation, useNavigate } from "react-router-dom"
import React, { useEffect } from "react";

const PrivateRoute = ({ children }) => {

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        
        console.log(navigate)

        if (!localStorage.getItem("token")) {
            navigate("/login")
        }

    }, [location.pathname]);

    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" />
    }

    return children
}

export default PrivateRoute