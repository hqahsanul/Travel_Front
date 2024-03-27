import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import images from "../../assets/images";

const BusList = () => {
    return (
        <>
            <Navbar />
            <section className="listing_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="list_left list_warp_leff">
                                <h2>From</h2>
                                <p>Delhi</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="list_right list_warp">
                                <h2>To</h2>
                                <p>Mumbai</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="list_right list_warp">
                                <h2>Journey Date</h2>
                                <p>25th Mar 2024</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="btn_serch">
                                <a href="#" className="btn btn-info modify">Modify Search</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="listing_desbord buslisting_bord">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 slidebar_none slidebar_bus">
                            <div className="sidebar_left">
                                <div className="serch_top d-flex">
                                    <span>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </span>
                                    <p>buses found</p>
                                </div>
                                <div className="rest_btn">
                                    <a href="#" className="btn btn-info">RESET ALL</a>
                                </div>
                                <div className="price_box">
                                    <a href="#" className="collapsebtn">Price</a>
                                    <p>Rs2615 - Rs95125</p>
                                    <div className="line_box">
                                        <span className="cricle_left"></span>
                                        <span className="cricle_left right"></span>
                                    </div>
                                </div>
                                <div className="septor"></div>
                                <div className="rangebox price_box ">
                                    <a href="#" className="collapsebtn">Bus Type</a>
                                    <ul className="d-flex stops_box">
                                        <li>0 stop</li>
                                        <li>0 stop</li>
                                        <li>0 stop</li>
                                    </ul>
                                </div>
                                <div className="septor"></div>
                                <div className="time_box price_box">
                                    <a href="javascript:void(0)" className="collapsebtn col-two">Departure Time</a>
                                    <div className="add_drop2">
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv">Early Morning</label>
                                            </div>
                                            <div className="flitsprt mng2"></div>
                                            <span className="htlcount">6-12PM</span>
                                        </div>
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv">Morning</label>
                                            </div>
                                            <div className="flitsprt mng2"></div>
                                            <span className="htlcount">6-12PM</span>
                                        </div>
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv">Mid-Day</label>
                                            </div>
                                            <div className="flitsprt mng2"></div>
                                            <span className="htlcount">6-12PM</span>
                                        </div>
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv">Evening</label>
                                            </div>
                                            <div className="flitsprt mng2"></div>
                                            <span className="htlcount">6-12PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="septor"></div>
                                <div className="time_box price_box">
                                    <a href="javascript:void(0)" className="collapsebtn col-second">Arrival Time</a>
                                    <div className="add_drop1">
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv">Early Morning</label>
                                            </div>
                                            <div className="flitsprt mng2"></div>
                                            <span className="htlcount">6-12PM</span>
                                        </div>
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv">Morning</label>
                                            </div>
                                            <div className="flitsprt mng2"></div>
                                            <span className="htlcount">6-12PM</span>
                                        </div>
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv">Mid-Day</label>
                                            </div>
                                            <div className="flitsprt mng2"></div>
                                            <span className="htlcount">6-12PM</span>
                                        </div>
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv">Evening</label>
                                            </div>
                                            <div className="flitsprt mng2"></div>
                                            <span className="htlcount">6-12PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="septor"></div>
                                <div className="time_box price_box">
                                    <a href="javascript:void(0)" className="collapsebtn col-first">Operators</a>
                                    <div className="add_drop">
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv"> Ashok Travels Mandsaur Group</label>
                                            </div>
                                        </div>
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv"> B R Travels</label>
                                            </div>
                                        </div>
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv"> Chanakya Travels Agency</label>
                                            </div>
                                        </div>
                                        <div className="starin">
                                            <div className="tmxdv">
                                                <input type="checkbox" className="time-category hidecheck" value="2" />
                                                <label className="ckboxdv"> Shrinath® Travel Agency Pvt. Ltd.</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="sidebar_right">
                                <div className="airline_box">
                                    <ul className="sortul d-flex">
                                        <li className="filter_none">
                                            <i className="fa-solid fa-filter"></i>
                                        </li>
                                        <li className="sortli hide_lines">
                                            <a className="sorta name-l-2-h loader asc">
                                                <i className="fa-solid fa-bus"></i>
                                                <strong>Operators</strong>
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
                                        <li className="li_inner">
                                            <div className="details_inner_box">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <ul className="d-flex">
                                                            <li className="width1">
                                                                <div className="bus_book d-flex">
                                                                    <div className="bus_book_left">
                                                                        <img src={images.locationBus} alt="img" className="z_img" />
                                                                    </div>
                                                                    <div className="bus_book_right">
                                                                        <h2>Shrinath® Travel Agency Pvt. Ltd.</h2>
                                                                        <span>AC Sleeper (2+1)</span>
                                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal4">Canc.Policy</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="width2">
                                                                <h2>11:25 PM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal2">Pickups</a>
                                                            </li>
                                                            <li className="width3">
                                                                <div className="insidesame">
                                                                    <i className="fa-solid fa-arrow-right-long"></i>
                                                                    <div className="stop-value">33h 40m </div>
                                                                </div>
                                                            </li>
                                                            <li className="width4">
                                                                <h2>09:05 AM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal1">Dropoffs</a>
                                                            </li>
                                                            <li className="width5">
                                                                <img src={images.carSeat} alt="img" className="y_img" />
                                                                <p>36 seats</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="booK_warp">
                                                            <h3>Rs4999</h3>
                                                            <a href="#" className="btn btn-info">Select Seats</a>
                                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">View More...</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="li_inner">
                                            <div className="details_inner_box">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <ul className="d-flex">
                                                            <li className="width1">
                                                                <div className="bus_book d-flex">
                                                                    <div className="bus_book_left">
                                                                        <img src={images.locationBus} alt="img" className="z_img" />
                                                                    </div>
                                                                    <div className="bus_book_right">
                                                                        <h2>Shrinath® Travel Agency Pvt. Ltd.</h2>
                                                                        <span>AC Sleeper (2+1)</span>
                                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal4">Canc.Policy</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="width2">
                                                                <h2>11:25 PM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal2">Pickups</a>
                                                            </li>
                                                            <li className="width3">
                                                                <div className="insidesame">
                                                                    <i className="fa-solid fa-arrow-right-long"></i>
                                                                    <div className="stop-value">33h 40m </div>
                                                                </div>
                                                            </li>
                                                            <li className="width4">
                                                                <h2>09:05 AM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal1">Dropoffs</a>
                                                            </li>
                                                            <li className="width5">
                                                                <img src={images.carSeat} alt="img" className="y_img" />
                                                                <p>36 seats</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="booK_warp">
                                                            <h3>Rs4999</h3>
                                                            <a href="#" className="btn btn-info">Select Seats</a>
                                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">View More...</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="li_inner">
                                            <div className="details_inner_box">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <ul className="d-flex">
                                                            <li className="width1">
                                                                <div className="bus_book d-flex">
                                                                    <div className="bus_book_left">
                                                                        <img src={images.locationBus} alt="img" className="z_img" />
                                                                    </div>
                                                                    <div className="bus_book_right">
                                                                        <h2>Shrinath® Travel Agency Pvt. Ltd.</h2>
                                                                        <span>AC Sleeper (2+1)</span>
                                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal4">Canc.Policy</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="width2">
                                                                <h2>11:25 PM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal2">Pickups</a>
                                                            </li>
                                                            <li className="width3">
                                                                <div className="insidesame">
                                                                    <i className="fa-solid fa-arrow-right-long"></i>
                                                                    <div className="stop-value">33h 40m </div>
                                                                </div>
                                                            </li>
                                                            <li className="width4">
                                                                <h2>09:05 AM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal1">Dropoffs</a>
                                                            </li>
                                                            <li className="width5">
                                                                <img src={images.carSeat} alt="img" className="y_img" />
                                                                <p>36 seats</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="booK_warp">
                                                            <h3>Rs4999</h3>
                                                            <a href="#" className="btn btn-info">Select Seats</a>
                                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">View More...</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="li_inner">
                                            <div className="details_inner_box">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <ul className="d-flex">
                                                            <li className="width1">
                                                                <div className="bus_book d-flex">
                                                                    <div className="bus_book_left">
                                                                        <img src={images.locationBus} alt="img" className="z_img" />
                                                                    </div>
                                                                    <div className="bus_book_right">
                                                                        <h2>Shrinath® Travel Agency Pvt. Ltd.</h2>
                                                                        <span>AC Sleeper (2+1)</span>
                                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal4">Canc.Policy</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="width2">
                                                                <h2>11:25 PM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal2">Pickups</a>
                                                            </li>
                                                            <li className="width3">
                                                                <div className="insidesame">
                                                                    <i className="fa-solid fa-arrow-right-long"></i>
                                                                    <div className="stop-value">33h 40m </div>
                                                                </div>
                                                            </li>
                                                            <li className="width4">
                                                                <h2>09:05 AM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal1">Dropoffs</a>
                                                            </li>
                                                            <li className="width5">
                                                                <img src={images.carSeat} alt="img" className="y_img" />
                                                                <p>36 seats</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="booK_warp">
                                                            <h3>Rs4999</h3>
                                                            <a href="#" className="btn btn-info">Select Seats</a>
                                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">View More...</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="li_inner">
                                            <div className="details_inner_box">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <ul className="d-flex">
                                                            <li className="width1">
                                                                <div className="bus_book d-flex">
                                                                    <div className="bus_book_left">
                                                                        <img src={images.locationBus} alt="img" className="z_img" />
                                                                    </div>
                                                                    <div className="bus_book_right">
                                                                        <h2>Shrinath® Travel Agency Pvt. Ltd.</h2>
                                                                        <span>AC Sleeper (2+1)</span>
                                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal4">Canc.Policy</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="width2">
                                                                <h2>11:25 PM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal2">Pickups</a>
                                                            </li>
                                                            <li className="width3">
                                                                <div className="insidesame">
                                                                    <i className="fa-solid fa-arrow-right-long"></i>
                                                                    <div className="stop-value">33h 40m </div>
                                                                </div>
                                                            </li>
                                                            <li className="width4">
                                                                <h2>09:05 AM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal1">Dropoffs</a>
                                                            </li>
                                                            <li className="width5">
                                                                <img src={images.carSeat} alt="img" className="y_img" />
                                                                <p>36 seats</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="booK_warp">
                                                            <h3>Rs4999</h3>
                                                            <a href="#" className="btn btn-info">Select Seats</a>
                                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">View More...</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="li_inner">
                                            <div className="details_inner_box">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <ul className="d-flex">
                                                            <li className="width1">
                                                                <div className="bus_book d-flex">
                                                                    <div className="bus_book_left">
                                                                        <img src={images.locationBus} alt="img" className="z_img" />
                                                                    </div>
                                                                    <div className="bus_book_right">
                                                                        <h2>Shrinath® Travel Agency Pvt. Ltd.</h2>
                                                                        <span>AC Sleeper (2+1)</span>
                                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal4">Canc.Policy</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="width2">
                                                                <h2>11:25 PM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal2">Pickups</a>
                                                            </li>
                                                            <li className="width3">
                                                                <div className="insidesame">
                                                                    <i className="fa-solid fa-arrow-right-long"></i>
                                                                    <div className="stop-value">33h 40m </div>
                                                                </div>
                                                            </li>
                                                            <li className="width4">
                                                                <h2>09:05 AM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal1">Dropoffs</a>
                                                            </li>
                                                            <li className="width5">
                                                                <img src={images.carSeat} alt="img" className="y_img" />
                                                                <p>36 seats</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="booK_warp">
                                                            <h3>Rs4999</h3>
                                                            <a href="#" className="btn btn-info">Select Seats</a>
                                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">View More...</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="li_inner">
                                            <div className="details_inner_box">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <ul className="d-flex">
                                                            <li className="width1">
                                                                <div className="bus_book d-flex">
                                                                    <div className="bus_book_left">
                                                                        <img src={images.locationBus} alt="img" className="z_img" />
                                                                    </div>
                                                                    <div className="bus_book_right">
                                                                        <h2>Shrinath® Travel Agency Pvt. Ltd.</h2>
                                                                        <span>AC Sleeper (2+1)</span>
                                                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal4">Canc.Policy</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="width2">
                                                                <h2>11:25 PM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal2">Pickups</a>
                                                            </li>
                                                            <li className="width3">
                                                                <div className="insidesame">
                                                                    <i className="fa-solid fa-arrow-right-long"></i>
                                                                    <div className="stop-value">33h 40m </div>
                                                                </div>
                                                            </li>
                                                            <li className="width4">
                                                                <h2>09:05 AM</h2>
                                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal1">Dropoffs</a>
                                                            </li>
                                                            <li className="width5">
                                                                <img src={images.carSeat} alt="img" className="y_img" />
                                                                <p>36 seats</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="booK_warp">
                                                            <h3>Rs4999</h3>
                                                            <a href="#" className="btn btn-info">Select Seats</a>
                                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">View More...</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <Footer />


            <div className="modal fade first_popup" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Other Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="top_popup">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="left_popup">
                                            <h4>Boarding Point</h4>
                                            <ul>
                                                <li>Morigate</li>
                                                <li>Others</li>
                                                <li>Others</li>
                                                <li>Others</li>
                                                <li>Dhaula Kuan</li>
                                                <li>Others</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mid_popup">
                                            <h4>Land Mark</h4>
                                            <ul>
                                                <li>Morigate</li>
                                                <li>Others</li>
                                                <li>Others</li>
                                                <li>Others</li>
                                                <li>Dhaula Kuan</li>
                                                <li>Others</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="right_popup">
                                            <h4>Time</h4>
                                            <ul>
                                                <li>2024-03-25 Time- 15:15:00</li>
                                                <li>2024-03-25 Time- 15:30:00</li>
                                                <li>2024-03-25 Time- 15:35:00</li>
                                                <li>2024-03-25 Time- 16:00:00</li>
                                                <li>2024-03-25 Time- 16:30:00</li>
                                                <li>2024-03-25 Time- 16:45:00</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="end_popup">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="end_popup_inner">
                                                <h4>Droping Point </h4>
                                                <ul>
                                                    <li>Borivali(4 hours bus stopped at vapi) </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="end_popup_inner">
                                                <h4>Land Mark</h4>
                                                <ul>
                                                    <li>Borivali(4 hours bus stopped at vapi)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="end_popup_inner">
                                                <h4>Time</h4>
                                                <ul>
                                                    <li>2024-03-27 Time- 05:05:00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade first_popup" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Bus Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="top_popup">
                                <h4>NA</h4>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade first_popup" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Bus Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="top_popup">
                                <h4>NA</h4>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade first_popup" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cancellation Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="top_popup">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="left_popup">
                                            <h4>Cancellation From</h4>
                                            <ul>
                                                <li>2024-03-21 Time- 23:21:05</li>
                                                <li>2024-03-24 Time- 23:25:00</li>
                                                <li>2024-03-25 Time- 07:25:00</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mid_popup">
                                            <h4>Cancellation To</h4>
                                            <ul>
                                                <li>2024-03-24 Time- 23:25:00</li>
                                                <li>2024-03-25 Time- 07:25:00</li>
                                                <li>2024-03-27 Time- 09:05:00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="right_popup">
                                            <h4>Cancellation Policy</h4>
                                            <ul>
                                                <li>Till 23:25 on 24 Mar 2024</li>
                                                <li>Between 23:25 on 24 Mar 2024 - 07:25 on 25 Mar 2024</li>
                                                <li>After 07:25 on 25 Mar 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="right_popup">
                                            <h4>Cancellation Charges</h4>
                                            <ul>
                                                <li>13 %</li>
                                                <li>53 %</li>
                                                <li>100 %</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusList;
