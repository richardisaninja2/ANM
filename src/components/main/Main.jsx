import React from "react";
import "../main/Main.css"
import Socials from "../socials/Socials";
import { NavLink } from "react-router-dom";
import Portfolio from "../portfolio/Portfolio";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import '../../andresImages/19.jpg'
import MobileMain from "./mobile/MobileMain";
import MHeader from "../header/Mobile/MHeader";
import MImages from "../images/mobileImages/MImages";





export default function Main(){
    if(window.innerWidth < 500){
        return(
            <div>
                {/* <MHeader/> */}
                {/* <MImages/> */}
                <MobileMain/>
            </div>
        )
    }else{
        return(
            <div className="mainCont">
                <Header/>
            <div className="main">
                
                <div className="beside">
                    <h1>Andre<br/><span>Murray</span></h1>
                    <NavLink to={'/portfolio'}>
                        <button className="portButton buttonArrow">Explore Portfolio </button>
                    </NavLink>
                    <div>
                        <img className="mainImg" src={require('../../andresImages/19.jpg')}/>
                    </div>
                    <div className="quote">
                    <p>The Sky is the Limit But Remember There Is Gravity - Anmvisions</p>  
                        
                    </div>
                    
                    
                </div>
                <div className="beside">
                    <div className="">
                        <img className="img" src={ require('../../andresImages/4.jpg')}/>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}