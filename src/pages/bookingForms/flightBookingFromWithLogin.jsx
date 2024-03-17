import React from "react";
import { useLocation } from "react-router-dom";
import images from "../../assets/images";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/NavBar";

const FlightBookingFromWithLogin = () => {
  return (
    <>
      <Navbar />
      <section class="booking-p-checkout">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="book-det-top">
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
                <div class="form-hedd">Please enter names as on passport.</div>

                <div class="inputbox">
                  <div class="row">
                    <div class="col-1 pe-0">
                      <div class="input-l">Adult1</div>
                    </div>
                    <div class="col-11 ps-0">
                      <div class="row">
                        <div class="col-3">
                          <div class="select-for mb-2">
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Mr</option>
                              <option value="1">Ms</option>
                              <option value="2">Miss</option>
                              <option value="3">Mrs</option>
                              <option value="3">Mstr</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-5 nopadding">
                          <div class="mb-2">
                            <input
                              type="text"
                              class="form-control"
                              id="ftext"
                              placeholder="Enter First Name"
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="mb-2">
                            <input
                              type="text"
                              class="form-control"
                              id="ftext"
                              aria-describedby="emailHelp"
                              placeholder="Enter Last Name"
                            />
                          </div>
                        </div>
                        <div class="col-8 pe-0">
                          <div class="mb-2">
                            <input
                              type="text"
                              class="form-control"
                              id="ftext"
                              placeholder="DOB"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ecoupen">
                  <div class="orm-text mb-1">
                    Have an e-coupon or a deal-code ? (Optional)
                  </div>
                  <div class="row">
                    <div class="col-8 col-sm-6 pe-0">
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="ecoupen"
                          placeholder="Enter Promo"
                        />
                      </div>
                    </div>
                    <div class="col-4 col-sm-2 ps-0">
                      <div class="mb-3">
                        <input
                          type="button"
                          class="promosubmit"
                          name="apply"
                          id="apply"
                          value="Apply"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="inputbox">
                  <div class="cont-hedding mb-2">CONTACT DETAILS</div>
                  <div class="row">
                    <div class="col-5">
                      <div class="select-for mb-2">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Canada +1</option>
                          <option value="1">Bahamas +1242</option>
                          <option value="2">Barbados +1246</option>
                          <option value="3">Anguilla +1264</option>
                          <option value="3">Bermuda +1441</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-1 nopadding">
                      <div class="space-line">-</div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control"
                          id="ftext"
                          aria-describedby="emailHelp"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control"
                          id="ftext"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-text mb-2">
                        Your mobile number will be used only for sending flight
                        related communication.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="gstinfo mb-4" id="gstinac">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        GST Information(Optional)
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#gstinac"
                    >
                      <div class="accordion-body">
                        <div class="gst-crd">
                          <div class="row">
                            <div class="col-4 col-sm-3">
                              <div class="gst-text"> GST Number </div>
                            </div>
                            <div class="col-8 col-sm-7 mb-2">
                              <input
                                type="text"
                                class="gstin form-control"
                                id="gst_number"
                                name="gst_number"
                                value=""
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4 col-sm-3">
                              <div class="gst-text"> GST company Name </div>
                            </div>
                            <div class="col-8 col-sm-7 mb-2">
                              <input
                                type="text"
                                class="gstin form-control"
                                id="gst_number"
                                name="gst_number"
                                value=""
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4 col-sm-3">
                              <div class="gst-text"> Email </div>
                            </div>
                            <div class="col-8 col-sm-7 mb-2">
                              <input
                                type="text"
                                class="gstin form-control"
                                id="gst_number"
                                name="gst_number"
                                value=""
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4 col-sm-3">
                              <div class="gst-text"> Phone Number </div>
                            </div>
                            <div class="col-8 col-sm-7 mb-2">
                              <input
                                type="number"
                                class="gstin form-control"
                                id="gst_number"
                                name="gst_number"
                                value=""
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4 col-sm-3">
                              <div class="gst-text"> Address </div>
                            </div>
                            <div class="col-8 col-sm-7 mb-2">
                              <input
                                type="text"
                                class="gstin form-control"
                                id="gst_number"
                                name="gst_number"
                                value=""
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4 col-sm-3">
                              <div class="gst-text"> State </div>
                            </div>
                            <div class="col-8 col-sm-7 mb-2">
                              <div class="select-for mb-2">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>Please Select</option>
                                  <option value="1">Andhra Pradesh</option>
                                  <option value="2">Assam</option>
                                  <option value="3">Bihar</option>
                                  <option value="3">Chhattisgarh</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="gstinfo ser-re mb-4" id="serrec">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="serhedding">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sercolls"
                        aria-expanded="false"
                        aria-controls="sercolls"
                      >
                        Service Requests(Optional)
                      </button>
                    </h2>
                    <div
                      id="sercolls"
                      class="accordion-collapse collapse"
                      aria-labelledby="serhedding"
                      data-bs-parent="#serrec"
                    >
                      <div class="accordion-body">
                        <div class="ser-card">
                          <ul
                            class="nav nav-pills mb-3"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link ms-0 active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                              >
                                <i class="fas fa-briefcase"></i> Add Baggage +
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                              >
                                <i class="fas fa-hamburger"></i> Add Meal +
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="pills-contact-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contact"
                                type="button"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                              >
                                <i
                                  class="fas fa-plane-departure"
                                  aria-hidden="true"
                                ></i>{" "}
                                Seat Selection
                              </button>
                            </li>
                          </ul>
                          <div class="tab-content" id="pills-tabContent">
                            <div
                              class="tab-pane fade show active"
                              id="pills-home"
                              role="tabpanel"
                              aria-labelledby="pills-home-tab"
                            >
                              <div class="tab-in">
                                <div class="ta-hedding">
                                  Choose Extra Baggage
                                </div>
                                <div class="row">
                                  <div class="col-3 col-sm-2 text-end just-f">
                                    <div class="input-l">Adult1</div>
                                  </div>
                                  <div class="col-6 col-sm-4">
                                    <div class="select-for mb-3">
                                      <span class="formlabel">
                                        {" "}
                                        JAI{" "}
                                        <i
                                          class="fa fa-long-arrow-right"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        DEL
                                      </span>
                                      <select
                                        class="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected="">Baggage</option>
                                        <option value="1">
                                          03 Kg - 1350 INR
                                        </option>
                                        <option value="1">
                                          03 Kg - 1350 INR
                                        </option>
                                        <option value="1">
                                          03 Kg - 1350 INR
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                            >
                              <div class="tab-in">
                                <div class="ta-hedding">Choose Your Meal</div>
                                <div class="row">
                                  <div class="col-3 col-sm-2 text-end just-f">
                                    <div class="input-l">Adult1</div>
                                  </div>
                                  <div class="col-6 col-sm-4">
                                    <div class="select-for mb-3">
                                      <span class="formlabel">
                                        {" "}
                                        JAI{" "}
                                        <i
                                          class="fa fa-long-arrow-right"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        DEL
                                      </span>
                                      <select
                                        class="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected="">Meal</option>
                                        <option value="1">
                                          Meal, Chicken Junglee Sandwich and
                                          Beverage - 500 INR
                                        </option>
                                        <option value="1">
                                          Meal, Jain meal and beverage - 400 INR
                                        </option>
                                        <option value="1">
                                          Meal, 6E Eats choice of the day (veg)
                                          and beverage - 400 INR
                                        </option>
                                        <option value="1"></option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-contact"
                              role="tabpanel"
                              aria-labelledby="pills-contact-tab"
                            >
                              <div class="set-book">
                                <ul class="set-b">
                                  <li>
                                    <img src={images.available} alt="" />
                                    <span>Available</span>{" "}
                                  </li>
                                  <li>
                                    <img src="./images/blocked.png" alt="" />
                                    <span>Selected</span>{" "}
                                  </li>
                                  <li>
                                    <img src={images.occupied} alt="" />
                                    <span>Occupied</span>{" "}
                                  </li>
                                  <li>
                                    <img src="./images/not_exist.png" alt="" />
                                    <span>Not Exist</span>{" "}
                                  </li>
                                </ul>
                              </div>
                              <div class="fl-card">
                                <div class="row">
                                  <div class="col-md-7 col-12 pe-0">
                                    <div class="flight-btn text-center">
                                      <a href="" class="btn-f">
                                        JAI-DEL(6E,2405)
                                      </a>
                                    </div>

                                    <div class="flight-f">
                                      <div class="flight-in">
                                        <div class="flight-p">
                                          <table class="table-d">
                                            <tbody>
                                              <tr></tr>
                                              <tr class="table-h">
                                                <th></th>
                                                <th>A</th>
                                                <th>B</th>
                                                <th>C</th>
                                                <th width="20px"></th>
                                                <th>D</th>
                                                <th>E</th>
                                                <th>F</th>
                                              </tr>
                                              <tr>
                                                <td>1</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>2</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>3</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>4</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>5</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>6</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>7</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>8</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>9</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>10</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>11</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>12</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>13</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>14</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>15</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>16</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>17</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>18</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>19</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>20</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>21</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>22</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>23</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>24</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>25</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>26</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>27</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>28</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>29</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>30</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>31</td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                                <td width="20px"></td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.selected}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.available}
                                                  />
                                                </td>
                                                <td>
                                                  <img
                                                    class="choose_seat"
                                                    src={images.occupied}
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-12 col-md-5 ">
                                    <div class="flight-right">
                                      <table class="r-table">
                                        <tr>
                                          <th colspan="3">JAI-DEL(6E,2405)</th>
                                        </tr>
                                        <tr class="no-pb">
                                          <td>Pax</td>
                                          <td>Seat</td>
                                          <td>Price</td>
                                        </tr>
                                        <tr class="set-b">
                                          <td>Adult 1</td>
                                          <td>4D</td>
                                          <td>350</td>
                                        </tr>
                                      </table>
                                      <div class="tb-b">
                                        <button
                                          name="flight"
                                          type="submit"
                                          class="btn btn-f"
                                        >
                                          Continue
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bt-last">
                  <button type="submit" class="btn btn-sub">
                    Continue
                  </button>
                </div>
                <div class="form-text mb-3 mt-2">
                  Most countries require travellers to have a passport valid for
                  more than 3 to 6 months from the date of entry into or exit
                  from the country. Please check the exact rules for your
                  destination country before completing the booking.
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="fare-sum mt-0">
                <div class="fasl-card">
                  <div class="travlrs">
                    Travellers: <i class="fas fa-male"></i> 1 |{" "}
                    <i class="fas fa-female"></i> 0 |{" "}
                    <span class="infantbay">
                      <i class="fas fa-baby"></i>
                    </span>{" "}
                    0
                  </div>

                  <div class="beggcha" id="">
                    Extra Baggage Charge Rs
                    <span class="begam">1350</span>
                    <span class="removeb">
                      <i class="far fa-times-circle"></i>
                    </span>
                  </div>

                  <div class="beggcha" id="">
                    Meal Charge Rs
                    <span class="begam">500</span>
                    <span class="removeb">
                      <i class="far fa-times-circle"></i>
                    </span>
                  </div>
                  <div class="beggcha" id="">
                    Seat Charge Rs
                    <span class="begam">1500</span>
                    <span class="removeb">
                      <i class="far fa-times-circle"></i>
                    </span>
                  </div>
                </div>

                <div class="grandt d-flex">
                  <div class="grandttext">Total Amount </div>
                  <div class="grandam">Rs 5719</div>
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

export default FlightBookingFromWithLogin;
