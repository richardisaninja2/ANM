import React from "react";
import "../main/Main.css"
import Socials from "../socials/Socials";
import { NavLink } from "react-router-dom";
import Portfolio from "../portfolio/Portfolio";
import Header from "../header/Header";



export default function Main(){
    return(
        <div className="mainCont">
            <Header/>
        <div className="main">
            
            <div className="beside">
                <h1>Andre<br/><span>Murray</span></h1>
                <NavLink to={'/portfolio'}>
                    <button className="portButton buttonArrow">Explore Portfolio </button>
                </NavLink>
                <div>
                    <img className="mainImg" src={window.location.origin + '/andresImages/19.jpg'}/>
                </div>
                <div className="quote">
                  <p>The Sky is the Limit But Remember There Is Gravity - Anmvisions</p>  
                    
                </div>
                
                
            </div>
            <div className="beside">
                <div className="">
                    <img className="img" src={window.location.origin + '/andresImages/4.jpg'}/>
                </div>
            </div>
        </div>
        </div>
    )
}