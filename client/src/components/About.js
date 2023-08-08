import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-container' id='about'>
        <h1 className='title'>Meet The Chef</h1>
        <div className='content-container'>
            <div className='img-container'>

            </div>
            <div className='mid-container'>
                <h1>Ethan Borja</h1>
                <div className='line-break'></div>
                <p className='first-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br/>
                <p>Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Risus quis varius quam quisque id diam. Enim lobortis scelerisque fermentum dui faucibus. Amet aliquam id diam maecenas ultricies. Consectetur adipiscing elit pellentesque habitant morbi.</p>
            </div>
        </div>
    </div>
  )
}

export default About;