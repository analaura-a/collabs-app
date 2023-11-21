import NavBar from "./NavBar";
import '../css/Layout.css'

const Layout = ({ children }) => {

    return (
        <div>

            <NavBar></NavBar>

            <div className="container">
                {children}
            </div>

        </div>
    );
};

export default Layout;