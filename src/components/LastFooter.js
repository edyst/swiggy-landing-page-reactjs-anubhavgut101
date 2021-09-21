import React from 'react';

function LastFooter(props) {
    return (
        <div className=" last-footer ">
            <div className="last-foot-flex container">

            <div className="last-flex-item l-logo"> 
            <img className="last-logo"  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" alt="swiggy"/>

            </div>
            <p className="last-flex-item"><i className="fas fa-copyright"></i>2021 SWIGGY</p>

            <div className="social-icons last-flex-item" >
            <a href="https://www.facebook.com/swiggy.in"><i className="fab fa-facebook"></i></a>
            <a href="https://pinterest.com/swiggyindia"><i className="fab fa-pinterest"></i></a>
            <a href="https://instagram.com/swiggyindia/"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com/swiggy_in"><i className="fab fa-twitter"></i></a>
            </div>

            </div>
        </div>
    );
}

export default LastFooter;