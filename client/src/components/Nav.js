import React from "react";
import "../styles/Nav.css";

function Nav() {
    return (
        <nav className="navBar">
            <a className="navbar-brand1" href="/">Google Books</a>
            <a className="navbar-brand2" href="/saved">Your Saved Books</a>
            <a className="navbar-brand3" href="/search">Find Some Books!</a>
        </nav>
    );
}

export default Nav;
