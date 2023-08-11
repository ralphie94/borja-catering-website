import React from 'react';
import videoBg from '../assets/banner-video.mp4';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Main = () => {
  return (
    <div className='main' id='home'>
        <video src={videoBg} autoPlay loop muted />
        <div className='overlay'></div>
        <Fade bottom>
        <div className='content'>
            <h1>Chef Borja International <br /> Banquets</h1>
            <p>Schedule Us Today</p>
            <div className="buttons">
                <Link to="/contact">Request a Quote</Link>
            </div>
        </div>
        </Fade>
    </div>
  )
}

export default Main;