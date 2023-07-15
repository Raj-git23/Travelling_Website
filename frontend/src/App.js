import React from "react";
import "./index.css";
import {
    Route,
    Routes,
} from "react-router-dom";
import Home from "./Home";
// import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Login from "./components/Register";

function App() {
    return(
        <>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        </>
    )
};

export default App;