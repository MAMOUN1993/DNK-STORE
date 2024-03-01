import { useEffect } from "react";
import { useState } from "react"

export default function useFetche(ulr){
    const [data , setData]= useState(null);
            useEffect(()=>{
                fetch(ulr)
                .then(res=> res.json())
                .then(json=>setData(json))
    },[ulr])
    return  data ;
}