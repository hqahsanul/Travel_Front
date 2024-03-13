import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import Navbar from "../components/navbar/NavBar";
import FlightList from "../components/list/flightList";
import BookingForm from "../components/bookingForms/bookingFrom";
import OtpVerificationForm from "../components/verifyOtp/verifyOtp";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/flight-list" element={<FlightList />} />
        <Route exact path="/flight-booking" element={<BookingForm />} />
        <Route exact path="/verify-otp" element={<OtpVerificationForm />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
