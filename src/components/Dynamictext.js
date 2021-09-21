import React,{useEffect,useState} from 'react';

function Dynamictext(props) {

    const[toggles,setToggle]=useState(0);

    const animate=['Hungry?..','Late Night At Office?..','Unexpected Guests ?..','Cooking gone Wrong?..','Movie Marathon ?..','Game Night ?..','Subzi m mirchi jyada ho gyi?..'];

    useEffect(() => {
        setInterval(() =>  {
            setToggle((toggles) => (toggles+1)%7)
        }, 3000);
    
        // return () => clearInterval(intervalID);
    }, []);
    
        // return () => clearInterval(intervalID);

    // console.log("toggle is"+toggles);

    return (
        <div className="left-part left-part-dynamic">

            <h1>{animate[toggles]}</h1>
            <p className="order-para">Order food from favourite restaurants near you.</p>
        </div>
    );
}

export default Dynamictext;