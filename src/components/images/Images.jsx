import React, { useEffect, useState } from "react";
import './Images.css';
import ImageImports from "../imageImports/ImageImports";

export default function Images(){
    const [linkArray, setLinkArr] = useState([]);

    useEffect(() => {
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
    },[linkArray])
    
    if(linkArray){
        return(

            <div>
                <ImageImports setLinkArr={setLinkArr}/>
                <section>
                    <div className="scroll-box" id="div1"> 
                    {linkArray.slice(0,5).map((i, key) => (
                        <div key={key} className="portraits">
                            <img src={window.location.origin + linkArray[key]}/>
                        </div>
                    ))}

                    </div>
    
                    <div className="scroll-box" id="div2"> 
                    {linkArray.slice(0,5).map((i, key) => (
                        <div key={key} className="portraits">
                            <img src={window.location.origin + linkArray[key+5]}/>
                        </div>
                    ))}
                    </div>

                    <div className="scroll-box" id="div3"> 
                    {linkArray.slice(0,5).map((i, key) => (
                        <div key={key} className="portraits">
                            <img src={window.location.origin + linkArray[key+10]}/>
                        </div>
                    ))}
                    </div>
                </section>
    
            </div>
        )     
    }else{
        return(<p>..loading</p>)
    }
    
}