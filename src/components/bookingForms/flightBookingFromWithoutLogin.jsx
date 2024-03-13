import React from "react";
import { useLocation } from "react-router-dom";
import images from "../../assets/images";
import Footer from "../footer/footer";
import Navbar from "../navbar/NavBar";

const FlightBookingFromWithoutLogin = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default FlightBookingFromWithoutLogin;
