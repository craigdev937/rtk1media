import React from "react";
import "./Navbar.css";
import Film from "@public/Clapperboard.png";
import { Link, Outlet } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <nav className="navbar">
                    <Link to="/" className="navbar__logo">
                        <img 
                            className="navbar__img"
                            alt="Logo" 
                            src={Film} 
                        />
                    </Link>
                    <aside 
                        className="navbar__icon"
                        onClick={handleClick}
                    >
                        {open ? <FiX /> : <FiMenu />}
                    </aside>
                    <ul className={open ? 
                        "navbar__links active" : 
                        "navbar__links"}
                    >
                        <li className="navbar__item">
                            <Link 
                                to="/films" 
                                className="navbar__link" 
                                onClick={closeMenu}
                            >
                                Films
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link 
                                to="/tvshows" 
                                className="navbar__link" 
                                onClick={closeMenu}
                            >
                                TV Shows
                            </Link>
                        </li>
                    </ul>
                </nav>
            <Outlet />
        </React.Fragment>
    );
};



