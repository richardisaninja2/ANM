import React, { useEffect, useState } from "react";
import './Images.css';
import ImageImports from "../imageImports/ImageImports";
import Header from "../header/Header";
import PortfolioOptions from "../portfolio/PortfolioOptions";
import Footer from "../footer/Footer";



export default function Images(props){
    
    const [linkArray, setLinkArr] = useState([]);
    const[images, setImages] = useState([]);
    let folder = props.images

    let imgArray = [];
    (function getImages(){
        for(let i = 1; i<22; i++){
            //pushes image link from folder
            if(props.images){
                imgArray.push(require("../../andresImages/"+folder+'/'+i+".jpg"));
            }else{
                imgArray.push(require("../../andresImages/"+'/'+i+".jpg"));
            }
            
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
    
        const multiElementScroll = ( elem1, elem2, elem3 ) => {
            let div = document.getElementById("div2");
            elem1.onscroll = function() {
                //link other divs to the first div scroll
            let maxScrollPosition = div.scrollHeight - div.clientHeight;
            elem2.scrollTop = maxScrollPosition - this.scrollTop;
            elem3.scrollTop = this.scrollTop;
            //line 3rd div scroll 
            };
            elem3.onscroll = function() {
                elem1.scrollTop = this.scrollTop;
            }
            elem2.onscroll = function(){
                let maxScrollPosition = div.scrollHeight - div.clientHeight;
                elem1.scrollTop = maxScrollPosition - this.scrollTop;
            }
        }
      
      multiElementScroll( div1, div2, div3 )

      console.log(linkArray)
    },[])
    //if category is selected
    if(linkArray && props.images){
        return(

            <div className="imagesCont">
                <Header/>
                {/* <ImageImports setLinkArr={setLinkArr}/> */}
                <section>
                    <div className="scroll-box" id="div1"> 
                    {imgArray.slice(0,7).map((i, key) => (
                        <div key={key} className="portraits">
                             
                            <img onClick={() => openInNewTab(linkArray[key])}  src={linkArray[key]}/>
                        </div>
                    ))}

                    </div>
    
                    <div className="scroll-box" id="div2"> 
                    {imgArray.slice(0,7).map((i, key) => (
                        <div key={key} className="portraits">
                            <img onClick={() => openInNewTab(linkArray[key+7])} src={linkArray[key+7]}/>
                        </div>
                    ))}
                    </div>

                    <div className="scroll-box" id="div3"> 
                    {imgArray.slice(0,7).map((i, key) => (
                        <div key={key} className="portraits">
                            <img onClick={() => openInNewTab(linkArray[key+14])} src={linkArray[key+14]}/>
                        </div>
                    ))}
                    </div>
                </section>
                <div>
                  <PortfolioOptions/>  
                </div>
                <Footer/>
            </div>
        )     
    }
    //desktop.. if category not selected
    if(!props.images){
        return(
            <div className="imagesCont">
                <Header/>
                <ImageImports setLinkArr={setImages}/>
                <section>
                    <div className="scroll-box" id="div1"> 
                    {imgArray.slice(0,7).map((i, key) => (
                        <div key={key} className="portraits">
                            <img onClick={() => openInNewTab(imgArray[key])} src={imgArray[key]}/>
                        </div>
                    ))}

                    </div>
    
                    <div className="scroll-box" id="div2"> 
                    {imgArray.slice(0,7).map((i, key) => (
                        <div key={key} className="portraits">
                            <img onClick={() => openInNewTab(imgArray[key+7])} src={imgArray[key+7]}/>
                        </div>
                    ))}
                    </div>

                    <div className="scroll-box" id="div3"> 
                    {imgArray.slice(0,7).map((i, key) => (
                        <div key={key} className="portraits">
                            <img onClick={() => openInNewTab(imgArray[key+12])} src={imgArray[key+12]}/>
                        </div>
                    ))}
                    </div>
                </section>
                <div>
                    <PortfolioOptions/>   
                </div>
                <Footer/>
            </div>
        )     
    }
    else{
        return(<p>..loading</p>)
    }
    
}