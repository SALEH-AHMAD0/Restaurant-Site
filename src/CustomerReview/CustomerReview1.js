import React from 'react';
import "./CustomerReview1.css";
const CustomerReview1 = () => {
    return (
        <div>
             <div className='container'>
            <div>
                <h1 className='cu-review'>What Says Our Customers</h1>
            </div>
           <div className="review">
            <p className='text-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A veritatis animi dolore mollitia minus molestias laudantium incidunt, magni maxime. Iste Lorem ipsum </p>
            <h3 className='sale'>Afia Jahan</h3>
            <h5 className='afnan'>Afnan Mahmud</h5>
            <img className='cu-review-pic' src="img/cu 1.jpg" alt="" />
           </div>
        </div>


        <div className='second-review'>
            
           <div className="review">
            <p className='text-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A veritatis animi dolore mollitia minus molestias laudantium incidunt, magni maxime. Iste Lorem ipsum </p>
            <h3 className='sale'>Saleh Ahmad</h3>
            <h5 className='afnan'>mangana aliqua</h5>
            <img className='cu-review-pic' src="img/cu 2.jpg" alt="" />
           </div>
        </div>
        </div>
    );
};

export default CustomerReview1;



