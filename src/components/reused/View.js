import { Link } from "react-router-dom";
import Stars from "./starts";
const View = (props) => {
    return ( 
        <div className="view_holder">
            {props.data.map((ele)=>{
                return <div key={ele.id} className="catig">
                    {props.rr ? <Link to={`Home/${ele.category}/${ele.id}`}>
                        <div className="image_holder">
                            <img src={ele.image} alt=""/>
                        </div>
                    </Link> : <Link to={`${ele.id}`}>
                        <div className="image_holder">
                            <img src={ele.image} alt=""/>
                        </div>
                    </Link>}
                    <div className="inf_holer">
                    {props.rr ? <Link to={`Home/${ele.category}/${ele.id}`}>
                        <h3>{ele.title}</h3>
                            </Link> : <Link to={`${ele.id}`}>
                        <h3>{ele.title}</h3>
                    </Link>}
                        <h4>{ele.category}</h4>
                        <h4> price : {ele.price} $</h4>
                        <Stars ele={ele}/>
                    </div>
                </div>
            })}
            
        </div>
     );
}
export default View;