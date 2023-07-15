import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App /></BrowserRouter>
  </React.StrictMode>
);








// import ReactDOM from "react-dom/client";
// import "./index.css";
// import Navbar from "./Navbar";
// import Grid from "./Grid";
// import Places from "./Places";
// import Footes from "./Footes";
// // import Example from "./Slides";
// // import Locations from "./Locations"


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <>
//     <header>
//       <Navbar/>
//     </header>
//     <section>
//       <div id="container1">
//         Plan Your Journey From Here  
//         <button id="btn1" className="btnn"> Learn More</button>
//         <button id="btn2" className="btnn">Book Now</button>
//       </div>
//     </section>
//     <section id="container2">
//       Explore More...
//     </section>
//     <section>
//       <p> <Grid /> </p>
//     </section>
//     <section>
//       <p> <Places/> </p>
//     </section>
//     {/* <section>
//       <Locations/>
//     </section> */}
//     <footer>
//       <Footes/>
//     </footer>
//   </>,
//  );