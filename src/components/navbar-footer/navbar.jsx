import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="nav-link">
            <NavLink className="link" to="/about">ABOUT US</NavLink>
            <NavLink className="link" to="/blog">BLOG</NavLink>
            <div className="contact">
                <NavLink className="link" to="/contact">CONTACT US</NavLink>
            </div>
        </div>
    )
}

export default Navbar;