import { useState } from "react";
import Discrip from "./desc";
import Additional from "./addition";
import Rev from "./rev";

const Prev = () => {
    const [activAttir , setActiv] = useState(["true","false","false"]);
    return (
                <div className="prev_container">
                    <div className="prev_line"></div>
                    <div className="header_prev">
                        <h3  attr={activAttir[0]} onClick={()=>{
                            setActiv(["true","false","false"]);
                        }}>description</h3>
                        <h3 attr={activAttir[1]} onClick={()=>{
                            setActiv(["false","true","false"]);
                        }}>additional information</h3>
                        <h3 attr={activAttir[2]}onClick={()=>{
                            setActiv(["false","false","true"]);
                        }}>reviews (0)</h3>
                    </div>
                    {activAttir[0]==="true" ? <Discrip/> :
                     activAttir[1] === "true" ? <Additional/>:
                      <Rev/>}
                </div>
     );
}
export default Prev;