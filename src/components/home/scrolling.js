import { useEffect, useRef, useState } from 'react'
import imageOne from '../../images/scrolling/client-logo-1.png'
import imageTow from '../../images/scrolling/client-logo-2.png'
import imageThree from '../../images/scrolling/client-logo-3.png'
import imageFour from '../../images/scrolling/client-logo-4.png'
import imageFive from '../../images/scrolling/client-logo-5.png'
const Scrolling = () => {
    const scroll = useRef();
    const timer = useRef();
    function swipImge(s){
        if(s==="r"){
            if(scroll.current.scrollLeft > scroll.current.offsetWidth){
                scroll.current.style.scrollBehavior="unset";
                scroll.current.scrollLeft =0;
                scroll.current.style.scrollBehavior="smooth";
                scroll.current.scrollLeft = scroll.current.scrollLeft + 214;
            }
            scroll.current.scrollLeft = scroll.current.scrollLeft + 214;
        }
        else{
            if(s==="l"){
                    if(scroll.current.scrollLeft===0){
                    scroll.current.style.scrollBehavior="unset";
                    scroll.current.scrollLeft = scroll.current.offsetWidth + 214;
                    scroll.current.style.scrollBehavior="smooth";
                    scroll.current.scrollLeft = scroll.current.scrollLeft - 214;
                }else{
                    scroll.current.scrollLeft = scroll.current.scrollLeft - 214;
                }
            }else{        
                if(scroll.current.scrollLeft===0){
                    scroll.current.style.scrollBehavior="unset";
                    scroll.current.scrollLeft = scroll.current.offsetWidth + 214;
                    scroll.current.style.scrollBehavior="smooth";
                    scroll.current.scrollLeft = scroll.current.scrollLeft - 214;
                }else{
                    scroll.current.scrollLeft = scroll.current.scrollLeft - 214;
                }
            }
        }  
    }    
    useEffect(()=>{
        timer.current =setInterval(()=>{
                swipImge("a")
        },4000)
        return ()=>clearInterval(timer.current);
    },[])
    return (
        <div className='scrolling_container'>
            <div className="global_container">
                <div className='scrolling'>
                    <i className="fa-solid fa-angle-left" onClick={()=>{
                        swipImge("l")
                    }}
                    onMouseEnter={()=>{
                        clearInterval(timer.current)
                    }}
                    onMouseLeave={()=>{
                        timer.current =setInterval(()=>{
                            swipImge("a")
                    },4000)
                    }}
                    ></i>
                    <div ref={scroll} className="scroll">
                        <div>
                            <img src={imageOne} alt="" />
                        </div>
                        <div>
                            <img src={imageTow} alt="" />
                        </div>
                        <div>
                            <img src={imageThree} alt=""/>
                        </div>
                        <div>
                            <img src={imageFour} alt="" />
                        </div>
                        <div>
                            <img src={imageFive} alt=""/>
                        </div>
                        <div>
                            <img src={imageOne} alt="" />
                        </div>
                        <div>
                            <img src={imageTow} alt="" />
                        </div>
                        <div>
                            <img src={imageThree} alt=""/>
                        </div>
                        <div>
                            <img src={imageFour} alt="" />
                        </div>
                        <div>
                            <img src={imageFive} alt=""/>
                        </div>
                        
                    </div>
                    <i className="fa-solid fa-angle-right" onClick={()=>{
                        swipImge("r")                        
                    }}
                    onMouseEnter={()=>{
                        clearInterval(timer.current)
                    }}
                    onMouseLeave={()=>{
                        timer.current =setInterval(()=>{
                            swipImge("a")
                    },4000)
                    }}
                    ></i>
                </div>
                </div>
        </div>   
     );
}
export default Scrolling;