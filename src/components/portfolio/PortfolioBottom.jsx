import React, { useState } from "react";
import PortfolioOptions from "./PortfolioOptions";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function PortfolioBottom(){
    //array of images of 3
    //array of albums
    //cycle through albums to find images
    const [folder, setFolder] = useState("homecoming");
    const [counter, setCounter] = useState(0);

    //choose which folder to display from
    function prev(){
        let which = ["homecoming", "graduation", "seniorPic"]
        setCounter(count => count - 1);
        if(counter >= 0 ){
           setFolder(which[counter]) 
            console.log(which[counter])
            console.log(counter)
        }else{
            setCounter(which.length - 1);
            setFolder("graduation") 
            
        }  
    }
    function bonClick(){
        let which = ["homecoming", "graduation", "seniorPic"]
        setCounter(count => count + 1);
        if(counter < which.length){
           setFolder(which[counter]) 
            console.log(which[counter])
            console.log(counter)
        }else{
            setCounter(0);
            setFolder("graduation") 
            
        }  
    }

    return(
        <div className="portBottom">
            <div className="bottomCont">
                {/* <div className="chevron">
                    <h1 onClick={bonClick}><FaChevronLeft color="#fc9600"/></h1>
                </div> */}
                <div>
                    {console.log(folder)}
                    <NavLink to={'/images/'+folder}>
                        <img src={ require('../../andresImages/'+folder+'/1.jpg')}/>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={'/images/'+folder}>
                        <img src={require('../../andresImages/'+folder+'/2.jpg')}/>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={'/images/'+folder}>
                        <img src={require('../../andresImages/'+folder+'/3.jpg')}/> 
                    </NavLink>
                </div>
                {/* <div className="chevron">
                    <h1 onClick={bonClick}><FaChevronRight color="#fc9600"/></h1>
                </div> */}
            </div>
            <div className="chevrons">
                <div className="chevron">
                    <h1 onClick={prev}><FaChevronLeft color="#fc9600"/></h1>
                    <h1 onClick={bonClick}><FaChevronRight color="#fc9600"/></h1>
                </div>
            </div>
            <div className="endingQuote">
                <p>I believe in a world where you have total freedom to be you, without judgement. to experiment. to express yourself. To be  brave and grab life as the extra ordinary adventure it is. SAo we make sure everyone has an equal chance to discover all the amazing things they're capable of - no matter who they are, where they're from or what they look like. We exist to givve you the confidence to be whoever you want to be</p>
            </div>
            <div>
                <PortfolioOptions/>
            </div>
        </div>
    )
}