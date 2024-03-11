import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images";
import Navbar from "../../components/navbar/NavBar";
import OwlCarousel from "react-owl-carousel";
import AuthContext from "../../context/AuthContext";
import owlOptions from "../../others/owlOptions";
import { apiGet } from "../../utils/ApiFetch";
import ApiPath from "../../utils/ApiPath";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { fixAbbrivation } from "../../helper/apiConfig";
import LoaderContext from "../../context/LoaderContext";
import ListContext from "../../context/ListContext";

const HomePage = () => {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [abbrFromValue, setAbbrFromValue] = useState("");
  const [abbrToValue, setAbbrToValue] = useState("");
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [selectedCabin, setSelectedCabin] = useState("Business");
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const passengerDropdownRef = useRef(null);
  const { setLoading, loading } = useContext(LoaderContext);
  const {
    getSearchList,
    list,
    setList,
    fromSuggestions,
    setFromSuggestions,
    toSuggestions,
    setToSuggestions,
  } = useContext(ListContext);

  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        passengerDropdownRef.current &&
        !passengerDropdownRef.current.contains(event.target)
      ) {
        setShowPassengerDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handlePassengerChange = (type, action) => {
    switch (type) {
      case "adult":
        setAdultCount(
          action === "add" ? adultCount + 1 : Math.max(adultCount - 1, 0)
        );
        break;
      case "child":
        setChildCount(
          action === "add" ? childCount + 1 : Math.max(childCount - 1, 0)
        );
        break;
      case "infant":
        setInfantCount(
          action === "add" ? infantCount + 1 : Math.max(infantCount - 1, 0)
        );
        break;
      default:
        break;
    }
  };

  const handleCabinChange = (cabin) => {
    setSelectedCabin(cabin);
  };

  const togglePassengerDropdown = () => {
    setShowPassengerDropdown(!showPassengerDropdown);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleFromInputChange = (e) => {
    const inputValue = e.target.value;
    setFromValue(inputValue);
    setShowFromDropdown(false);
    if (inputValue.length > 0) {
      getSearchList(fromValue, "from").then((result) => {
        console.log("ddddd", result);

        if (result) {
          setShowFromDropdown(result.length > 0);
        }
      });
    }
  };

  const handleToInputChange = (e) => {
    const inputValue = e.target.value;
    setToValue(inputValue);
    setShowToDropdown(false);
    if (inputValue.length > 0) {
      getSearchList(fromValue, "to").then((result) => {
        setShowToDropdown(result.length > 0);
      });
    }
  };

  const handleFromSuggestionClick = (
    selectedCity,
    setInputValue,
    setShowDropdown,
    selectedAbbr
  ) => {
    setInputValue(selectedCity);
    setAbbrFromValue(selectedAbbr); // Set the Abbr value
    setShowDropdown(false);
  };

  const handleToSuggestionClick = (
    selectedCity,
    setInputValue,
    setShowDropdown,
    selectedAbbr
  ) => {
    setInputValue(selectedCity);
    setAbbrToValue(selectedAbbr); // Set the Abbr value
    setShowDropdown(false);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleOnyWayTrip = async () => {
    const data = {
      AdultCount: adultCount.toString(),
      ChildCount: childCount.toString(),
      InfantCount: infantCount.toString(),
      JourneyType: "OneWay",
      PreferredAirlines: [""],
      CabinClass: selectedCabin,
      Segments: [
        {
          Origin: abbrFromValue,
          Destination: abbrToValue,
          DepartureDate: selectedDate,
        },
      ],
    };

    const tourData = {
      AdultCount: adultCount.toString(),
      ChildCount: childCount.toString(),
      InfantCount: infantCount.toString(),
      JourneyType: "OneWay",
      DepartureDate: selectedDate,
      departureCity: fromValue,
      departurAbbr: abbrFromValue,
      destinationCity: toValue,
      destinationAbbr: abbrToValue,
    };

    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_BASE_URL}${ApiPath.getFlightData}`,
        {
          params: data,
        }
      );
      if (
        response.data &&
        response.data.data &&
        response.data.data.Search &&
        response.data.data.Search.FlightDataList &&
        response.data.data.Search.FlightDataList.JourneyList
      ) {
        navigate("/flight-list", {
          state: {
            flightData: response.data.data.Search.FlightDataList.JourneyList[0],
            toursitData: tourData,
          },
        });
      }
    } catch (error) {
      console.error("Error fetching flight data list:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main>
        <div className="max-w-full">
          <Navbar />
          <section className="slider position-relative z-2">
            <OwlCarousel className="owl-carousel" {...owlOptions.option1}>
              <div className="item">
                <img src={images.bgone} alt="bg_one" />
              </div>
              <div className="item">
                <img src={images.banner1} alt="" />
              </div>
              <div className="item">
                <img src={images.bgone} alt="bg_one" />
              </div>
            </OwlCarousel>
            <div className="slider-text">
              <div className="container">
                <div id="theme_search_form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="theme_search_form_area">
                        <div className="theme_search_form_tabbtn">
                          <ul
                            className="nav nav-tabs justify-content-center"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="flights-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#flights"
                                type="button"
                                role="tab"
                                aria-controls="flights"
                                aria-selected="true"
                              >
                                <i className="fas fa-plane-departure"></i>
                                Flights
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="tours-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#tours"
                                type="button"
                                role="tab"
                                aria-controls="tours"
                                aria-selected="false"
                              >
                                <i className="fas fa-globe"></i>Tours
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="hotels-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#hotels"
                                type="button"
                                role="tab"
                                aria-controls="hotels"
                                aria-selected="false"
                              >
                                <i className="fas fa-hotel"></i>Hotels
                              </button>
                            </li>

                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="bus-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#bus"
                                type="button"
                                role="tab"
                                aria-controls="bus"
                                aria-selected="false"
                              >
                                <i className="fas fa-bus"></i> Bus
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="cruise-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#cruise"
                                type="button"
                                role="tab"
                                aria-controls="cruise"
                                aria-selected="false"
                              >
                                <i className="fas fa-car"></i> Cab
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="flights"
                            role="tabpanel"
                            aria-labelledby="flights-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="flight_categories_search">
                                  <ul className="nav nav-tabs" role="tablist">
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link active"
                                        id="oneway-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#oneway_flight"
                                        type="button"
                                        role="tab"
                                        aria-controls="oneway_flight"
                                        aria-selected="true"
                                      >
                                        One Way
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="roundtrip-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#roundtrip"
                                        type="button"
                                        role="tab"
                                        aria-controls="roundtrip"
                                        aria-selected="false"
                                      >
                                        Roundtrip
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="multi_city-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#multi_city"
                                        type="button"
                                        role="tab"
                                        aria-controls="multi_city"
                                        aria-selected="false"
                                      >
                                        Multi city
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="tab-content" id="myTabContent1">
                              <div
                                className="tab-pane fade show active"
                                id="oneway_flight"
                                role="tabpanel"
                                aria-labelledby="oneway-tab"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="oneway_search_form">
                                      <form
                                        onSubmit={handleSubmit(
                                          handleOnyWayTrip
                                        )}
                                      >
                                        <div className="row">
                                          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div className="flight_Search_boxed">
                                              <p>From</p>
                                              <div className="dropdown">
                                                <input
                                                  type="text"
                                                  value={fromValue}
                                                  onChange={(e) =>
                                                    handleFromInputChange(e)
                                                  }
                                                  className="form-control"
                                                  placeholder="Type Departure City"
                                                  onFocus={() =>
                                                    setShowFromDropdown(false)
                                                  } // Close the dropdown on initial click
                                                />
                                                <div
                                                  className={`dropdown-menu ${
                                                    showFromDropdown
                                                      ? "show"
                                                      : ""
                                                  }`}
                                                  style={{
                                                    maxHeight: "240px",
                                                    overflowY: "auto",
                                                  }}
                                                >
                                                  {fromSuggestions.map(
                                                    (city, index) => (
                                                      <div key={index}>
                                                        <button
                                                          className="dropdown-item"
                                                          onClick={() =>
                                                            handleFromSuggestionClick(
                                                              city.City,
                                                              setFromValue,
                                                              setShowFromDropdown,
                                                              city.Abbr
                                                            )
                                                          }
                                                        >
                                                          {`${city.City} (${city.Abbr})`}
                                                        </button>
                                                        {index <
                                                          fromSuggestions.length -
                                                            1 && (
                                                          <div className="dropdown-divider"></div>
                                                        )}
                                                      </div>
                                                    )
                                                  )}
                                                </div>
                                              </div>

                                              <span>
                                                JFK - John F. Kennedy
                                                International...
                                              </span>

                                              <div className="plan_icon_posation">
                                                <i className="fas fa-plane-departure"></i>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div className="flight_Search_boxed">
                                              <p>To</p>
                                              <div className="dropdown">
                                                <input
                                                  {...register(
                                                    "destinationCity",
                                                    {
                                                      required:
                                                        "Destination City is required",
                                                    }
                                                  )}
                                                  type="text"
                                                  value={toValue}
                                                  onChange={(e) =>
                                                    handleToInputChange(e)
                                                  }
                                                  className="form-control"
                                                  placeholder="Type Destination City"
                                                  onFocus={() =>
                                                    setShowToDropdown(false)
                                                  } // Close the dropdown on initial click
                                                />
                                                <div
                                                  className={`dropdown-menu ${
                                                    showToDropdown ? "show" : ""
                                                  }`}
                                                  style={{
                                                    maxHeight: "240px",
                                                    overflowY: "auto",
                                                  }}
                                                >
                                                  {toSuggestions.map(
                                                    (city, index) => (
                                                      <div key={index}>
                                                        <button
                                                          className="dropdown-item"
                                                          onClick={() =>
                                                            handleToSuggestionClick(
                                                              city.City,
                                                              setToValue,
                                                              setShowToDropdown,
                                                              city.Abbr
                                                            )
                                                          }
                                                        >
                                                          {`${city.City} (${city.Abbr})`}
                                                        </button>
                                                        {index <
                                                          toSuggestions.length -
                                                            1 && (
                                                          <div className="dropdown-divider"></div>
                                                        )}
                                                      </div>
                                                    )
                                                  )}
                                                </div>
                                              </div>

                                              <span>
                                                LCY, London city airport{" "}
                                              </span>

                                              <div className="plan_icon_posation">
                                                <i className="fas fa-plane-arrival"></i>
                                              </div>
                                              <div className="range_plan">
                                                <i className="fas fa-exchange-alt"></i>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="form_search_date">
                                              <div className="flight_Search_boxed date_flex_area">
                                                <div className="Journey_date">
                                                  <p>Journey date</p>
                                                  <input
                                                    {...register(
                                                      "journeyDate",
                                                      {
                                                        required:
                                                          "Journey Date is required",
                                                      }
                                                    )}
                                                    // {errors.journeyDate && <p>{errors.journeyDate.message}</p>}
                                                    type="date"
                                                    value={selectedDate} // Replace with your actual state value
                                                    onChange={(e) =>
                                                      handleDateChange(e)
                                                    }
                                                  />
                                                  <span>Thursday</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                                            <div className="flight_Search_boxed dropdown_passenger_area">
                                              <p>Passenger, Class</p>
                                              <div
                                                className="dropdown"
                                                onClick={
                                                  togglePassengerDropdown
                                                }
                                                ref={passengerDropdownRef}
                                              >
                                                <button
                                                  className="dropdown-toggle final-count"
                                                  type="button"
                                                  id="dropdownMenuButton1"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  {adultCount +
                                                    childCount +
                                                    infantCount}{" "}
                                                  Passengers
                                                </button>
                                                <div
                                                  className={`dropdown-menu dropdown_passenger_info ${
                                                    showPassengerDropdown
                                                      ? "show"
                                                      : ""
                                                  }`}
                                                  aria-labelledby="dropdownMenuButton1"
                                                  onClick={stopPropagation}
                                                >
                                                  <div className="traveller-calulate-persons">
                                                    <div className="passengers">
                                                      <h6>Passengers</h6>
                                                      <div className="passengers-types">
                                                        <div className="passengers-type">
                                                          <div className="text">
                                                            <span className="count pcount">
                                                              {adultCount}
                                                            </span>
                                                            <div className="type-label">
                                                              <p>Adult</p>
                                                              <span>
                                                                12+ yrs
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div className="button-set">
                                                            <button
                                                              type="button"
                                                              className="btn-add"
                                                              onClick={() =>
                                                                handlePassengerChange(
                                                                  "adult",
                                                                  "add"
                                                                )
                                                              }
                                                            >
                                                              <i className="fas fa-plus"></i>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="btn-subtract"
                                                              onClick={() =>
                                                                handlePassengerChange(
                                                                  "adult",
                                                                  "subtract"
                                                                )
                                                              }
                                                            >
                                                              <i className="fas fa-minus"></i>
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="passengers-type">
                                                          <div className="text">
                                                            <span className="count ccount">
                                                              {childCount}
                                                            </span>
                                                            <div className="type-label">
                                                              <p className="fz14 mb-xs-0">
                                                                Children
                                                              </p>
                                                              <span>
                                                                2 - Less than 12
                                                                yrs
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div className="button-set">
                                                            <button
                                                              type="button"
                                                              className="btn-add-c"
                                                              onClick={() =>
                                                                handlePassengerChange(
                                                                  "child",
                                                                  "add"
                                                                )
                                                              }
                                                            >
                                                              <i className="fas fa-plus"></i>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="btn-subtract-c"
                                                              onClick={() =>
                                                                handlePassengerChange(
                                                                  "child",
                                                                  "subtract"
                                                                )
                                                              }
                                                            >
                                                              <i className="fas fa-minus"></i>
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="passengers-type">
                                                          <div className="text">
                                                            <span className="count incount">
                                                              {infantCount}
                                                            </span>
                                                            <div className="type-label">
                                                              <p className="fz14 mb-xs-0">
                                                                Infant
                                                              </p>
                                                              <span>
                                                                Less than 2 yrs
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div className="button-set">
                                                            <button
                                                              type="button"
                                                              className="btn-add-in"
                                                              onClick={() =>
                                                                handlePassengerChange(
                                                                  "infant",
                                                                  "add"
                                                                )
                                                              }
                                                            >
                                                              <i className="fas fa-plus"></i>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="btn-subtract-in"
                                                              onClick={() =>
                                                                handlePassengerChange(
                                                                  "infant",
                                                                  "subtract"
                                                                )
                                                              }
                                                            >
                                                              <i className="fas fa-minus"></i>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="cabin-selection">
                                                      <h6>Cabin Class</h6>
                                                      <div className="cabin-list">
                                                        <button
                                                          type="button"
                                                          className={`label-select-btn ${
                                                            selectedCabin ===
                                                            "Economy"
                                                              ? "active"
                                                              : ""
                                                          }`}
                                                          onClick={() =>
                                                            handleCabinChange(
                                                              "Economy"
                                                            )
                                                          }
                                                        >
                                                          <span className="muiButton-label">
                                                            Economy
                                                          </span>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className={`label-select-btn ${
                                                            selectedCabin ===
                                                            "Business"
                                                              ? "active"
                                                              : ""
                                                          }`}
                                                          onClick={() =>
                                                            handleCabinChange(
                                                              "Business"
                                                            )
                                                          }
                                                        >
                                                          <span className="muiButton-label">
                                                            Business
                                                          </span>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className={`label-select-btn ${
                                                            selectedCabin ===
                                                            "First Class"
                                                              ? "active"
                                                              : ""
                                                          }`}
                                                          onClick={() =>
                                                            handleCabinChange(
                                                              "First Class"
                                                            )
                                                          }
                                                        >
                                                          <span className="MuiButton-label">
                                                            First Class
                                                          </span>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <span>{selectedCabin}</span>
                                            </div>
                                          </div>
                                          <div className="top_form_search_button">
                                            <button className="btn btn_theme btn_md">
                                              Search
                                            </button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="roundtrip"
                                role="tabpanel"
                                aria-labelledby="roundtrip-tab"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="oneway_search_form">
                                      <form action="#!">
                                        <div className="row">
                                          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div className="flight_Search_boxed">
                                              <p>From</p>
                                              <input
                                                type="text"
                                                value="New York"
                                              />
                                              <span>
                                                JFK - John F. Kennedy
                                                International...
                                              </span>
                                              <div className="plan_icon_posation">
                                                <i className="fas fa-plane-departure"></i>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                            <div className="flight_Search_boxed">
                                              <p>To</p>
                                              <input
                                                type="text"
                                                value="London "
                                              />
                                              <span>
                                                LCY, London city airport{" "}
                                              </span>
                                              <div className="plan_icon_posation">
                                                <i className="fas fa-plane-arrival"></i>
                                              </div>
                                              <div className="range_plan">
                                                <i className="fas fa-exchange-alt"></i>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="form_search_date">
                                              <div className="flight_Search_boxed date_flex_area">
                                                <div className="Journey_date">
                                                  <p>Journey date</p>
                                                  <input
                                                    type="date"
                                                    value="2022-05-05"
                                                  />
                                                  <span>Thursday</span>
                                                </div>
                                                <div className="Journey_date">
                                                  <p>Return date</p>
                                                  <input
                                                    type="date"
                                                    value="2022-05-08"
                                                  />
                                                  <span>Saturday</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                                            <div className="flight_Search_boxed dropdown_passenger_area">
                                              <p>Passenger, Class</p>
                                              <div className="dropdown">
                                                <button
                                                  className="dropdown-toggle final-count"
                                                  data-toggle="dropdown"
                                                  type="button"
                                                  id="dropdownMenuButton1"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  0 Passenger
                                                </button>
                                                <div
                                                  className="dropdown-menu dropdown_passenger_info"
                                                  aria-labelledby="dropdownMenuButton1"
                                                >
                                                  <div className="traveller-calulate-persons">
                                                    <div className="passengers">
                                                      <h6>Passengers</h6>
                                                      <div className="passengers-types">
                                                        <div className="passengers-type">
                                                          <div className="text">
                                                            <span className="count pcount">
                                                              2
                                                            </span>
                                                            <div className="type-label">
                                                              <p>Adult</p>
                                                              <span>
                                                                12+ yrs
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div className="button-set">
                                                            <button
                                                              type="button"
                                                              className="btn-add"
                                                            >
                                                              <i className="fas fa-plus"></i>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="btn-subtract"
                                                            >
                                                              <i className="fas fa-minus"></i>
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="passengers-type">
                                                          <div className="text">
                                                            <span className="count ccount">
                                                              0
                                                            </span>
                                                            <div className="type-label">
                                                              <p className="fz14 mb-xs-0">
                                                                Children
                                                              </p>
                                                              <span>
                                                                2 - Less than 12
                                                                yrs
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div className="button-set">
                                                            <button
                                                              type="button"
                                                              className="btn-add-c"
                                                            >
                                                              <i className="fas fa-plus"></i>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="btn-subtract-c"
                                                            >
                                                              <i className="fas fa-minus"></i>
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="passengers-type">
                                                          <div className="text">
                                                            <span className="count incount">
                                                              0
                                                            </span>
                                                            <div className="type-label">
                                                              <p className="fz14 mb-xs-0">
                                                                Infant
                                                              </p>
                                                              <span>
                                                                Less than 2 yrs
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div className="button-set">
                                                            <button
                                                              type="button"
                                                              className="btn-add-in"
                                                            >
                                                              <i className="fas fa-plus"></i>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="btn-subtract-in"
                                                            >
                                                              <i className="fas fa-minus"></i>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="cabin-selection">
                                                      <h6>Cabin Class</h6>
                                                      <div className="cabin-list">
                                                        <button
                                                          type="button"
                                                          className="label-select-btn"
                                                        >
                                                          <span className="muiButton-label">
                                                            Economy
                                                          </span>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="label-select-btn active"
                                                        >
                                                          <span className="muiButton-label">
                                                            Business
                                                          </span>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="label-select-btn"
                                                        >
                                                          <span className="MuiButton-label">
                                                            First Class
                                                          </span>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <span>Business</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="top_form_search_button">
                                          <button className="btn btn_theme btn_md">
                                            Search
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="multi_city"
                                role="tabpanel"
                                aria-labelledby="multi_city-tab"
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="oneway_search_form">
                                      <form action="#!">
                                        <div className="multi_city_form_wrapper">
                                          <div className="multi_city_form">
                                            <div className="row">
                                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed">
                                                  <p>From</p>
                                                  <input
                                                    type="text"
                                                    value="New York"
                                                  />
                                                  <span>
                                                    DAC, Hazrat Shahajalal
                                                    International...
                                                  </span>
                                                  <div className="plan_icon_posation">
                                                    <i className="fas fa-plane-departure"></i>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed">
                                                  <p>To</p>
                                                  <input
                                                    type="text"
                                                    value="London "
                                                  />
                                                  <span>
                                                    LCY, London city airport
                                                  </span>
                                                  <div className="plan_icon_posation">
                                                    <i className="fas fa-plane-arrival"></i>
                                                  </div>
                                                  <div className="range_plan">
                                                    <i className="fas fa-exchange-alt"></i>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="form_search_date">
                                                  <div className="flight_Search_boxed date_flex_area">
                                                    <div className="Journey_date">
                                                      <p>Journey date</p>
                                                      <input
                                                        type="date"
                                                        value="2022-05-05"
                                                      />
                                                      <span>Thursday</span>
                                                    </div>
                                                    <div className="Journey_date">
                                                      <p>Return date</p>
                                                      <input
                                                        type="date"
                                                        value="2022-05-10"
                                                      />
                                                      <span>Saturday</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                  <p>Passenger, Class</p>
                                                  <div className="dropdown">
                                                    <button
                                                      className="dropdown-toggle final-count"
                                                      data-toggle="dropdown"
                                                      type="button"
                                                      id="dropdownMenuButton1"
                                                      data-bs-toggle="dropdown"
                                                      aria-expanded="false"
                                                    >
                                                      0 Passenger
                                                    </button>
                                                    <div
                                                      className="dropdown-menu dropdown_passenger_info"
                                                      aria-labelledby="dropdownMenuButton1"
                                                    >
                                                      <div className="traveller-calulate-persons">
                                                        <div className="passengers">
                                                          <h6>Passengers</h6>
                                                          <div className="passengers-types">
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count pcount">
                                                                  2
                                                                </span>
                                                                <div className="type-label">
                                                                  <p>Adult</p>
                                                                  <span>
                                                                    12+ yrs
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button
                                                                  type="button"
                                                                  className="btn-add"
                                                                >
                                                                  <i className="fas fa-plus"></i>
                                                                </button>
                                                                <button
                                                                  type="button"
                                                                  className="btn-subtract"
                                                                >
                                                                  <i className="fas fa-minus"></i>
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count ccount">
                                                                  0
                                                                </span>
                                                                <div className="type-label">
                                                                  <p className="fz14 mb-xs-0">
                                                                    Children
                                                                  </p>
                                                                  <span>
                                                                    2 - Less
                                                                    than 12 yrs
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button
                                                                  type="button"
                                                                  className="btn-add-c"
                                                                >
                                                                  <i className="fas fa-plus"></i>
                                                                </button>
                                                                <button
                                                                  type="button"
                                                                  className="btn-subtract-c"
                                                                >
                                                                  <i className="fas fa-minus"></i>
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count incount">
                                                                  0
                                                                </span>
                                                                <div className="type-label">
                                                                  <p className="fz14 mb-xs-0">
                                                                    Infant
                                                                  </p>
                                                                  <span>
                                                                    Less than 2
                                                                    yrs
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button
                                                                  type="button"
                                                                  className="btn-add-in"
                                                                >
                                                                  <i className="fas fa-plus"></i>
                                                                </button>
                                                                <button
                                                                  type="button"
                                                                  className="btn-subtract-in"
                                                                >
                                                                  <i className="fas fa-minus"></i>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="cabin-selection">
                                                          <h6>Cabin Class</h6>
                                                          <div className="cabin-list">
                                                            <button
                                                              type="button"
                                                              className="label-select-btn"
                                                            >
                                                              <span className="muiButton-label">
                                                                Economy
                                                              </span>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="label-select-btn active"
                                                            >
                                                              <span className="muiButton-label">
                                                                Business
                                                              </span>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="label-select-btn"
                                                            >
                                                              <span className="MuiButton-label">
                                                                First Class
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <span>Business</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="multi_city_form">
                                            <div className="row">
                                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed">
                                                  <p>From</p>
                                                  <input
                                                    type="text"
                                                    value="New York"
                                                  />
                                                  <span>
                                                    DAC, Hazrat Shahajalal
                                                    International...
                                                  </span>
                                                  <div className="plan_icon_posation">
                                                    <i className="fas fa-plane-departure"></i>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed">
                                                  <p>To</p>
                                                  <input
                                                    type="text"
                                                    value="London "
                                                  />
                                                  <span>
                                                    LCY, London city airport
                                                  </span>
                                                  <div className="plan_icon_posation">
                                                    <i className="fas fa-plane-arrival"></i>
                                                  </div>
                                                  <div className="range_plan">
                                                    <i className="fas fa-exchange-alt"></i>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="form_search_date">
                                                  <div className="flight_Search_boxed date_flex_area">
                                                    <div className="Journey_date">
                                                      <p>Journey date</p>
                                                      <input
                                                        type="date"
                                                        value="2022-05-05"
                                                      />
                                                      <span>Thursday</span>
                                                    </div>
                                                    <div className="Journey_date">
                                                      <p>Return date</p>
                                                      <input
                                                        type="date"
                                                        value="2022-05-12"
                                                      />
                                                      <span>Saturday</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                  <p>Passenger, Class</p>
                                                  <div className="dropdown">
                                                    <button
                                                      className="dropdown-toggle final-count"
                                                      data-toggle="dropdown"
                                                      type="button"
                                                      id="dropdownMenuButton1"
                                                      data-bs-toggle="dropdown"
                                                      aria-expanded="false"
                                                    >
                                                      0 Passenger
                                                    </button>
                                                    <div
                                                      className="dropdown-menu dropdown_passenger_info"
                                                      aria-labelledby="dropdownMenuButton1"
                                                    >
                                                      <div className="traveller-calulate-persons">
                                                        <div className="passengers">
                                                          <h6>Passengers</h6>
                                                          <div className="passengers-types">
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count pcount">
                                                                  2
                                                                </span>
                                                                <div className="type-label">
                                                                  <p>Adult</p>
                                                                  <span>
                                                                    12+ yrs
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button
                                                                  type="button"
                                                                  className="btn-add"
                                                                >
                                                                  <i className="fas fa-plus"></i>
                                                                </button>
                                                                <button
                                                                  type="button"
                                                                  className="btn-subtract"
                                                                >
                                                                  <i className="fas fa-minus"></i>
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count ccount">
                                                                  0
                                                                </span>
                                                                <div className="type-label">
                                                                  <p className="fz14 mb-xs-0">
                                                                    Children
                                                                  </p>
                                                                  <span>
                                                                    2 - Less
                                                                    than 12 yrs
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button
                                                                  type="button"
                                                                  className="btn-add-c"
                                                                >
                                                                  <i className="fas fa-plus"></i>
                                                                </button>
                                                                <button
                                                                  type="button"
                                                                  className="btn-subtract-c"
                                                                >
                                                                  <i className="fas fa-minus"></i>
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count incount">
                                                                  0
                                                                </span>
                                                                <div className="type-label">
                                                                  <p className="fz14 mb-xs-0">
                                                                    Infant
                                                                  </p>
                                                                  <span>
                                                                    Less than 2
                                                                    yrs
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button
                                                                  type="button"
                                                                  className="btn-add-in"
                                                                >
                                                                  <i className="fas fa-plus"></i>
                                                                </button>
                                                                <button
                                                                  type="button"
                                                                  className="btn-subtract-in"
                                                                >
                                                                  <i className="fas fa-minus"></i>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="cabin-selection">
                                                          <h6>Cabin Class</h6>
                                                          <div className="cabin-list">
                                                            <button
                                                              type="button"
                                                              className="label-select-btn"
                                                            >
                                                              <span className="muiButton-label">
                                                                Economy
                                                              </span>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="label-select-btn active"
                                                            >
                                                              <span className="muiButton-label">
                                                                Business
                                                              </span>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="label-select-btn"
                                                            >
                                                              <span className="MuiButton-label">
                                                                First Class
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <span>Business</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-lg-12">
                                            <div className="add_multy_form">
                                              <button
                                                type="button"
                                                id="addMulticityRow"
                                              >
                                                + Add another flight
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="top_form_search_button">
                                          <button className="btn btn_theme btn_md">
                                            Search
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tours"
                            role="tabpanel"
                            aria-labelledby="tours-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tour_search_form">
                                  <form action="#!">
                                    <div className="row">
                                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="flight_Search_boxed">
                                          <p>Destination</p>
                                          <input
                                            type="text"
                                            placeholder="Where are you going?"
                                          />
                                          <span>Where are you going?</span>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="form_search_date">
                                          <div className="flight_Search_boxed date_flex_area">
                                            <div className="Journey_date">
                                              <p>Journey date</p>
                                              <input
                                                type="date"
                                                value="2022-05-03"
                                              />
                                              <span>Thursday</span>
                                            </div>
                                            <div className="Journey_date">
                                              <p>Return date</p>
                                              <input
                                                type="date"
                                                value="2022-05-05"
                                              />
                                              <span>Thursday</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                          <p>Passenger, Class</p>
                                          <div className="dropdown">
                                            <button
                                              className="dropdown-toggle final-count"
                                              data-toggle="dropdown"
                                              type="button"
                                              id="dropdownMenuButton1"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              0 Passenger
                                            </button>
                                            <div
                                              className="dropdown-menu dropdown_passenger_info"
                                              aria-labelledby="dropdownMenuButton1"
                                            >
                                              <div className="traveller-calulate-persons">
                                                <div className="passengers">
                                                  <h6>Passengers</h6>
                                                  <div className="passengers-types">
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count pcount">
                                                          2
                                                        </span>
                                                        <div className="type-label">
                                                          <p>Adult</p>
                                                          <span>12+ yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count ccount">
                                                          0
                                                        </span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Children
                                                          </p>
                                                          <span>
                                                            2 - Less than 12 yrs
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add-c"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract-c"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count incount">
                                                          0
                                                        </span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Infant
                                                          </p>
                                                          <span>
                                                            Less than 2 yrs
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add-in"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract-in"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="cabin-selection">
                                                  <h6>Cabin Class</h6>
                                                  <div className="cabin-list">
                                                    <button
                                                      type="button"
                                                      className="label-select-btn"
                                                    >
                                                      <span className="muiButton-label">
                                                        Economy
                                                      </span>
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="label-select-btn active"
                                                    >
                                                      <span className="muiButton-label">
                                                        Business
                                                      </span>
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="label-select-btn"
                                                    >
                                                      <span className="MuiButton-label">
                                                        First Class
                                                      </span>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <span>Business</span>
                                        </div>
                                      </div>
                                      <div className="top_form_search_button">
                                        <button className="btn btn_theme btn_md">
                                          Search
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="hotels"
                            role="tabpanel"
                            aria-labelledby="hotels-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tour_search_form">
                                  <form action="#!">
                                    <div className="row">
                                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="flight_Search_boxed">
                                          <p>Destination</p>
                                          <input
                                            type="text"
                                            placeholder="Where are you going?"
                                          />
                                          <span>Where are you going?</span>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="form_search_date">
                                          <div className="flight_Search_boxed date_flex_area">
                                            <div className="Journey_date">
                                              <p>Journey date</p>
                                              <input
                                                type="date"
                                                value="2022-05-03"
                                              />
                                              <span>Thursday</span>
                                            </div>
                                            <div className="Journey_date">
                                              <p>Return date</p>
                                              <input
                                                type="date"
                                                value="2022-05-05"
                                              />
                                              <span>Thursday</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                          <p>Passenger, Class</p>
                                          <div className="dropdown">
                                            <button
                                              className="dropdown-toggle final-count"
                                              data-toggle="dropdown"
                                              type="button"
                                              id="dropdownMenuButton1"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              0 Passenger
                                            </button>
                                            <div
                                              className="dropdown-menu dropdown_passenger_info"
                                              aria-labelledby="dropdownMenuButton1"
                                            >
                                              <div className="traveller-calulate-persons">
                                                <div className="passengers">
                                                  <h6>Passengers</h6>
                                                  <div className="passengers-types">
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count pcount">
                                                          2
                                                        </span>
                                                        <div className="type-label">
                                                          <p>Adult</p>
                                                          <span>12+ yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count ccount">
                                                          0
                                                        </span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Children
                                                          </p>
                                                          <span>
                                                            2 - Less than 12 yrs
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add-c"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract-c"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count incount">
                                                          0
                                                        </span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Infant
                                                          </p>
                                                          <span>
                                                            Less than 2 yrs
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add-in"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract-in"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="cabin-selection">
                                                  <h6>Cabin Class</h6>
                                                  <div className="cabin-list">
                                                    <button
                                                      type="button"
                                                      className="label-select-btn"
                                                    >
                                                      <span className="muiButton-label">
                                                        Economy
                                                      </span>
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="label-select-btn active"
                                                    >
                                                      <span className="muiButton-label">
                                                        Business
                                                      </span>
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="label-select-btn"
                                                    >
                                                      <span className="MuiButton-label">
                                                        First Class
                                                      </span>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <span>Business</span>
                                        </div>
                                      </div>
                                      <div className="top_form_search_button">
                                        <button className="btn btn_theme btn_md">
                                          Search
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="tab-pane fade"
                            id="apartments"
                            role="tabpanel"
                            aria-labelledby="apartments-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tour_search_form">
                                  <form action="#!">
                                    <div className="row">
                                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="flight_Search_boxed">
                                          <p>Destination</p>
                                          <input
                                            type="text"
                                            placeholder="Where are you going?"
                                          />
                                          <span>Where are you going?</span>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="form_search_date">
                                          <div className="flight_Search_boxed date_flex_area">
                                            <div className="Journey_date">
                                              <p>Journey date</p>
                                              <input
                                                type="date"
                                                value="2022-05-03"
                                              />
                                              <span>Thursday</span>
                                            </div>
                                            <div className="Journey_date">
                                              <p>Return date</p>
                                              <input
                                                type="date"
                                                value="2022-05-05"
                                              />
                                              <span>Thursday</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                          <p>Passenger, Class</p>
                                          <div className="dropdown">
                                            <button
                                              className="dropdown-toggle final-count"
                                              data-toggle="dropdown"
                                              type="button"
                                              id="dropdownMenuButton1"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              0 Traveler
                                            </button>
                                            <div
                                              className="dropdown-menu dropdown_passenger_info"
                                              aria-labelledby="dropdownMenuButton1"
                                            >
                                              <div className="traveller-calulate-persons">
                                                <div className="passengers">
                                                  <h6>Passengers</h6>
                                                  <div className="passengers-types">
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count pcount">
                                                          2
                                                        </span>
                                                        <div className="type-label">
                                                          <p>Adult</p>
                                                          <span>12+ yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count ccount">
                                                          0
                                                        </span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Children
                                                          </p>
                                                          <span>
                                                            2 - Less than 12 yrs
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add-c"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract-c"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count incount">
                                                          0
                                                        </span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Infant
                                                          </p>
                                                          <span>
                                                            Less than 2 yrs
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add-in"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract-in"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="cabin-selection">
                                                  <h6>Cabin Class</h6>
                                                  <div className="cabin-list">
                                                    <button
                                                      type="button"
                                                      className="label-select-btn"
                                                    >
                                                      <span className="muiButton-label">
                                                        Economy
                                                      </span>
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="label-select-btn active"
                                                    >
                                                      <span className="muiButton-label">
                                                        Business
                                                      </span>
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="label-select-btn"
                                                    >
                                                      <span className="MuiButton-label">
                                                        First Class
                                                      </span>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <span>Business</span>
                                        </div>
                                      </div>
                                      <div className="top_form_search_button">
                                        <button className="btn btn_theme btn_md">
                                          Search
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="bus"
                            role="tabpanel"
                            aria-labelledby="bus-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tour_search_form">
                                  <form action="#!">
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <div className="oneway_search_form">
                                          <form action="#!">
                                            <div className="row">
                                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed">
                                                  <p>From</p>
                                                  <input
                                                    type="text"
                                                    value="Dhaka"
                                                  />
                                                  <span>Bus Trtminal</span>
                                                  <div className="plan_icon_posation">
                                                    <i className="fas fa-plane-departure"></i>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed">
                                                  <p>To</p>
                                                  <input
                                                    type="text"
                                                    value="Cox’s Bazar "
                                                  />
                                                  <span>Bus Trtminal</span>
                                                  <div className="plan_icon_posation">
                                                    <i className="fas fa-plane-arrival"></i>
                                                  </div>
                                                  <div className="range_plan">
                                                    <i className="fas fa-exchange-alt"></i>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="form_search_date">
                                                  <div className="flight_Search_boxed date_flex_area">
                                                    <div className="Journey_date">
                                                      <p>Journey date</p>
                                                      <input
                                                        type="date"
                                                        value="2022-05-05"
                                                      />
                                                      <span>Thursday</span>
                                                    </div>
                                                    <div className="Journey_date">
                                                      <p>Return date</p>
                                                      <input
                                                        type="date"
                                                        value="2022-05-08"
                                                      />
                                                      <span>Saturday</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                  <p>Passenger, Class</p>
                                                  <div className="dropdown">
                                                    <button
                                                      className="dropdown-toggle final-count"
                                                      data-toggle="dropdown"
                                                      type="button"
                                                      id="dropdownMenuButton1"
                                                      data-bs-toggle="dropdown"
                                                      aria-expanded="false"
                                                    >
                                                      0 Passenger
                                                    </button>
                                                    <div
                                                      className="dropdown-menu dropdown_passenger_info"
                                                      aria-labelledby="dropdownMenuButton1"
                                                    >
                                                      <div className="traveller-calulate-persons">
                                                        <div className="passengers">
                                                          <h6>Passengers</h6>
                                                          <div className="passengers-types">
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count pcount">
                                                                  2
                                                                </span>
                                                                <div className="type-label">
                                                                  <p>Adult</p>
                                                                  <span>
                                                                    12+ yrs
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button
                                                                  type="button"
                                                                  className="btn-add"
                                                                >
                                                                  <i className="fas fa-plus"></i>
                                                                </button>
                                                                <button
                                                                  type="button"
                                                                  className="btn-subtract"
                                                                >
                                                                  <i className="fas fa-minus"></i>
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count ccount">
                                                                  0
                                                                </span>
                                                                <div className="type-label">
                                                                  <p className="fz14 mb-xs-0">
                                                                    Children
                                                                  </p>
                                                                  <span>
                                                                    2 - Less
                                                                    than 12 yrs
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button
                                                                  type="button"
                                                                  className="btn-add-c"
                                                                >
                                                                  <i className="fas fa-plus"></i>
                                                                </button>
                                                                <button
                                                                  type="button"
                                                                  className="btn-subtract-c"
                                                                >
                                                                  <i className="fas fa-minus"></i>
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count incount">
                                                                  0
                                                                </span>
                                                                <div className="type-label">
                                                                  <p className="fz14 mb-xs-0">
                                                                    Infant
                                                                  </p>
                                                                  <span>
                                                                    Less than 2
                                                                    yrs
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button
                                                                  type="button"
                                                                  className="btn-add-in"
                                                                >
                                                                  <i className="fas fa-plus"></i>
                                                                </button>
                                                                <button
                                                                  type="button"
                                                                  className="btn-subtract-in"
                                                                >
                                                                  <i className="fas fa-minus"></i>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="cabin-selection">
                                                          <h6>Cabin Class</h6>
                                                          <div className="cabin-list">
                                                            <button
                                                              type="button"
                                                              className="label-select-btn"
                                                            >
                                                              <span className="muiButton-label">
                                                                Economy
                                                              </span>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="label-select-btn active"
                                                            >
                                                              <span className="muiButton-label">
                                                                Business
                                                              </span>
                                                            </button>
                                                            <button
                                                              type="button"
                                                              className="label-select-btn"
                                                            >
                                                              <span className="MuiButton-label">
                                                                First Class
                                                              </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <span>Business</span>
                                                </div>
                                              </div>
                                              <div className="top_form_search_button">
                                                <button className="btn btn_theme btn_md">
                                                  Search
                                                </button>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="cruise"
                            role="tabpanel"
                            aria-labelledby="cruise-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="oneway_search_form">
                                  <form action="#!">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed">
                                          <p>From</p>
                                          <input type="text" value="New York" />
                                          <span>
                                            JFK - John F. Kennedy
                                            International...
                                          </span>
                                        </div>
                                      </div>
                                      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed">
                                          <p>To</p>
                                          <input type="text" value="London " />
                                          <span>LCY, London city airport </span>
                                          <div className="range_plan">
                                            <i className="fas fa-exchange-alt"></i>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="form_search_date">
                                          <div className="flight_Search_boxed date_flex_area">
                                            <div className="Journey_date">
                                              <p>Journey date</p>
                                              <input
                                                type="date"
                                                value="2022-05-05"
                                              />
                                              <span>Thursday</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                          <p>Passenger, Class</p>
                                          <div className="dropdown">
                                            <button
                                              className="dropdown-toggle final-count"
                                              data-toggle="dropdown"
                                              type="button"
                                              id="dropdownMenuButton1"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              0 Passenger
                                            </button>
                                            <div
                                              className="dropdown-menu dropdown_passenger_info"
                                              aria-labelledby="dropdownMenuButton1"
                                            >
                                              <div className="traveller-calulate-persons">
                                                <div className="passengers">
                                                  <h6>Passengers</h6>
                                                  <div className="passengers-types">
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count pcount">
                                                          2
                                                        </span>
                                                        <div className="type-label">
                                                          <p>Adult</p>
                                                          <span>12+ yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count ccount">
                                                          0
                                                        </span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Children
                                                          </p>
                                                          <span>
                                                            2 - Less than 12 yrs
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add-c"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract-c"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count incount">
                                                          0
                                                        </span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Infant
                                                          </p>
                                                          <span>
                                                            Less than 2 yrs
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button
                                                          type="button"
                                                          className="btn-add-in"
                                                        >
                                                          <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button
                                                          type="button"
                                                          className="btn-subtract-in"
                                                        >
                                                          <i className="fas fa-minus"></i>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="cabin-selection">
                                                  <h6>Cabin Class</h6>
                                                  <div className="cabin-list">
                                                    <button
                                                      type="button"
                                                      className="label-select-btn"
                                                    >
                                                      <span className="muiButton-label">
                                                        Economy
                                                      </span>
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="label-select-btn active"
                                                    >
                                                      <span className="muiButton-label">
                                                        Business
                                                      </span>
                                                    </button>
                                                    <button
                                                      type="button"
                                                      className="label-select-btn"
                                                    >
                                                      <span className="MuiButton-label">
                                                        First Class
                                                      </span>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <span>Business</span>
                                        </div>
                                      </div>
                                      <div className="top_form_search_button">
                                        <button className="btn btn_theme btn_md">
                                          Search
                                        </button>
                                      </div>
                                    </div>
                                  </form>
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
          </section>

          <section className="section_padding_top position-relative z-1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="heading_left_area">
                    <h2>
                      Go beyond your <span>imagination</span>
                    </h2>
                    <h5>Discover your ideal experience with us</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="imagination_boxed">
                    <a href="#!">
                      <img src={images.imagination1} alt="imagination1" />
                    </a>
                    <div className="offertext">
                      <h3>
                        <a href="#!">
                          7% Discount for all <span>Airlines</span>
                        </a>
                      </h3>
                      <h5>Use Coupon: FLIGHT14OFF.</h5>
                      <h6>Valid till : Jun 18, 2018</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="imagination_boxed">
                    <a href="#!">
                      <img src={images.imagination2} alt="imagination2" />
                    </a>
                    <div className="offertext">
                      <h3>
                        <a href="#!">
                          Travel around<span>the world</span>
                        </a>
                      </h3>
                      <h5>Use Coupon: FLIGHT14OFF.</h5>
                      <h6>Valid till : Jun 18, 2018</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="imagination_boxed">
                    <a href="#!">
                      <img src={images.imagination3} alt="imagination3" />
                    </a>
                    <div className="offertext">
                      <h3>
                        <a href="#!">
                          Luxury resorts<span>top deals</span>
                        </a>
                      </h3>
                      <h5>Use Coupon: FLIGHT14OFF.</h5>
                      <h6>Valid till : Jun 18, 2018</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Top Hotel Destinations --> */}

          <section className="top-destinations">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="section_heading_center">
                    <h2>Top destinations</h2>
                  </div>
                </div>
              </div>
              <OwlCarousel className="owl-carousel" {...owlOptions.option2}>
                <div className="item">
                  <div className="destinations-box-main">
                    <div className="position-relative">
                      <div className="destinations-box-image">
                        <img
                          className="img-fluid h-100 w-100"
                          src={images.top_dest_hotel_251}
                          alt="top_dest_hotel_251"
                        />
                      </div>
                      <div className="destinations-text">
                        <div className="destinations-head d-flex justify-content-between align-items-center pt-0 pb-2 border-bottom mb-2">
                          <h3>
                            <a href="#">London</a>
                          </h3>
                          <h5>
                            <a href="#">470 hotels</a>
                          </h5>
                        </div>
                        <ul className="d-flex justify-content-between">
                          <li className="text-center">
                            <i className="fas fa-car"></i>
                            <h6>Car Park</h6>
                          </li>
                          <li className="text-center">
                            <i className="fas fa-wifi"></i>
                            <h6>Internet</h6>
                          </li>
                          <li className="text-center">
                            <i className="fas fa-utensils"></i>
                            <h6>Breakfast</h6>
                          </li>
                          <li className="text-center">
                            <i className="fas fa-dumbbell"></i>
                            <h6>Fitness center</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="destinations-box-main">
                    <div className="position-relative">
                      <div className="destinations-box-image">
                        <img
                          className="img-fluid h-100 w-100"
                          src={images.top_dest_hotel_251}
                          alt="top_dest_hotel_251"
                        />
                      </div>
                      <div className="destinations-text">
                        <div className="destinations-head d-flex justify-content-between align-items-center pt-0 pb-2 border-bottom mb-2">
                          <h3>
                            <a href="#">London</a>
                          </h3>
                          <h5>
                            <a href="#">470 hotels</a>
                          </h5>
                        </div>
                        <ul className="d-flex justify-content-between">
                          <li className="text-center">
                            <i className="fas fa-car"></i>
                            <h6>Car Park</h6>
                          </li>
                          <li className="text-center">
                            <i className="fas fa-wifi"></i>
                            <h6>Internet</h6>
                          </li>
                          <li className="text-center">
                            <i className="fas fa-utensils"></i>
                            <h6>Breakfast</h6>
                          </li>
                          <li className="text-center">
                            <i className="fas fa-dumbbell"></i>
                            <h6>Fitness center</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="destinations-box-main">
                    <div className="position-relative">
                      <div className="destinations-box-image">
                        <img
                          className="img-fluid h-100 w-100"
                          src={images.top_dest_hotel_798}
                          alt="top_dest_hotel_251"
                        />
                      </div>
                      <div className="destinations-text">
                        <div className="destinations-head d-flex justify-content-between align-items-center pt-0 pb-2 border-bottom mb-2">
                          <h3>
                            <a href="#">London</a>
                          </h3>
                          <h5>
                            <a href="#">470 hotels</a>
                          </h5>
                        </div>
                        <ul className="d-flex justify-content-between">
                          <li className="text-center">
                            <i className="fas fa-car"></i>
                            <h6>Car Park</h6>
                          </li>
                          <li className="text-center">
                            <i className="fas fa-wifi"></i>
                            <h6>Internet</h6>
                          </li>
                          <li className="text-center">
                            <i className="fas fa-utensils"></i>
                            <h6>Breakfast</h6>
                          </li>
                          <li className="text-center">
                            <i className="fas fa-dumbbell"></i>
                            <h6>Fitness center</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="destinations-box-main">
                    <div class="position-relative">
                      <div class="destinations-box-image">
                        <img
                          class="img-fluid h-100 w-100"
                          src={images.top_dest_hotel_251}
                          alt="top_dest_hotel_251"
                        />
                      </div>
                      <div class="destinations-text">
                        <div class="destinations-head d-flex justify-content-between align-items-center pt-0 pb-2 border-bottom mb-2">
                          <h3>
                            <a href="#">London</a>
                          </h3>
                          <h5>
                            <a href="#">470 hotels</a>
                          </h5>
                        </div>
                        <ul class="d-flex justify-content-between">
                          <li class="text-center">
                            <i class="fas fa-car"></i>
                            <h6>Car Park</h6>
                          </li>
                          <li class="text-center">
                            <i class="fas fa-wifi"></i>
                            <h6>Internet</h6>
                          </li>
                          <li class="text-center">
                            <i class="fas fa-utensils"></i>
                            <h6>Breakfast</h6>
                          </li>
                          <li class="text-center">
                            <i class="fas fa-dumbbell"></i>
                            <h6>Fitness center</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </section>

          {/* <!-- Perfect Holidays --> */}

          <section className="perfect-holidays">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="section_heading_center">
                    <h2>Perfect Holidays</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="theme_common_box_two img_hover">
                    <div className="theme_two_box_img">
                      <a href="hotel-details.html">
                        <img
                          src={images.Holidays_img_one}
                          alt="Holidays_img_one"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt"></i>New beach,
                        Thailand
                      </p>
                    </div>
                    <div className="theme_two_box_content">
                      <h4>Meadows & Mountains (Tour Code – KAS 03)</h4>
                      <div className="d-flex justify-content-between align-items-center py-1">
                        <p>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <h5>5 Nights / 6 Days</h5>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-1">
                        <h3>
                          Rs 99.00 <span>Price starts from</span>
                        </h3>
                        <a href="" className="btn_theme">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="theme_common_box_two img_hover">
                    <div className="theme_two_box_img">
                      <a href="hotel-details.html">
                        <img
                          src={images.Holidays_img_two}
                          alt="Holidays_img_two"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt"></i>New beach,
                        Thailand
                      </p>
                    </div>
                    <div className="theme_two_box_content">
                      <h4>Meadows & Mountains (Tour Code – KAS 03)</h4>
                      <div className="d-flex justify-content-between align-items-center py-1">
                        <p>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <h5>5 Nights / 6 Days</h5>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-1">
                        <h3>
                          Rs 99.00 <span>Price starts from</span>
                        </h3>
                        <a href="" className="btn_theme">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="theme_common_box_two img_hover">
                    <div className="theme_two_box_img">
                      <a href="hotel-details.html">
                        <img
                          src={images.Holidays_img_one}
                          alt="Holidays_img_one"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt"></i>New beach,
                        Thailand
                      </p>
                    </div>
                    <div className="theme_two_box_content">
                      <h4>Meadows & Mountains (Tour Code – KAS 03)</h4>
                      <div className="d-flex justify-content-between align-items-center py-1">
                        <p>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <h5>5 Nights / 6 Days</h5>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-1">
                        <h3>
                          Rs 99.00 <span>Price starts from</span>
                        </h3>
                        <a href="" className="btn_theme">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="theme_common_box_two img_hover">
                    <div className="theme_two_box_img">
                      <a href="hotel-details.html">
                        <img
                          src={images.Holidays_img_two}
                          alt="Holidays_img_two"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt"></i>New beach,
                        Thailand
                      </p>
                    </div>
                    <div className="theme_two_box_content">
                      <h4>Meadows & Mountains (Tour Code – KAS 03)</h4>
                      <div className="d-flex justify-content-between align-items-center py-1">
                        <p>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <h5>5 Nights / 6 Days</h5>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-1">
                        <h3>
                          Rs 99.00 <span>Price starts from</span>
                        </h3>
                        <a href="" className="btn_theme">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="theme_common_box_two img_hover">
                    <div className="theme_two_box_img">
                      <a href="hotel-details.html">
                        <img
                          src={images.Holidays_img_one}
                          alt="Holidays_img_one"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt"></i>New beach,
                        Thailand
                      </p>
                    </div>
                    <div className="theme_two_box_content">
                      <h4>Meadows & Mountains (Tour Code – KAS 03)</h4>
                      <div className="d-flex justify-content-between align-items-center py-1">
                        <p>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <h5>5 Nights / 6 Days</h5>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-1">
                        <h3>
                          Rs 99.00 <span>Price starts from</span>
                        </h3>
                        <a href="" className="btn_theme">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="theme_common_box_two img_hover">
                    <div className="theme_two_box_img">
                      <a href="hotel-details.html">
                        <img
                          src={images.Holidays_img_two}
                          alt="Holidays_img_two"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt"></i>New beach,
                        Thailand
                      </p>
                    </div>
                    <div className="theme_two_box_content">
                      <h4>Meadows & Mountains (Tour Code – KAS 03)</h4>
                      <div className="d-flex justify-content-between align-items-center py-1">
                        <p>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <h5>5 Nights / 6 Days</h5>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-1">
                        <h3>
                          Rs 99.00 <span>Price starts from</span>
                        </h3>
                        <a href="" className="btn_theme">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Top Hotel Destinations --> */}

          <section className="tour_style">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="section_heading_center">
                    <h2>Top Airlines</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="tour_style_box text-center">
                    <img src={images.tour_one} alt="tour_one" />
                    <h4>Theme Parks</h4>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="tour_style_box text-center">
                    <img src={images.tour_two} alt="tour_two" />

                    <h4>Theme Parks</h4>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="tour_style_box text-center">
                    <img src={images.tour_three} alt="tour_three" />

                    <h4>Theme Parks</h4>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="tour_style_box text-center">
                    <img src={images.tour_four} alt="tour_four" />

                    <h4>Theme Parks</h4>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="tour_style_box text-center">
                    <img src={images.tour_five} alt="tour_five" />

                    <h4>Theme Parks</h4>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div className="tour_style_box text-center">
                    <img src={images.tour_six} alt="tour_six" />

                    <h4>Theme Parks</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Perfect Holidays --> */}

          <section className="perfect-holidays top-airline">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="section_heading_center">
                    <h2>Top Airlines</h2>
                  </div>
                </div>
              </div>
              <OwlCarousel className="owl-carousel" {...owlOptions.option3}>
                <div className="item">
                  <div className="tour_style_box text-center">
                    <img src={images.airlineone} alt="airlineone" />
                    <h4>QATAR AIRWAYS</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="tour_style_box text-center">
                    <img src={images.airlinetwo} alt="airlinetwo" />

                    <h4>JET AIRWAYS</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="tour_style_box text-center">
                    <img src={images.airlineone} alt="airlineone" />

                    <h4>QATAR AIRWAYS</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="tour_style_box text-center">
                    <img src={images.airlinetwo} alt="airlinetwo" />

                    <h4>JET AIRWAYS</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="tour_style_box text-center">
                    <img src={images.airlineone} alt="airlineone" />

                    <h4>QATAR AIRWAYS</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="tour_style_box text-center">
                    <img src={images.airlinetwo} alt="airlinetwo" />
                    <h4>JET AIRWAYS</h4>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </section>

          {/* <!-- why choose us --> */}

          <section className="why-choose-us">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="section_heading_center">
                    <h2>Why Choose Us</h2>
                  </div>
                </div>
              </div>
              <div className="row mt-md-3 mt-0">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="text-start choose-box">
                    <i className="fas fa-tag"></i>
                    <h6>Best Price Guaranteed</h6>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="text-start choose-box">
                    <i className="far fa-smile"></i>
                    <h6>99.9% Customer Satisfaction</h6>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="text-start choose-box">
                    <i className="fas fa-headphones"></i>
                    <h6>24/7 Customer Support</h6>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- newsletter --> */}

          <section id="cta_area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="cta_left">
                    <div className="cta_icon">
                      <img src={images.email} alt="email" />
                    </div>
                    <div className="cta_content">
                      <h4>Get the latest news and offers</h4>
                      <h2>Subscribe to our newsletter</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="cat_form">
                    <form id="cta_form_wrappper">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your mail address"
                        />
                        <button className="btn btn_theme btn_md" type="button">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- footer --> */}

          <footer>
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="footer_logo">
                    <img src={images.logo} alt="logo" />
                    <p>
                      #236/92/1A, 1st Floor, Venkataadri IT Park, Electronic
                      City, Bangalore,Karnataka 560100, India.
                    </p>
                    <ul class="topbar-list d-lg-none d-md-none d-block mb-md-0 mb-4">
                      <li>
                        <a href="#!">
                          <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="#!">
                          <i
                            class="fab fa-twitter-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <a href="#!">
                          <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="#!">
                          <i class="fab fa-linkedin" aria-hidden="true"></i>
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
                </div>
                <div class="col-lg-3 col-md-6">
                  <h5>About Us</h5>
                  <ul>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Contact Us </a>
                    </li>
                    <li>
                      <a href="#">Company </a>
                    </li>
                    <li>
                      <a href="#">Testimonials </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                  <h5>Quick Links</h5>
                  <ul>
                    <li>
                      <a href="#">Flights</a>
                    </li>
                    <li>
                      <a href="#">Hotels </a>
                    </li>
                    <li>
                      <a href="#">Tours </a>
                    </li>
                    <li>
                      <a href="#">Bus </a>
                    </li>
                    <li>
                      <a href="#">Cab </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                  <h5>Legal</h5>
                  <ul>
                    <li>
                      <a href="#">Terms & Conditions </a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy </a>
                    </li>
                    <li>
                      <a href="#">User Agreement </a>
                    </li>
                    <li>
                      <a href="#">Disclaimer Policy </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="copyright">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-6 col-md-6">
                    <p class="m-md-0 mb-2 mt-0">
                      © 2024 travelomatix.com All rights reserved.
                    </p>
                  </div>
                  <div class="col-lg-6 text-md-end text-center col-md-6">
                    <img src={images.payment} alt="payment" />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default HomePage;
