import { useSelector} from "react-redux";
const Team = () => {
    const background = useSelector(state => state.bottcolors)
    return ( 
        <div className="team_container">
            <div className="team_header">
                <div className="team_line"></div>
                <h2>A Few Words About</h2>
                <h1>our team</h1>
                <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
            </div>
            <div className="global_container">
                <div className="team_body">
                    <div background={background}>
                        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team2-free-img.png" alt=""/>
                        <h2>Harvey Spector</h2>
                        <h3>Founder - CEO</h3>
                    </div>
                    <div background={background}>
                        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team1-free-img.png" alt=""/>
                        <h2>Jessica Pearson</h2>
                        <h3>COO</h3>
                    </div>
                    <div background={background}>
                        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team3-free-img.png" alt=""/>
                        <h2>Rachel Zain</h2>
                        <h3>Marketing Head</h3>
                    </div>
                    <div background={background}>                    
                        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team4free-img.png" alt=""/>
                        <h2>Luise Litt</h2>
                        <h3>Lead Developer</h3>
                    </div>
                    <div background={background}>
                        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team5-free-img.png" alt=""/>    
                        <h2>Katrina Bennett</h2>
                        <h3>Intern Designer</h3>
                    </div>
                    <div background={background}>
                        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team6-free-img.png" alt=""/>    
                        <h2>Mike Ross</h2>
                        <h3>Intern Designer</h3>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Team;