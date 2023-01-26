import React from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();

  function heading(path) {
    if (path === "/aboutISM") return "IIT(ISM) DHANBAD";
    else if (path === "/aboutNVCTI") return "NVCTI";
    else return "Administration";
  }

  function crumb(path) {
    if (path === "/aboutISM") return "About IIT(ISM) DHANBAD";
    else if (path === "/aboutNVCTI") return "About NVCTI";
    else return "Administration";
  }

  function image(path) {
    if (path === "/aboutISM") return "assests/ism0.jpg";
    else if (path === "/aboutNVCTI") return "assests/nvcti0.jpg";
    else return "assests/nvcti0.jpg";
  }

  return (
    <section id="slider-sec" className="slider-sec">
      <div className="overlay"></div>
      <div className="container">
        <div className="row position-relative slider-row">
          <div className="inner-overlay"></div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-center text-lg-left">
            <div className="inner-slider-content">
              <h4>{heading(location.pathname)}</h4>
              <div className="crumbs">
                <nav aria-label="breadcrumb" className="breadcrumb-items">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href={location.pathname}>{crumb(location.pathname)}</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6" data-depth="0.1">
            <img src={image(location.pathname)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
