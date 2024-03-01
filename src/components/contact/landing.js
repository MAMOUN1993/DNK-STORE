import {useSelector} from "react-redux";
const Landing = () => {
    const background = useSelector(state => state.bottcolors)
    return ( 
        <div className="landing_contact" backgroundbutto={background}>
            <h1>contact us</h1>
        </div>
     );
}
 
export default Landing;