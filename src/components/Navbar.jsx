import React from "react";
import { useLocation } from "react-router-dom";
import { CustomAccordion, Dropdown } from ".";
const info1 = [
  { path: "/about/IIT(ISM)-DHANBAD", title: "About IIT(ISM)" },
  { path: "/about/NVCTI", title: "About NVCTI" },
  { path: "/administration", title: "Administration" },
];

const info2 = [
  { path: "/pdi", title: "PDI" },
  { path: "/events", title: "Events" },
  { path: "/inventory", title: "Lab Access" },
];

const info3 = [
  { path: "/labs/gaming-and-animation", title: "Gaming And Animation Lab" },
  { path: "/labs/electronics-and-iot", title: "Electronics And Iot Lab" },
  {
    path: "/labs/mechanical-tools-and-rapid-prototyping",
    title: "Mechanical Tools And Rapid Prototyping Lab",
  },
  {
    path: "/labs/pouch-battery-cell-assembly",
    title: "Pouch Battery Cell Assembly Lab",
  },
  { path: "/labs/", title: "Robotics Lab" },
  { path: "/labs/projects", title: "Projects" },
];

const Navbar = () => {
  const location = useLocation();
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
                    <a href="#">
                      <i className="las la-phone"></i>
                      <a href="tel:+919470194401">+91 94701 94401</a>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="las la-envelope"></i>
                      <a href="mailto:nvcti@iitism.ac.in">nvcti@iitism.ac.in</a>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 text-right">
                <ul className="top-social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/nvcti/"
                      className="link-holder fb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="lab la-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/nvcti1"
                      target="_blank"
                      className="link-holder twit"
                      rel="noreferrer"
                    >
                      <i className="lab la-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/nvcti-iitism/"
                      target="_blank"
                      className="link-holder link-in"
                      rel="noreferrer"
                    >
                      <i className="lab la-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nvcti.iitism/"
                      target="_blank"
                      className="link-holder insta"
                      rel="noreferrer"
                    >
                      <i className="lab la-instagram"></i>
                    </a>
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
                <a className="navbar-brand simple-nav-logo" href="/">
                  <img
                    src={process.env.PUBLIC_URL + "/assests/final.jpg"}
                    alt="logo"
                  />
                </a>
                <a className="navbar-brand fixed-nav-logo" href="/">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assests/nvcti-transparent.png"
                    }
                    alt="logo"
                  />
                </a>
              </div>
              <div className="col-8 col-lg-9 simple-navbar">
                <nav className="navbar navbar-expand-lg">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href={location.pathname === "/" ? "#" : "/"}
                        >
                          HOME
                        </a>
                      </li>
                      <li className="nav-item">
                        <Dropdown title="ABOUT" info={info1} />
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link scroll"
                          href={location.pathname === "/" ? "#gallery" : "/"}
                        >
                          GALLERY
                        </a>
                      </li>
                      <li className="nav-item">
                        <Dropdown title="FEATURES" info={info2} />
                      </li>
                      <li className="nav-item">
                        <Dropdown title="LABS" info={info3} />
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link scroll"
                          href={
                            location.pathname === "/" ? "#contact-sec" : "/"
                          }
                        >
                          CONTACT
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <ul className="top-social-links fixed-nav-links">
                  <li>
                    <a
                      href="https://www.facebook.com/nvcti/"
                      className="link-holder fb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="lab la-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/nvcti1"
                      target="_blank"
                      className="link-holder twit"
                      rel="noreferrer"
                    >
                      <i className="lab la-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/nvcti-iitism/"
                      target="_blank"
                      className="link-holder link-in"
                      rel="noreferrer"
                    >
                      <i className="lab la-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nvcti.iitism/"
                      target="_blank"
                      className="link-holder insta"
                      rel="noreferrer"
                    >
                      <i className="lab la-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--toggle btn--> */}
        <a
          href="javascript:void(0)"
          className="sidemenu_btn"
          id="sidemenu_toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
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
                <a href="/" className="navbar-brand">
                  <img
                    src={process.env.PUBLIC_URL + "/assests/nvcti-light.webp"}
                    width="150px"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="col-12 col-lg-8">
                <nav className="side-nav w-100">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link scroll"
                        href={location.pathname === "/" ? "#" : "/"}
                      >
                        HOME
                      </a>
                    </li>
                    <li className="nav-item acc">
                      {/* <a className="nav-link scroll"> */}
                      <CustomAccordion title="ABOUT" info={info1} />
                      {/* </a> */}
                    </li>

                    <li className="nav-item acc">
                      {/* <a className="nav-link scroll" href="/"> */}
                      <CustomAccordion title="FACILITY" info={info2} />
                      {/* </a> */}
                    </li>
                    <li className="nav-item acc">
                      {/* <a className="nav-link scroll" href="/"> */}
                      <CustomAccordion title="LABS" info={info3} />

                      {/* </a> */}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link scroll"
                        href={location.pathname === "/" ? "#gallery" : "/"}
                      >
                        GALLERY
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link scroll" href="#testimonial-sec">
                        TESTIMONIALS
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className="nav-link scroll"
                        href={location.pathname === "/" ? "#contact-sec" : "/"}
                      >
                        CONTACT
                      </a>
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
                      <a
                        className="facebook-text-hvr"
                        href="https://www.facebook.com/nvcti/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="instagram-text-hvr"
                        href="https://twitter.com/nvcti1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="instagram-text-hvr"
                        href="https://www.youtube.com/@nareshvashishtcentrefortin1613"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="instagram-text-hvr"
                        href="https://www.instagram.com/nvcti.iitism/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="text-white">© 2023 NVCTI IIT(ISM) DHANBAD -</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="close_side_menu" href="javascript:void(0);"></a>
    </header>
  );
};

export default Navbar;
