import React from 'react';
import Feature from './Feature';

function Features(props) {
    return (
        <div id="feature">
        <div className="feature-flex container">
            <Feature link="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"  heading="No Minimum Order"  subheading="Order in for yourself or for the group, with no restrictions on order value" completed='false'></Feature>
            <Feature link="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" heading="Live Order Tracking" subheading="Know where your order is at all times, from the restaurant to your doorstep" completed='false'></Feature>
            <Feature link="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" heading="Lightning-Fast Delivery"  subheading="Experience Swiggy's superfast delivery for food delivered fresh & on time" completed='true'></Feature>
        </div>
        </div>
    );
}

export default Features;