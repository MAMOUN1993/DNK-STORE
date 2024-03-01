import { Link } from 'react-router-dom';
import { changevalue } from '../redux/slices/colorSlice';
import { remoceCount } from '../redux/slices/count';
import { resetCount } from '../redux/slices/count';
import { removePrice , restPrice } from '../redux/slices/price';
import { deleteProducts } from '../redux/slices/products';
import { useDispatch , useSelector} from "react-redux";
import { useState } from 'react';
const Allcart = () => {
    const [cartUpdata , setcatupData] = useState(false)
    const price  = useSelector(state=>state.price)
    const prod = useSelector(state=>state.cartProducts)
    const [upDateCart , setCart] = useState("true")
    const [ addProdct ,setadd ] = useState(false)
    const [arryEdit , setEdit] = useState([...prod])
    const dispatch = useDispatch()
    const background = useSelector(state => state.bottcolors)
    const addDiv =  <div className='add_prodct'>
                        <i className="fa-solid fa-spinner"></i>
                    </div>
    const cartup = <div className='cart-updated'>
                        <i className="fa-solid fa-check"></i>
                        cart updated.
                    </div>
    function funEidtProd( k , Value){
        let localArry = arryEdit.map((obj , i )=>{
            if(k === i){
                return {...obj , countValue : Value}
            }
            return obj
            }
        )
        setCart("false")
        setEdit(localArry);
    }
    function apllyEdit () {
        dispatch(deleteProducts(arryEdit))
        dispatch(resetCount(restCount()))
        dispatch(restPrice(resetPrice()))
    }
    function restCount (){
        let localVar = 0
        for(let i = 0 ; i < arryEdit.length ; i++){
            localVar += +arryEdit[i].countValue;
        }
        return localVar;
    }
    function resetPrice (){
        let localVar = 0
        for(let i = 0 ; i < arryEdit.length ; i++){
            localVar = localVar + (+arryEdit[i].price*+arryEdit[i].countValue);
        }
        console.log(localVar)
        return localVar.toFixed(2);
    }
    function deleteprod(k){
        let localArry = [];
        for(let i = 0 ; i < prod.length;i++){
            if(i !== k){
                localArry.push(prod[i])
            }
            else{
                dispatch(removePrice(prod[i].price*prod[i].countValue))
                dispatch(remoceCount(prod[i].countValue))
            }
        }
        dispatch(deleteProducts(localArry));
    };
    return ( 
        <div className="back_ground_container" backGround={background} onClick={()=>{
            dispatch(changevalue(1));
        }}>
            <div className='global_container'>
                <div className='allcart_container'>
                    <h1>cart</h1>
                    {cartUpdata ? cartup :<></>}
                    {prod.length !==0 ? 
                        <div className='all-cart-prod-tow'>
                            {addProdct ? addDiv : <></> }
                            {prod.map((s,i)=>{ 
                                return <div className='all-cart-show-tow' key={s.i}>
                                    <div className='xx'>
                                        <i className="fa-solid fa-xmark" 
                                            onClick={()=>{
                                                deleteprod(i)
                                            }}></i></div>
                                    <div className='logo'>
                                        <img alt='' src={s.image}/>
                                    </div>
                                    <div className='para'>
                                        <div>
                                            <li>product:</li>
                                            <p>{s.title}</p>
                                        </div>
                                        <div>
                                            <li>price:</li>
                                            <p>${s.price}</p>
                                        </div>
                                        <div>
                                            <li>quanity:</li>
                                            <div className='input'>
                                                <input type='number' min={1} defaultValue={s.countValue}
                                                    onChange={(e)=>{
                                                    funEidtProd( i,e.target.value)
                                                    }}>
                                                </input>
                                            </div>
                                        </div>   
                                        <div>
                                            <li>subtotal:</li>
                                            <p>${s.price*s.countValue}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                            <div className="apply">
                                <div>
                                    <input type="text" placeholder="coupon code"></input>
                                    <button backgroundbutton={background}>apply coupon</button>
                                </div>
                                <button className='button_with_attr' attr={upDateCart}
                                    onClick={()=>{
                                        if( upDateCart === "false"){
                                            apllyEdit()
                                            setCart("true")
                                            setadd(true)
                                            setTimeout(()=>{
                                            setadd(false)
                                        },2000)
                                        }
                                    }}
                                    backgroundbutton={background}
                                >update cart</button>
                            </div>
                        </div> : <></>}
                    {prod.length !== 0 ?
                        <div className="all-car-product">
                            {addProdct ? addDiv : <></> }
                            <ul>
                                <li>product</li>
                                <li>price</li>
                                <li>quanity</li>
                                <li>subtotal</li>
                            </ul>
                            {prod.map((s,i)=>{
                                return <div key={s.i} className='all-cart-show'>
                                            <i className="fa-solid fa-xmark" 
                                            onClick={()=>{
                                                deleteprod(i)
                                            }}></i>
                                            <div className='logo'>
                                                <img alt='' src={s.image}/>
                                            </div>
                                            <p>{s.title}</p>
                                            <p>${s.price}</p>
                                            <div className='input'>
                                                <input type='number' min={1} defaultValue={s.countValue}
                                                onChange={(e)=>{
                                                    funEidtProd( i,e.target.value)
                                                }}
                                                ></input>
                                            </div>
                                            <p>${s.price*s.countValue}</p>
                                        </div>
                                    })}
                            <div className="apply">
                                <div>
                                    <input type="text" placeholder="coupon code"></input>
                                    <button backgroundbutton={background}>apply coupon</button>
                                </div>
                                <button className='button_with_attr' attr={upDateCart}
                                    onClick={()=>{
                                        if( upDateCart === "false"){
                                            apllyEdit()
                                            setCart("true")
                                            setadd(true)
                                            setTimeout(()=>{
                                            setadd(false)
                                            setcatupData(true)
                                        },2000)
                                        }
                                    }}
                                    backgroundbutton={background}
                                >update cart</button>
                            </div>
                        </div> 
                        : <></>}
                    {prod.length !==0 ? <div className="total_container">
                        <div className="total">
                        {addProdct ? addDiv : <></> }

                            <h2>cart total</h2>
                            <div>
                                <p>subtotal</p>
                                <p>${price}</p>
                            </div>
                            <div>
                                <p>total</p>
                                <p>${price}</p>
                            </div>
                            <button backgroundbutton={background}>checkout</button>
                        </div>
                    </div>: <></>}
                    {prod.length === 0 ? <div className='global_container'>
                        <div className='return'>
                            <p> <i class="fa-solid fa-circle-exclamation"></i> Your cart is currently empty.</p>
                            <Link to={"/Home/store"}><button backgroundbutton={background}>return to shop</button ></Link>
                        </div>
                    </div>: <></>}                            
                </div>
            </div>
            
        </div>
     );
}
 
export default Allcart;