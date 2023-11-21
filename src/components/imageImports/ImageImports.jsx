import React, { useEffect, useState } from "react";
// import 

export default function ImageImports(props){
    const[imgArr, setImgArr] = useState([]);
    let imgArray = [];
    (function getImages(){
        for(let i = 1; i<20; i++){
            imgArray.push("/andresImages/"+i+".jpg");
        }
        // console.log(imgArray)
        
    })()
    
    useEffect(() => {
        if(imgArray.length > 1){

            // setImgArr(imgArray)
            // console.log(imgArray)
           props.setLinkArr(imgArray) 
        }else{
            console.log("not running")
        }
        
    }, [imgArray.length])

    return(<div>
        <div className="">
            {/* {console.log(typeof imgArray[1])} */}
            {/* <img className="images" src={window.location.origin + imgArray[2]}/> */}
        </div>
    </div>)
    
    
}