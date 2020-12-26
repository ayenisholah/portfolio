import Burger from "./Burger";
import logo from "../../assets/logo.jpg"
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Shola Ayeni" />
                <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    delay={500}
                    duration={500}>
                    <h3>Shola Ayeni</h3>
                </Link>
            </div>
            <Burger />
        </nav>
    );
}