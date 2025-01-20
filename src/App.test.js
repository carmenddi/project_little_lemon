import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import Header from "./Header";
import '@testing-library/jest-dom'
import Reservation from "./Reservation";

const bookingData = {
  date: '',
  time: '',
  guests: '',
  occasion: '',
  name:'',
  email:'',
  phone:''
};

const availableTimes = {
  times: ["18:00", "19:00", "20:00", "21:00", "22:00"],
};

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <Reservation availableTimes={availableTimes} bookingData={bookingData} />
    </Router>
  );
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test("Check homepage for Render", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

test("check  Available Times", () => {
  expect(availableTimes.times[0]).toBe("18:00");
});

