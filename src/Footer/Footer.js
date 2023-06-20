import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <div className="total-div">
                <div className="footer-text">
                    <div className="row">
                        <div className="col-md-4">
                          <h4 className='contact-us'>Contact Us</h4>
                          <p className='location'>location</p>
                          <p className='call'>Call +01 12345677890</p>
                          <p className='demogmail'>demo@gmail.com</p>
                        </div>

                        <div className="col-md-4">
                            <h3 className='fearse'>Fearse</h3>
                            <p className='neccesary'>Necessary, making this first true genatore</p>
                            <p className='onthis'>on the internet.it uses a dictionary of over 200</p>
                            <p className='latin'>latin words, combined with</p>
                            <p className='icon'>Icon</p>
                            <p className='copyrigt'>© 2023 All Rights Reserved By Free Html Templates</p>
                            <p className='by'>© Distributed By ThemeWagon</p>
                        </div>

                        <div className="col-md-4">
                            <h4 className='opening'>Opening Hours</h4>
                            <p className='everyday'>Everyday</p>
                            <p className='time'>10.00 Am -10.00 Pm</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;