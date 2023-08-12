import React from 'react';
import galleryOne from '../assets/gallery-one.jpg';
import galleryTwo from '../assets/gallery-two.jpg';
import galleryThree from '../assets/gallery-three.jpg';
import galleryFour from '../assets/gallery-four.jpg';
import galleryFive from '../assets/gallery-five.jpg';
import './Gallery.css';
import Footer from './Footer';

const Gallery = () => {
  const images = [
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive
  ]

  return (
    <>
    <div className='gallery-container'>
        <h1>Gallery</h1>
            {images.map((image, i) => (
              <img className='grid-image' key={i} src={image} alt='' />
            ))}
    </div>
    <Footer />
    </>
  )
}

export default Gallery;