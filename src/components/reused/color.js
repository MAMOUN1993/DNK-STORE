import { useDispatch } from "react-redux";
import { chahngecolorbotton } from "../../redux/slices/bottcolrs";
const Colors = (props) => {  
    const dispatch = useDispatch()  
    return ( 
        <div className={props.color} onClick={()=>{
            dispatch(chahngecolorbotton(props.color))
            props.set("true")
        }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
     );
}
 
export default Colors;