import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="color-lines row no-gutters">
        <div className="col-4 bg-red"></div>
        <div className="col-4 bg-purple"></div>
        <div className="col-4 bg-green"></div>
      </div>
      <footer className="footer-style-1">
        <div className="container">
          <div className="row align-items-center">
            {/* <!--Social--> */}
            <div className="col-lg-6">
              <div className="footer-social text-center text-lg-left">
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="wow fadeInUp"
                      to="https://www.facebook.com/nvcti/"
                      target="_blank"
                    >
                      <i aria-hidden="true" className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="wow fadeInDown"
                      to="https://twitter.com/nvcti1"
                      target="_blank"
                    >
                      <i aria-hidden="true" className="fab fa-twitter"></i>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="wow fadeInDown"
                      to="https://www.linkedin.com/company/nvcti-iitism/"
                      target="_blank"
                    >
                      <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="wow fadeInUp"
                      to="https://www.instagram.com/nvcti.iitism/"
                      target="_blank"
                    >
                      <i aria-hidden="true" className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--Text--> */}
            <div className="col-lg-6 text-center text-lg-right">
              <p className="company-about fadeIn">
                © 2023 NVCTI IIT(ISM) DHANBAD -
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
