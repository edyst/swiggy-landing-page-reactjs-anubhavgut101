import React ,{useState} from 'react';
// import { useState } from 'react/cjs/react.development';

function CityInput(props) {

    

    const {City}=props;
    // console.log({City}); 

    const[state,setState]=useState({
        val:'',
        type:true
    });


    function reroute(){

        if(state.val!=='')
        {
        window.location.href='http://swiggy.com/'+ state.val;
        }
        else
        {
            setState({val:'',type:false})
        }
    }

    return (
        <div className="left-part left-part-input">
             
            {state.type===false && state.val===''? (<div style={{backgroundColor:'#e66060',color:'white',marginTop:'0',fontSize:'20px'}}>
            <p style={{marginBottom:'5px'}}>Enter Your City !!</p>
        </div>):(<div></div>)}

        <div className=" left-part-cityinput">
            <input type="text" placeholder="Enter Your Delivery Location"  onChange={(event)=>{setState({val:event.target.value})}}/>
        <button type="button" onClick={reroute}><p className="food">FIND FOOD</p></button>
        </div>
        
        <p className="heading-city">POPULAR CITIES IN INDIA</p>
        <div className="gridCity">
        {City.map((link,index) => 

            // {console.log({index})};
                        
                         (
                            <p key={index} className={{index}.index%2!==0?'light':'dark'}><a href={'https://www.swiggy.com/'+link.city}>{link.city}</a></p>
                        )
                    )}
        </div>
       
        </div>
        
    );
}

export default CityInput;