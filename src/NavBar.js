import { Link, useLocation } from "react-router-dom";
import "./NavStyle.css"
import { FaBars } from 'react-icons/fa';


function NavBar() {
    const { pathname } = useLocation();
    return (
        <nav className="nav nav-wrapper p-4">
            <div className="left-side">
                <Link to="/home"
                    className={`wd-brand wd-nav-link px-2 py-0 font-weight-bold ${pathname.includes("home") ? "active" : ""}`}>JONATHAN YU</Link>
            </div>
            <div className="right-side">
                <Link to="/about"
                    className={`wd-nav-link px-2 py-0 ${pathname.includes("about") ? "active" : ""}`}>About</Link>
                <Link to="/blogs"
                    className={`wd-nav-link px-2 py-0 ${pathname.includes("blogs") ? "active" : ""}`}>Blogs</Link>
                <Link to="/contact"
                    className={`wd-nav-link px-2 py-0 ${pathname.includes("contact") ? "active" : ""}`}>Contact</Link>
            </div>
        </nav>
    );
}
export default NavBar;