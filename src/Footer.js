import Logo from './images/Logo.jpg';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage.js';
import About from './About.js';
import Reservation from './Reservation.js';
import Login from './Login.js';
import Order from './Order.js';

export default function Footer() {
    return (
    <>
      <nav className="footer-nav">
        <img className='Logo' src={Logo} alt="Little Lemon Logo" />
        <div className='Doormat'>
          <b>Doormat Navigation</b>
          <Link to='/home' className='nav-item'>HOME</Link>
          <Link to='/about' className='nav-item'>ABOUT</Link>
          <Link to='/reservation' className='nav-item'>RESERVATION</Link>
          <Link to='/order' className='nav-item'>ORDER ONLINE</Link>
          <Link to='/login' className='nav-item'>LOGIN</Link>
        </div>
        <ul><b>Contacts</b>
          <li>Adress</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
        <ul><b>Social Media</b>
          <li><a href='#/instagram'>Instagram</a></li>
          <li><a href='#/facebook'>Facebook</a></li>
          <li><a href='#/TikTok'>Tik Tok</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/order' element={<Order />} />          <Route path='/login' element={<Login />} />
      </Routes>
    </>
    );
  }