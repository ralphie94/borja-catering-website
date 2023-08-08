import React, { useState } from 'react';
import styled from 'styled-components';
import BorjaLogo from '../assets/borja-logo.PNG';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
        <Link smooth to="#home"><img src={BorjaLogo} alt="Borja Logo" className='header_logo' /></Link>
        <Menu>
            <Link smooth to="/#home">Home</Link>
            <Link smooth to="/#section-one">Menus</Link>
            <a href="/#about">About</a>
            <a href="#">Testimonials</a>
            <a href="/gallery">Gallery</a>
        </Menu>
        <RightMenu>
            <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)} />
            </CloseWrapper>
            <li><Link to="/" onClick={() => setBurgerStatus(false)}>Home</Link></li>
            <li><Link smooth to="/#section-one" onClick={() => setBurgerStatus(false)}>Menus</Link></li>
            <li><a href="/#about">About</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Gallery</a></li>
            <li><Link to="/contact" onClick={() => setBurgerStatus(false)}>Request a Quote</Link></li>
        </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    img {
        width: 80px;
        height: 80px;
        margin-left: 4rem;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-right: 7rem;

    a {
        padding: 0 10px;
        flex-wrap: nowrap
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    visibility: hidden;
    color: #fff;
    margin-right: 1rem;

    @media screen and (max-width: 768px) {
        visibility: visible;
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 300px;
    z-index: 16px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    a {
        color: #000;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    color: #000;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`