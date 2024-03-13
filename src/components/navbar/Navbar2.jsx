import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/index";
import loginStyles from "./css/style.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loader from "../loader/loader";
import { apiPost, apiGet } from "../../utils/ApiFetch";
import ApiPath from "../../utils/ApiPath";

const Navbar = () => {
  const navigate = useNavigate();
  const [toogleForm, setToogleFrom] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    // Initialize modal when the component mounts
    modalRef.current = new bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  // Your component
  const handleSignUp = async (data) => {
    const result = await apiPost(ApiPath.registerUser, data);
    console.log("result", result.data);
  };

  const handleLogin = async (data) => {
    const result = await apiPost(ApiPath.loginUser, data);
    let userData = {
      email: result.data?.user?.email,
      token: result.data?.token,
    };
    if (result.success) {
      // Close the modal before navigating
      modalRef.current.hide();
      navigate("/verify-otp", {
        state: userData,
      });
    }
  };

  return (
    <>
      <header className="main_header_arae">
        <div className="topbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7">
                <ul className="topbar-list d-md-block d-none">
                  <li>
                    <a href="#!">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#!">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#!">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span>+011 234 567 89</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span>contact@domain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-5">
                <ul className="topbar-others-options">
                  <li>
                    <a
                      className="myaccount"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-regular fa-circle-user me-1"></i> My
                      Account
                    </a>
                  </li>
                  <li>
                    <div className="dropdown language-option">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="lang-name"></span>
                      </button>
                      <div className="dropdown-menu language-dropdown-menu">
                        <a className="dropdown-item" href="#">
                          USD
                        </a>
                        <a className="dropdown-item" href="#">
                          BD
                        </a>
                        <a className="dropdown-item" href="#">
                          URO
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <a href="/">
                    <img src={images.logo} alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="/">
                  <img src={images.logo} alt="logo" />
                </a>
                <div
                  className="collapse navbar-collapse mean-menu justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="#" className="nav-link active">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Flights
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Hotels
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Buses
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Transfers{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Car{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Activities{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Holidays{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ width: "350px" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-center align-items-center ">
                {toogleForm ? (
                  <div className={loginStyles.form_container}>
                    <p className={loginStyles.title}>Welcome back</p>

                    <form
                      className={loginStyles.form}
                      onSubmit={handleSubmitLogin(handleLogin)}
                    >
                      <input
                        type="email"
                        className={loginStyles.input}
                        placeholder="Email"
                        {...registerLogin("email", { required: true })}
                      />

                      <button className={loginStyles.form_btn}>Log in</button>
                    </form>
                    <p className={loginStyles.sign_up_label}>
                      Don't have an account?
                      <span
                        type="button"
                        className={loginStyles.sign_up_link}
                        onClick={() => setToogleFrom(!toogleForm)}
                      >
                        Sign up
                      </span>
                    </p>
                    <div className={loginStyles.buttons_container}>
                      <div className={loginStyles.google_login_button}>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          version="1.1"
                          x="0px"
                          y="0px"
                          className={loginStyles.google_icon}
                          viewBox="0 0 48 48"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                          <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          ></path>
                          <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          ></path>
                          <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                        </svg>
                        <span>Log in with Google</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={loginStyles.form_container}>
                    <p className={loginStyles.title}>Create account</p>

                    <form
                      className={loginStyles.form}
                      onSubmit={handleSubmit(handleSignUp)}
                    >
                      <input
                        type="text"
                        className={loginStyles.input}
                        placeholder={errors.name ? "Name is required" : "Name"}
                        {...register("name", { required: true })}
                        style={{ borderColor: errors.name ? "red" : "" }} // Dynamic border color
                      />

                      <input
                        type="email"
                        className={loginStyles.input}
                        placeholder={
                          errors.email ? "Invalid email format" : "Email"
                        }
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        style={{
                          borderColor: errors.email ? "red" : "",
                        }} // Dynamic border color
                      />

                      <input
                        type="text"
                        className={loginStyles.input}
                        placeholder="Mobile Number"
                        {...register("mobileNumber")}
                      />

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="userRadio"
                          value="user"
                          name="type"
                          {...register("type", { required: true })} // Add validation for required user type
                        />
                        <label className="form-check-label" for="userRadio">
                          User
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="agentRadio"
                          value="agent"
                          name="type"
                          {...register("type", { required: true })} // Add validation for required user type
                        />
                        <label className="form-check-label" for="agentRadio">
                          Agent
                        </label>
                      </div>

                      <button className={loginStyles.form_btn} type="submit">
                        Create Account
                      </button>
                    </form>
                    <p className={loginStyles.sign_up_label}>
                      Already have an account?
                      <span
                        type="button"
                        className={loginStyles.sign_up_link}
                        onClick={() => setToogleFrom(!toogleForm)}
                      >
                        Login
                      </span>
                    </p>
                    <div className={loginStyles.buttons_container}>
                      <div className={loginStyles.google_login_button}>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          version="1.1"
                          x="0px"
                          y="0px"
                          className={loginStyles.google_icon}
                          viewBox="0 0 48 48"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                          <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          ></path>
                          <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          ></path>
                          <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                        </svg>
                        <span>Log in with Google</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
