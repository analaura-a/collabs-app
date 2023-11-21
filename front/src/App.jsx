import { Outlet } from "react-router-dom";
import { SessionProvider } from "./context/SessionContext";
import Layout from "./components/Layout";

export default function App() {

  return (
    <SessionProvider>
      <Layout>
        <Outlet />
      </Layout>
    </SessionProvider>
  )
}
