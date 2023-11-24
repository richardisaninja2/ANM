import React from "react";
import "../portfolio/Portfolio.css"
import PortfolioBottom from "./PortfolioBottom";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Portfolio(){

    return(
        <div className="portfolio">
            <Header/>
            <div className="preview"> 
                <section className="leftSect">
                    <div className="text">
                        <p>QUALITY NEVER GOES OUT OF <span>STYLE</span></p>
                        <p>TAKE YOUR PERFECT PICTURE</p>
                        <NavLink to={'/images'}>
                            <button className="portButton removeMargin buttonEnding orange">Explore Portfolio </button>
                        </NavLink>
                    </div>
                    
                </section>
                <section className="rightSect">
                    
                        <img src={window.location.origin + '/andresImages/7.jpg'}/>
                    
                </section>
            </div>
            <div>
                <PortfolioBottom/>
            </div>
            <Footer/>
        </div>
    )
}