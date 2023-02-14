import React from "react";

const lookUp = {
  aboutISM: {
    heading: "ABOUT IIT(ISM) DHANBAD",
    path: "/about/IIT(ISM)-DHANBAD",
    img: "/assests/ism0.jpg",
    crumb: "About IIT(ISM) DHANBAD",
  },
  aboutNVCTI: {
    heading: "ABOUT NVCTI",
    path: "/about/NVCTI",
    img: "/assests/nvcti0.jpg",
    crumb: "About NVCTI",
  },
  administration: {
    heading: "ADMINISTRATION",
    path: "/administration",
    img: "/assests/nvcti0.jpg",
    crumb: "Administration",
  },
  ga: {
    heading: "GAMING AND ANIMATION AND DESIGN LAB",
    path: "/labs/gaming-and-animation",
    img: "/assests/ga/ga0.jpg",
    crumb: "Gaming and animation lab",
  },
  iot: {
    heading: "ELECTRONIC AND CIRCUITS AND IOT LAB",
    path: "/labs/electronics-and-iot",
    img: "/assests/iot/iot0.jpg",
    crumb: "Electronic and IOT lab",
  },
  mech: {
    heading: "MECHANICAL TOOLS AND RAPID PROTOTYPING LAB",
    path: "/labs/mechanical-tools-and-rapid-prototyping",
    img: "/assests/mech/mech0.jpg",
    crumb: "Mechanical tools lab",
  },
  pb: {
    heading: "POUCH BATTERY CELL ASSEMBLY LAB",
    path: "/labs/pouch-battery-cell-assembly",
    img: "/assests/pb/pb0.jpg",
    crumb: "Pouch battery cell assembly",
  },
  projects: {
    heading: "Projects",
    path: "/labs/projects",
    img: "/assests/nvcti0.jpg",
    crumb: "Projects",
  },
};

const Hero = ({ page }) => {
  const data = lookUp[page];
  // console.log(data);

  return (
    <section id="slider-sec" className="slider-sec">
      <div className="overlay"></div>
      <div className="container">
        <div className="row position-relative slider-row">
          <div className="inner-overlay"></div>
          <div className="col-12 col-lg-6 d-flex align-items-center text-center text-lg-left">
            <div className="inner-slider-content">
              <h4>{data.heading}</h4>
              <div className="crumbs">
                <nav aria-label="breadcrumb" className="breadcrumb-items">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href={data.path}>{data.crumb}</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6" data-depth="0.1">
            <img src={process.env.PUBLIC_URL + data.img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
