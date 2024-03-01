import Landing from "./landing";
import Scrolling from "./scrolling";
import ShopNow from "./shopNow";
import {useSelector} from "react-redux";

const SectionOne = () => {
    const background = useSelector(state => state.bottcolors)

    return ( 
    <div className="section-one">
        <div className="image_cover" backgroundbutto={background}></div>
        <Landing/>
        <Scrolling/>
        <ShopNow/>
    </div> 
    );
}
 
export default SectionOne;