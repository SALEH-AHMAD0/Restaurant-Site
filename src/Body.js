import React from 'react';
import About1 from './Components/About/About1';
import MenuBtn1 from './MenuBTn/MenuBtn1';
import MenuCard1 from './MenuCard/MenuCard1';
import Service1 from './Components/OurServiceDetails/Service1';
import Bookatable1 from './BookaTable/Bookatable1';
import CustomerReview1 from './CustomerReview/CustomerReview1';
import Footer from "./Footer/Footer";
const Body = () => {
    return (
        <>
           <About1></About1>
       <MenuBtn1></MenuBtn1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <MenuCard1 menuimg="img/menu 1.png" menuname="Delicious Pizza " menutext="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque Lorem ipsum dolor sit" menuprice="$20" shopingcardimg="img/shopping-cart.png" ></MenuCard1>
          </div>
          <div className="col-md-4">
          <MenuCard1  menuimg="img/menu 6.png" menuname="Delicious Pizza " menutext="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque Lorem ipsum dolor sit" menuprice="$20" shopingcardimg="img/shopping-cart.png" ></MenuCard1>
          </div>

          <div className="col-md-4">
          <MenuCard1  menuimg="img/menu 3.png" menuname="Delicious Pizza " menutext="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque Lorem ipsum dolor sit" menuprice="$20" shopingcardimg="img/shopping-cart.png" ></MenuCard1>
          </div>
        </div>
      </div>

      
   <div className="second-card">
   <div className="container">
        <div className="row">
          <div className="col-md-4">
          <MenuCard1 menuimg="img/menu 1.png" menuname="Delicious Pizza " menutext="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque Lorem ipsum dolor sit" menuprice="$20" shopingcardimg="img/shopping-cart.png" ></MenuCard1>
          </div>
          <div className="col-md-4">
          <MenuCard1  menuimg="img/menu 6.png" menuname="Delicious Pizza " menutext="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque Lorem ipsum dolor sit" menuprice="$20" shopingcardimg="img/shopping-cart.png" ></MenuCard1>
          </div>

          <div className="col-md-4">
          <MenuCard1  menuimg="img/menu 3.png" menuname="Delicious Pizza " menutext="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque Lorem ipsum dolor sit" menuprice="$20" shopingcardimg="img/shopping-cart.png" ></MenuCard1>
          </div>
        </div>
      </div>
   </div>


   <div className="second-card">
   <div className="container">
        <div className="row">
          <div className="col-md-4">
          <MenuCard1 menuimg="img/menu 1.png" menuname="Delicious Pizza " menutext="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque Lorem ipsum dolor sit" menuprice="$20" shopingcardimg="img/shopping-cart.png" ></MenuCard1>
          </div>
          <div className="col-md-4">
          <MenuCard1  menuimg="img/menu 6.png" menuname="Delicious Pizza " menutext="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque Lorem ipsum dolor sit" menuprice="$20" shopingcardimg="img/shopping-cart.png" ></MenuCard1>
          </div>

          <div className="col-md-4">
          <MenuCard1  menuimg="img/menu 3.png" menuname="Delicious Pizza " menutext="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque Lorem ipsum dolor sit" menuprice="$20" shopingcardimg="img/shopping-cart.png" ></MenuCard1>
          </div>
        </div>
      </div>
   </div>
      
   <Service1></Service1>
   <Bookatable1></Bookatable1>
   <CustomerReview1></CustomerReview1> 
   <Footer></Footer>
        </>
    );
};

export default Body;