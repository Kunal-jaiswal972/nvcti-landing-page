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
    imgPath: "assests/s1.webp",
    class: "smart-manufacturing",
    hover_desc: "SMART MANUFACTURING LAB",
  },
  {
    imgPath: "assests/s2.webp",
    class: "smart-manufacturing",
    hover_desc: "SMART MANUFACTURING LAB",
  },
  {
    imgPath: "assests/s3.webp",
    class: "smart-manufacturing",
    hover_desc: "SMART MANUFACTURING LAB",
  },
  {
    imgPath: "assests/s4.webp",
    class: "smart-manufacturing",
    hover_desc: "SMART MANUFACTURING LAB",
  },
  {
    imgPath: "assests/s4.webp",
    class: "lab3",
    hover_desc: "SMART MANUFACTURING LAB",
  },
  {
    imgPath: "assests/s4.webp",
    class: "lab4",
    hover_desc: "SMART MANUFACTURING LAB",
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
              className="col-lg-6 wow fadeInUp text-center text-lg-left"
              data-wow-delay="300ms"
            >
              <h4 className="heading">
                OUR LABS<span>IMAGE GALLERY</span>
              </h4>
            </div>
            <div className="col-md-12 pt-5">
              <div
                id="js-filters-mosaic"
                className="cbp-l-filters-button wow fadeInUp text-center text-lg-left"
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
                <div
                  data-filter=".smart-manufacturing"
                  className="cbp-filter-item"
                >
                  SMART MANUFACTURING
                </div>
                <div data-filter=".lab3" className="cbp-filter-item">
                  lab3
                </div>
                <div data-filter=".lab4" className="cbp-filter-item">
                  lab4
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
                        <img src={lab.imgPath} alt="img" />
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
                    <span className="p-text">
                      Projects for Our amazing Clients
                    </span>
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
