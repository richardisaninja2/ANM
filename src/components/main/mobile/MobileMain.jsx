import React from "react";
import '../mobile/MMain.css'
import { NavLink } from "react-router-dom";
import HamburgerMenu from "../../hamburgerMenu/HamburgerMenu";
import Header from "../../header/Header";

export default function MobileMain(){
    return(
        <div className="mMainDiv">
            <Header/>
            <div className="quote">
                <h1>ANM Photography</h1>
                <p>The Sky is the Limit But Remember There Is Gravity - Anmvisions</p>
                <NavLink to={'/portfolio'}><p>View Portfolio </p></NavLink>
            </div>

           
        </div>
    )
}