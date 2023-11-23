import React from "react";
import "../portfolio/Portfolio.css"
import PortfolioBottom from "./PortfolioBottom";

export default function Portfolio(){

    return(
        <div className="portfolio">
            <div className="hr">
                <h1>ANM</h1>
            </div>
            <div className="preview"> 
                <section className="leftSect">
                    <div className="text">
                        <p>QUALITY NEVER GOES OUT OF STYLE</p>
                        <p>TAKE YOUR PERFECT PICTURE</p>
                        <button className="portButton removeMargin buttonEnding">Explore Portfolio </button>
                    </div>
                    
                </section>
                <section className="rightSect">
                    
                        <img src={window.location.origin + '/andresImages/7.jpg'}/>
                    
                </section>
            </div>
            <div>
                <PortfolioBottom/>
            </div>
        </div>
    )
}