import { useEffect } from "react";
import AboutOne from "../components/about/sectionOne";
import AboutTow from "../components/about/sectionTow";
import { changevalue } from '../redux/slices/colorSlice';
import { useDispatch} from "react-redux";
import { setheaderfalse } from '../redux/slices/hedarcolor';
const About = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setheaderfalse())
        document.title="About - BrandStore";
    },[]);
    return ( 
        <div className="about_container" onClick={()=>{
            dispatch(changevalue(1));
        }}>
            <AboutOne/>
            <AboutTow/>
        </div>
     );
}

export default About;