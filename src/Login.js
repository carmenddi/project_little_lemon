import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import UnderM from './images/under_maintenance.png'


export default function Login() {
    return (
        <>
        <Nav />
        <div className='underMaintenance'>
          <img src={UnderM} alt='' />
          <p>Little Lemon is a project related to the 'Meta Front-End Developer Professional Certificate' course. The non-developed pages were not part of the course of study. </p>
        </div>
        <Footer />
        </>
    )
}