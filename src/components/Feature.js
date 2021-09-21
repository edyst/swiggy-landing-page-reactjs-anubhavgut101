import React from 'react';
// import NavLinks from './NavLinks';

function Feature(props) {

    const {link,heading,subheading,completed}=props;
    // alert({completed});
    return (
        <div className="feature-item" >
            <img src={link}  style={{paddingTop:(completed==='true'?'30px':'0px')}} alt="swiggy"/>
            <h2 >{heading}</h2>
            <p>{subheading}</p>
        </div>
    );
}

export default Feature;