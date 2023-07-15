import React, { useState } from "react";



function App() {
    // var count=0;

    var [count, setcount] = useState(0);

    function inc() {
        setcount(count+1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={inc}> Click Me </button>
        </div>
    );
}

export default App; 
