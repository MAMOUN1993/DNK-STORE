import imageOne from '../../images/logo@2x-free-img-120x40.png'
import { changevalue } from '../../redux/slices/colorSlice';
import { useDispatch, useSelector} from "react-redux";
const Footer = () => {
    const dispatch = useDispatch()
    const buttombackground = useSelector(state => state.bottcolors)
    return ( 
        <div className="footer" onClick={()=>{
            dispatch(changevalue(1));

        }}>
            <div className="breack_line"></div>
            <div className='global_container'>
                <div className="sale">
                    <h1>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h1>
                </div>
            </div>
            <div className="breack_line"></div>
            <div className='global_container'>
                <div className="dnk_container">
                    <div>
                        <div className="image">
                            <img alt="" src={imageOne}></img>
                        </div>
                        <h3>The best look anytime, anywhere.</h3>
                    </div>
                    <ul>
                        <li>For Her</li>
                        <li>Women Jeans</li>
                        <li>Tops and Shirts</li>
                        <li>Women Jackets</li>
                        <li>Heels and Flats</li>
                        <li>Women Accessories</li>
                    </ul>

                    <ul>
                        <li>For Him</li>
                        <li>Men Jeans</li>
                        <li>Men Shirts</li>
                        <li>Men Shoes</li>
                        <li>Men Accessories</li>
                        <li>Men Jackets</li>
                    </ul>
                    <div className="sub_container">
                        <h2>Subscribe</h2>
                        <input type="text" placeholder="your email address..."></input>
                        <button backgroundbutton={buttombackground}>subscribe</button>
                    </div>
                </div> 
            </div>
            <div className="breack_line"></div>
            <div className='global_container'>
                <div className="copyright">
                    <div className="copy">
                        <h4>Copyright © 2023 Brandstore. Powered by Brandstore.</h4>
                    </div>
                    <div className="conact_icone">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-google"></i>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Footer;