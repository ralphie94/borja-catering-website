import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import firstImg from '../assets/int-menu.jpg';
import secondImg from '../assets/french-menu.jpg';
import thirdImg from '../assets/italian-menu.jpg';
import fourthImg from '../assets/mexican-menu.jpg';
import fifthImg from '../assets/south-of-the-west.jpg';
import sixthImg from '../assets/roast-beef-menu.jpg';
import Main from './Main';

const Home = () => {
  return (
    <Container> 
        <Main />
        <div id='section-one'></div>
        <Section
            title='The International Menu'
            description='International cuisine that features exquisite authentic dishes from various regions around the world.' 
            backgroundImg={firstImg}
            leftBtnText='Request a Quote'
            rightBtnText= 'Explore Menu'
        />
        <Section
            title='The French Buffet'
            description='A delightful array of the French styled cuisine.' 
            backgroundImg={secondImg}
            leftBtnText='Request a Quote'
            rightBtnText= 'Explore Menu'
        />
        <Section
            title='El Italian Buffet'
            description='A wonderful combination of Italian Styled Cuisine, from the infamous Alfredo sauce to a creamy champagne sauce.' 
            backgroundImg={thirdImg}
            leftBtnText='Request a Quote'
            rightBtnText= 'Explore Menu'
        />
        <Section
            title='The Mexican'
            description='Bold in taste yet easily enjoyable to the palate.' 
            backgroundImg={fourthImg}
            leftBtnText='Request a Quote'
            rightBtnText= 'Explore Menu'
        />
        <Section
            title='South Of The West Buffet'
            description='Pleasant American styled food from the Southwest, like a cowboy!' 
            backgroundImg={fifthImg}
            leftBtnText='Request a Quote'
            rightBtnText= 'Explore Menu'
        />
        <Section
            title='Roast Beef Buffet'
            description='Savory twist to the International Menu, being the Roasted Top Sir Loin, the star of this menu.' 
            backgroundImg={sixthImg}
            leftBtnText='Request a Quote'
            rightBtnText= 'Explore Menu'
        />
    </Container>
  )
};

export default Home;

const Container = styled.div`
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
`