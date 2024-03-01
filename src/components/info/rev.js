const Rev = () => {
    return ( 
        <div className="reviews_container">
            <h4>There are no reviews yet.</h4>
            <div className="be_the_first">
                <h2>Be the first to review “Boho Bangle Bracelet”</h2>
                <h4>Your email address will not be published. Required fields are marked *</h4>
                <div className="rating">
                    <h3>Your rating *</h3>
                    <div className="stars">
                        <i className="fa-solid fa-star" attr={"true"}></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className="input">
                    <div className="rev_input">
                        <h3>your review *</h3>
                        <textarea></textarea>
                    </div>
                    <div className="info_input">
                        <div className="name_input">
                            <h3>name *</h3>
                            <input type="text"></input>
                        </div>
                        <div className="email_input">
                            <h3>email *</h3>
                            <input type="email"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Rev;