import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <div className="hr">
                <NavLink to={'/'}><h1 className="orange">ANM</h1></NavLink>
            </div>
        </div>
    )
}