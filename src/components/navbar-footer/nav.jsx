import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
// import Footer from "./footer";
import Logo from "./logo";


const Nav = () => {
    return (
        <>
            <Logo />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Nav;

