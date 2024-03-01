 import { Link } from "react-router-dom";
 import {useSelector ,useDispatch} from "react-redux";
 import { changemoveheader } from "../../redux/slices/movesecheader";

const MovedHeader = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.movehead)
    return (
        <div className="Moved_container" attr={state}>
            <i className="fa-solid fa-x" onClick={()=>{
                dispatch(changemoveheader())
            }}></i>
            <i className="fa-solid fa-user"></i>
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
                    <Link to={`Home/women'women's clothing`}>
                        <li>WOMEN'S CLOTHING</li>
                    </Link>
            </div>
            <div className="nav-items">
                <Link to={"/about"}>
                    About
                </Link>
                <Link to={"/concat"}>concat us</Link>
            </div>    
        </div>
     );
}
 
export default MovedHeader;