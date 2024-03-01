
import Landing from '../components/contact/landing';
import Help from '../components/contact/help';
import Tell from '../components/contact/tell';
import { useEffect } from 'react';
import { changevalue } from '../redux/slices/colorSlice';
import { setheaderfalse } from '../redux/slices/hedarcolor';
import { useDispatch} from "react-redux";
const Contact = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setheaderfalse())
        document.title="Contcat us - BrandStore";
    },[]);
    return ( 
        <div className="contact_container" onClick={()=>{
            dispatch(changevalue(1));
        }}>
            <Landing/>
            <Help/>
            <Tell/>
        </div>
     );
}
 
export default Contact;