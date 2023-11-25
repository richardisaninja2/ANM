import React from "react";
import { NavLink } from "react-router-dom";


export default function PortfolioOptions(){
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return(
        <div className="portOptionsCont">
            <div className="options margin-bottom">
                {/* later work on it getting rerouted in app instead of nmew tab */}
                <div onClick={() => openInNewTab('#/images/homecoming')}>
                
                    <img className="optImg" src={require('../../andresImages/7.jpg')}/>
                    <div className="optLabel orange ">Homecoming </div>
                
                </div>
                <div onClick={() => openInNewTab('#/images/graduation')}>
                
                    <img className="optImg" src={require('../../andresImages/8.jpg')}/>
                    <div className="optLabel">Grad Pictures </div>
                
                </div>
                <div onClick={() => openInNewTab('#/images/wedding')}>
                
                    <img className="optImg" src={require('../../andresImages/wedding/3.jpg')}/>
                    <div className="optLabel orange ">Wedding </div>
                
                </div>
            </div>
        </div>
    )
}