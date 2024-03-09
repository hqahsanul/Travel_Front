import React from "react";
import Footer from "../../components/footer1/footer";
import images from "../../assets/img/index";

const AboutUs = () => {
  return (
    <>
      <div className="fake-header">&nbsp;</div>
      <section className="gray-back">
        <div id="about-us" className="our-vision-founder">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <h2>Our Founder</h2>
                <h5>
                  Lalit Gupta, <span> Founder, Param Pavitram</span>
                </h5>
                <p>
                  AgarwalsVivah is a matchmaking service created for parents who
                  are looking for a life partner for their loved ones. Unlike
                  other Matrimonial services, we focus on providing detailed
                  family and background information to help you take the next
                  step with confidence. Agarwals Vivah is the World's No. 1
                  Matchmaking service.
                </p>
                <p>
                  We focus on providing detailed family and background
                  information to help you take the next step with confidence.
                  Agarwals Vivah is the World's No. 1 Matchmaking service.
                </p>

                <button className="btn-know" type="button">
                  KNOW MORE
                </button>
              </div>
              <div className="col-sm-5">
                <figure>
                  <img
                    className="lalit-founder"
                    src={images.founder}
                    alt="founder.jpg"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="container">
            <hr />
            <h3 className="know-about">Know About Us</h3>
            <div className="row our-vision">
              <div className="col-sm-5">
                <figure>
                  <img src={images.Mission1} alt="misson-1.jpg" />
                </figure>
              </div>
              <div className="col-sm-7">
                <h2>Our Mission</h2>
                <h5>
                  Our mission stands strong on our value points and thus paints
                  a clear picture of why Param Pavitram is adding to the
                  nation’s mission of bringing a new and enhanced way of
                  farming.
                </h5>
                <p>
                  The mission of AgarwalsVivah.com is to provide people with a
                  superior matchmaking experience by expanding the opportunities
                  available to meet potential life partners and build fulfilling
                  relationships. We strive to do this through superior
                  technology, in-depth research, valuable matrimonial content &
                  services, and above all the highest quality of customer
                  service delivered with a sense of warmth, understanding,
                  respect, and company spirit.
                </p>
                <ul className="our-mision-lalit">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      we focus on providing detailed family and background
                      information to help you take the next step with
                      confidence. Agarwals Vivah is the World's No. 1
                      Matchmaking service.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      AgarwalsVivah is a matchmaking service created for parents
                      who are looking for a life partner for their loved ones.
                      Unlike other Matrimonial services
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      AgarwalsVivah is a matchmaking service created for parents
                      who are looking for a life partner for their loved ones.
                      Unlike other Matrimonial services
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row our-vision">
              <div className="col-sm-7">
                <h2>Our Vision</h2>
                <h5>
                  Our mission stands strong on our value points and thus paints
                  a clear picture of why Param Pavitram is adding to the
                  nation’s mission of bringing a new and enhanced way of
                  farming.
                </h5>
                <ul className="our-mision-lalit">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      AgarwalsVivah is a matchmaking service created for parents
                      who are looking for a life partner for their loved ones.
                      Unlike other Matrimonial services
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      we focus on providing detailed family and background
                      information to help you take the next step with
                      confidence. Agarwals Vivah is the World's No. 1
                      Matchmaking service.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      We focus on providing detailed family and background
                      information to help you take the next step with
                      confidence. Agarwals Vivah is the World's No. 1
                      Matchmaking service.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-5">
                <figure>
                  <img src={images.Mission2} alt="misson-2.jpg" />
                </figure>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row our-vision">
              <div className="col-sm-5">
                <figure>
                  <img src={images.Vision} alt="vision.jpeg" />
                </figure>
              </div>
              <div className="col-sm-7">
                <h2>Ethics</h2>
                <h5>
                  Focusing on the manufacturing of 100% organic fertilizer, we
                  empower our value system and enrich the ethics we reflect
                  upon.
                </h5>
                <p>
                  Our research, mission and objectives have all combined to
                  deliver to you the Agarwalsvivah.com Promise.
                </p>
                <p>
                  We will continually attempt to provide you with more relevant
                  matches for every search that you conduct than any other
                  matchmaking service provider. We will work with our customers
                  to understand their needs and provide solutions that meet
                  those needs through superior technology and superior service.
                </p>
                <ul className="our-mision-lalit">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      Each member at Param Pavitram aligns with the high grades
                      of ethics
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      {" "}
                      We guide each other to become better every day.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>
                      Resonating unquestionable ethical standards, we reinforce
                      the brand value to customers and beyond.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-ecare-about">
        <div className="container">
          <h2 className="text-center p-3">We Care About</h2>
          <div className="row">
            <div className="col-sm-4">
              <div className="values-box">
                <div>
                  <img
                    src={images.couple1}
                    className="img-fluid"
                    id="img-fluid-about"
                  />
                </div>
                <h3>
                  Offering the finest alternative to replace chemical fertilizer
                </h3>
                <p>
                  We take care of every tiny detail Closely scrutinize
                  production of the finest quality of organic fertilizer. Ensure
                  that your needs are satisfactorily met
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="values-box">
                <div>
                  <img
                    src={images.couple1}
                    className="img-fluid"
                    id="img-fluid-about"
                  />
                </div>
                <h3>
                  Offering the finest alternative to replace chemical fertilizer
                </h3>
                <p>
                  We take care of every tiny detail Closely scrutinize
                  production of the finest quality of organic fertilizer. Ensure
                  that your needs are satisfactorily met
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="values-box">
                <div>
                  <img
                    src={images.couple1}
                    className="img-fluid"
                    id="img-fluid-about"
                  />
                </div>
                <h3>
                  Offering the finest alternative to replace chemical fertilizer
                </h3>
                <p>
                  We take care of every tiny detail Closely scrutinize
                  production of the finest quality of organic fertilizer. Ensure
                  that your needs are satisfactorily met
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="values-box">
                <div>
                  <img
                    src={images.couple1}
                    className="img-fluid"
                    id="img-fluid-about"
                  />
                </div>
                <h3>
                  Offering the finest alternative to replace chemical fertilizer
                </h3>
                <p>
                  We take care of every tiny detail Closely scrutinize
                  production of the finest quality of organic fertilizer. Ensure
                  that your needs are satisfactorily met
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="values-box">
                <div>
                  <img
                    src={images.couple1}
                    className="img-fluid"
                    id="img-fluid-about"
                  />
                </div>
                <h3>
                  Offering the finest alternative to replace chemical fertilizer
                </h3>
                <p>
                  We take care of every tiny detail Closely scrutinize
                  production of the finest quality of organic fertilizer. Ensure
                  that your needs are satisfactorily met
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="values-box">
                <div>
                  <img
                    src={images.couple1}
                    className="img-fluid"
                    id="img-fluid-about"
                  />
                </div>
                <h3>
                  Offering the finest alternative to replace chemical fertilizer
                </h3>
                <p>
                  We take care of every tiny detail Closely scrutinize
                  production of the finest quality of organic fertilizer. Ensure
                  that your needs are satisfactorily met
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container text-center">
        <img
          src="img/collarge.jpg"
          className="img-fluid"
          id="img-fluid-about"
        />
      </div>
      <section className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <h4>Your story is waiting to Agralwals Vivah!</h4>
            </div>
            <div className="col-sm-3">
              <a
                data-toggle="modal"
                href="#register"
                className="btn btn-primary"
              >
                Get Started for FREE
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
