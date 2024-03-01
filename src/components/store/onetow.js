import { useEffect, useState } from "react";
const OneTow = (props) => {
    const [ numValue , setNumValue] =useState(0)
    let value = [...props.data];
    value = Math.ceil(value.length/12)
    const [ attrHook , setHook] = useState([]);
    function genAttr(){
        let localArry = [];
        for(let i = 0 ; i < value ; i ++){
            if(i===0){
                localArry[i]="true"
            }else{
                localArry[i]="false"    
            }
        }    
        setHook(()=>{ return [...localArry]})    
    };
   function setGenAttr(s){
        let localArry = [];
        for(let i = 0 ; i < value ; i ++){
            if(i===s){
                localArry[i]="true"
            }else{
                localArry[i]="false"    
            }
        }
        setNumValue(s);
        setHook(()=>{ return [...localArry]})    
   };
   function setBack(s){
    if(s==="l"){
        setGenAttr(numValue-1)
    }else{
        setGenAttr(numValue+1)
    }
   }
    function setNum(){
        let localVar = [];
        for(let i = 0 ; i < value ; i ++){
            localVar.push(<p key={i} onClick={()=>{
                setGenAttr(i)
                props.sliceFun(i)
            }} attr={attrHook[i]}>{i+1}</p>);
        }
        return localVar;
    };

    useEffect(()=>{
        genAttr();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className="numbers_container">
            <i onClick={()=>{
                if(numValue > 0 ){
                    setBack("l")
                    props.throw("l")
                }
            }} className="fa-solid fa-angle-left"></i>
            {setNum()}
            <i onClick={()=>{
                if(numValue < Math.ceil((props.data.length/12)-1)){
                    setBack("n")
                    props.throw("n")
                }
            }} className="fa-solid fa-angle-right"></i>
        </div>
     );
}
 
export default OneTow;