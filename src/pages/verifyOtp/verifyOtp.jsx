import React, { useRef, useState } from "react";
import styles from "./css/style.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { apiPost } from "../../utils/ApiFetch"; // Adjust the import path
import ApiPath from "../../utils/ApiPath";

const OtpVerificationForm = () => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [otp, setOtp] = useState(["", "", "", ""]);

  const location = useLocation();
  const navigate = useNavigate();
  console.log("location state", location.state);

  const handleInputChange = (index, value) => {
    if (value.match(/^\d+$/) && index < 3) {
      inputRefs[index + 1].current.focus();
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: location.state?.email,
      token: location.state?.token,
      otp: otp.join(""), // Join the OTP array to form a string
    };
    console.log("payload", data);

    try {
      const result = await apiPost(ApiPath.verifyOtp, data);
      console.log("result", result);
      if (result.success) {
        localStorage.setItem("userToken", result.data?.user?.jwt);
        navigate("/");
      }
    } catch (error) {
      console.error("Error while verifying OTP:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Adjust this to your preference
        backgroundColor: "#e8e8e8",
      }}
      className="d-flex justify-content-center align-items-center top-50"
    >
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.title}>OTP</div>
        <div className={styles.title}>Verification Code</div>
        <p className={styles.message}>
          We have sent a verification code to your mobile number
        </p>
        <div className={styles.inputs}>
          {otp.map((value, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <button type="submit" className={styles.action}>
          verify me
        </button>
      </form>
    </div>
  );
};

export default OtpVerificationForm;
