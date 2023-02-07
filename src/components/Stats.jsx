import React from "react";

const Stats = () => {
  return (
    <section className="stats-sec" id="stats-sec" style={{ marginTop: "2em" }}>
      <div className="container">
        <div className="row">
          {/* <div className="col-12 stats-heading-area text-center">
            <span className="sub-heading">
                  Lorem ipsum is simply dummy text{" "}
                </span>
            <h4 className="heading">Facts</h4>
            <p className="text">
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry’s standard dummy. Lorem Ipsum
              has been the industry’s standard dummy. Lorem ipsum is simply
              dummy text of the printing and typesetting.
            </p>
          </div> */}
        </div>
        <div className="row circular-wrap text-center">
          <div className="col-12 col-lg-4 wow bounceIn">
            <div id="circle" className="circle" data-value="1">
              <h6 className="counter-num">1926</h6>
            </div>
            <h4 className="darkcolor">IIT(ISM) Dhanbad established in</h4>
          </div>
          <div className="col-12 col-lg-4 wow bounceIn">
            <div id="circletwo" className="circle" data-value="1">
              <h6 className="counter-num">2019</h6>
            </div>
            <h4 className="darkcolor">NVCTI was established in</h4>
          </div>
          <div className="col-12 col-lg-4 wow bounceIn">
            <div id="circlethree" className="circle" data-value="1">
              <h6 className="counter-num">11000 sq feet </h6>
            </div>
            <h4 className="darkcolor">Situated in an area of </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
