import React from "react";
import '../footer/Footer.css';
import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <div className="footerCont">          
                <a href="https://unscriptedphotographers.com/anmvisions"><h2>Booking <span></span></h2></a>
                <NavLink to={'/'}><h1 className="">ANM</h1></NavLink>
                <NavLink to="/portfolio"><h2>Portfolio<span></span></h2></NavLink>
        </div>
    )
}