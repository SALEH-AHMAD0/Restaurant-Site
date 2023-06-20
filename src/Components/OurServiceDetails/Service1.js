import React from 'react';
import "./Service1.css";
const Service1 = () => {
    return (
        <div>
             <div>
            <div className="container">
               <div className="details-test-pera">
                 <img className='about-img' src="img/about-img.png" alt="" />
               </div>
               <div className="test-about-intro">
                   <h1 className='fast-intro-about'>We Are Feane</h1>
                   <p style={{width:"90%"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                   <button className='About-red-More-Btn'>Read More</button>
               </div>
               <button className='View-more-menu'> <span className='btn-more'>View More</span> </button>  
            </div>
        </div>
        </div>
    );
};

export default Service1;