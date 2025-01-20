import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
import Logo2 from './images/logo2.png'
export default function ConfirmedBooking () {
    return (
        <>
          <Nav />
          <div className='confirmed'>
            <h2>Your booking has been confirmed!</h2>
            <p className='description'>The Little Lemon team can't wait to see you, so you will have an evening you won't forget. <br></br> You will soon receive confirmation by email with the details of your reservation.</p>
            <img src={Logo2} alt='Logo'/>
          </div>
          <Footer />
        </>
    )
}