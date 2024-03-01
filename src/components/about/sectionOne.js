import Who from "./who";
import {useSelector} from "react-redux";
const AboutOne = () => {
    const background = useSelector(state => state.bottcolors)

    return ( 
        <div className="about_one" >
            <div className="landing" backgroundbutton={background}>
                <h1>about us</h1>
            </div>
            <Who/>
        </div>
     );
}
 
export default AboutOne;