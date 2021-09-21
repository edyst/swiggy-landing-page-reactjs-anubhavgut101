import React from 'react';
import DownloadBtn from './DownloadBtn';
import './Footer.css'
import NavLinks from './NavLinks'

function Footer(props) {


    const companyLinks=[
        {text:'About us' , url:'https://www.swiggy.com/about'},
        {text:'Team'  , url:'https://www.swiggy.com/team'},
        {text:'Careers'  , url:'https://www.swiggy.com/careers'},
        {text:'Swiggy Blog' , url:'https://blog.swiggy.com/'},
        {text:'Bug Bounty'  , url:'https://www.swiggy.com/bug-bounty'},
        {text:'Swiggy Super' , url:'https://www.swiggy.com/swiggy-super'},
        {text:'Swiggy Corporate' ,url:'https://corporate.swiggy.com/'},
        {text:'Swiggy Instamart' , url:'https://www.swiggy.com/swiggy-instamart'}
    ]


    const contactLinks=[
        {text:'Help & Support' , url:'https://www.swiggy.com/support'},
        {text:'Partner with us'  , url:'https://partner-with-us.swiggy.com/onboard#/swiggy'},
        {text:'Ride with us'  , url:'https://ride.swiggy.com/'}
        
    ]

    const legalLinks=[
        {text:'Terms & Conditions' , url:'https://www.swiggy.com/terms-and-conditions'},
        {text:'Refund & Cancellation'  , url:'https://www.swiggy.com/refund-policy'},
        {text:'Privacy Policy'  , url:'https://www.swiggy.com/privacy-policy'},
        {text:'Cookie Policy' , url:'https://www.swiggy.com/cookie-policy'},
        {text:'Offer Terms'  , url:'https://www.swiggy.com/offer-terms'},
        {text:'Phishing & Fraud' , url:'https://www.swiggy.com/beware-of-phishing-and-fraud'}

        
    ]

    return (
        <div className="bg" >
            <div className=" wrapper container">
            <NavLinks heading="COMPANY" links={companyLinks} showHeading={true}></NavLinks>
             <NavLinks heading="CONTACT" links={contactLinks} showHeading={true}></NavLinks>
            <NavLinks heading="LEGAL"   links ={legalLinks} showHeading={true}></NavLinks>
            <DownloadBtn iosFirst={true}></DownloadBtn>
            
            
            </div>
            <hr className="container"></hr>
            
        </div>
    );
}

export default Footer;