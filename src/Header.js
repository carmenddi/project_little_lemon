import React from 'react';
import RestaurantFood from './images/restauranfood.jpeg';

export default function Header() {
    return (
    <>
    <div className='banner'>
      <div className='hero'>
        <section className='description'>
          <h1 className='title'>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
          <button><a href='./Reservation'>Reserve a table</a></button>
        </section>
        <img className='b-img' src={RestaurantFood} alt='starter' />
      </div>
    </div>
    </>
    )
}