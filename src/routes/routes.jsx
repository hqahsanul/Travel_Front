import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import Navbar from "../components/navbar/NavBar";
import FlightList from "../pages/list/flightList";
import BookingForm from "../pages/bookingForms/bookingFrom";
import OtpVerificationForm from "../pages/verifyOtp/verifyOtp";
import HotelList from "../pages/list/hotelList";
import HotelDetailsPage from "../pages/hotelDetailsPage/hotelDetailsPage";
import TourList from "../pages/list/tourList";
import TourDetailsPage from "../pages/tourDetails/tourDetailsPage";
import BusList from "../pages/list/busList";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/flight-list" element={<FlightList />} />
        <Route exact path="/hotel-list" element={<HotelList />} />
        <Route exact path="/bus-list" element={<BusList />} />
        <Route exact path="/flight-booking" element={<BookingForm />} />
        <Route exact path="/verify-otp" element={<OtpVerificationForm />} />
        <Route exact path="/hotel-details" element={<HotelDetailsPage />} />
        <Route exact path="/tour-list" element={<TourList />} />
        <Route exact path="/tour-details" element={<TourDetailsPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
