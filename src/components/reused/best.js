import { Link } from "react-router-dom";
import Stars from "./starts";
const Best = (props) => {
    return ( 
        <div className="best_container">
            {props.data.map((s)=>{
                return <div className="best" key={s.id}>
                            <div className="image">
                                <Link to={`/Home/${s.category}/${s.id}`}><img alt="" src={s.image}></img></Link>
                            </div>
                            <div className="best_onfo">
                            <Link to={`/Home/${s.category}/${s.id}`}><h4>{s.category}</h4></Link>
                            <Stars ele={s}/>
                            </div>
                        </div>}
                    )}
        </div>
     );
}
export default Best;
