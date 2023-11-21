import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUserProfile } from "./services/auth.service";
import { SessionContext } from "./context/SessionContext";
import Layout from "./components/Layout";

export default function App() {

  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {

    getUserProfile()
      .then((profile) => setUserProfile(profile));

  }, []);

  console.log(userProfile)

  return (
    <SessionContext.Provider value={{userProfile}}>
      <Layout>
        <Outlet />
      </Layout>
    </SessionContext.Provider>
  )
}
