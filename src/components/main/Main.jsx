import React from "react";
import "../main/Main.css"



export default function Main(){
    return(
        <div className="main">
            <div className="beside">
                <h1>Andre<br/><span>Murray</span></h1>
                <button className="portButton">Explore Portfolio</button>
                <div>
                    <img className="mainImg" src={window.location.origin + '/andresImages/19.jpg'}/>
                </div>
                <div className="quote">
                  <p>The Sky is the Limit But Remember There Is Gravity - Anmvisions</p>  
                </div>
                
            </div>
            <div className="beside">
                <div className="">
                    <img className="img" src={window.location.origin + '/andresImages/16.jpg'}/>
                </div>
            </div>
        </div>
    )
}