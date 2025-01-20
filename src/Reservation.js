import React, { useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';



// Initialize available times as an array, we'll fetch today's available times in useEffect
const initializeTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.date); // Fetch available times for the selected date from the API
    default:
      return state;
  }
};

export default function Reservation() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const timesForToday = fetchAPI(today); // Fetch times for today's date
    dispatch({ type: 'UPDATE_TIMES', date: today }); // Dispatch action with today's date
  }, []);

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData); // Call submitAPI function
    if (isSubmitted) {
      navigate('/confirmed'); // Navigate to confirmation page on success
    } else {
      console.error('Failed to submit booking.');
    }
  };

  return (
    <>
      <Nav/>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      <Footer />
    </>
);
}
