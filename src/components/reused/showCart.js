import { useDispatch, useSelector } from "react-redux";
import {deleteProducts} from "../../redux/slices/products"
import { removePrice } from "../../redux/slices/price";
import { remoceCount } from "../../redux/slices/count";
const ShowCart = () => {
    const products = useSelector(state=> state.cartProducts)
    const dispatch = useDispatch()
    function deleProd(s){
        let localArry = [];
        for(let i = 0 ; i < products.length;i++){
            if(i !== s){
                localArry.push(products[i])
            }
            else{
                dispatch(removePrice(products[i].price*products[i].countValue))
                dispatch(remoceCount(products[i].countValue))
            }
        }
        dispatch(deleteProducts(localArry));
    }
    return ( 
    <div className="show-cart">
        {products.map((ele , i)=>{
                        return <div key={i} className="singl-prodct">
                            <div className="logo-para">
                                <div className="logo">
                                    <img alt="" src={ele.image}/>
                                </div>
                                <div className="para">
                                    <h4>{ele.title}</h4>
                                    <h4>{`${ele.countValue} * $${ele.price}`}</h4>
                                </div>
                            </div>
                            <div className="x-mark" onClick={()=>{
                                deleProd(i)
                            }}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>})}
    </div>
    );
}
export default ShowCart;