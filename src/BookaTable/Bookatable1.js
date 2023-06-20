import React from 'react';
import "./BookaTable1.css";
const Bookatable1 = () => {
    return (
        <div>
             <div>
            <div className="container">
                <div>
                    <h1 className='book-a-table'>Book A Table</h1>
                </div>
                 <div>
                    <p> <input className='fast-input' placeholder='  Your Name' type="text" /> </p>
                    <p><input className='second-input' placeholder='  Phone Number'  type="text" /></p>
                    <p><input className='third-input' placeholder='  Your Email' type="text" /></p>
                    <p><input className='fourth-input' placeholder='  How many persons?' type="text" /></p>
                    <p><input className='five-input' placeholder=' mm/dd/yyyy' type="date" /></p>
                    <button className='book-Now'>Book Now</button>

                
                 </div>
                 <div>
                 <p className='map'>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.929068564572!2d90.35764550133734!3d23.876632223665133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1686480559903!5m2!1sen!2sbd"
                  width="600" 
                  height="220"
                   style={{border:"0px"}} 
                   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </p>
                 </div>
            </div>
        </div>
        </div>
    );
};

export default Bookatable1;