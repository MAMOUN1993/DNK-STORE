import { useDispatch, useSelector } from "react-redux";
import { changemovecart } from "../../redux/slices/movecartSlice";
import { changemoveheader } from "../../redux/slices/movesecheader";
import { Link } from "react-router-dom";
const Secheader = () => {
    const price = useSelector(state=>state.price)
    const count = useSelector(state=>state.totalCount)
    const dispatch = useDispatch();
    return ( 
    <div className="sec_header">
        <div className="logo">
        <Link to={'/'}><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img-120x40.png" alt=""/></Link>
        </div>
        <div className="nav">
            <p>${price}</p>
            <i className="fa-solid fa-bag-shopping" onClick={()=>{
                dispatch(changemovecart())
            }}>
                <div>{count}</div>
            </i>
            <i className="fa-solid fa-bars" 
            onClick={()=>{
                dispatch(changemoveheader())
            }}></i>
        </div>
    </div>
     );
}
 
export default Secheader;