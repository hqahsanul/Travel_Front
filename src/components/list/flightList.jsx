import React, { useEffect, useContext, useState, useMemo } from "react";
import { LuSearch } from "react-icons/lu";
import images from "../../assets/images";
import OwlCarousel from "react-owl-carousel";
import Navbar from "../navbar/NavBar";
import axios from "axios";
import ApiPath from "../../utils/ApiPath";
import { apiPost } from "../../utils/ApiFetch";
import LoaderContext from "../../context/LoaderContext";
import moment from "moment";
import { formatDuration } from "../../helper/apiConfig";
import { useLocation } from "react-router-dom";

const FlightList = () => {
  const { setLoading, loading } = useContext(LoaderContext);
  const [searchListData, setSearchListData] = useState([]);
  const [toursitDetails, setToursitDetails] = useState();

  const location = useLocation();

  useEffect(() => {
    const { flightData, toursitData } = location.state;
    console.log("flighData", flightData);
    console.log("toursitDetails", toursitData);
    if (flightData && toursitData) {
      setSearchListData(flightData);
      setToursitDetails(toursitData);
    }
  }, []);

  // Memoize the searchListData using useMemo

  return (
    <main>
      <div className="p-relative max-w-full">
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
                        <i class="fa-regular fa-circle-user me-1"></i> My
                        Account{" "}
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

        {toursitDetails && (
          <section className="listing_section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="list_left">
                    <div className="row">
                      <div className="col-6">
                        <h2>{toursitDetails.JourneyType}</h2>
                        <p>{`${toursitDetails.departureCity} (${toursitDetails.departurAbbr}) To ${toursitDetails.destinationCity} (${toursitDetails.destinationAbbr})`}</p>
                      </div>
                      <div className="col-6">
                        <h2>Departure</h2>
                        <p>
                          {moment(toursitDetails.DepartureDate).format(
                            "ddd, DD MMM"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list_right">
                    <div className="row">
                      <div className="col-md-3">
                        <h2>Adult</h2>
                        <p>{toursitDetails.AdultCount || "0"}</p>
                      </div>
                      <div className="col-md-3">
                        <h2>Child</h2>
                        <p>{toursitDetails.ChildCount || "0"}</p>
                      </div>
                      <div className="col-md-3">
                        <h2>Infant</h2>
                        <p>{toursitDetails.InfantCount || "0"}</p>
                      </div>
                      <div className="col-md-3">
                        <div className="btn_serch">
                          <a href="#" className="btn btn-info modify">
                            Modify Search
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn_serch serch_mody">
                    <a href="#" className="btn btn-info modify">
                      Modify Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="listing_desbord">
          <div className="container">
            <div className="row">
              <div className="col-md-3 slidebar_none">
                <div className="sidebar_left">
                  <div className="serch_top d-flex">
                    <span>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <p>218 flights found</p>
                  </div>
                  <div className="rest_btn">
                    <a href="#" className="btn btn-info">
                      RESET ALL
                    </a>
                  </div>
                  <div className="price_box">
                    <a href="#" className="collapsebtn">
                      Price
                    </a>
                    <p>Rs2615 - Rs95125</p>
                    <div className="line_box">
                      <span className="cricle_left"></span>
                      <span className="cricle_left right"></span>
                    </div>
                  </div>
                  <div className="septor"></div>
                  <div className="rangebox price_box ">
                    <a href="#" className="collapsebtn">
                      No. of Stops
                    </a>
                    <ul className="d-flex stops_box">
                      <li>0 stop</li>
                      <li>0 stop</li>
                      <li>0 stop</li>
                    </ul>
                  </div>
                  <div className="septor"></div>
                  <div className="time_box price_box">
                    <a href="#" className="collapsebtn">
                      Departure Time
                    </a>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Early Morning</label>
                      </div>
                      <div className="flitsprt mng2"></div>
                      <span className="htlcount">6-12PM</span>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Morning</label>
                      </div>
                      <div className="flitsprt mng2"></div>
                      <span className="htlcount">6-12PM</span>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Mid-Day</label>
                      </div>
                      <div className="flitsprt mng2"></div>
                      <span className="htlcount">6-12PM</span>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Evening</label>
                      </div>
                      <div className="flitsprt mng2"></div>
                      <span className="htlcount">6-12PM</span>
                    </div>
                  </div>
                  <div className="septor"></div>
                  <div className="time_box price_box">
                    <a href="#" className="collapsebtn">
                      Departure Time
                    </a>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Early Morning</label>
                      </div>
                      <div className="flitsprt mng2"></div>
                      <span className="htlcount">6-12PM</span>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Morning</label>
                      </div>
                      <div className="flitsprt mng2"></div>
                      <span className="htlcount">6-12PM</span>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Mid-Day</label>
                      </div>
                      <div className="flitsprt mng2"></div>
                      <span className="htlcount">6-12PM</span>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Evening</label>
                      </div>
                      <div className="flitsprt mng2"></div>
                      <span className="htlcount">6-12PM</span>
                    </div>
                  </div>
                  <div className="septor"></div>
                  <div className="time_box price_box">
                    <a href="#" className="collapsebtn">
                      Airlines
                    </a>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">AI Express</label>
                      </div>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Air India</label>
                      </div>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">AirIndia Express</label>
                      </div>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Alliance Air</label>
                      </div>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Indigo</label>
                      </div>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Vistara</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="sidebar_right">
                  <div className="top_airline d-flex">
                    <div className="top_airline_left"> All Airline </div>
                    <div className="top_airline_right">
                      <div className=" logo_warp owl-carousel owl-theme">
                        <div className="item">
                          <div className="logo_box">
                            <div className="imgemtrx">
                              <img alt="Flight" src={images.six_e} />
                            </div>
                            <div className="alsmtrx">
                              <strong>Indigo</strong>
                              <span className="mtrxprice">Rs 2615</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="logo_box">
                            <div className="imgemtrx">
                              <img alt="Flight" src={images.six_e} />
                            </div>
                            <div className="alsmtrx">
                              <strong>Indigo</strong>
                              <span className="mtrxprice">Rs 2615</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="logo_box">
                            <div className="imgemtrx">
                              <img alt="Flight" src={images.six_e} />
                            </div>
                            <div className="alsmtrx">
                              <strong>Indigo</strong>
                              <span className="mtrxprice">Rs 2615</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="logo_box">
                            <div className="imgemtrx">
                              <img alt="Flight" src={images.six_e} />
                            </div>
                            <div className="alsmtrx">
                              <strong>Indigo</strong>
                              <span className="mtrxprice">Rs 2615</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="logo_box">
                            <div className="imgemtrx">
                              <img alt="Flight" src={images.six_e} />
                            </div>
                            <div className="alsmtrx">
                              <strong>Indigo</strong>
                              <span className="mtrxprice">Rs 2615</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="airline_box">
                    <ul className="sortul d-flex">
                      <li className="filter_none">
                        <i className="fa-solid fa-filter"></i>
                      </li>
                      <li className="sortli hide_lines">
                        <a className="sorta name-l-2-h loader asc">
                          <i className="fa-solid fa-plane"></i>
                          <strong>Airline</strong>
                        </a>
                      </li>
                      <li className="sortli">
                        <a className="sorta departure-l-2-h loader asc">
                          <i className="fa-regular fa-calendar-days"></i>
                          <strong>Depart</strong>
                        </a>
                      </li>
                      <li className="sortli hide_lines">
                        <a className="sorta duration-l-2-h loader asc">
                          <i className="fa-regular fa-clock"></i>
                          <strong>Duration</strong>
                        </a>
                      </li>
                      <li className="sortli">
                        <a className="sorta arrival-l-2-h loader asc">
                          <i className="fa-regular fa-calendar-days"></i>
                          <strong>Arrive</strong>
                        </a>
                      </li>
                      <li className="sortli">
                        <a className="sorta price-l-2-h loader asc">
                          <i className="fa-solid fa-tag"></i>
                          <strong>Price</strong>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="details_box">
                    <ul className="detail_fx">
                      {searchListData && searchListData.length > 0 ? (
                        searchListData.map((item, index) => (
                          <li className="li_inner" key={index}>
                            <div className="details_inner_box">
                              <div className="row">
                                <div className="col-md-10">
                                  <ul className="d-flex">
                                    <li>
                                      <img
                                        src={images.i_5}
                                        alt="img"
                                        className="x_img"
                                      />
                                      <p>{item.Attr?.AirlineRemark}</p>
                                    </li>
                                    <li>
                                      <h2>
                                        {moment(
                                          item.FlightDetails?.Details[0]?.[0]
                                            ?.Origin?.DateTime
                                        ).format("HH:mm")}
                                      </h2>
                                      <p>{`${item.FlightDetails.Details[0]?.[0].Origin.CityName} (${item.FlightDetails.Details[0]?.[0].Origin.AirportCode}) `}</p>
                                    </li>
                                    <li>
                                      <div className="insidesame">
                                        <div className="durtntime">
                                          {formatDuration(
                                            item.FlightDetails.Details[0]?.[0]
                                              .Duration
                                          )}
                                        </div>
                                        <div className="stop_image">
                                          <img
                                            src={images.stop_5}
                                            alt="stop0"
                                          />
                                        </div>
                                        <div className="stop-value">Stop:0</div>
                                      </div>
                                    </li>
                                    <li>
                                      <h2>
                                        {moment(
                                          item.FlightDetails.Details[0]?.[0]
                                            .Destination.DateTime
                                        ).format("HH:mm")}
                                      </h2>
                                      <p>
                                        {`${item.FlightDetails.Details[0]?.[0].Destination.CityName}(${item.FlightDetails.Details[0]?.[0].Destination.AirportCode}
                                        )`}
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-2">
                                  <div className="booK_warp">
                                    <h3>{`Rs ${item.Price.TotalDisplayFare}`}</h3>
                                    <p>
                                      {item.Attr.IsRefundable
                                        ? "Refundable"
                                        : "Non-Refundable"}
                                    </p>
                                    <a
                                      href="/flight-booking"
                                      className="btn btn-info"
                                    >
                                      Book Now
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="mrinfrmtn">
                                <ul className="d-flex">
                                  <li>
                                    <span>
                                      <i className="fa-solid fa-info"></i>
                                    </span>
                                    Flight Details |
                                  </li>
                                  <li>TTMX SME</li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <h3>No flights are found</h3>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FlightList;
