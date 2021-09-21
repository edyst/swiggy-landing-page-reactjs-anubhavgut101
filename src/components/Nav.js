// import react from "react";

function Nav(props) {

    
    return (
        <div className="left-part left-part-nav">
                <nav className="flex-nav">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" alt="swiggy"/>
                    <div className="flex-nav-item">
                <h3 className="logIn">Log In</h3>
                <button style={{color:'white',border:'none'}} className="signupBtn">Sign Up</button>
                    </div>
                </nav>
                
            </div>
    );
}

export default Nav;