import { useSelector} from "react-redux";
const Who = () => {
    const background = useSelector(state => state.bottcolors)

    return ( 
        <div className="who_container" background={background}>
            <div className="who_para">
                <h2 backgroundbutton={background}>who we are</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
            </div>
            <div className="who_image">
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img-1024x576.jpg" alt=""/>
            </div>
        </div>
     );
}
 
export default Who;