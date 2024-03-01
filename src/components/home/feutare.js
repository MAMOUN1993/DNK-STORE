import { useEffect, useState } from "react";
import View from "../reused/View";
import Error from "../reused/erorr"
import { useSelector } from "react-redux";
const Featured = () => {
    const [dataResp , setResp] = useState(null);
    const [reject , setReject] = useState(null)
    const background = useSelector(state => state.bottcolors)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=10')
        .then(res=> res.json())
        .then(json=> setResp(json))
        .catch(()=>{
            setReject(true)
        })
    })
    return (  
        <div className="featured_main" background={background}>
            <div className="featured_header">
                <h1>Featured products</h1>
            </div>
            <div className="global_container">
                {reject !== null ? <Error/> : <></>}
                {dataResp!==null ? <View data={dataResp} rr={true}/> : reject === null ? <div className="load" >loading...</div> :<></> }
            </div>
        </div>
     );
}

export default Featured;