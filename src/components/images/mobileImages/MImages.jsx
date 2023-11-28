import React, { useEffect, useState } from "react";
import Footer from "../../footer/Footer";
import "../mobileImages/MImages.css"
import "../../../"

export default function MImages(props){
    const [linkArray, setLinkArr] = useState([]);
    const[images, setImages] = useState([]);
    let folder = props.images

    let imgArray = [];
    (function getImages(){
        for(let i = 1; i<19; i++){
            //pushes image link from folder
            // imgArray.push(require("../../andresImages/"+folder+'/'+i+".jpg"));
            imgArray.push(require("../../../andresImages/"+'/'+i+".jpg"));
        }
        // console.log(imgArray)
        
    })()

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    

    useEffect(() => {
        // Scroll to the top of this page when mounted

        window.scrollTo(0, 0);

        // if(imgArray.length > 1){
        //     setLinkArr(imgArray)
        // }
        setLinkArr(imgArray)
        let div1 = document.getElementById("div1");
        let div2 = document.getElementById("div2");
        let div3 = document.getElementById("div3");
    
        
      
      

    //   console.log(linkArray)
    },[])

    if(linkArray){
        return(

            <div className="mMobileImagesCont">    
                <section>
                    {linkArray.slice(0,2).map((i, key) => (
                        <div key={key}>
                            <img src={linkArray[key]} onClick={() => openInNewTab(linkArray[key])}/>
                        </div>
                    ))}
                </section>
                <div>
                
                </div>
                <Footer/>
            </div>
        )     
    }
    else{
       return(
        <div className="mMobileImagesCont">
                hdskjfis
        </div>
        ) 
    }
}