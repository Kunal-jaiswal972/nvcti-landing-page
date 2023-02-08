import React from "react";

const labs = [
  {
    imgPath: "assests/r1.webp",
    class: "robotics",
    hover_desc: "ROBOTICS LAB",
  },
  {
    imgPath: "assests/r2.webp",
    class: "robotics",
    hover_desc: "ROBOTICS LAB",
  },
  {
    imgPath: "assests/r3.webp",
    class: "robotics",
    hover_desc: "ROBOTICS LAB",
  },
  {
    imgPath: "assests/r4.webp",
    class: "robotics",
    hover_desc: "ROBOTICS LAB",
  },
  {
    imgPath: "assests/mech/mech1.jpg",
    class: "mechanical",
    hover_desc: "SMART MANUFACTURING LAB",
  },
  {
    imgPath: "assests/mech/mech2.jpg",
    class: "mechanical",
    hover_desc: "SMART MANUFACTURING LAB",
  },
  {
    imgPath: "assests/mech/mech3.jpg",
    class: "mechanical",
    hover_desc: "SMART MANUFACTURING LAB",
  },
  {
    imgPath: "assests/mech/mech6.jpg",
    class: "mechanical",
    hover_desc: "SMART MANUFACTURING LAB",
  },
  {
    imgPath: "assests/ga/ga2.png",
    class: "gaming",
    hover_desc: "GAMING AND ANIMATION LAB",
  },
  {
    imgPath: "assests/ga/ga4.png",
    class: "gaming",
    hover_desc: "GAMING AND ANIMATION LAB",
  },
  {
    imgPath: "assests/ga/ga5.jpg",
    class: "gaming",
    hover_desc: "GAMING AND ANIMATION LAB",
  },
  {
    imgPath: "assests/iot/iot1.jpg",
    class: "iot",
    hover_desc: "ELECTRONICS AND IOT LAB",
  },
  {
    imgPath: "assests/iot/iot2.jpg",
    class: "iot",
    hover_desc: "ELECTRONICS AND IOT LAB",
  },
  {
    imgPath: "assests/iot/iot3.jpg",
    class: "iot",
    hover_desc: "ELECTRONICS AND IOT LAB",
  },
  {
    imgPath: "assests/iot/iot4.jpg",
    class: "iot",
    hover_desc: "ELECTRONICS AND IOT LAB",
  },
];

const Gallery = () => {
  return (
    <section
      className="portfolio-sec company-portfolio-section padding-top"
      id="gallery"
    >
      <div className="container">
        <div className="section-heading">
          <div className="row">
            <div
              className="col-lg-6 wow fadeInUp text-center text-md-left"
              data-wow-delay="300ms"
            >
              <h4 className="heading">
                IMAGE GALLERY<span></span>
              </h4>
            </div>
            <div className="col-md-12 pt-5">
              <div
                id="js-filters-mosaic"
                className="cbp-l-filters-button wow fadeInUp text-center text-md-left"
                data-wow-delay="350ms"
              >
                <div
                  data-filter="*"
                  className="cbp-filter-item-active cbp-filter-item"
                >
                  ALL
                </div>
                <div data-filter=".robotics" className="cbp-filter-item">
                  ROBOTICS
                </div>
                <div data-filter=".mechanical" className="cbp-filter-item">
                  MECHANICAL
                </div>
                <div data-filter=".gaming" className="cbp-filter-item">
                  GAMING
                </div>
                <div data-filter=".iot" className="cbp-filter-item">
                  IOT
                </div>
              </div>

              <div id="js-grid-mosaic" className="cbp cbp-l-grid-mosaic">
                {labs.map((lab, idx) => (
                  <div
                    className={`cbp-item ${lab.class}`}
                    key={lab.imgPath + idx}
                  >
                    <a
                      href={lab.imgPath}
                      className="cbp-caption cbp-lightbox"
                      data-title="NVCTI, IIT(ISM) DHANBAD"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src={process.env.PUBLIC_URL + lab.imgPath}
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span></span>
                          <span></span>
                        </div>
                        <div className="hover-text">
                          <h4 className="p-hover-title">NVCTI</h4>
                          <p className="p-hover-des">{lab.hover_desc}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* <div
                id="js-loadMore-lightbox-gallery"
                className="cbp-l-loadMore-button text-data wow fadeInUp"
                data-wow-delay="650ms"
              >
                <div className="row portfolio-foot-detail text-data-inner">
                  <div className="col-7 col-lg-4 offset-lg-6 text-left pl-4">
                    <span className="p-text">We've Completed More Then</span>
                    <h4 className="p-num">530</h4>
                    <h4 className="p">
                      See all images
                    </h4> 
                  </div>
                  <div className="col-5 col-lg-2 d-flex justify-content-end align-items-center">
                    <button className="btn green-btn rounded-pill">
                      VIEW ALL<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
