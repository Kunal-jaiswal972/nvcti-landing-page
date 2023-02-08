import React from "react";

const About = () => {
  return (
    <section className="about-sec" id="about-sec">
      <div className="about-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 services-area padding-top padding-bottom">
            <div className="purple-overlay"></div>
            <div className="row no-gutters wow fadeInLeft">
              <div className="col-12 col-lg-6 services text-center">
                <div className="service-card">
                  <div className="icon-holder">
                    <i className="lni lni-briefcase"></i>
                  </div>
                  <h4 className="card-heading">Building Brilliance</h4>
                </div>
              </div>
              <div className="col-12 col-lg-6 services text-center">
                <div className="service-card">
                  <div className="icon-holder">
                    <i className="lni lni-bulb"></i>
                  </div>
                  <h4 className="card-heading">Empowering Minds</h4>
                </div>
              </div>
              <div className="col-12 col-lg-6 services text-center">
                <div className="service-card">
                  <div className="icon-holder">
                    <i className="lni lni-heart"></i>
                  </div>
                  <h4 className="card-heading">Our Hardwork</h4>
                </div>
              </div>
              <div className="col-12 col-lg-6 services text-center">
                <div className="service-card">
                  <div className="icon-holder">
                    <i className="las la-wallet"></i>
                  </div>
                  <h4 className="card-heading">Transforming Lives</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 about-area padding-top padding-bottom text-center text-lg-left">
            <div className="about-content wow fadeInRight">
              <div className="about-inner-content">
                <h4 className="heading">
                  WELCOME TO NVCTI -
                  <br />
                  <span>WE ARE INNOVATION CELL OF IIT ISM</span>
                </h4>
                <p className="text">
                  With the mission to provide students with a platform for
                  promoting experimentation, innovation and creative output
                  skills, we, at NVCTI are putting endeavours to inculcate
                  convoluted thinking in an aesthetic approach in the minds of
                  students and faculty members by polarizing thoughts into the
                  process and thereby into a product. We also promote an
                  innovation ecosystem to subsidize our students in their quest
                  to explore and contribute to the world of cutting-edge
                  technologies and entrepreneurship.
                </p>
                <p className="text">
                  We also promote an innovation ecosystem to subsidize our
                  students in their quest to explore and contribute to the world
                  of cutting-edge technologies and entrepreneurship. Our vision
                  is to cultivate young fertile brains as the innovators and
                  entrepreneurs of the future by promoting informal learning
                  with a focus on indigenuos technology and advancements aimed
                  at contributing positively to the economy, the environment and
                  the society.
                </p>
                {/* <a href="#about-sec" className="btn anim-btn rounded-pill">
                  LEARN MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
