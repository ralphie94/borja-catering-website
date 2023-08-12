import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
    <div className='footer-container'>
        <p>© Chef Borja International Banquets</p>
        <div className="social-icons">
            <a href="https://www.instagram.com/chefborjabanquets/?igshid=ZDdkNTZiNTM%3D" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/people/Chef-Borja-Int-Banquets/100089451627084/?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FChefBorjaBanq" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
        </div>
        <a href='tel:4242505193' className="contact-info">Tel: (424)250-5193</a> 
        <a className='contact-info' href='mailto:EthanBorja@ChefBorjaBanquets.com'>Email: EthanBorja@ChefBorjaBanquets.com</a>
    </div>
    </footer>
  )
}

export default Footer;