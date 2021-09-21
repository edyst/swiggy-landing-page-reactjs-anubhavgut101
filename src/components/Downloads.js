import React from 'react';
import DownloadBtn from './DownloadBtn';

function Downloads(props) {
    return (
        <div className="container flex-download " style={{paddingBottom:'30px'}}>

            <div className="flex-item-download1">
                <h1>Restaurants in your Pocket</h1>
                <p>Order From favourite restaurants and track on the go,with all new Swiggy app.</p>
                <DownloadBtn iosFirst={false}></DownloadBtn>
            </div>
            <div className="flex-item-download2" >
               <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" className="mobile " alt="swiggy" style={{paddingBottom:'30px'}} />
                <img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" className="mobile " alt="swiggy"   style={{paddingTop:'30px'}} />
            </div>
            
        </div>
    );
}

export default Downloads;