import React from "react";

const Slider = () => {
  return (
    <section className="slider-area">
      <div className="bg-overlay"></div>
      <div className="container position-relative">
        <div className="inner-bg-overlay"></div>
        <div className="row">
          <div
            className="slider-detail col-12 col-lg-6 text-center text-lg-left wow fadeInLeft"
            data-wow-delay=".8s"
          >
            <div className="slider-slide">
              <div className="slider-inner-content">
                <h4 className="slide-heading">
                  FOSTERING <span> INNOVATION COLLABORATION</span>
                </h4>
                <p className="slide-text">
                  To build a vibrant innovation ecosystem by establishing a
                  network between innovators, academia and incubators.
                </p>
                <a
                  href="#about-sec"
                  className="btn anim-btn rounded-pill scroll"
                >
                  LEARN MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
            <div className="slider-slide">
              <div className="slider-inner-content">
                <h4 className="slide-heading">
                  YOUTH <span> INNOVATION INCUBATOR</span>
                </h4>
                <p className="slide-text">
                  To attract a large number of youth who demonstrate problem
                  solving zeal and abilities to work on new
                  technology/innovation based start-ups.
                </p>
                <a
                  href="#about-sec"
                  className="btn anim-btn rounded-pill scroll"
                >
                  LEARN MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
            <div className="slider-slide">
              <div className="slider-inner-content">
                <h4 className="slide-heading">
                  NURTURING <span> YOUNG INNOVATORS </span>
                </h4>
                <p className="slide-text">
                  To encourage, inspire and nurture young brains by supporting
                  them to work with new ideas and converting them into concept
                  and prototype.
                </p>
                <a
                  href="#about-sec"
                  className="btn anim-btn rounded-pill scroll"
                >
                  LEARN MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
            <div className="slider-slide">
              <div className="slider-inner-content">
                <h4 className="slide-heading">
                  CREATIVITY <span> FOR SOLUTIONS</span>
                </h4>
                <p className="slide-text">
                  To generate innovative solutions relevant to the local and
                  global problems through experimentation, innovation and
                  creativity.
                </p>
                <a
                  href="#about-sec"
                  className="btn anim-btn rounded-pill scroll"
                >
                  LEARN MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="slider-img col-12 col-lg-6 wow fadeInRight"
            data-wow-delay=".8s"
            data-depth="0.1"
          >
            <div className="img-slide">
              <img src={process.env.PUBLIC_URL + "/assests/slide1.webp"} />
            </div>
            <div className="img-slide">
              <img src={process.env.PUBLIC_URL + "/assests/slide2.webp"} />
            </div>
            <div className="img-slide">
              <img src={process.env.PUBLIC_URL + "/assests/slide3.webp"} />
            </div>
            <div className="img-slide">
              <img src={process.env.PUBLIC_URL + "/assests/slide4.webp"} />
            </div>
          </div>
        </div>
        <div className="slider-arrows">
          <a
            href="javascript:void(0);"
            className="slider-arr slider-arr-up"
            id="slider-arr-up"
          >
            <i className="fas fa-angle-up"></i>
          </a>
          <a
            href="javascript:void(0);"
            className="slider-arr slider-arr-down"
            id="slider-arr-down"
          >
            <i className="fas fa-angle-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
