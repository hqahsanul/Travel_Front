import React, { useEffect, useContext, useState, useMemo } from "react";
import { LuSearch } from "react-icons/lu";
import images from "../../assets/images";
import OwlCarousel from "react-owl-carousel";
import Navbar from "../navbar/NavBar";
import axios from "axios";
import ApiPath from "../../utils/ApiPath";
import { apiPost } from "../../utils/ApiFetch";
import LoaderContext from "../../context/LoaderContext";
import ListContext from "../../context/ListContext";

import moment from "moment";
import { formatDuration } from "../../helper/apiConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../helper/apiConfig";
import owlOptions from "../../others/owlOptions";

const FlightList = () => {
  const { setLoading, loading } = useContext(LoaderContext);
  const { getFlightListData, flightListData, toursitData } =
    useContext(ListContext);
  const Navigate = useNavigate();

  const [searchListData, setSearchListData] = useState([]);
  const [toursitDetails, setToursitDetails] = useState();

  useEffect(() => {
    console.log("useEffect called");
    console.log("flighData", flightListData);
    console.log("toursitData", toursitData);

    const fetchFlightListData = async () => {
      try {
        setLoading(true);

        // Retrieve data from localStorage with default values
        const apiPayload = localStorage.getItem("flightPayload") || "{}";
        const toursitPayload = localStorage.getItem("toursitPayload") || "{}";

        console.log("flightPayload", apiPayload);
        console.log("toursitPayload", toursitPayload);

        // Use the retrieved objects directly
        const apiPayloadObject = JSON.parse(apiPayload);
        const toursitPayloadObject = JSON.parse(toursitPayload);

        // Call the asynchronous function and await the result
        const response = await getFlightListData(apiPayloadObject);
        console.log("response", response);

        // Set state based on the response
        setSearchListData(response);
        setToursitDetails(toursitPayloadObject);
      } catch (error) {
        console.log("Error while fetching flight list data", error);
      } finally {
        setLoading(false);
      }
    };

    // Check if flightListData is undefined or has a length less than or equal to 0
    if (!flightListData || (flightListData.length <= 0 && !toursitData)) {
      console.log("entering unavailable");
      fetchFlightListData();
    } else {
      // If flightListData and toursitData are not undefined, set the state
      setSearchListData(flightListData);
      setToursitDetails(toursitData);
    }
  }, [flightListData, toursitData]);

  const handleBooking = () => {
    Navigate("/flight-booking");
  };

  return (
    <main>
      <div className="max-w-full">
        <Navbar />
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
                      <OwlCarousel
                        className="owl-carousel owl-theme"
                        {...owlOptions.option4}
                      >
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
                      </OwlCarousel>
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
                                    <button
                                      onClick={handleBooking}
                                      className="btn btn-info"
                                    >
                                      Book Now
                                    </button>
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
