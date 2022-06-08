import React from 'react'
import "./navbar.scss";
import {NavbarItems} from "./NavbarItems";
export const Navbar = () => {
    return (
        <section className="navbar-section">
            <nav className="navbar-nav">
                <ul className="nav-items">
                    <NavbarItems />
                </ul>
            </nav>
        </section>
    );
}
