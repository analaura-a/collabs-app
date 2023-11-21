//Crear el contexto
import { createContext, useContext, useEffect, useState } from "react";
import { getUserProfile } from "../services/auth.service";

const SessionContext = createContext();


//Leer el contexto
function useSession() {
    const context = useContext(SessionContext);

    if (!context) {
        throw new Error('useSession debe estar dentro del proveedor SessionContext');
    }

    return context;
}

function useUserProfile() {
    const { userProfile } = useSession()
    return userProfile;
}


//Proveer el contexto
function SessionProvider({ children }) {

    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {

        getUserProfile()
            .then((profile) => setUserProfile(profile));

    }, []);

    return (
        <SessionContext.Provider value={{userProfile}}>
            {children}
        </SessionContext.Provider>
    )

}


export {
    SessionContext,
    useSession,
    useUserProfile,
    SessionProvider
};

