import React from "react";
import '../footer/Footer.css';
import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <div>
            <div className="footerCont">
                    <a href="https://www.instagram.com/anmvisions/?igshid=YTQwZjQ0NmI0OA%3D%3D"><h2>Instagram <span></span></h2></a>       
                    <a href="https://unscriptedphotographers.com/anmvisions"><h2>Booking <span></span></h2></a>
                    <NavLink to="/portfolio"><h2>Portfolio <span></span></h2></NavLink>
            </div>
            <div className="footerCont">
                <NavLink to={'/'}><h1 className="anmBig">ANM<br/>Photography</h1></NavLink>
            </div>
        </div>
    )
}