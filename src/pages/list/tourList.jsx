import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import images from "../../assets/images";

const TourList = () => {
  return (
    <>
      <Navbar />
      <section className="listing_desbord tour_desbord">
        <div className="container">
          <div className="row">
            <div className="col-md-3 slidebar_none">
              <div className="sidebar_warp_left">
                <h2 id="contentTitle" className="h3">
                  Tours And Packages
                </h2>
                <form className="form_warp">
                  <div className="col-md-12 col-sm-6 col-xs-6 mobile_width padfive">
                    <div className="lbl_txt">Country</div>
                    <select
                      className="normalsel padselct arimo"
                      id="country"
                      name="country"
                    >
                      <option value="">All</option>
                      <option value="77">India</option>
                      <option value="152">Singapore</option>
                      <option value="9">Australia</option>
                      <option value="170">Thailand</option>
                      <option value="13">Bangladesh</option>
                    </select>
                  </div>
                  <div className="col-md-12 col-sm-6 col-xs-6 mobile_width padfive">
                    <div className="lbl_txt">Package Type</div>
                    <select
                      className="normalsel padselct arimo"
                      id="package_type"
                      name="package_type"
                    >
                      <option value="">All Package Types</option>
                      <option value="23">Season Packages</option>
                      <option value="22">Honeymoon packages</option>
                      <option value="21">Holiday packages</option>
                      <option value="25">Kashmir Package Tours</option>
                      <option value="26">Kuala Lumpur Singapore </option>
                      <option value="27">Affordable Europe</option>
                      <option value="37">sdfsdfsdaf</option>
                      <option value="39">Pinky</option>
                    </select>
                  </div>
                  <div className="col-md-12 col-sm-6 col-xs-6 mobile_width padfive">
                    <div className="lbl_txt">Duration</div>
                    <select
                      className="normalsel padselct arimo"
                      id="duration"
                      name="duration"
                    >
                      <option value="">All Durations</option>
                      <option value="1-3">1-3</option>
                      <option value="4-7">4-7</option>
                      <option value="8-12">8-12</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                  <div className="col-md-12 col-sm-6 col-xs-6 mobile_width padfive">
                    <div className="lbl_txt">Budget</div>
                    <select
                      className="normalsel padselct arimo"
                      id="budget"
                      name="budget"
                    >
                      <option value="">All</option>
                      <option value="100-500">100-500</option>
                      <option value="500-1000">500-1000</option>
                      <option value="1000-5000">1000-5000</option>
                      <option value="5000">5000</option>
                    </select>
                  </div>
                  <div className="searchsbmtfot">
                    <input
                      type="submit"
                      className="searchsbmt"
                      value="search"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-9">
              <div className="sidebar_right">
                <div className="details_box">
                  <ul className="detail_fx">
                    <li className="li_inner">
                      <div className="details_inner_box hotel_box">
                        <div className="row">
                          <div className="col-md-4">
                            <figure>
                              <img src={images.hotel} alt="img" />
                            </figure>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="hotel_content">
                                  <h2>
                                    Meadows & Mountains (Tour Code – KAS 03){" "}
                                  </h2>
                                  <p>India | Srinagar </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="booK_warp">
                                  <h3>Rs 18600</h3>
                                  <p>5 Nights / 6 Days</p>
                                  <a
                                    href="/tour-details"
                                    className="btn btn-info"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="li_inner">
                      <div className="details_inner_box hotel_box">
                        <div className="row">
                          <div className="col-md-4">
                            <figure>
                              <img src={images.hotel} alt="img" />
                            </figure>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="hotel_content">
                                  <h2>
                                    Meadows & Mountains (Tour Code – KAS 03){" "}
                                  </h2>
                                  <p>India | Srinagar </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="booK_warp">
                                  <h3>Rs 18600</h3>
                                  <p>5 Nights / 6 Days</p>
                                  <a
                                    href="/tour-details"
                                    className="btn btn-info"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="li_inner">
                      <div className="details_inner_box hotel_box">
                        <div className="row">
                          <div className="col-md-4">
                            <figure>
                              <img src={images.hotel} alt="img" />
                            </figure>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="hotel_content">
                                  <h2>
                                    Meadows & Mountains (Tour Code – KAS 03){" "}
                                  </h2>
                                  <p>India | Srinagar </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="booK_warp">
                                  <h3>Rs 18600</h3>
                                  <p>5 Nights / 6 Days</p>
                                  <a
                                    href="/tour-details"
                                    className="btn btn-info"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="li_inner">
                      <div className="details_inner_box hotel_box">
                        <div className="row">
                          <div className="col-md-4">
                            <figure>
                              <img src={images.hotel} alt="img" />
                            </figure>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="hotel_content">
                                  <h2>
                                    Meadows & Mountains (Tour Code – KAS 03){" "}
                                  </h2>
                                  <p>India | Srinagar </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="booK_warp">
                                  <h3>Rs 18600</h3>
                                  <p>5 Nights / 6 Days</p>
                                  <a
                                    href="/tour-details"
                                    className="btn btn-info"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="li_inner">
                      <div className="details_inner_box hotel_box">
                        <div className="row">
                          <div className="col-md-4">
                            <figure>
                              <img src={images.hotel} alt="img" />
                            </figure>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="hotel_content">
                                  <h2>
                                    Meadows & Mountains (Tour Code – KAS 03){" "}
                                  </h2>
                                  <p>India | Srinagar </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="booK_warp">
                                  <h3>Rs 18600</h3>
                                  <p>5 Nights / 6 Days</p>
                                  <a
                                    href="/tour-details"
                                    className="btn btn-info"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="li_inner">
                      <div className="details_inner_box hotel_box">
                        <div className="row">
                          <div className="col-md-4">
                            <figure>
                              <img src={images.hotel} alt="img" />
                            </figure>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="hotel_content">
                                  <h2>
                                    Meadows & Mountains (Tour Code – KAS 03){" "}
                                  </h2>
                                  <p>India | Srinagar </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="booK_warp">
                                  <h3>Rs 18600</h3>
                                  <p>5 Nights / 6 Days</p>
                                  <a
                                    href="/tour-details"
                                    className="btn btn-info"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="li_inner">
                      <div className="details_inner_box hotel_box">
                        <div className="row">
                          <div className="col-md-4">
                            <figure>
                              <img src={images.hotel} alt="img" />
                            </figure>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="hotel_content">
                                  <h2>
                                    Meadows & Mountains (Tour Code – KAS 03){" "}
                                  </h2>
                                  <p>India | Srinagar </p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="booK_warp">
                                  <h3>Rs 18600</h3>
                                  <p>5 Nights / 6 Days</p>
                                  <a
                                    href="/tour-details"
                                    className="btn btn-info"
                                  >
                                    View Detail
                                  </a>
                                </div>
                              </div>
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
    </>
  );
};

export default TourList;
