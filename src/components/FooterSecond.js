import React,{useState} from 'react';
import NavLinks from './NavLinks';

function FooterSecond() {

    
    


    const column1City=[
        {text:'Abohar' , url:'https://www.swiggy.com/abohar'},
        {text:'Adilabad' , url:'https://www.swiggy.com/adilabad'},
        {text:'Adityapur' , url:'https://www.swiggy.com/Adityapurr'},
        {text:'Adoni' , url:'https://www.swiggy.com/adoni'},
        {text:'Agartala' , url:'https://www.swiggy.com/agartala'},
        {text:'Agra' , url:'https://www.swiggy.com/agra'},
        {text:'Ahmedabad' , url:'https://www.swiggy.com/ahmedabad'},
        {text:'Ahmednagar' , url:'https://www.swiggy.com/ahmednagar'},
        {text:'Aizawl-2' , url:'https://www.swiggy.com/aizawl-2'},
        {text:'Ajmer' , url:'https://www.swiggy.com/ajmer'}      
    ]

    const column2City=[
        {text:'Datia' , url:'https://www.swiggy.com/datia'},
        {text:'Dausa' , url:'https://www.swiggy.com/dausa'},
        {text:'Davanagere' , url:'https://www.swiggy.com/Davanagere'},
        {text:'Dehradun' , url:'https://www.swiggy.com/dehradun'},
        {text:'Dehri' , url:'https://www.swiggy.com/Dehri'},
        {text:'Delhi' , url:'https://www.swiggy.com/Delhi'},
        {text:'Deoghar' , url:'https://www.swiggy.com/deoghar'},
        {text:'Dewas' , url:'https://www.swiggy.com/dewas'},
        {text:'Dhamtari' , url:'https://www.swiggy.com/dhamtari'},
        {text:'Dhanbad' , url:'https://www.swiggy.com/dhanbad'}      
    ]

    const column3City=[
        {text:'Khargone' , url:'https://www.swiggy.com/khargone'},
        {text:'Kishanganj' , url:'https://www.swiggy.com/kishanganj'},
        {text:'Kishangarh' , url:'https://www.swiggy.com/Kishangarh'},
        {text:'Kochi' , url:'https://www.swiggy.com/kochi'},
        {text:'Kolhapur' , url:'https://www.swiggy.com/Kolhapur'},
        {text:'Kolkata' , url:'https://www.swiggy.com/Kolkata'},
        {text:'Kota' , url:'https://www.swiggy.com/Kota'},
        {text:'Ludhiana' , url:'https://www.swiggy.com/Ludhiana'},
        {text:'Lucknow' , url:'https://www.swiggy.com/Lucknow'},
        {text:'Mathura' , url:'https://www.swiggy.com/Mathura'}      
    ]

    const column4City=[
        {text:'Rohtak' , url:'https://www.swiggy.com/rohtak'},
        {text:'Roorkee' , url:'https://www.swiggy.com/Roorkee'},
        {text:'Saharanpur' , url:'https://www.swiggy.com/Saharanpur'},
        {text:'Shimla' , url:'https://www.swiggy.com/Shimla'},
        {text:'Solan' , url:'https://www.swiggy.com/Solan'},
        {text:'Sonipat' , url:'https://www.swiggy.com/Sonipat'},
        {text:'Surat' , url:'https://www.swiggy.com/Surat'},
        {text:'Patiala' , url:'https://www.swiggy.com/Patiala'},
        {text:'Darjeeling' , url:'https://www.swiggy.com/Darjeeling'},
        {text:'Chandigarh' , url:'https://www.swiggy.com/Chandigarh'}      
    ]

    // console.log(column1City.slice(-1,5));
    // let col11=column1City.slice(-1,5);


    const [More, setMore]=useState(false);

        function changeStateFalse()
        {
            setMore(false);
        }

        function changeStateTrue()
        {
            setMore(true);
        }

        // console.log(col11);
    return (
        <div className="bg">
            <div className="wrapper container second-ft">

            
            {More?(<NavLinks heading="WE DELIVER TO" showHeading={true}  links={column1City.concat(column1City)} ></NavLinks>):(<NavLinks heading="WE DELIVER TO" showHeading={true}  links={column1City} ></NavLinks>)}

            {More?<NavLinks showHeading={false} links={column2City.concat(column2City)} ></NavLinks>:<NavLinks showHeading={false} links={column2City} ></NavLinks>}
            {More?<NavLinks showHeading={false} links={column3City.concat(column3City)} ></NavLinks>:<NavLinks showHeading={false} links={column3City} ></NavLinks>}
            {More?<NavLinks showHeading={false} links={column4City.concat(column4City)} ></NavLinks>:<NavLinks showHeading={false} links={column4City} ></NavLinks>}
            
            </div>
            <div className="see" style={{textAlign:'center',color:'gray',marginTop:'15px',cursor:'grab'}}>

        {More?(<p style={{fontWeight:'bold'}}  onClick={changeStateFalse} className="see" >See Less....  <i className="fa fa-minus-circle" aria-hidden="true"  ></i></p>):(<p  style={{fontWeight:'bold'}}  onClick={changeStateTrue} className="see">See More....  <i className="fa fa-plus-circle" aria-hidden="true"  ></i></p>)}
        
            </div>
            <hr className="container"></hr>
        </div>
    );
}

export default FooterSecond;