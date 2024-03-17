import React, { useState, useEffect } from "react";
import FlightBookingFromWithLogin from "./flightBookingFromWithLogin";
import FlightBookingFromWithoutLogin from "./flightBookingFromWithoutLogin";
import { isUserLoggedIn } from "../../helper/apiConfig";

const BookingForm = () => {
  const [userDetails, setUserDetails] = useState({
    // Initialize user details state
    name: "",
    email: "",
    // Add other user details fields
  });

  const [showBasicDetailsForm, setShowBasicDetailsForm] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(isUserLoggedIn());

  const handleUserDetailsSubmit = (userData) => {
    // Save user details (you can send it to the server or perform any other action)
    console.log("User Details:", userData);

    // After saving user details, show the basic details form
    setShowBasicDetailsForm(true);
  };

  useEffect(() => {
    // Update userLoggedIn state when the login status changes
    setUserLoggedIn(isUserLoggedIn());
  }, []);

  return (
    <div>
      {userLoggedIn ? (
        // User is logged in, render with login form
        <FlightBookingFromWithLogin onSubmit={handleUserDetailsSubmit} />
      ) : (
        // User is not logged in, render without login form
        <FlightBookingFromWithoutLogin onSubmit={handleUserDetailsSubmit} />
      )}
    </div>
  );
};

export default BookingForm;
