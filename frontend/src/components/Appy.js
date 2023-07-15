import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
// import Navbar from "./Navbar";
import Places from "./Places";
import Fom from "./New";
import Pla from "./Pl";
import Ex from "../Ex";


function Appy() {
    

    return(
        <>
        <Ex />
        <Routes>
            
            <Route exact path="/" element={<Places/>}/>
            <Route exact path="/login" element={<Fom/>}/>
            <Route exact path="/places" element={<Pla/>}/>
        </Routes></>
    );
}

export default Appy; 
