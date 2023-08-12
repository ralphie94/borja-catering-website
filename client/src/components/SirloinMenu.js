import React from 'react';
import './SirloinMenu.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const SirloinMenu = () => {
  return (
    <>
    <div className='sirloin-menu-container'>
        <div className='sirloin-pic'>
            <h1>Top Sirloin Menu</h1>
            <div className='bottom-content'>
                <p>$17 Per Person</p>
                <p>Starting Price</p>
                <div className="sirloin-menu-btn">
                    <Link to="/contact"><p style={{color: '#000'}}>Request a Quote</p></Link>
                </div>
            </div>
        </div>
        <div className='sirloin-container'>
            <div className='left-content'>

            </div>
            <div className='right-content'>
                <h1>Top Sirloin</h1>
                <div className='line'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <div className='rice-container'>
            <div className='left-pic'>
                
            </div>
            <div className='right-content'>
            <h1>Peruvian Style Rice</h1>
                <div className='line'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default SirloinMenu;