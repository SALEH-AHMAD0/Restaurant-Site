// import React from 'react';
// import "./Nevbar.css";


// const Nevbar = () => {
//   return (
   
//           <div >
//          <div>
//              <img className='Background-img' src="img/cover.jpg" alt="" />
//            </div>
//                   {/* Background img End */}

//                   {/* Background Intro start */}
//                <div className="container">
//                    <div className='background-intro-total-div'>
//                       <h1 className='logo'>Feare</h1>
//                        <h1 className='background-intro-1'>Fast Food Rasturand</h1>
//                          <p className='background-intro-2'>Doloremque, itaque aperiam facilis rerum,    commodi, temporibus Lorem ipsum dolor. </p>
//                          <p className='background-intro-3'>laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt  </p>
                       
//                          </div>
//                           <div>
//                           <button className='Background-btn'>Order Now</button>
//                         </div>
//                        </div>
//                       {/* Background Intro End */}
  
//                     {/* Navbar button start */}
//                   <div>  
//                 <nav className='NAVBAR'>
//                    <a className='Nav-btn' href="/"> <span style={{color:"orange"}}>HOME</span> </a>
//                    <a className='Nav-btn' href="/menu"> <span style={{color:"white"}}> MENU</span> </a>
//                    <a className='Nav-btn' href="/about"> <span style={{color:"white"}}>about</span> </a>
//                    <a className='Nav-btn' href="/"> <span style={{color:"white"}}>BOOKTABLE</span> </a>
//              </nav>
//            </div>
//           {/* Navbar button End */}
//          <div>
//                  <button className='order-online'>Order Online</button>
//        </div>
//            {/* symbol style start */}
//       <div className="symnol">
//          <a className='symbol-emoji' href="/">☎</a>
//          <a className='symbol-emoji' href="/">🛒</a>
//          <a className='symbol-emoji' href="/">🔍</a>
//     </div>
//     {/* symbol style End */}



//     </div>
   
           
//   );
// };

// export default Nevbar;



import React from 'react';
import './Nevbar.css';

const Nevbar = () => {
  return (
    <div>

      <div  >
        <img className='Background-img' src="img/cover.jpg" alt="" />
      </div>
     
     

      {/* Background Intro start */}
       
        <div className="container">
        <div className='background-intro-total-div'>
          <h1 className='logo'>Feare</h1>
          <h1 className='background-intro-1'>Fast Food Restaurant</h1>
          <p className='background-intro-2'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus Lorem ipsum dolor.</p>
          <p className='background-intro-3'>laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt</p>
        </div>
        <div>
          <button className='Background-btn'>Order Now</button>
        </div>
      </div>
    
      {/* Background Intro End */}

      {/* Navbar button start */}
    
    <div>
        <nav className='NAVBAR'>
          <a className='Nav-btn' href="/"><span style={{ color: "orange" }}>HOME</span></a>
          <a className='Nav-btn' href="/menu"><span style={{ color: "white" }}>MENU</span></a>
          <a className='Nav-btn' href="/about"><span style={{ color: "white" }}>ABOUT</span></a>
          <a className='Nav-btn' href="/"><span style={{ color: "white" }}>BOOKTABLE</span></a>
        </nav>
      </div>
    
      {/* Navbar button End */}

     
       <div>
        <button className='order-online'>Order Online</button>
      </div>
 

      {/* symbol style start */}
     <div className="symbol">
        <a className='symbol-emoji' href="/">☎</a>
        <a className='symbol-emoji' href="/">🛒</a>
        <a className='symbol-emoji' href="/">🔍</a>
      </div>
     
      {/* symbol style End */}
    </div>
  );
};

export default Nevbar;


