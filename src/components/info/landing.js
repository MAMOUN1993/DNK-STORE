import { Link, useParams } from "react-router-dom";
import useFetche from "../../customHook/GetData";
import { useRef, useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { addProducts } from "../../redux/slices/products";
import { clacPrice } from "../../redux/slices/price";
import { setCount } from "../../redux/slices/count";
const Landing = () => {
    const buttombackground = useSelector(state => state.bottcolors)
    const dispatch = useDispatch()
    const valueCount = useRef();
    const infoparam = useParams()
    const dataShow = useFetche(`https://fakestoreapi.com/products/${infoparam.info}`)
    const [ Top , setTop] = useState(null);
    const [ left , setLeft] = useState(null);
    const [ widthel ,setWidth] = useState(null);
    const [True ,setTrue] = useState(false);
    const [ disFull , setFull] =useState(false);
    const [ zoom , setZoom] = useState(null);
    const [reqFull , setreqFull] = useState(false);
    const [addPro , setAdd] =useState(false)
    const [showAdd , setShow] = useState(null) 
    const eleFull = useRef()
    const mothDiv = useRef();
    function setImage(x){
        setTop(((((x.pageY - mothDiv.current.offsetTop) * 1000)/x.target.offsetHeight).toFixed(0)-500)*(-1))
        setLeft(((((x.pageX - mothDiv.current.offsetLeft) * 1000)/x.target.offsetWidth).toFixed(0)-500)*(-1))
    };
    function addToCart(){
        if(valueCount.current.value === ""){
            setTrue(true);
        }else{
            setTrue(false)
            let localprodct =  valueCount.current.value;
            dispatch(addProducts({...dataShow , countValue:localprodct}));
            dispatch(clacPrice(+localprodct*dataShow.price));
            dispatch(setCount(+localprodct));
            setShow(`${localprodct} * ""${dataShow.title}""`)
            setAdd(true);
        }
    }
    return (
            <div className="info_landing">
                {addPro ? <>
                    <div className="add_prod">
                        <div className="add_prod_para">
                            <p>{showAdd} <span/>have been added to your cart.</p>
                        </div>
                        <div className="botton">
                            <Link to={"/cart"}><button backgroundbutton={buttombackground}>view cart</button></Link>
                            <i className="fa-solid fa-x" 
                            onClick={()=>{
                                setAdd(false)
                            }}></i>
                        </div>
                    </div>
                </> : <>
                </>}
                <div>
                    {disFull ? <div className="full" ref={eleFull}>
                        <div className="full-nav">
                            <i className="fa-solid fa-magnifying-glass"
                            onClick={()=>{
                                if(zoom !== "75%"){
                                    setZoom("75%")
                                }else{
                                    setZoom(null)
                                }
                            }}
                            onScroll={()=>{
                                document.scrollTop = 0 ;
                            }}
                            ></i>
                            <i className="fa-solid fa-expand"
                            onClick={()=>{
                                if(reqFull !== true){
                                    eleFull.current.requestFullscreen()
                                    setreqFull(true)
                                }else{
                                    document.exitFullscreen()
                                    setreqFull(false)
                                }
                            }}
                            ></i>
                            <i className="fa-solid fa-x" 
                            onClick={()=>{
                                setFull(false)
                            }}></i>
                        </div>
                        <div className="full_image" style={{"width": zoom}}>
                            <img alt="" src={dataShow.image}/>
                        </div>
                    </div> :<></>}
                    <div className="info_image" ref={mothDiv}>
                        {dataShow !== null ? <img src={dataShow.image} style={{"width" : widthel , "left" : left , "top": Top }} alt=""/> : <p>loading</p>}
                        {dataShow !== null ?
                        <div className="info_image_block" 
                        onMouseMove={(e)=>{
                            setImage(e)
                        }}
                        onMouseEnter={(e)=>{
                            setWidth("100%")
                        }} 
                        onMouseLeave={(e)=>{
                           setWidth(null)
                           setLeft(null)
                           setTop(null)
                        }}>
                        </div>: <></>}
                        {dataShow !== null ? <div className="zoom"
                            onClick={()=>{
                                setFull(true);
                            }}
                            >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div> : <></>}
                    </div>
                    <div className="info_para">
                        {dataShow !== null ?  <div className="info_title">
                                                    <Link to={"/"}><h4>Home/ </h4></Link>
                                                    <Link to={`/Home/${dataShow.category}`}><h4>{infoparam.catagice}/</h4></Link>
                                                    <h4>{dataShow.title}</h4>
                                                </div>
                                            : <p>loading</p>}
                        {dataShow !== null ? <h2>{dataShow.title}</h2> : <h2>loading</h2>}
                        {dataShow !== null ? <h3>$  {dataShow.price} </h3> : <h3>loading</h3>}
                        {dataShow !== null ? <p>{dataShow.description}</p> : <p>loading</p>}
                        <div className="info_color">
                            <div className="color"></div>
                            <div className="color"></div>
                            <div className="color"></div>
                        </div>
                        <div className="line"></div>
                        <div className="info_add">
                            <input type="number" placeholder={0} ref={valueCount} min={1}></input>
                            <button backgroundbutton={buttombackground} onClick={()=>{
                                addToCart()
                            }}
                            >add to cart</button>
                        </div>
                        {True ? <p>please set count of product</p>:<p></p>}
                        <div className="line"></div>
                    </div>
                </div>
            </div>
);
}
 
export default Landing;