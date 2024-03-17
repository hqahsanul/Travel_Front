import React, { useState, useEffect } from "react";
import images from "../../assets/images";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import axios from "axios";
import ApiPath from "../../utils/ApiPath";
import { apiPost, apiGet } from "../../utils/ApiFetch";
import LoaderContext from "../../context/LoaderContext";
import ListContext from "../../context/ListContext";
import { useLocation } from "react-router-dom";

const HotelDetailsPage = () => {
  const [hotelDetail, setHotelDetail] = useState();

  const location = useLocation();

  const { hotelId } = location.state;

  useEffect(() => {
    console.log("hotelId: ", hotelId);

    const getHotelDetails = async () => {
      const details = await axios.get(
        `${import.meta.env.VITE_APP_API_BASE_URL}${
          ApiPath.getSingleHotelDetail
        }${hotelId}`
      );

      const Data =
        details.data?.data?.HotelDetails?.HotelInfoResult?.HotelDetails;
      setHotelDetail(Data);
      console.log(
        "details",
        details.data?.data?.HotelDetails?.HotelInfoResult?.HotelDetails
      );
    };
    if (hotelId) {
      getHotelDetails();
    }
  }, []);

  return (
    <>
      <Navbar />
      {hotelDetail ? (
        <>
          <section className="hotel_detail_section">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="hotel_details_left">
                    <div className="details_hotel_box">
                      <div className="location_box">
                        <h2>{hotelDetail.HotelName}</h2>
                        <div className="location_fx d-flex justify-content-between">
                          <p>
                            <i className="fa-solid fa-location-dot"></i>
                            {hotelDetail.Address}
                          </p>
                          <ul className="d-flex">
                            {[...Array(Number(hotelDetail.StarRating))].map(
                              (_, index) => (
                                <li key={index}>
                                  <i className="fa-solid fa-star"></i>
                                </li>
                              )
                            )}
                            {[...Array(5 - Number(hotelDetail.StarRating))].map(
                              (_, index) => (
                                <li
                                  key={index + Number(hotelDetail.StarRating)}
                                >
                                  <i className="fa-regular fa-star"></i>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                      <div className="details_img">
                        <figure>
                          <img
                            src={hotelDetail.Images[0]}
                            alt="hotelDetailImage"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hotel_details_right">
                    <div className="htlfull_dtls">
                      <div className="htlamtnyt">
                        <h2 className="amthtlrs">
                          <strong> Rs </strong>
                          {
                            hotelDetail.first_room_details?.Price
                              ?.TBO_PublishedPriceRoundedOff
                          }
                          <span className="pernyt">/ Per Night</span>
                        </h2>
                        <div className="stdrmac">
                          <span className="stdnonaclt">
                            {hotelDetail.first_room_details?.room_name}
                          </span>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="htlamtnytstd">
                        <h4 className="amthtlrsstd">
                          <i className="" aria-hidden="true"></i>Rs&nbsp;19259{" "}
                          <span className="pernytdet">( 15 Nights )</span>
                        </h4>
                        <div className="stdrmac">
                          <span className="stdnonacltfre">
                            Free Cancellation
                          </span>
                          <span className="untdate">till 15 Mar 2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="cheoutdv">
                      <div className="chkdatetacell">
                        <span className="chkin">Check-in</span>
                        <span className="chkdate">22 Mar 2024</span>
                      </div>
                      <div className="chkdatetacell">
                        <span className="chkin">Check-out</span>
                        <span className="chkdate">06 Apr 2024</span>
                      </div>
                      <div className="chkdatetacell">
                        <span className="chkin">Room Guests</span>
                        <span className="chkdate">1 room &amp; 2 adults </span>
                      </div>
                    </div>
                    <div className="book-form">
                      <button
                        className="bookallbtn htlbkftsz"
                        type="submit"
                        id="selectroom"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="show_section">
            <div className="container">
              <div className="show_box">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOnes">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOnes"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Description
                      </button>
                    </h2>
                    <div
                      id="collapseOnes"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOnes"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="first_content">
                          <strong>Property Description:</strong>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: hotelDetail.Description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwos">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwos"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Rooms
                      </button>
                    </h2>
                    <div
                      id="collapseTwos"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwos"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="romconoutdv">
                          <div className="row">
                            <div className="col-sm-4 col-xs-6 nopad full_mobile">
                              <div className="romsfst">
                                {" "}
                                <span className="romtypestd">
                                  1 x executive room
                                </span>
                                <span className="noof_adult">
                                  <i
                                    className="fa fa-users"
                                    aria-hidden="true"
                                  ></i>
                                  2 <span className="mobile_hide">adults</span>
                                </span>
                                <span className="noof_adult">
                                  <i
                                    className="fa fa-hotel"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="mobile_hide">
                                    No Of Rooms:
                                  </span>
                                  1
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-4 col-xs-6 nopad full_mobile">
                              <span className="romtypefrecan">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Free Cancellation<p> till 09 Apr 2024</p>
                              </span>
                              <a href="#">View Cancellation Policy</a>
                              <span className="noof_ave">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                Room only
                              </span>
                            </div>
                            <div className="col-sm-4 col-xs-6 nopad full_mobile">
                              <ul className="d-flex">
                                <li>
                                  <p className="romtyprice">Rs 1212 </p>
                                  <p className="ninenyt">( 1 Night )</p>
                                </li>
                                <li>
                                  <button
                                    className="b-btn bookallbtn book-now-btn rombtndv"
                                    type="submit"
                                  >
                                    Book
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="romconoutdv">
                          <div className="row">
                            <div className="col-sm-4 col-xs-6 nopad full_mobile">
                              <div className="romsfst">
                                {" "}
                                <span className="romtypestd">
                                  1 x executive room
                                </span>
                                <span className="noof_adult">
                                  <i
                                    className="fa fa-users"
                                    aria-hidden="true"
                                  ></i>
                                  2 <span className="mobile_hide">adults</span>
                                </span>
                                <span className="noof_adult">
                                  <i
                                    className="fa fa-hotel"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="mobile_hide">
                                    No Of Rooms:
                                  </span>
                                  1
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-4 col-xs-6 nopad full_mobile">
                              <span className="romtypefrecan">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Free Cancellation<p> till 09 Apr 2024</p>
                              </span>
                              <a href="#">View Cancellation Policy</a>
                              <span className="noof_ave">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                Room only
                              </span>
                            </div>
                            <div className="col-sm-4 col-xs-6 nopad full_mobile">
                              <ul className="d-flex">
                                <li>
                                  <p className="romtyprice">Rs 1212 </p>
                                  <p className="ninenyt">( 1 Night )</p>
                                </li>
                                <li>
                                  <button
                                    className="b-btn bookallbtn book-now-btn rombtndv"
                                    type="submit"
                                  >
                                    Book
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="romconoutdv">
                          <div className="row">
                            <div className="col-sm-4 col-xs-6 nopad full_mobile">
                              <div className="romsfst">
                                {" "}
                                <span className="romtypestd">
                                  1 x executive room
                                </span>
                                <span className="noof_adult">
                                  <i
                                    className="fa fa-users"
                                    aria-hidden="true"
                                  ></i>
                                  2 <span className="mobile_hide">adults</span>
                                </span>
                                <span className="noof_adult">
                                  <i
                                    className="fa fa-hotel"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="mobile_hide">
                                    No Of Rooms:
                                  </span>
                                  1
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-4 col-xs-6 nopad full_mobile">
                              <span className="romtypefrecan">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Free Cancellation<p> till 09 Apr 2024</p>
                              </span>
                              <a href="#">View Cancellation Policy</a>
                              <span className="noof_ave">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                Room only
                              </span>
                            </div>
                            <div className="col-sm-4 col-xs-6 nopad full_mobile">
                              <ul className="d-flex">
                                <li>
                                  <p className="romtyprice">Rs 1212 </p>
                                  <p className="ninenyt">( 1 Night )</p>
                                </li>
                                <li>
                                  <button
                                    className="b-btn bookallbtn book-now-btn rombtndv"
                                    type="submit"
                                  >
                                    Book
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="innertabs">
                <h3 className="mobile_view_header">Facilities</h3>
                <div className="padinnerntb htlfac_lity">
                  <div className="row">
                    {hotelDetail?.HotelFacilities.map((item) => (
                      <div className="col-xs-4 col-md-3 nopad">
                        <div className="facltyid">
                          <span
                            className="glyphicon glyphicon-check"
                            style={{ color: "#00a0e0 " }}
                          ></span>
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <h3>Error While getting of hotel</h3>
      )}

      <Footer />
    </>
  );
};

export default HotelDetailsPage;
