const Stars = (props) => {
    
    let oneStar =   <div className="view_stars">
                        <i className="fa-regular fa-star"></i>
                    </div> ;
    let oneTow =   <div className="view_stars">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div> ;
    let oneThree =   <div className="view_stars">
                     <i className="fa-regular fa-star"></i>
                     <i className="fa-regular fa-star"></i>
                     <i className="fa-regular fa-star"></i>
                    </div> ;
    let oneFour =   <div className="view_stars">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div> ;
    let oneFive =   <div className="view_stars">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div> ;
    return ( 
        <>
                        {Math.round(props.ele.rating.rate) === 5 ? oneFive :
                         Math.round(props.ele.rating.rate) === 4 ? oneFour :
                         Math.round(props.ele.rating.rate) === 3 ? oneThree:
                         Math.round(props.ele.rating.rate) === 2 ? oneTow  :
                         oneStar}
        </>
     );
}
 
export default Stars;