import React from "react";
import images from "../../assets/images";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer_logo">
                <img src={images.logo} alt="logo" />
                <p>
                  #236/92/1A, 1st Floor, Venkataadri IT Park, Electronic City,
                  Bangalore,Karnataka 560100, India.
                </p>
                <ul class="topbar-list d-lg-none d-md-none d-block mb-md-0 mb-4">
                  <li>
                    <a href="#!">
                      <i class="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-twitter-square" aria-hidden="true"></i>
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
    </>
  );
};

export default Footer;
