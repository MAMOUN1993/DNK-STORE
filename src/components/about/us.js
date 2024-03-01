import {useSelector} from "react-redux";

const Us = () => {
    const background = useSelector(state => state.bottcolors)

    return ( 
        <div className="us">
            <div></div>
            <div className="follow" background={background}>
                <div className="line_us" backgroundbutton={background}></div>
                <h1>follow us</h1>
                <div className="icone_us" >
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div></div>
        </div>
     );
}
 
export default Us;