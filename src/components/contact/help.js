import {useSelector} from "react-redux";
const Help = () => {
    const background = useSelector(state => state.bottcolors)
    return ( 
       <div className="back_help">
             <div className="global_container">
                <div className="help_container">
                    <div className="help_header">
                        <h3>have any queries</h3>
                        <h1>we're here to help</h1>
                    </div>
                    <div className="vest">
                        <div>
                            <h1>sales</h1>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                            <h3 color={background}>1800 123 4567</h3>
                        </div>
                        <div>
                            <h1>complaints</h1>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                            <h3 color={background}>1900 223 8899</h3>
                        </div>
                        <div>
                            <h1>return</h1>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                            <h3 color={background}>returns@mail.com</h3>
                        </div>
                        <div>
                            <h1>marketing</h1>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                            <h3 color={background}>1700 444 5578</h3>
                        </div>
                    </div>
                </div>
            </div>
       </div>
     );
}
 
export default Help;