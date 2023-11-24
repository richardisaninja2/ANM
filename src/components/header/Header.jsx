import React from "react";
import { NavLink } from "react-router-dom";
import '../header/Header.css'

export default function Header(){
    return(
        <div>
            <div className="hr">
                <a href="https://unscriptedphotographers.com/anmvisions"><h2>Booking</h2></a>
                <NavLink to={'/'}><h1 className="orange">ANM</h1></NavLink>
                <NavLink to="/portfolio"><h2>Portfolio</h2></NavLink>
            </div>
        </div>
    )
}