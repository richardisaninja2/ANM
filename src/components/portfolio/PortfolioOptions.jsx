import React from "react";


export default function PortfolioOptions(){
    return(
        <div className="portOptionsCont">
            <div className="options">
                <div>
                    <img className="optImg" src={window.location.origin + '/andresImages/7.jpg'}/>
                    <div className="optLabel orange">Homecoming </div>
                </div>
                <div>
                    <img className="optImg" src={window.location.origin + '/andresImages/8.jpg'}/>
                    <div className="optLabel ">Grad Pictures </div>
                </div>
                <div>
                    <img className="optImg" src={window.location.origin + '/andresImages/3.jpg'}/>
                    <div className="optLabel orange">Wedding </div>
                </div>
            </div>
        </div>
    )
}