import React from "react";
import {
    Link
} from "react-router-dom";

export default function Ex() {
    return(
        <>
            <header>
                <li><Link to="/new" > Home </Link></li>
                <li><Link to="/login" > Login </Link></li>
                <li><Link to="/places" > Places </Link></li>
                
            </header>
        </>
    )
}