import { useEffect, useState } from "react";
import Best from "../reused/best";
const StoreCatagrice = () => {
    const [alldata , setData] =useState(null) 
    const [eleData , setEle] =useState(null) 
    const [jawData , setJaw] =useState(null) 
    const [manData , setMan] =useState(null) 
    const [womData , setWom] =useState(null)
    const [dataRej , setRej] =useState(null) 
    async function pullAll(){
        await fetch(`https://fakestoreapi.com/products`)
        .then(res=>res.json())
        .then(json=>{
            sortArry(json)
        })
        .catch(()=>{
            setRej("Sorry No Data")
        })
    }
    function sortArry (a){
        let localArry = a;
        let localVar = null;
        for(let i = 1 ; i < localArry.length ; i++){
            if(localArry[i-1].rating.rate < localArry[i].rating.rate){
                localVar = localArry[i-1];
                localArry[i-1] =localArry[i];
                localArry[i] = localVar;
                i = 0;
            }
        }
        localArry.length=5;
        setData(localArry);
    }
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/electronics`)
        .then(res=>res.json())
        .then(json=>{setEle(json)})
        .catch(()=>{
            setRej("Sorry No Data")
        });
        fetch(`https://fakestoreapi.com/products/category/jewelery`)
        .then(res=>res.json())
        .then(json=>{setJaw(json)})
        .catch(()=>{
            setRej("Sorry No Data")
        });
        fetch(`https://fakestoreapi.com/products/category/men's clothing`)
        .then(res=>res.json())
        .then(json=>{setMan(json)})
        .catch(()=>{
            setRej("Sorry No Data")
        });
        fetch(`https://fakestoreapi.com/products/category/women's clothing`)
        .then(res=>res.json())
        .then(json=>{setWom(json)})
        .catch(()=>{
            setRej("Sorry No Data")
        });
        pullAll();
    // eslint-disable-next-line
    },[])
    return ( 
        <>
        <div className="store_catagrice">
            <h3>categories</h3>
            <div className="catagrice">
                <div>
                    <h4>electronics</h4>
                    {eleData !== null ? <p>{`(${eleData.length})`}</p> : dataRej === null ? <p>loading</p> : <p>{dataRej}</p>}
                </div>
                <div>
                    <h4>jewelery</h4>
                    {jawData !== null ? <p>{`(${jawData.length})`}</p> : dataRej === null ? <p>loading</p> : <p>{dataRej}</p>}
                </div>
                <div>
                    <h4>men's clothing</h4>
                    {manData !== null ? <p>{`(${manData.length})`}</p> : dataRej === null ? <p>loading</p> : <p>{dataRej}</p>}
                </div>
                <div>
                    <h4>women's clothing</h4>
                    {womData !== null ? <p>{`(${womData.length})`}</p> : dataRej === null ? <p>loading</p> : <p>{dataRej}</p>}
                </div>
            </div>
        </div>
        <div className="store-best">
        <h1>our best sellers</h1>
        {alldata !== null ? <Best data={alldata}/> : dataRej === null ? <p>loading</p> : <p>{dataRej}</p>}
        </div></>
     );
}
 
export default StoreCatagrice;