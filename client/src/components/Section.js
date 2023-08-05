import React from 'react';
import styled from 'styled-components';
import firstImg from '../assets/int-menu.jpg';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={ backgroundImg }>
        <ItemText>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </ItemText>
        <ButtonGroup>
            <LeftButton>
                { leftBtnText }
            </LeftButton>
            <RightButton>
                { rightBtnText }
            </RightButton>
        </ButtonGroup>
    </Wrap>
  )
};

export default Section;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    object-fit: cover;
    object-position: center;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(25.10% 25.10% at 50.76% 22.75%, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.00) 100%), url(${props => props.bgImage});
    scroll-snap-align: start;
    scroll-snap-stop: always;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1 {
        color: #fff;
    }

    p {
        color: #fff;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 100px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    opacity: 0.85;
    font-size: 14px;
    cursor: pointer;
    margin: 15px;
`

const RightButton = styled(LeftButton)`
    background: #fff;
    opacity: 0.65;
    color: #000;
`