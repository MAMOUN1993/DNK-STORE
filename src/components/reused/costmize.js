import Colors from "./color";
import { changevalue } from "../../redux/slices/colorSlice";
import {setfont} from "../../redux/slices/fontslice"
import { useSelector , useDispatch} from "react-redux";
import { chahngecolorbotton } from "../../redux/slices/bottcolrs";
import { useState } from "react";
const Costmize = () => {
    const state = useSelector(state => state.color)
    const dispatch = useDispatch()
    const [ attrValue , setAttr]= useState("false")
    const [ secAttr , setSec]= useState("false")
    function setFont(s){
        if(s==="Roboto"){
            setAttr("false")
        }else{
            setAttr("true")
        }
        dispatch(setfont(s))
    }
    return (
        <div className="cost_main" attr={state}>
            <div className="cost_header">
                <h3>brandstore</h3>
                <i className="fa-solid fa-xmark" onClick={()=>{
                    dispatch(changevalue());
                }}></i>
            </div>
            <div className="cost_para">
                <p>Use the template as-is or try different colors and fonts from the options below.</p>
            </div>
            <div className="cost_try">
                <h3>try other color</h3>
                <p attr={secAttr} onClick={()=>{
                    dispatch(chahngecolorbotton("def"))
                    setSec("false")
                }}>default</p>
            </div>
            <div className="cost_defa" onClick={()=>{
            dispatch(chahngecolorbotton("def"))
        }}>
                <h3>default colors</h3>
                <Colors color={"def"} set={setSec}/>
            </div>
            <div className="color-container">
                <Colors color={"prop"} set={setSec}/>
                <Colors color={"red"} set={setSec}/>
                <Colors color={"pink"} set={setSec}/>
                <Colors color={"ponk"} set={setSec}/>
                <Colors color={"orang"} set={setSec}/>
                <Colors color={"yall"} set={setSec}/>
                <Colors color={"groon"} set={setSec}/>
                <Colors color={"green"} set={setSec}/>
                <Colors color={"bloe"} set={setSec}/>
                <Colors color={"blue"} set={setSec}/>
            </div>
            <div className="line"></div>
            <div className="try_font">
                <h4>try other fonts</h4>
                <p attr={attrValue} onClick={()=>{
                    setFont("Roboto")
                }}>default</p>
            </div>
            <div className="lato">
                <h4 onClick={()=>{
                    setFont("Roboto")
                }}>lato / lato</h4>
            </div>
            <div className="Aa">
                <h2 onClick={()=>{
                    setFont("PlayfairDisplay")
                }}>Aa</h2>
                <h2 onClick={()=>{
                    setFont("Poppins")
                }}>Aa</h2>
                <h2 onClick={()=>{
                    setFont("Montserrat")
                }}>Aa</h2>
                <h2 onClick={()=>{
                    setFont("Karla")
                }} >Aa</h2>
                <h2 onClick={()=>{
                    setFont("RobotoCondensed")
                }}>Aa</h2>
                <h2 onClick={()=>{
                    setFont("Merriweather")
                }} >Aa</h2>
                <h2 onClick={()=>{
                    setFont("Vollkorn")
                }} >Aa</h2>
                <h2 onClick={()=>{
                    setFont("OpenSans")
                }}>Aa</h2>
            </div>
            <div className="fixed" attr={state} onClick={()=>{
                dispatch(changevalue());
            }}>
                <i className="fa-solid fa-palette"></i>
                <p>cutomize</p>
            </div>
        </div>
     );
}
 
export default Costmize;