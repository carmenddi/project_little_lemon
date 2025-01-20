import './App.css';
import React from 'react';
import Homepage from './Homepage';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Order from './Order';
import Login from './Login';
import Reservation from './Reservation';
import ConfirmedBooking from './ConfirmedBooking';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/order' element={<Order />} />
        <Route path='/reservation' element={<Reservation />}/>
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
