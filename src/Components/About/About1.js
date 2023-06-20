import React from 'react';
import "./About1.css";

const About1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className='About-fast-pera'>
            <h3>Tasty Thursdays</h3>
            <h1>20% <span className='discount-off'>off</span></h1>
            <button className='order-now-btn'>Order Now <span style={{ color: "white" }}>🛒</span></button>
          </div>
          <p><img className='about-pic' src="img/order-now-01.jpg" alt="" /></p>
        </div>
        <div className="col-md-6">
          <div className='About-fast-pera'>
            <h3>Pizza Days</h3>
            <h1>15% <span className='discount-off'>off</span></h1>
            <button className='order-now-btn'>Order Now <span style={{ color: "white" }}>🛒</span></button>
          </div>
          <p><img className='about-pic' src="img/order-now-01.jpg" alt="" /></p>
        </div>
      </div>
    </div>
  );
};

export default About1;
