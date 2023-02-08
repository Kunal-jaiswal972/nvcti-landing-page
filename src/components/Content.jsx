import React from "react";
import { useLocation } from "react-router-dom";

const Content = () => {
  const location = useLocation();
  return (
    // <!--main page content-->
    <section className="main" id="main">
      {location.pathname === "/about/IIT(ISM)-DHANBAD" ? (
        <div className="blog-content padding-top padding-bottom">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12">
                <div className="standalone-detail">
                  <div className="row no-gutters">
                    <div
                      className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center wow slideInUp"
                      data-wow-duration="2s"
                    >
                      {/* <p className="sub-heading text-center">ism</p> */}
                      <h1 className="heading">About Our College</h1>
                      <p className="para_text m-auto">
                        IIT(ISM) is an Institute of National Importance. IIT
                        (ISM) has 18 academic departments covering Engineering,
                        Applied Sciences, Humanities and Social Sciences and
                        Management programs. It was formerly known as Indian
                        School of Mines, Dhanbad before its conversion into an
                        Indian Institute of Technology (IIT).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="standalone-area">
                  <div className="row standalone-row align-items-center no-gutters">
                    <div className="col-lg-6">
                      <div className="blog-image wow hover-effect fadeInLeft">
                        <img
                          src={process.env.PUBLIC_URL + "/assests/heritage.jpg"}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 stand-img-des">
                      <div className="d-inline-block">
                        {/* <p className="sub-heading text-center">
                          Most flexible one page
                        </p> */}
                        {/* <h2 className="gradient-text1">Standalone Heading</h2> */}
                        <p className="para_text p-text">
                          Indian Institute of Technology (Indian School of
                          Mines), Dhanbad (abbreviated IIT (ISM), Dhanbad) is a
                          prestigious public technical university located in
                          Dhanbad, India. It has main campus of 218 acres in
                          Sardar Patel Nagar area of Dhanbad and recently
                          Jharkhand Cabinet approved 226.98 acres of land in
                          Nirsa for its second campus, IIT (ISM) Dhanbad
                          administration has plans to open more than 29 academic
                          centers in this upcoming campus in Nirsa, Dhanbad
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row standalone-row align-items-center no-gutters">
                    <div className="col-lg-6 order-lg-2">
                      <div className="blog-image wow hover-effect fadeInLeft">
                        <img
                          src={process.env.PUBLIC_URL + "/assests/ism2.jpg"}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 stand-img-des">
                      <div className="d-inline-block">
                        {/* <p className="sub-heading text-center">
                          Most flexible one page
                        </p>
                        <h2 className="gradient-text1">Standalone Heading</h2> */}
                        <p className="para_text p-text">
                          Our vision is to be a nationally and internationally
                          acclaimed premier institution of higher technical and
                          scientific education with social commitment having an
                          ethos for intellectual excellence, where initiative is
                          nurtured, where new ideas, research and scholarship
                          flourish, where intellectual honesty is the norm and
                          from which will emerge the leaders and innovators of
                          tomorrow in the realm of technology.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row standalone-row align-items-center no-gutters">
                    <div className="col-lg-6">
                      <div className="blog-image wow hover-effect fadeInLeft">
                        <img
                          src={process.env.PUBLIC_URL + "/assests/ism3.jpg"}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 stand-img-des">
                      <div className="d-inline-block">
                        {/* <p className="sub-heading text-center">
                          Most flexible one page
                        </p>
                        <h2 className="gradient-text1">Standalone Heading</h2> */}
                        <p className="para_text p-text">
                          The Indian School of Mines was formally opened on 9th
                          December 1926, by Lord Irwin, the then Viceroy of
                          India to address the need for trained manpower related
                          to mining activities in the country with disciplines
                          of Mining and Applied Geology. In 1967 it was granted
                          the status of a deemed to be university under Section
                          3 of UGC Act, 1956. Since its establishment, IIT(ISM)
                          has undergone considerable expansion of its
                          activities, and presently it can be considered as a
                          total technology education institute.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="blog-content padding-top padding-bottom">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12">
                <div className="standalone-detail">
                  <div className="row no-gutters">
                    <div
                      className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center wow slideInUp"
                      data-wow-duration="2s"
                    >
                      {/* <p className="sub-heading text-center">
                        Most flexible one page
                      </p> */}
                      <h1 className="heading">About Us</h1>
                      <p className="para_text m-auto">
                        Naresh Vashist Centre for Tinkering and Innovation is
                        the brand new cell developed in IIT (ISM) Dhanbad
                        equipped with state of the art labs and tools with
                        cutting edge technology, to provide students a complete
                        platform to drive their Ideas into reality, and bring
                        out the best in our students in terms on Innovation,
                        creativity and all round development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="standalone-area">
                  <div className="row standalone-row align-items-center no-gutters">
                    <div className="col-lg-6">
                      <div className="blog-image wow hover-effect fadeInLeft">
                        <img
                          src={process.env.PUBLIC_URL + "/assests/nvcti1.webp"}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 stand-img-des">
                      <div className="d-inline-block">
                        {/* <p className="sub-heading text-center">
                          Most flexible one page
                        </p>
                        <h2 className="gradient-text1">Standalone Heading</h2> */}
                        <p className="para_text p-text">
                          Naresh Vashisht Centre for Tinkering and Innovation
                          (NVCTI) was established in September 2019 through the
                          recommendation of the 11th BOG meeting of IIT(ISM)
                          Dhanbad, with a generous financial support of our
                          distinguished alumnus of 1967 batch of Petroleum
                          Engineering, Shri Naresh Vashisth Ji.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row standalone-row align-items-center no-gutters">
                    <div className="col-lg-6 order-lg-2">
                      <div className="blog-image wow hover-effect fadeInLeft">
                        <img
                          src={process.env.PUBLIC_URL + "/assests/nvcti2.webp"}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 stand-img-des">
                      <div className="d-inline-block">
                        {/* <p className="sub-heading text-center">
                          Most flexible one page
                        </p>
                        <h2 className="gradient-text1">Standalone Heading</h2> */}
                        <p className="para_text p-text">
                          The centre, situated in an area of approximately 11000
                          sq feet of the newly constructed Central Research
                          Extension building inside the institute campus, is
                          intended to build a positive innovation ecosystem and
                          to provide a state of art workspace to transform ideas
                          into product leading to a successful entrepreneurship.
                          The activities of the centre are steered by an
                          Innovation Council (IC) comprising Student Innovation
                          Cell (SIC), Faculty Innovation Cell (FIC), and Invited
                          members from industries/Alumni.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row standalone-row align-items-center no-gutters">
                    <div className="col-lg-6">
                      <div className="blog-image wow hover-effect fadeInLeft">
                        <img
                          src={process.env.PUBLIC_URL + "/assests/nvcti3.webp"}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 stand-img-des">
                      <div className="d-inline-block">
                        {/* <p className="sub-heading text-center">
                          Most flexible one page
                        </p>
                        <h2 className="gradient-text1">Standalone Heading</h2> */}
                        <p className="para_text p-text">
                          Our vision is to cultivate young fertile brains as the
                          innovators and entrepreneurs of future by promoting
                          informal learning with a focus on indigenous
                          technological advancements aimed at contributing
                          positively to the economy, to the environment and to
                          the society.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Content;
