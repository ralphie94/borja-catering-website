import React from 'react';
import videoBg from '../assets/banner-video.mp4';

const Main = () => {
  return (
    <div className='main'>
        <video src={videoBg} autoPlay loop muted />
        <div className='overlay'></div>
        <div className='content'>
            <h1>Chef Borja International <br /> Banquets</h1>
            <p>Schedule Us Today</p>
            <div className="buttons">
                <a href="">Request a Quote</a>
            </div>
        </div>
    </div>
  )
}

export default Main;