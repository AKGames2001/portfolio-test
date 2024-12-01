import React from "react";
import { Link } from "react-router";

function Navbar() {
    return <div className="navbar">
        <div className="nav-left">
            <image src="" />
        </div>
        <div className="nav-right">
            <Link className="nav-link">Home</Link>
            <Link className="nav-link">Projects</Link>
            <Link className="nav-link">About</Link>
        </div>
    </div>
}

export default Navbar;