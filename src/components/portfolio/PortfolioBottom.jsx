import React, { useState } from "react";
import PortfolioOptions from "./PortfolioOptions";

export default function PortfolioBottom(){
    //array of images of 3
    //array of albums
    //cycle through albums to find images
    const [folder, setFolder] = useState("homecoming");
    const [counter, setCounter] = useState(0);

    //choose which folder to display from
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
                <div>
                    {console.log(folder)}
                    <img src={window.location.origin + '/andresImages/'+folder+'/1.jpg'}/>
                </div>
                <div>
                    <img src={window.location.origin + '/andresImages/'+folder+'/2.jpg'}/>
                </div>
                <div>
                    <img src={window.location.origin + '/andresImages/'+folder+'/3.jpg'}/> 
                </div>
                <div>
                    <h1 onClick={bonClick}>"h"</h1>
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