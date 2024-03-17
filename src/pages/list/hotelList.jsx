import React, { useEffect, useContext, useState, useMemo } from "react";
import { LuSearch } from "react-icons/lu";
import images from "../../assets/images";
import OwlCarousel from "react-owl-carousel";
import Navbar from "../../components/navbar/NavBar";
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

const HotelList = () => {
  const { setLoading, loading } = useContext(LoaderContext);
  const { hotelListData, getHotelListData } = useContext(ListContext);
  const Navigate = useNavigate();

  const [HotelsListDetails, setHotelsListData] = useState([]);
  // const [toursitDetails, setToursitDetails] = useState();

  useEffect(() => {
    console.log("useEffect called");
    console.log("hotelListData", hotelListData);

    const fetchHotelListData = async () => {
      try {
        setLoading(true);

        // Retrieve data from localStorage with default values
        //   const apiPayload = localStorage.getItem("flightPayload") || "{}";
        //   const toursitPayload = localStorage.getItem("toursitPayload") || "{}";

        //   console.log("flightPayload", apiPayload);
        //   console.log("toursitPayload", toursitPayload);

        // Use the retrieved objects directly
        //   const apiPayloadObject = JSON.parse(apiPayload);
        //   const toursitPayloadObject = JSON.parse(toursitPayload);

        // Call the asynchronous function and await the result
        const response = await getHotelListData({});
        // console.log("response", response);

        // Set state based on the response
        setHotelsListData(response);
        //   setToursitDetails(toursitPayloadObject);
      } catch (error) {
        console.log("Error while fetching hotel list data", error);
      } finally {
        setLoading(false);
      }
    };

    // Check if flightListData is undefined or has a length less than or equal to 0
    if (!HotelsListDetails || HotelsListDetails.length <= 0) {
      console.log("entering unavailable");
      fetchHotelListData();
    } else {
      // If flightListData and toursitData are not undefined, set the state
      setHotelsListData(hotelListData);
      // setToursitDetails(toursitData);
    }
  }, [hotelListData]);

  const handleBooking = (hotelId) => {
    Navigate("/hotel-details", {
      state: {
        hotelId: hotelId,
      },
    });
  };

  return (
    <main>
      <div className="max-w-full">
        <Navbar />
        {/* {toursitDetails && (
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
        )} */}

        <section className="listing_desbord">
          <div className="container">
            <div className="row">
              <div className="col-md-3 slidebar_none">
                <div className="sidebar_left">
                  <div className="serch_top d-flex">
                    <span>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <p>624 Hotels found </p>
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
                      Star Rating
                    </a>
                    <ul className="d-flex stops_box">
                      <li>
                        1 <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        2 <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        3 <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        4 <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        5 <i className="fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="septor"></div>
                  <div className="rangebox price_box ">
                    <a href="#" className="collapsebtn">
                      Hotel Name
                    </a>
                    <div className="serch_bar">
                      <input
                        type="text"
                        className="srchhtl"
                        placeholder="Hotel name"
                        id="hotel-name"
                      />
                      <input
                        type="submit"
                        className="srchsmall"
                        id="hotel-name-search-btn"
                        value=""
                      />
                    </div>
                  </div>

                  <div className="septor"></div>
                  <div className="time_box price_box">
                    <a href="#" className="collapsebtn">
                      Amenities
                    </a>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Wi-Fi</label>
                      </div>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Breakfast</label>
                      </div>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Parking</label>
                      </div>
                    </div>
                    <div className="starin">
                      <div className="tmxdv">
                        <input
                          type="checkbox"
                          className="time-category hidecheck"
                          value="2"
                        />
                        <label className="ckboxdv">Swimming Pool</label>
                      </div>
                    </div>
                    <div className="septor"></div>
                    <div className="time_box price_box hotel_location_warp">
                      <a href="#" className="collapsebtn">
                        Hotel Location
                      </a>
                      <div className="starin">
                        <div className="tmxdv">
                          <input
                            type="checkbox"
                            className="time-category hidecheck"
                            value="2"
                          />
                          <label className="ckboxdv">--none--(2)</label>
                        </div>
                      </div>
                      <div className="starin">
                        <div className="tmxdv">
                          <input
                            type="checkbox"
                            className="time-category hidecheck"
                            value="2"
                          />
                          <label className="ckboxdv">Agra road(1)</label>
                        </div>
                      </div>
                      <div className="starin">
                        <div className="tmxdv">
                          <input
                            type="checkbox"
                            className="time-category hidecheck"
                            value="2"
                          />
                          <label className="ckboxdv">Ajmer road(12)</label>
                        </div>
                      </div>
                      <div className="starin">
                        <div className="tmxdv">
                          <input
                            type="checkbox"
                            className="time-category hidecheck"
                            value="2"
                          />
                          <label className="ckboxdv">Amer(3)</label>
                        </div>
                      </div>
                      <div className="starin">
                        <div className="tmxdv">
                          <input
                            type="checkbox"
                            className="time-category hidecheck"
                            value="2"
                          />
                          <label className="ckboxdv">Amer road(8)</label>
                        </div>
                      </div>
                      <div className="starin">
                        <div className="tmxdv">
                          <input
                            type="checkbox"
                            className="time-category hidecheck"
                            value="2"
                          />
                          <label className="ckboxdv">Bani park(20)</label>
                        </div>
                      </div>
                      <div className="starin">
                        <div className="tmxdv">
                          <input
                            type="checkbox"
                            className="time-category hidecheck"
                            value="2"
                          />
                          <label className="ckboxdv">C scheme(3)</label>
                        </div>
                      </div>
                      <div className="starin">
                        <div className="tmxdv">
                          <input
                            type="checkbox"
                            className="time-category hidecheck"
                            value="2"
                          />
                          <label className="ckboxdv">Chandpole(1)</label>
                        </div>
                      </div>
                      <div className="starin">
                        <div className="tmxdv">
                          <input
                            type="checkbox"
                            className="time-category hidecheck"
                            value="2"
                          />
                          <label className="ckboxdv">
                            Delhi jaipur highway(4)
                          </label>
                        </div>
                      </div>
                      <div className="starin">
                        <div className="tmxdv">
                          <input
                            type="checkbox"
                            className="time-category hidecheck"
                            value="2"
                          />
                          <label className="ckboxdv">
                            Gopalpura byepass(1)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="sidebar_right">
                  <div className="airline_box list_hotel">
                    <ul className="sortul d-flex">
                      <li className="filter_none">
                        <i className="fa-solid fa-filter"></i>
                      </li>
                      <li className="sortli hide_lines">
                        <a className="sorta name-l-2-h loader asc">
                          <strong>Deal</strong>
                        </a>
                      </li>
                      <li className="sortli">
                        <a className="sorta departure-l-2-h loader asc">
                          <i className="fa-solid fa-arrow-up-a-z"></i>
                          <strong>Name</strong>
                        </a>
                      </li>
                      <li className="sortli hide_lines">
                        <a className="sorta duration-l-2-h loader asc">
                          <i className="fa-regular fa-star"></i>
                          <strong>Star</strong>
                        </a>
                      </li>
                      <li className="sortli">
                        <a className="sorta price-l-2-h loader asc">
                          <i className="fa-solid fa-tag"></i>
                          <strong>Price</strong>
                        </a>
                      </li>
                    </ul>
                    <div className="social_icon_list">
                      <ul className="d-flex">
                        <li className="bar_icon">
                          <i className="fa-solid fa-bars-staggered"></i>
                        </li>
                        <li className="location_bar">
                          <i className="fa-solid fa-location-dot"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="details_box">
                    <ul className="detail_fx">
                      {HotelsListDetails && HotelsListDetails.length > 0 ? (
                        HotelsListDetails.map((item, index) => (
                          <li className="li_inner" key={index}>
                            <div className="details_inner_box hotel_box">
                              <div className="row">
                                <div className="col-md-4">
                                  <figure>
                                    <img src={item?.HotelPicture} alt="hotel" />
                                  </figure>
                                </div>
                                <div className="col-md-8">
                                  <div className="row">
                                    <div className="col-md-8">
                                      <div className="hotel_content">
                                        <h2>{item?.HotelName}</h2>
                                        <ul className="d-flex">
                                          {[
                                            ...Array(Number(item.StarRating)),
                                          ].map((_, index) => (
                                            <li key={index}>
                                              <i className="fa-solid fa-star"></i>
                                            </li>
                                          ))}
                                          {[
                                            ...Array(
                                              5 - Number(item.StarRating)
                                            ),
                                          ].map((_, index) => (
                                            <li
                                              key={
                                                index + Number(item.StarRating)
                                              }
                                            >
                                              <i className="fa-regular fa-star"></i>
                                            </li>
                                          ))}
                                        </ul>

                                        <p>
                                          {`${item?.HotelAddress}, ${item.HotelLocation}`}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="booK_warp">
                                        <h3>
                                          {`Rs ${item.Price.TBO_OfferedPriceRoundedOff} `}
                                        </h3>
                                        <p>Avg / Night</p>
                                        <button
                                          onClick={() =>
                                            handleBooking(item.ResultToken)
                                          }
                                          className="btn btn-info"
                                        >
                                          Book Now
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <h3>No hotels are found</h3>
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

export default HotelList;
