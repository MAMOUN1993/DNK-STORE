
import { useEffect } from 'react';
import SectionOne from '../components/home/sectionOne';
import SectionTow from '../components/home/sectionTow';
import { changevalue } from '../redux/slices/colorSlice';
import { setheaderfalse } from '../redux/slices/hedarcolor';
import { useDispatch} from "react-redux";
const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setheaderfalse())
        document.title="Home - BrandStore"
    },[]);
    return ( 
    <div className="Home" onClick={()=>{
        dispatch(changevalue(1));

    }}>
        <SectionOne/>
        <SectionTow/>
    </div>
    );
}
 
export default Home;