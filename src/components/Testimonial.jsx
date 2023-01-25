import React from "react";

const Testimonial = () => {
  return (
    <div
      className="testimonial-sec padding-top position-relative"
      id="testimonial-sec"
    >
      <div className="right-overlay"></div>
      <div className="container">
        <div className="testimonial-area padding-top padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center text-center text-lg-left">
                <div className="testimonial-details wow fadeInLeft">
                  <h4 className="heading">
                    OUR BENEFACTOR: SHRI NARESH VASHISHT JI
                  </h4>
                  <p className="text">
                    Shri Naresh Vashisht, ISM alumni class of Petroleum
                    Engineering 1967, is the founder and currently the President
                    of Omimex Resources Inc. Texas, USA
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1">
                <div className="testimonial-carousel wow fadeInRight">
                  <div className="testimonial-box owl-carousel owl-theme">
                    <div className="item text-center">
                      <div className="icon-holder">
                        <i className="fas fa-quote-right"></i>
                      </div>
                      <p className="text">
                        All you have to do is give your best and do not worry
                        about the results. The result is anyway beyond your
                        control, so there is no point worrying about that. Just
                        put in your sincere effort and give your best.
                      </p>
                      <div className="img-holder">
                        <img src="creative-startup/img/naresh ji.jpg" />
                      </div>
                      <h4 className="user-name">SHRI NARESH VASHISHT JI</h4>
                    </div>
                    {/* <div className="item text-center">
                          <div className="icon-holder">
                            <i className="fas fa-quote-right"></i>
                          </div>
                          <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce vitae egestas mi, vel dapibus diam.
                            Mauris malesuada, nisl non rutrum commodo, sem magna
                            laoreet tellus, eu euismod dolor enim et mi. In at
                            tempor purus.
                          </p>
                          <div className="img-holder">
                            <img src="creative-startup/img/test2.jpg" />
                          </div>
                          <h4 className="user-name">Julia Miltese</h4>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
