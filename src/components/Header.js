import React,{useState,useEffect} from 'react';
import Nav from './Nav';
import CityInput from './CityInput';
import Dynamictext from './Dynamictext';
// import { useEffect, useState } from 'react/cjs/react.development';


function Header(props) {


    const [idx,setIdx]=useState(0);

     useEffect(() => {
         setInterval(() =>  {
            setIdx((idx) => (idx+1)%4)
        }, 5000);
    
        // return () => clearInterval(intervalID);
    }, []);


     const popCity=[{city:'Ahmedabad'},
     {city:'Bangalore'},
     {city:'Chennai'},
     {city:'Delhi'},
     {city:'Gurgaon'},
     {city:'Hyderabad'},
     {city:'Kolkata'},
     {city:'Mumbai'},
     {city:'Pune'}];

    //  let count=0;
     

     let background=["https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Breakfast2-new_men3ne",
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1-new_douhad" ,
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch3-new_mkqxdb" ,
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch2-new_xexpaz"];

    return (
        <div className="header" style={{backgroundImage:`url(${background[idx]})`}}>
            <div className="overlay"></div>
            <Nav></Nav>
            <Dynamictext></Dynamictext>
            <CityInput City={popCity}></CityInput>
            
           
        </div>
    );
}

export default Header;