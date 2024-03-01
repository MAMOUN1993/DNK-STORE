import {useSelector} from "react-redux";

const Tell = () => {
    const background = useSelector(state => state.bottcolors)

    return ( 
        <div className="back_help">
            <div className="global_container">
            <div className="tell_container">
                <div className="tell_info">
                    <h4>Don't be a stranger!</h4>
                    <h1>You tell us. We listen.</h1>
                    <p>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>
                </div>
                <div className="tell_form">
                    <input type="text" placeholder="NAME"></input>
                    <input type="text" placeholder="SUBJECT"></input>
                    <input  type="email" placeholder="EMAIL"></input>
                    <textarea placeholder="MASSEGE"></textarea>
                    <button backgroundbutton={background}>send message</button>
                </div>
            </div>
        </div>
        </div>
        
     );
}
 
export default Tell;