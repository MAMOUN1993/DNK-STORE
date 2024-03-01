import { useEffect } from "react";
import Landing from "../components/info/landing";
import Prev from "../components/info/prev";
import { changevalue } from '../redux/slices/colorSlice';
import { setheadertrue } from "../redux/slices/hedarcolor";
import { useDispatch, useSelector} from "react-redux";
const Info = () => {
    const background = useSelector(state => state.bottcolors)
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0,0);
        dispatch(setheadertrue())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return ( 
        <div className="info_container" backGround={background} onClick={()=>{
            dispatch(changevalue(1));
        }}>
            <div className="global_container">
                <Landing/>
                <Prev/>
            </div>
            
        </div>
     );
}
 
export default Info;