import React from "react";

const Gallery = () => {
  return (
    <section
      className="portfolio-sec company-portfolio-section padding-top"
      id="company-portfolio-section"
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
                {/* robotics */}
                <div className="cbp-item robotics">
                  <a
                    href="assests/r1.webp"
                    className="cbp-caption cbp-lightbox"
                    data-title="NVCTI, IIT(ISM) DHANBAD"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assests/r1.webp" alt="img" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">NVCTI</h4>
                        <p className="p-hover-des">ROBOTICS LAB</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cbp-item robotics">
                  <a
                    href="assests/r2.webp"
                    className="cbp-caption cbp-lightbox"
                    data-title="NVCTI, IIT(ISM) DHANBAD"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assests/r2.webp" alt="img" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">NVCTI</h4>
                        <p className="p-hover-des">ROBOTICS LAB</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cbp-item robotics">
                  <a
                    href="assests/r3.webp"
                    className="cbp-caption cbp-lightbox"
                    data-title="NVCTI, IIT(ISM) DHANBAD"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assests/r3.webp" alt="img" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">NVCTI</h4>
                        <p className="p-hover-des">ROBOTICS LAB</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cbp-item robotics">
                  <a
                    href="assests/r4.webp"
                    className="cbp-caption cbp-lightbox"
                    data-title="NVCTI, IIT(ISM) DHANBAD"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assests/r4.webp" alt="img" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">NVCTI</h4>
                        <p className="p-hover-des">ROBOTICS LAB</p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* smart-manufacturing */}
                <div className="cbp-item smart-manufacturing">
                  <a
                    href="assests/s1.webp"
                    className="cbp-caption cbp-lightbox"
                    data-title="NVCTI, IIT(ISM) DHANBAD"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assests/s1.webp" alt="img" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">NVCTI</h4>
                        <p className="p-hover-des">SMART MANUFACTURING LAB</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="cbp-item smart-manufacturing">
                  <a
                    href="assests/s2.webp"
                    className="cbp-caption cbp-lightbox"
                    data-title="NVCTI, IIT(ISM) DHANBAD"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assests/s2.webp" alt="img" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">NVCTI</h4>
                        <p className="p-hover-des">SMART MANUFACTURING LAB</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="cbp-item smart-manufacturing">
                  <a
                    href="assests/s3.webp"
                    className="cbp-caption cbp-lightbox"
                    data-title="NVCTI, IIT(ISM) DHANBAD"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assests/s3.webp" alt="img" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">NVCTI</h4>
                        <p className="p-hover-des">SMART MANUFACTURING LAB</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="cbp-item smart-manufacturing">
                  <a
                    href="assests/s4.webp"
                    className="cbp-caption cbp-lightbox"
                    data-title="NVCTI, IIT(ISM) DHANBAD"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assests/s4.webp" alt="img" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">NVCTI</h4>
                        <p className="p-hover-des">SMART MANUFACTURING LAB</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="cbp-item lab3">
                  <a
                    href="assests/logo.png"
                    className="cbp-caption cbp-lightbox"
                    data-title="Workout Buddy<br>by Tiberiu Neamu"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assests/logo.png" alt="img" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">Logo Design</h4>
                        <p className="p-hover-des">35 WP Anniversary</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cbp-item lab4">
                  <a
                    href="assests/logo.png"
                    className="cbp-caption cbp-lightbox"
                    data-title="Workout Buddy<br>by Tiberiu Neamu"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assests/logo.png" alt="img" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span></span>
                        <span></span>
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">Development</h4>
                        <p className="p-hover-des">35 WP Anniversary</p>
                      </div>
                    </div>
                  </a>
                </div>
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
