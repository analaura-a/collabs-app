import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {

        if (!localStorage.getItem("token")) {
            navigate("/login")
        }

    }, [location.pathname]);

    return children
}

export default PrivateRoute