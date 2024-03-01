import { useSelector , useDispatch} from "react-redux";
import { changemovecart } from "../../redux/slices/movecartSlice";
import ShowCart from "./showCart";
import { Link } from "react-router-dom";
const Cart = () => {
    const buttombackground = useSelector(state => state.bottcolors)
    const price = useSelector(state=>state.price)
    const dispatch = useDispatch()
    const products = useSelector(state => state.cartProducts)
    const state = useSelector(state => state.movecart)
    return (
        <div className="cart_container" attr={state}>
            <div className="cart_right">
                <div className="cart_header">
                    <h3>shopping cart</h3>
                    <i className="fa-solid fa-xmark" onClick={()=>{
                        dispatch(changemovecart())
                    }}></i>
                </div>
                <div className="brk_line"></div>
                <div className="cart_landing">
                    {products.length !==0 ? <ShowCart/> : <></>}
                    {products.length ===0 ? <div className="no_prod">
                        <p>No products in the cart.</p>
                    </div>:<></>}
                </div>
                <div className="cart_fotter">
                    { products.length === 0 ?<div className="botton_cart">
                        <button backgroundbutton={buttombackground}
                        onClick={()=>{
                            dispatch(changemovecart())
                        }}>contiinue shopping</button>
                    </div>: <></>}
                    {products.length !== 0 ? <div className="chekout">
                        <div className="brk_line"></div>
                        <div className="subtotal">
                            <p>subtotal:</p>
                            <p>${price}</p>
                        </div>
                        <div className="brk_line"></div>
                        <Link to={"/cart"}><button 
                        backgroundbutton={buttombackground}
                        onClick={()=>{
                            dispatch(changemovecart())
                        }}>View cart</button></Link>
                        <button backgroundbutton={buttombackground}>Cheack out</button>
                    </div>
                    : <></>}
                </div>
            </div>
            <div className="cart_left" attr={state} onClick={()=>{
                        dispatch(changemovecart())
                    }}></div>
        </div>
     );
}
 
export default Cart;