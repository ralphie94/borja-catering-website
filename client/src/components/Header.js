import React from 'react';
import styled from 'styled-components';
import BorjaLogo from '../assets/borja-logo.PNG';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <Container>
        <a><img src={BorjaLogo} alt="Borja Logo" className='header_logo' /></a>
        <Menu>
            <p><a href="#">Home</a></p>
            <p><a href="#">Menus</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Testimonials</a></p>
            <p><a href="#">Gallery</a></p>
        </Menu>
        <RightMenu>
            <CustomMenu />
        </RightMenu>
        <BurgerNav>
            <CustomClose />
            <li><a href="#">Home</a></li>
            <li><a href="#">Menus</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Request a Quote</a></li>
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
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap
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

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    a {
        
    }
`

const CustomClose = styled(CloseIcon)`
    
`