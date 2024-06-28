import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import navLogo from "../../images/logos/nav-logo.png";

const Nav = () => {
    return (
        <nav>
            <div className="nav__logo">
                <img src={navLogo} alt="" />
                <p>
                    Dev<span>Ros</span>
                </p>
            </div>
            <ul>
                <li>
                    {" "}
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    {" "}
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    {" "}
                    <NavLink to="/Kub">Kub</NavLink>
                </li>
                <li>
                    {" "}
                    <NavLink to="/koza">Koza</NavLink>
                </li>
                <li>
                    {" "}
                    <NavLink to="/cofe">Cofe</NavLink>
                </li>
                <li>
                    {" "}
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
