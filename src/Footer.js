import React from 'react';
import Logo from './images/Logo.jpg';

export default function Footer() {
    return (
    <>
      <nav className="footer-nav">
        <img className='Logo' src={Logo} alt="Little Lemon Logo" />
        <div className='Doormat'>
          <ul><b>Doormat Navigation</b>
            <a href='./' className='nav-item'>HOME</a>
            <a href='./About' className='nav-item'>ABOUT</a>
            <a href='./Reservation' className='nav-item'>RESERVATION</a>
            <a href='./Order' className='nav-item'>ORDER ONLINE</a>
            <a href='./Login' className='nav-item'>LOGIN</a>
          </ul>
        </div>
        <ul className='contacts'><b>Contacts</b>
          <li>First Street, 2 <br></br>1234 Chicago</li>
          <li>+123456789</li>
          <li>ouremail@littlelemon.com</li>
        </ul>
        <ul><b>Social Media</b>
          <li><a href='#/instagram'>Instagram</a></li>
          <li><a href='#/facebook'>Facebook</a></li>
          <li><a href='#/TikTok'>Tik Tok</a></li>
        </ul>
      </nav>
    </>
    );
  }