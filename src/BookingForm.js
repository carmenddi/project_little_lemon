import React, { useState } from 'react';
import Restaurant from './images/restaurant.jpg';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion, name, email, phone };
    submitForm(formData);
  };

  return (
    <>
      <section className="bookingWrapper">
        <div className='bookingPage'>

          <form onSubmit={handleSubmit}>
            <h2>Reserve a Table</h2>

            <div className='field'>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                required
              />
            </div>

            <div className='field'>
              <label htmlFor="time">Time:</label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select a time</option>
                {availableTimes.map((availableTime, index) => (
                  <option key={index} value={availableTime}>
                    {availableTime}
                  </option>
                ))}
              </select>
            </div>

            <div className='field'>
              <label htmlFor="guests">Number of Guests:</label>
              <input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="10"
                required
              />
            </div>

            <div className='field'>
              <label htmlFor="occasion">Occasion:</label>
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business</option>
                <option value="casual">Casual</option>
              </select>
            </div>

            <div className='field'>
              <label htmlFor="name">Name:*</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className='field'>
              <label htmlFor="email">Email:*</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='field'>
              <label htmlFor="phone">Phone:*</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <button disabled={!date} type="submit">Make your reservation</button>
          </form>

          <div className='reservation'>
            <img src={Restaurant} alt='External part of the restaurant' />
          </div>

        </div>
      </section>
    </>
  );
}
