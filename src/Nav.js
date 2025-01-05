import Logo from './images/Logo.jpg';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Reservation from './Reservation';
import Login from './Login';
import Order from './Order';


export default function Nav() {
  return (
    <>
      <nav className="main-nav">
        <img className='Logo' src={Logo} alt="Little Lemon Logo" />
        <Link to='/home' className='nav-item'>HOME</Link>
        <Link to='/about' className='nav-item'>ABOUT</Link>
        <Link to='/reservation' className='nav-item'>RESERVATION</Link>
        <Link to='/order' className='nav-item'>ORDER ONLINE</Link>
        <Link to='/login' className='nav-item'>LOGIN</Link>
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