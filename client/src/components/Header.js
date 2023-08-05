import React from 'react';
import BorjaLogo from '../assets/borja-logo.PNG';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
  return (
    <div className='header'>
        <img src={BorjaLogo} alt="Borja Logo" className='header_logo' />
        <div className='header_center'>
            <p><a href="#">Home</a></p>
            <p><a href="#">Menus</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Testimonials</a></p>
            <p><a href="#">Gallery</a></p>
        </div>

        <div className='header_right'>
            <p><a href="#">Menu</a></p>
        </div>
        <div className="menu-nav">
            <CloseIcon />
            <li><a href="#">Home</a></li>
            <li><a href="#">Menus</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Request a Quote</a></li>
        </div>
    </div>
  )
}

export default Header;