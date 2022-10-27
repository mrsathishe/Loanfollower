import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
    return (
        <div  className='container-fluid header-container'>
            <div className='header'>
                <div className='row'>
                    <div className='col-9'>
                        <span className='logo-span'>
                            <img src="https://image.shutterstock.com/image-photo/coins-money-saving-setting-growth-260nw-748771915.jpg" alt="Loan follower" className='logo-img' />
                        </span>
                    </div>
                    <div className='col-3'>
                        <div className='row'>
                            <div className='col-12 contact-phone'>
                                <span className='phone-icon'> <FaPhoneAlt /> : </span>
                                <span className='phone-number'> +91 97900 60943 </span>
                            </div>
                            <div className='col-12 contact-email'>
                                <span className='email-icon'> <FaEnvelope /> : </span>
                                <span className='email'> mrsathishe@gmail.com  </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;