import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Specials from './Specials';
import Testimonials from './Testimonials';

export default function Homepage() {
    return (
        <>
          <Nav />
          <Header />
          <Specials />
          <Testimonials />
          <Footer />
        </>
)}