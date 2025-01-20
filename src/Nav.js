import React, { useState, useEffect } from 'react';
import Logo from './images/Logo.jpg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); // State to track if the screen is mobile/tablet

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState); // Toggle the state
  };

  // Function to handle window resizing
  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setIsOpen(false); // Automatically close sidebar on desktop view
    }
    setIsMobile(window.innerWidth <= 1024); // Update mobile state
  };

  // Add event listener for screen resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <>
      <nav className="main-nav">
        <img className='Logo' src={Logo} alt="Little Lemon Logo" />

        {/* Hamburger icon only for mobile/tablet */}
        {isMobile && (
          <div className="hamburger-icon" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />} {/* FaTimes when open, FaBars when closed */}
          </div>
        )}

        {/* Links for larger screens */}
        <div className="nav-links">
          <Link to='/' className='nav-item'>HOME</Link>
          <Link to='/about' className='nav-item'>ABOUT</Link>
          <Link to='/reservation' className='nav-item'>RESERVATION</Link>
          <Link to='/order' className='nav-item'>ORDER ONLINE</Link>
          <Link to='/login' className='nav-item'>LOGIN</Link>
        </div>

        {/* Sidebar menu for mobile and tablet */}
        {isMobile && (
          <div className={`sidebar ${isOpen ? 'active' : ''}`}>
            {/* Close icon inside the sidebar but positioned absolutely */}
            <div className="close-icon" onClick={toggleSidebar}>
              <FaTimes />
            </div>
            <Link to='/' className='nav-item' onClick={toggleSidebar}>HOME</Link>
            <Link to='/about' className='nav-item' onClick={toggleSidebar}>ABOUT</Link>
            <Link to='/reservation' className='nav-item' onClick={toggleSidebar}>RESERVATION</Link>
            <Link to='/order' className='nav-item' onClick={toggleSidebar}>ORDER ONLINE</Link>
            <Link to='/login' className='nav-item' onClick={toggleSidebar}>LOGIN</Link>
          </div>
        )}
      </nav>
    </>
  );
}