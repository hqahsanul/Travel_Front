import React from "react";
import { useLocation } from "react-router-dom";
import images from "../../assets/images";

const FlightBookingFrom = () => {
  return (
    <>
      <header class="main_header_arae list_header">
        <div class="topbar-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-7">
                <ul class="topbar-list d-md-block d-none">
                  <li>
                    <a href="#!">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-linkedin"></i>
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
              <div class="col-lg-6 col-md-5">
                <ul class="topbar-others-options">
                  <li>
                    <a class="myaccount" href="#">
                      <i class="fa-regular fa-circle-user me-1"></i> My Account{" "}
                    </a>
                  </li>
                  <li>
                    <div class="dropdown language-option">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="lang-name"></span>
                      </button>
                      <div class="dropdown-menu language-dropdown-menu">
                        <a class="dropdown-item" href="#">
                          USD
                        </a>
                        <a class="dropdown-item" href="#">
                          BD
                        </a>
                        <a class="dropdown-item" href="#">
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
        <div class="navbar-area">
          <div class="main-responsive-nav">
            <div class="container">
              <div class="main-responsive-menu">
                <div class="logo">
                  <a href="index.html">
                    <img src={images.logo} alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="main-navbar">
            <div class="container">
              <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" href="index.html">
                  <img src={images.logo} alt="logo" />
                </a>
                <div
                  class="collapse navbar-collapse mean-menu justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a href="#" class="nav-link active">
                        {" "}
                        Home{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        {" "}
                        Flights{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Hotels
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Buses
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Transfers{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Car{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Activities{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Holidays
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section class="booking-p-checkout">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="book-det-top">
                <h3>Jaipur to Delhi</h3>
                <div class="card-bo-li">
                  <div class="row">
                    <div class="col-3 col-sm-3 nopadding">
                      <div class="d-flex">
                        <div class="fl-img">
                          <i
                            class="fas fa-plane-departure"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div class="fl-de">
                          <p>Indigo</p>
                          <span class="fl-smal">6E 2405</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-7 col-sm-7 nopadding">
                      <div class="d-flex">
                        <div class="fl-de-ml">
                          <span class="fl-time">17 Mar 2024, 22:30</span>
                          <span class="fl-name">Jaipur (JAI)</span>
                        </div>
                        <div class="fl-de-ml">
                          <span class="fl-time">17 Mar 2024, 23:30</span>
                          <span class="fl-name">Delhi (DEL)</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 col-sm-2 nopadding">
                      <div class="fl-stop">
                        <p>1h</p>
                        <span class="fl-st">Stop : 0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-card">
                <div class="form-hedd">Sign in now to Book Online</div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="for-bok">
                      <form>
                        <div class="mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" class="form-text">
                            Your booking details will be sent to this email
                            address.
                          </div>
                        </div>

                        <div class="check-card mb-3">
                          <div class="check-i">
                            <input
                              id="phone-check"
                              type="checkbox"
                              name="check"
                              placeholder="Your mail id"
                            />
                            <label for="phone-check"></label>
                          </div>
                          <label for="phone-check" class="haveacntd">
                            I have a Travelomatix password
                          </label>
                        </div>

                        <div class="togalshow">
                          <div class="phonelist">
                            <div class="row">
                              <div class="col-5 pe-0">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>
                                    Open this select menu
                                  </option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div class="col-1 text-center">-</div>
                              <div class="col-6 ps-0">
                                <div class="phone-number-in">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="phonen"
                                    placeholder="Mobile Number"
                                  />
                                </div>
                              </div>
                            </div>
                            <div id="phonen" class="form-text">
                              We'll use this number to send possible update
                              alerts.
                            </div>
                            <button type="submit" class="btn btn-sub">
                              Book as guest
                            </button>
                          </div>

                          <div class="passworshow">
                            <div class="pass-m">
                              <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                              />
                            </div>
                            <a href="" class="frgotpaswrd">
                              Forgot Password?
                            </a>
                            <button type="submit" class="btn btn-sub">
                              Proceed to Book
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div class="col-sm-2">
                    <div class="or-list">
                      <span>OR</span>{" "}
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="social-lo">
                      <div class="btn-so">
                        <a href="#" class="fac-btn">
                          <i class="fa fa-facebook" aria-hidden="true"></i>Login
                          with Facebook
                        </a>
                        <a href="#" class="goog-btn">
                          <i class="fa fa-google" aria-hidden="true"></i>Sign in
                          with Google
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="fare-sum">
                <div class="fare-hedding">Fare Summary</div>
                <div class="sum-card">
                  <div class="sun-text">Base Fare</div>
                  <div class="d-flex">
                    <div class="fareleft">1 ADT(s) (1 X 1502)</div>
                    <div class="fareto">Rs 1502 </div>
                  </div>
                </div>
                <div class="sum-card">
                  <div class="sun-text">Taxes</div>
                  <div class="d-flex">
                    <div class="fareleft">Taxes & Fees</div>
                    <div class="fareto">Rs 866.83 </div>
                  </div>
                  <div class="d-flex">
                    <div class="fareleft">Convenience Fees</div>
                    <div class="fareto">Rs 0 </div>
                  </div>
                </div>
                <div class="grandt d-flex">
                  <div class="grandttext">GRAND TOTAL</div>
                  <div class="grandam">Rs 2,368.83</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlightBookingFrom;
