import React from "react";
import "../portfolio/Portfolio.css"
import PortfolioBottom from "./PortfolioBottom";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PortfolioOptions from "./PortfolioOptions";
import MHeader from "../header/Mobile/MHeader"

export default function Portfolio(){

    if(window.innerWidth < 500){
        return(
            <div className="portfolio">
                <Header/>
                <div className="preview"> 
                    <section className="leftSect">
                        <div className="text">
                            <p>QUALITY NEVER GOES OUT OF <span>STYLE</span></p>
                            <p>TAKE YOUR PERFECT PICTURE</p>
                            <NavLink to={'/images'}>
                                <button className="portButton removeMargin buttonEnding orange">Explore Images </button>
                            </NavLink>
                        </div>
                        
                    </section>
                    <section className="rightSect">
                        
                            <img src={ require('../../andresImages/7.jpg')}/>
                        
                    </section>
                </div>
                <div>
                    <PortfolioOptions/>
                </div>
                <Footer/>
            </div>
        )
    }
    else{
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
                        
                            <img src={ require('../../andresImages/7.jpg')}/>
                        
                    </section>
                </div>
                <div>
                    <PortfolioBottom/>
                </div>
                <Footer/>
            </div>
        )
    }
}