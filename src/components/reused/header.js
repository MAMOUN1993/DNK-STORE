import { Link } from 'react-router-dom';
import { changevalue } from '../../redux/slices/colorSlice';
import { changemovecart } from '../../redux/slices/movecartSlice';
import { useDispatch ,useSelector} from "react-redux";
const Header = () => {
    const totlaPrice = useSelector(state=>state.price);
    const totlacount = useSelector(state=>state.totalCount);
    const state = useSelector(state => state.headcolor);
    const dispatch = useDispatch();
    return ( 
        <div className="Header" attr={state} onClick={()=>{
            dispatch(changevalue(1));
        }}>
            <div className="log-cate">
                <div className="logo">
                    <Link to={'/'}>
                        {state ==="false" ? <img src={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png"} alt=''></img> :
                        <img src={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/favicon-free-img-120x120.png"} alt=''></img>
                }
                    </Link>
                </div>
                <div className="categrice">
                    <Link to={`Home/store`}>
                        <li>Evreything</li>
                    </Link>
                    <Link to={`Home/electronics`}>
                        <li>ELECTRONICS</li>
                    </Link>
                    <Link to={`Home/jewelery`}>
                        <li>JEWELERY</li>
                    </Link>
                    <Link to={`Home/men's clothing`}>
                        <li>MEN'S CLOTHING</li>
                    </Link>
                    <Link to={`Home/women's clothing`}>
                        <li>WOMEN'S CLOTHING</li>
                    </Link>
                </div>
            </div>
            <div className="nav-price">
                <div className="nav-items">
                    <Link to={"/about"}>
                        About
                    </Link>
                    <Link to={"/concat"}>concat us</Link>
                </div>
                <div className="price-items" onClick={()=>{
                    dispatch(changemovecart())
                }}>
                    <li>${totlaPrice}</li>
                    <li></li>
                    <div>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <p>{totlacount}</p>
                    </div>
                </div>
                <div className='acount'>
                    <div className='login'>
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className='nav-icone'></div>
                </div>
            </div>

        </div>
     );
}
 
export default Header;