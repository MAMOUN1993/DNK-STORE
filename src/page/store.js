import StoreCatagrice from "../components/store/stoercatagice";
import View from '../components/reused/View';
import Error from '../components/reused/erorr';
import OneTow from "../components/store/onetow";
import Range from "../components/store/range";
import {useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { changevalue } from "../redux/slices/colorSlice";
import { setheadertrue } from "../redux/slices/hedarcolor";
import { useSelector } from "react-redux";
const Store = () => {
    const background = useSelector(state => state.bottcolors)
    const dispatch = useDispatch();
    let params = useParams();
    const [ dataCom , setCom] = useState(null);
    const [ dataConst , setconst] = useState(null);
    const [ numPage , setNumPage] = useState(1);
    const [ slicData , setSlic] = useState(null);
    const [dataRej , setRej] = useState(false)
    const [showmaxValue ,setmaxValue] =useState(20)
    const [showminValue ,setminValue] =useState(200)
    const fetchData = async ()=>{
        await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            setconst(json)
            setCom(()=>{return [...json.slice(0,12)]});
            setSlic(()=>{return [...json.slice(0,12)]});
        })
        .catch(()=>{
            setRej(true)
        })
    }
    const fetchcusomData = async ()=>{
        await fetch(`https://fakestoreapi.com/products/category/${params.catagice}`)
        .then(res=>res.json())
        .then(json=>{
            setconst(json)
            setCom(()=>{return [...json.slice(0,12)]});
            setSlic(()=>{return [...json.slice(0,12)]});
        })
        .catch(()=>{
            setRej(true)
        })
    }
    function apllySort(a){      
        switch(a){
            case 'sort by popularity':{
                sortByPopl()
                break;
            
            }
            case "default sorting" :{
                setCom(()=>{ return [...slicData]})
                break;
            }
            case "sort by price : low to high" :{
                sortBypriceLTH()
                break;
            }
            case "sort by price : high to low":{
                sortBypriceHTL()
                break;
            }
            case "sort by lasts":{
                sortByLasts()
                break;
            }
            default :{
                setCom(()=>{ return [...slicData]})
            }
        };
    }
    function sortpricerange(){
        let localArry = [];
        for(let i = 0 ; i < dataCom.length ; i++){
            if(dataCom[i].price<showmaxValue && dataCom[i].price>showminValue){
                localArry.push(dataCom[i]);
            }
        }
        setCom(()=>{return [...localArry]})
    }
    function throwPage(s){
        if(s==="n" && numPage < Math.ceil(dataConst.length/12)){
                setNumPage((s)=>{return s+1});
                let localArry = [...dataConst];
                setCom(()=>{return [...localArry.slice(numPage*12,(numPage+1)*12)]});
                setSlic(()=>{return [...localArry.slice(numPage*12,(numPage+1)*12)]});
        }else{
                if(s==="l" && numPage > 1){
                    setNumPage((s)=>{return s-1});
                    let localArry = [...dataConst];
                    setCom(()=>{return [...localArry.slice(((numPage-2)*12),(numPage-1)*12)]});
                    setSlic(()=>{return [...localArry.slice(((numPage-2)*12),(numPage-1)*12)]});
            }
        }
    }
    function cutArray(f){
            setNumPage(f+1);
            let localArry = [...dataConst];
            setCom(()=>{return [...localArry.slice(f*12,(f+1)*12)]});
            setSlic(()=>{return [...localArry.slice(f*12,(f+1)*12)]});
    };
    function sortBypriceLTH(){
        let localArry = [...slicData];
        let localVar = null;
        let i = null;
        for(i=1 ; i < localArry.length ; i++){
            if(localArry[i-1].price<localArry[i].price){
                localVar=localArry[i-1];
                localArry[i-1]=localArry[i];
                localArry[i]=localVar;
                i=0;
            }
        }
        setCom(()=>{return [...localArry]})
    }
    function sortBypriceHTL(){
        let localArry = [...slicData];
        let localVar = null;
        let i = null;
        for(i=localArry.length-1 ; i > 0  ; i--){
            if(localArry[i-1].price>localArry[i].price){
                localVar=localArry[i-1];
                localArry[i-1]=localArry[i];
                localArry[i]=localVar;
                i=localArry.length;
            }
        }
        setCom(()=>{return [...localArry]})
    }
    function sortByLasts(){
        let localArry = [...slicData];
        let localVar = null;
        let i = null;
        for(i=1 ; i < localArry.length ; i++){
            if(localArry[i-1].rating.count<localArry[i].rating.count){
                localVar=localArry[i-1];
                localArry[i-1]=localArry[i];
                localArry[i]=localVar;
                i=0;
            }
        }
        setCom(()=>{return [...localArry]})
    }
    function sortByPopl(){
        let localArry = [...slicData];
        let localVar = null;
        let i = null;
        for(i=1 ; i < localArry.length ; i++){
            if(localArry[i-1].rating.rate<localArry[i].rating.rate){
                localVar=localArry[i-1];
                localArry[i-1]=localArry[i];
                localArry[i]=localVar;
                i=0;
            }
        }
        setCom(()=>{return [...localArry]})
    }
    useEffect(()=>{
        if(params.catagice === "store"){
            fetchData()
        }else{
            fetchcusomData()
        }
        dispatch(setheadertrue())
        document.title=`${params.catagice[0].toUpperCase()}${params.catagice.slice(1)} - Brandstore`;
// eslint-disable-next-line
    },[params.catagice]);
    return ( 
        <div className="store_container" background={background}  onClick={()=>{
            dispatch(changevalue(1))
        }}>
            <div className="store_conta">
                <div className="store_filter">
                    <div className="search_container">
                        <input placeholder="Search products..."></input>
                         <i backgroundbutton={background} className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="filter_container">
                        <h2>filter by price</h2>
                        <Range 
                        min={20}
                        max={200}
                        onChange={({ min, max }) => {
                            setmaxValue(max);
                            setminValue(min);
                        }}/>
                        <div className="filter">
                            <button backgroundbutton={background} onClick={()=>{
                                sortpricerange()
                            }}>filter</button>
                            <p>price : ${showminValue} - ${showmaxValue}</p>
                        </div>
                    </div>
                    <StoreCatagrice/>
                </div>
                {dataRej ? <Error/> : <div className="store_body">
                    <h4>home/{params.catagice}</h4>
                    <div className="fillter_result">
                        {dataCom !== null ? <h4>showing {((numPage-1)*12)+1}-{(numPage*12)} of {dataConst.length} result</h4> : <p>loading</p>}
                        <select onChange={(e)=>{  
                            apllySort(e.target.value)
                            }}>
                            <option>default sorting</option>
                            <option>sort by popularity</option>
                            <option>sort by average rating</option>
                            <option>sort by lasts</option>
                            <option>sort by price : low to high</option>
                            <option>sort by price : high to low</option>
                        </select>
                    </div>
                    {dataCom !== null ? <View data={dataCom}/>: <p>loading</p>}
                    {dataCom !== null ? <OneTow data={dataConst} sliceFun={cutArray} throw={throwPage}/> : <p>loading</p>}
                </div>}
                
            </div>
            
        </div>
     );
}
 
export default Store;