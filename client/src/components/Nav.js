import React from "react";
import "../styles/Nav.css";

function Nav() {
    return (
        <nav className="navBar">
            <a className="navbar-brand" href="/">Google Books</a>
            <a className="navbar-brand" href="/saved">Your Saved Books</a>
            <a className="navbar-brand" href="/search">Find Some Books!</a>
        </nav>
    );
}

export default Nav;
