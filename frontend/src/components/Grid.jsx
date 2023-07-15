import React from "react";

function Grid() {
    return(
        <>
           <div>
                <p id="name"><h1>Destination</h1></p>
                <div id="services">
                    <div id="ne1" className="box">
                        <img src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <h2 id="text">Beaches</h2>
                    </div>
                    <div className="box">
                        <img src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fE1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Beach" />
                        <h2 id="text">Mountains</h2>
                    </div>
                    <div className="box">
                        <img src="https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Beach" />
                        <h2 id="text">Lakes</h2>
                    </div>
                    <div id="ne" className="box">
                        <img src="https://images.unsplash.com/photo-1559767180-47d8f4919e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Beach" />
                        <h2 id="text">Deserts</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grid;