import React from 'react';
import "./MenuCard1.css";
const MenuCard1 = (props) => {
    return (
       <div className="container">
       <div className="card">
       <div className="img-style">
            <img className='menu-pic' src={props.menuimg} alt="" />
        </div>
        <div className="card-text">
          <h3 className='Menu-Name'>{props.menuname}</h3>
          <p className='Menu-TExt'>{props.menutext}</p>
          <p className='price'> {props.menuprice} </p>
          <img className='shoping-card' src={props.shopingcardimg} alt="" />
        </div>
       </div>
       </div>
    );
};

export default MenuCard1;