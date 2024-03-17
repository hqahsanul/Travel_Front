import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import images from "../../assets/images";

const TourDetailsPage = () => {
  return (
    <>
      <Navbar />
      <section class="details_section">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="details_section_left">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home1"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      OverView
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Detailed Itinerary
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab3"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Terms & Conditions
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="gallery-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#gallery"
                      type="button"
                      role="tab"
                      aria-controls="gallery"
                      aria-selected="false"
                    >
                      Gallery
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="rating-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#rating"
                      type="button"
                      role="tab"
                      aria-controls="rating"
                      aria-selected="false"
                    >
                      Rating
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home1"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="innertabsxl">
                      <div class="comenhtlsum"></div>
                      <div class="linebrk"></div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel2"
                    aria-labelledby="profile-tab"
                  >
                    <div class="innertabsxl">
                      <div class="htlrumrowxl">
                        <div class="hotelistrowhtl">
                          <div class="daytrip">
                            <strong>Day</strong>
                            <b>1</b>
                          </div>
                          <div class="clear"></div>
                          <div class="dayecd">
                            <div class="hotelhed">Arrive Srinagar</div>
                            <span class="singleadrspara">
                              Upon arrival in Srinagar . Transfer from Airport
                              to Houseboat. Afternoon Shikara ride on Dal Lake.
                              Meals and overnight at Houseboat.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="htlrumrowxl">
                        <div class="hotelistrowhtl">
                          <div class="daytrip">
                            <strong>Day</strong>
                            <b>2</b>
                          </div>
                          <div class="clear"></div>
                          <div class="dayecd">
                            <div class="hotelhed">
                              Srinagar - Sonmarg - Srinagar ( 85Kms x 2 )
                            </div>
                            <span class="singleadrspara">
                              After Early breakfast full day excursion to
                              Sonmarg. Sonmarg : At an altitude of 2740 Meteres
                              . The town lies in the heart of a beautiful valley
                              carved by the river Sindh. The meadow of gold
                              strewn with the loveliest of alpine flowers and
                              surrounded by towering mountains and Glaciers.
                              Evening return to Houseboat . Meals &amp;
                              Overnight at Deluxe Houseboat.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="htlrumrowxl">
                        <div class="hotelistrowhtl">
                          <div class="daytrip">
                            <strong>Day</strong>
                            <b>3</b>
                          </div>
                          <div class="clear"></div>
                          <div class="dayecd">
                            <div class="hotelhed">In Srinagar</div>
                            <span class="singleadrspara">
                              Afternoon sightseeing of Mughal Gardens visiting
                              Nishat Garden, Shalimar Garden &amp;
                              Shankaracharaya Temple. Meals and overnight at
                              Houseboat.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="htlrumrowxl">
                        <div class="hotelistrowhtl">
                          <div class="daytrip">
                            <strong>Day</strong>
                            <b>4</b>
                          </div>
                          <div class="clear"></div>
                          <div class="dayecd">
                            <div class="hotelhed">
                              Srinagar - Pahalgam (92 Kms )
                            </div>
                            <span class="singleadrspara">
                              After early breakfast&nbsp; drive for overnight
                              trip to Pahalgam. Pahalgam : Also known as the
                              land of shepherds. The mountain town is located
                              along the bank of River Lidder. Starting point of
                              many treks and Amarnath cave. Meals and
                              overnight&nbsp;at Hotel in
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="htlrumrowxl">
                        <div class="hotelistrowhtl">
                          <div class="daytrip">
                            <strong>Day</strong>
                            <b>5</b>
                          </div>
                          <div class="clear"></div>
                          <div class="dayecd">
                            <div class="hotelhed">
                              Pahalgam&nbsp;- Gulmarg (132)
                            </div>
                            <span class="singleadrspara">
                              After breakfast check out from the hotel in time
                              for overnight trip to Gulmarg. Gulmarg : At an
                              altitude of 2730 Meteres . The name means Meadows
                              of Flowers and in spring it's just that. Also
                              known as India's premier skiing resort &amp; Golf
                              course. Recently a new cable car project has been
                              commissioned know as GANDOLA which goes upto
                              Khilanmarg/Affarwat. One can have panaromic view
                              of snow clad mountain ranges. Gulmarg is also
                              famous for Sunset. Meals &amp; Overnight at Hotel
                              in Gulmarg.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="htlrumrowxl">
                        <div class="hotelistrowhtl">
                          <div class="daytrip">
                            <strong>Day</strong>
                            <b>6</b>
                          </div>
                          <div class="clear"></div>
                          <div class="dayecd">
                            <div class="hotelhed">
                              Gulmarg - Srinagar/Departure
                            </div>
                            <span class="singleadrspara">
                              Check out from hotel in time and drive to Srinagar
                              Airport to catch your onward flight back home.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact"
                    role="tabpanel3"
                    aria-labelledby="contact-tab"
                  >
                    <div class="innertabs">
                      <div class="comenhtlsum"></div>
                      <div class="linebrk"></div>
                      <div class="col-md-12 nopad">
                        <div class="col-md-12">
                          <h3 class="hedft">Price Includes: </h3>
                          <ul class="checklist checklistxl">
                            <li>
                              <p>
                                Stay in Deluxe Houseboats , hotels (Hotel Mount
                                View&nbsp;or similar Pahalgam , &nbsp;Hotel Pine
                                Palace&nbsp;or similar in GULMARG&nbsp;&nbsp;on
                                MAP (Breakfast &amp; Dinner ) . All Sightseeing
                                and transfers by one Non Ac Car (2-3 Pax) &amp;
                                Qualis ( 4 + Pax) as per programme.&nbsp;ONE
                                Hours Shikara Ride on Dal Lake. Stay
                                in&nbsp;Srinagar :&nbsp;Hotel Brown
                                Palace&nbsp;or similar ) &nbsp;, Mount
                                View&nbsp;or similar&nbsp; , Gulmarg : Hotel
                                Pine Palace&nbsp;or similar in GULMARG on MAP
                                (Breakfast &amp; Dinner ) . All Sightseeing and
                                transfers by one Non Ac Car (2- 3 Pax) &amp;
                                Qualis ( 4 + Pax) as per programme.&nbsp;ONE
                                Hours Shikara Ride on Dal Lake
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="linebrk"></div>
                      <div class="col-md-12 nopad">
                        <div class="col-md-12">
                          <h3 class="hedft">Price Excludes: </h3>
                          <ul class="checklist checklistxl">
                            <li>
                              <p>
                                Any expenses of personal nature like drinks,
                                tipps, laundry, telephone calls ,Pony Ride,etc.
                                etc.&nbsp;&nbsp;Air tickets/Train tickets. ,
                                GANDOLA Ride in Gulmarg, Aru Chandanwari and
                                Betaab valley Trip at Pahalgam. Thajwas Glacier
                                Trip at Sonmarg. Any other thing which is not
                                mentioned in inclusions, Tour Itinerary can be
                                changed depending upon the availability of&nbsp;
                                Hotels.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="linebrk"></div>
                      <div class="col-md-12 nopad">
                        <div class="col-md-12">
                          <h3 class="hedft">Cancellation Advance: </h3>
                          <ul class="checklist checklistxl">
                            <li>No</li>
                          </ul>
                        </div>
                        <div class="linebrk"></div>
                        <div class="col-md-12 nopad">
                          <div class="col-md-12">
                            <h3 class="hedft">Cancellation penality: </h3>
                            <ul class="checklist checklistxl">
                              <li>No</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="gallery"
                    role="tabpanel"
                    aria-labelledby="gallery-tab"
                  >
                    <div class="gallery_slider_inner">
                      <div class=" gallery-slider owl-carousel owl-theme">
                        <div class="item">
                          <figure>
                            <img src={images.traveller} alt="img" />
                          </figure>
                        </div>
                        <div class="item">
                          <figure>
                            <img src={images.traveller1} alt="img" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="rating"
                    role="tabpanel"
                    aria-labelledby="rating-tab"
                  >
                    <div class="innertabs">
                      <div class="ratingusr">
                        <strong>4</strong>
                        <span class="ratingimg">
                          {" "}
                          Star
                          <img src="/images/user-rating-4.png" alt="" />
                        </span>
                        <b> User Rating</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="details_section_right">
                <div class="img_box">
                  <figure>
                    <img src={images.SrinagarTour} alt="img" />
                  </figure>
                  <div class="img_inner_box">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="img_left_box">
                          <div class="bigpriced">
                            <strong> Rs </strong> 18600 Only
                          </div>
                          <span class="snote">*Per Person</span>
                          <div class="sdfr">5 Nights / 6 Days</div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="img_right_box">
                          <input
                            type="submit"
                            class="booknowhtl"
                            id="sendquery"
                            value="Send Query"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rating mypacksy mt10 mb10">
                  <label>Rate this package</label>
                  <span class="star">
                    <input type="radio" name="rating" id="str5" value="5" />
                    <label for="str5"></label>
                  </span>
                  <span class="star">
                    <input type="radio" name="rating" id="str4" value="4" />
                    <label for="str4"></label>
                  </span>
                  <span class="star">
                    <input type="radio" name="rating" id="str3" value="3" />
                    <label for="str3"></label>
                  </span>
                  <span class="star">
                    <input type="radio" name="rating" id="str2" value="2" />
                    <label for="str2"></label>
                  </span>
                  <span class="star">
                    <input type="radio" name="rating" id="str1" value="1" />
                    <label for="str1"></label>
                  </span>
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

export default TourDetailsPage;
