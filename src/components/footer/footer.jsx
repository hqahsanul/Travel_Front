import React from "react";

const Footer = () => {
  return (
    <>
      <section id="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h2>Contact Us</h2>
              <ul>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a data-toggle="modal" href="#login">
                    Login
                  </a>
                </li>
                <li>
                  <a data-toggle="modal" href="#register">
                    Register
                  </a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="#">Our Social Activities</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h2>Follow Us</h2>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i> Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h3>&nbsp;</h3>
              <p>Connect with us using WhatsApp</p>
              <a href="#">
                <img src="img/whatsapp-icon.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              &copy; AgarwalsVivah, Community Matchmaking Trusted By Parents
              <sup>TM</sup>
            </div>
            <div className="col-sm-6">
              <div className="text-right">
                Passionately created by MetaBlock
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
