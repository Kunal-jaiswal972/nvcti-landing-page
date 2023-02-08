import React from "react";

const Team = () => {
  return (
    <section className="team-sec position-relative" id="team-sec">
      <div className="left-overlay"></div>
      <div className="container">
        <div className="row inner-team-sec padding-top padding-bottom">
          <div className="col-12 col-lg-4 text-center text-lg-left">
            <div className="team-detail wow fadeInLeft">
              <h4 className="heading">
                WE HAVE <span>AMAZING TEAM</span>
              </h4>
              <p className="text">
                Our Faculty is Committed to Providing Students with Hands-On
                Learning Opportunities and Real-World Experience, to Produce
                well-rounded and Skilled Engineers.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="team-area wow fadeInRight">
              <div className="row no-gutters team-carousel owl-carousel owl-theme">
                <div className="item text-center">
                  <div className="team-box">
                    <div className="img-holder position-relative">
                      <img src="creative-startup/img/ajitsir.jpeg" />
                      <div className="overlay d-flex justify-content-center align-items-center">
                        {/* <!--Team Social--> */}
                        <ul className="team-social">
                          <li>
                            <a
                              className="facebook-text-hvr"
                              href="javascript:void(0);"
                            >
                              <i
                                className="lab la-facebook-f"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="twitter-text-hvr"
                              href="javascript:void(0);"
                            >
                              <i
                                className="lab la-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="instagram-text-hvr"
                              href="javascript:void(0);"
                            >
                              <i
                                className="lab la-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-info">
                      <h4 className="team-name">Prof. Ajit Kumar</h4>
                      <p className="team-designation">
                        Head, Strategy & Execution, NVCTI
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <div className="team-box">
                    <div className="img-holder position-relative">
                      <img src="creative-startup/img/pankajsir.jpg" />
                      <div className="overlay d-flex justify-content-center align-items-center">
                        {/* <!--Team Social--> */}
                        <ul className="team-social">
                          <li>
                            <a
                              className="facebook-text-hvr"
                              href="javascript:void(0);"
                            >
                              <i
                                className="lab la-facebook-f"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="twitter-text-hvr"
                              href="javascript:void(0);"
                            >
                              <i
                                className="lab la-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="instagram-text-hvr"
                              href="javascript:void(0);"
                            >
                              <i
                                className="lab la-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-info">
                      <h4 className="team-name">Prof. Pankaj Mishra</h4>
                      <p className="team-designation">
                        Acting Dean(IIE) | HOC NVCTI | Dean(Innovation)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="javascript:void(0);"
                className="team-nav team-prev"
                id="team-prev"
              >
                <i className="fas fa-angle-left"></i>
              </a>
              <a
                href="javascript:void(0);"
                className="team-nav team-next"
                id="team-next"
              >
                <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
