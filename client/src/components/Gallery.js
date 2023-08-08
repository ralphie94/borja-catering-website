import React from 'react';
import galleryOne from '../assets/gallery-one.jpg';
import galleryTwo from '../assets/gallery-two.jpg';
import galleryThree from '../assets/gallery-three.jpg';
import galleryFour from '../assets/gallery-four.jpg';
import galleryFive from '../assets/gallery-five.jpg';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='gallery-container'>
        <h1>Gallery</h1>
        <div className='photo-container'>
            <img src={galleryOne} alt='' />
            <img src={galleryTwo} alt='' />
            <img src={galleryThree} alt='' />
            <img className='image-four' src={galleryFour} alt='' />
            <img src={galleryFive} alt='' />
        </div>
    </div>
  )
}

export default Gallery;