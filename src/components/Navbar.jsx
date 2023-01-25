import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="home">
      <div className="inner-header">
        {/* <!--colored-lines--> */}
        <div className="color-lines row no-gutters">
          <div className="col-4 bg-red"></div>
          <div className="col-4 bg-purple"></div>
          <div className="col-4 bg-green"></div>
        </div>
        {/* <!--upper-nav--> */}
        <div className="upper-nav">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <ul className="top-personal-info">
                  <li>
                    <Link to="#">
                      <i className="las la-phone"></i>
                      <Link to="tel:+919470194401">+91 94701 94401</Link>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="las la-envelope"></i>
                      <Link to="mailto:nvcti@iitism.ac.in">
                        nvcti@iitism.ac.in
                      </Link>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 text-right">
                <ul className="top-social-links">
                  <li>
                    <Link
                      to="https://www.facebook.com/nvcti/"
                      className="link-holder fb"
                      target="_blank"
                    >
                      <i className="lab la-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://twitter.com/nvcti1"
                      target="_blank"
                      className="link-holder twit"
                    >
                      <i className="lab la-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.linkedin.com/company/nvcti-iitism/"
                      target="_blank"
                      className="link-holder link-in"
                    >
                      <i className="lab la-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/nvcti.iitism/"
                      target="_blank"
                      className="link-holder insta"
                    >
                      <i className="lab la-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--main nav--> */}
        <div className="main-navigation">
          <div className="container">
            <div className="row">
              <div className="col-4 col-lg-3">
                <Link className="navbar-brand simple-nav-logo" to="/">
                  <img src="assests/final.jpg" alt="logo" />
                </Link>
                <Link className="navbar-brand fixed-nav-logo" to="/">
                  <img src="assests/nvcti-transparent.png" alt="logo" />
                </Link>
              </div>
              <div className="col-8 col-lg-9 simple-navbar">
                <nav className="navbar navbar-expand-lg">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link className="nav-link home" to="#">
                          HOME
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link scroll" to="#about-sec">
                          ABOUT
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link scroll"
                          to="#company-portfolio-section"
                        >
                          PORTFOLIO
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link scroll" to="#testimonial-sec">
                          TESTIMONIALS
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link scroll" to="#contact-sec">
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <ul className="top-social-links fixed-nav-links">
                  <li>
                    <Link
                      to="https://www.facebook.com/nvcti/"
                      className="link-holder fb"
                      target="_blank"
                    >
                      <i className="lab la-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://twitter.com/nvcti1"
                      target="_blank"
                      className="link-holder twit"
                    >
                      <i className="lab la-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.linkedin.com/company/nvcti-iitism/"
                      target="_blank"
                      className="link-holder link-in"
                    >
                      <i className="lab la-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/nvcti.iitism/"
                      target="_blank"
                      className="link-holder insta"
                    >
                      <i className="lab la-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--toggle btn--> */}
        <Link
          to="javascript:void(0)"
          className="sidemenu_btn"
          id="sidemenu_toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
      {/* <!--Side Nav--> */}
      <div className="side-menu hidden side-menu-opacity">
        <div className="bg-overlay"></div>
        <div className="inner-wrapper">
          <span className="btn-close" id="btn_sideNavClose">
            <i></i>
            <i></i>
          </span>
          <div className="container">
            <div className="row w-100 side-menu-inner-content">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <Link to="/" className="navbar-brand">
                  <img
                    src="assests/nvcti-light.webp"
                    width="150px"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-12 col-lg-8">
                <nav className="side-nav w-100">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link scroll" to="#home">
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link scroll" to="#about-sec">
                        ABOUT
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link scroll"
                        to="#company-portfolio-section"
                      >
                        PORTFOLIO
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link scroll" to="#testimonial-sec">
                        TESTIMONIALS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link scroll" to="#contact-sec">
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-12 col-lg-4 d-flex align-items-center">
                <div className="side-footer text-white w-100">
                  <div className="menu-company-details">
                    <span>+91 94701 94401</span>
                    <span>nvcti@iitism.ac.in</span>
                  </div>
                  <ul className="social-icons-simple">
                    <li>
                      <Link
                        className="facebook-text-hvr"
                        to="https://www.facebook.com/nvcti/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="instagram-text-hvr"
                        to="https://twitter.com/nvcti1"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="instagram-text-hvr"
                        to="https://www.youtube.com/@nareshvashishtcentrefortin1613"
                        target="_blank"
                      >
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="instagram-text-hvr"
                        to="https://www.instagram.com/nvcti.iitism/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <p className="text-white">© 2023 NVCTI IIT(ISM) DHANBAD -</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link id="close_side_menu" to="javascript:void(0);"></Link>
    </header>
  );
};

export default Navbar;
