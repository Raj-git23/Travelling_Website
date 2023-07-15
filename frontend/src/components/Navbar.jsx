import React from "react";
import {
    Link
} from "react-router-dom";

function Navbar() {
    return(
        <header>
        <div className="navbar" id="navy">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Places</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/login">Login</Link></li>
                <br/>
            <div id='nav'>
                   <input type="text" placeholder="Search here"/>
            </div>
        </div></header>
    )
}

export default Navbar;