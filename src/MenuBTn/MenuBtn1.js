import React from 'react';
import "./MenuBtn1.css";

const MenuBtn1 = () => {
    return (
        <div>

        
             <div className='container'>
            <h1 className='our-menu'> Our Menu</h1>
            <div>
                <nav className='Our-menu-btn'>
                    <a className='our-Menu-Btn-btn' href=""> <span className='Menu-all-btn'>All  </span> </a>
                    <a className='our-Menu-Btn-btn' href="">Burger</a>
                    <a className='our-Menu-Btn-btn' href="">pizza</a>
                    <a className='our-Menu-Btn-btn' href="">Pasta</a>
                    <a className='our-Menu-Btn-btn' href="">Fries</a>
                </nav>

                <button className='View-more-menu-btn'> View more details </button>
            </div>
        </div>
        </div>
    );
};

export default MenuBtn1;