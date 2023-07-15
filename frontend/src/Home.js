
import "./index.css";
// import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Places from "./components/Places";
import Footes from "./components/Footes";
import React from "react";


export default function Home() {

    return(
        <div>
                <section>
                    <div id="container1">
                        Plan Your Journey From Here 
                        <div id="wow">
                            <button className="btnn"> Learn More</button>
                            <button className="btnn">Book Now</button>
                        </div>
                    </div> 
                </section>
                <section id="container2">
                Explore More...</section>
                <section>
                    <p> <Grid /> </p>
                </section>
                <section>
                    <p> <Places/> </p>
                </section>
                {/* <section>
                <Locations/>
                </section> */}
                <footer>
                    <Footes/>
                </footer>
        </div>
    );
    }
