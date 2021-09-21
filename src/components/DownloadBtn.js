import React from 'react';

function DownloadBtn(props) {
    // return(
    //     <h1 style={{color:'white'}}>JAI MATA DI</h1>
    // );
    if(props.iosFirst)
    {
    return (
        <nav>
            <ul>
                <li>
                <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"  alt="swiggy" className="download-btn"/></a>
                </li>
                <li>
                <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"  alt="swiggy" className="download-btn"/></a>
                </li>
            </ul>
        </nav>
    );
    }
    else{
        return(

            <div className="btns">
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" style={{marginRight:'10%'}} className="down-btn" alt="swiggy"/>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"  className="down-btn" alt="swiggy"/>
            </div>
        );
    }
    
}

export default DownloadBtn;