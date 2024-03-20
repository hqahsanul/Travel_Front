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
  const location = useLocation();


  const [hotelDetails, setHotelDetails] = useState();
  const [guestData, setGuestData] = useState();

  const { hotelResponse, hotelData } = location.state


  const fetchHotelListData = async () => {
    try {
      setLoading(true);

      // Retrieve data from localStorage with default values
      const apiPayload = localStorage.getItem("hotelPayload") || "{}";

      console.log("hotelPayload", apiPayload);

      // Use the retrieved objects directly
      const apiPayloadObject = JSON.parse(apiPayload);

      // Call the asynchronous function and await the result
      const response = await getHotelListData(apiPayloadObject);

      // Set state based on the response
      setHotelDetails(response);
      //   setToursitDetails(toursitPayloadObject);
    } catch (error) {
      console.log("Error while fetching hotel list data", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    console.log("tourData", hotelData);
    setGuestData(hotelData)
  }, [hotelData])

  useEffect(() => {
    if (hotelResponse) {
      setHotelDetails(hotelResponse)
    } else {
      fetchHotelListData()
    }
  }, [hotelResponse])


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
        {guestData && (
          <section class="listing_section list_two_waep">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="list_left">
                    <div class="row">
                      <div class="col-6">
                        <p>{guestData.cityname} </p>
                      </div>
                      <div class="col-3">
                        <h2>Check In</h2>
                        <p>{guestData.CheckInDate}</p>
                      </div>
                      <div class="col-3">
                        <h2>Check Out</h2>
                        <p>{guestData.checkOutDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="list_right">
                    <div className="row">
                      <div className="col-md-3">
                        <h2>Room</h2>
                        <p>{guestData.RoomGuests.length}</p>
                      </div>
                      <div className="col-md-3">
                        <h2>Adults</h2>
                        <p>
                          {guestData.RoomGuests.reduce(
                            (totalAdults, room) => totalAdults + room.NoOfAdults,
                            0
                          )}
                        </p>
                      </div>
                      <div className="col-md-3">
                        <h2>Child</h2>
                        <p>
                          {guestData.RoomGuests.reduce(
                            (totalChildren, room) => totalChildren + room.NoOfChild,
                            0
                          )}
                        </p>
                      </div>
                      <div className="col-md-3">
                        <div className="btn_serch">
                          <a href="#" className="btn btn-info modify">Modify Search</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="btn_serch serch_mody">
                    <a href="#" class="btn btn-info modify">Modify Search</a>
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
                      {hotelDetails && hotelDetails.length > 0 ? (
                        hotelDetails.map((item, index) => (
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
