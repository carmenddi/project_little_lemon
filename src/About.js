import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Chefs from './images/MarioAdrian.jpg'

export default function About() {
return (
    <>
      <Nav />
      <div className='about'>
        <div className='aboutUs'>
          <h2 className='title'>Mario & Adrian</h2>
          <p className='description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <img src={Chefs} alt='The Chefs and owners Mario and Adrian'/>
      </div>
      <Footer />
    </>
)
}