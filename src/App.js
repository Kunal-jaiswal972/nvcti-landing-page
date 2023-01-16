import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <!-- Preloader --> */}
        <div className="preloader">
          <div className="center">
            <div className="loader loader-32">
              <div className="loader-container">
                <div className="ball-wrapper">
                  <div className="ball-holder">
                    <div className="ball"></div>
                  </div>
                  <div className="shadow"></div>
                </div>
                <div className="ball-wrapper">
                  <div className="ball-holder">
                    <div className="ball"></div>
                  </div>
                  <div className="shadow"></div>
                </div>
                <div className="ball-wrapper">
                  <div className="ball-holder">
                    <div className="ball"></div>
                  </div>
                  <div className="shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Preloader End --> */}

        {/* <!--Header Start--> */}
        <header id="home">
          <div className="inner-header">
            {/* <!--colored-lines--> */}
            <div className="color-lines row no-gutters">
              <div className="col-4 bg-red"></div>
              <div className="col-4 bg-purple"></div>
              <div className="col-4 bg-green"></div>
            </div>
            {/* <!--upper-nav--> */}
            <div className="upper-nav">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <ul className="top-personal-info">
                      <li>
                        <a href="#">
                          <i className="las la-phone"></i>
                          <a href="tel:+919470194401">+91 94701 94401</a>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="las la-envelope"></i>
                          <a href="mailto:nvcti@iitism.ac.in">
                            nvcti@iitism.ac.in
                          </a>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 text-right">
                    <ul className="top-social-links">
                      <li>
                        <a
                          href="https://www.facebook.com/nvcti/"
                          className="link-holder fb"
                          target="_blank"
                        >
                          <i className="lab la-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/nvcti1"
                          target="_blank"
                          className="link-holder twit"
                        >
                          <i className="lab la-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/nvcti-iitism/"
                          target="_blank"
                          className="link-holder link-in"
                        >
                          <i className="lab la-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/nvcti.iitism/"
                          target="_blank"
                          className="link-holder insta"
                        >
                          <i className="lab la-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--main nav--> */}
            <div className="main-navigation">
              <div className="container">
                <div className="row">
                  <div className="col-4 col-lg-3">
                    <a className="navbar-brand simple-nav-logo" href="/">
                      <img src="creative-startup/img/nvctiii.png" alt="logo" />
                    </a>
                    <a className="navbar-brand fixed-nav-logo" href="/">
                      <img src="creative-startup/img/nvctii.svg" alt="logo" />
                    </a>
                  </div>
                  <div className="col-8 col-lg-9 simple-navbar">
                    <nav className="navbar navbar-expand-lg">
                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item active">
                            <a className="nav-link home" href="#">
                              HOME
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link scroll" href="#about-sec">
                              ABOUT
                            </a>
                          </li>
                          {/* <li className="nav-item">
                            <a
                              className="nav-link scroll"
                              href="#company-portfolio-section"
                            >
                              PORTFOLIO
                            </a>
                          </li> */}
                          <li className="nav-item">
                            <a
                              className="nav-link scroll"
                              href="#testimonial-sec"
                            >
                              TESTIMONIALS
                            </a>
                          </li>
                          {/* <li className="nav-item">
                            <a className="nav-link scroll" href="#blog-sec">
                              BLOG
                            </a>
                          </li> */}
                          <li className="nav-item">
                            <a className="nav-link scroll" href="#contact-sec">
                              CONTACT
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <ul className="top-social-links fixed-nav-links">
                      <li>
                        <a
                          href="https://www.facebook.com/nvcti/"
                          className="link-holder fb"
                          target="_blank"
                        >
                          <i className="lab la-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/nvcti1"
                          target="_blank"
                          className="link-holder twit"
                        >
                          <i className="lab la-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/nvcti-iitism/"
                          target="_blank"
                          className="link-holder link-in"
                        >
                          <i className="lab la-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/nvcti.iitism/"
                          target="_blank"
                          className="link-holder insta"
                        >
                          <i className="lab la-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--toggle btn--> */}
            <a
              href="javascript:void(0)"
              className="sidemenu_btn"
              id="sidemenu_toggle"
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          {/* <!--Side Nav--> */}
          <div className="side-menu hidden side-menu-opacity">
            <div className="bg-overlay"></div>
            <div className="inner-wrapper">
              <span className="btn-close" id="btn_sideNavClose">
                <i></i>
                <i></i>
              </span>
              <div className="container">
                <div className="row w-100 side-menu-inner-content">
                  <div className="col-12 d-flex justify-content-center align-items-center">
                    <a href="/" className="navbar-brand">
                      <img src="creative-startup/img/nvctiii.png" alt="logo" />
                    </a>
                  </div>
                  <div className="col-12 col-lg-8">
                    <nav className="side-nav w-100">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link scroll" href="#home">
                            HOME
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link scroll" href="#about-sec">
                            ABOUT
                          </a>
                        </li>
                        {/* <li className="nav-item">
                          <a
                            className="nav-link scroll"
                            href="#company-portfolio-section"
                          >
                            PORTFOLIO
                          </a>
                        </li> */}
                        <li className="nav-item">
                          <a
                            className="nav-link scroll"
                            href="#testimonial-sec"
                          >
                            TESTIMONIALS
                          </a>
                        </li>
                        {/* <li className="nav-item">
                          <a className="nav-link scroll" href="#blog-sec">
                            BLOG
                          </a>
                        </li> */}
                        <li className="nav-item">
                          <a className="nav-link scroll" href="#contact-sec">
                            CONTACT
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-12 col-lg-4 d-flex align-items-center">
                    <div className="side-footer text-white w-100">
                      <div className="menu-company-details">
                        <span>+91 94701 94401</span>
                        <span>nvcti@iitism.ac.in</span>
                      </div>
                      <ul className="social-icons-simple">
                        <li>
                          <a
                            className="facebook-text-hvr"
                            href="https://www.facebook.com/nvcti/"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="instagram-text-hvr"
                            href="https://twitter.com/nvcti1"
                            target="_blank"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="instagram-text-hvr"
                            href="https://www.youtube.com/@nareshvashishtcentrefortin1613"
                            target="_blank"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="instagram-text-hvr"
                            href="https://www.instagram.com/nvcti.iitism/"
                            target="_blank"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                      <p className="text-white">
                        © 2023 NVCTI IIT(ISM) DHANBAD -
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a id="close_side_menu" href="javascript:void(0);"></a>
        </header>
        {/* <!--Header End--> */}

        {/* <!--SLider sec start--> */}
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
                      To encourage, inspire and nurture young brains by
                      supporting them to work with new ideas and converting them
                      into concept and prototype.
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
                  <img src="creative-startup/img/s1.webp" />
                </div>
                <div className="img-slide">
                  <img src="creative-startup/img/s2.webp" />
                </div>
                <div className="img-slide">
                  <img src="creative-startup/img/s3.webp" />
                </div>
                <div className="img-slide">
                  <img src="creative-startup/img/s4.webp" />
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
        {/* <!--SLider sec End--> */}

        {/* <!--About sec start--> */}
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
                      convoluted thinking in an aesthetic approach in the minds
                      of students and faculty members by polarizing thoughts
                      into the process and thereby into a product. We also
                      promote an innovation ecosystem to subsidize our students
                      in their quest to explore and contribute to the world of
                      cutting-edge technologies and entrepreneurship.
                    </p>
                    <p className="text">
                      We also promote an innovation ecosystem to subsidize our
                      students in their quest to explore and contribute to the
                      world of cutting-edge technologies and entrepreneurship.
                      Our vision is to cultivate young fertile brains as the
                      innovators and entrepreneurs of the future by promoting
                      informal learning with a focus on indigenuos technology
                      and advancements aimed at contributing positively to the
                      economy, the environment and the society.
                    </p>
                    <a href="#about-sec" className="btn anim-btn rounded-pill">
                      LEARN MORE <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--About sec End--> */}

        {/* <!--Stats sec start--> */}
        <section className="stats-sec padding-bottom" id="stats-sec">
          {/* <div className="container">
            <div className="row">
              <div className="col-12 stats-heading-area text-center">
                <span className="sub-heading">
                  Lorem ipsum is simply dummy text{" "}
                </span>
                <h4 className="heading">AGENCY STATS & FACTS</h4>
                <p className="text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting. Lorem Ipsum has been the industry’s standard
                  dummy. Lorem Ipsum has been the industry’s standard dummy.
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
              </div>
            </div>
            <div className="row circular-wrap text-center">
              <div className="col-12 col-lg-4 wow bounceIn">
                <div id="circle" className="circle" data-value="0.77">
                  <h6 className="counter-num">257%</h6>
                </div>
                <h4 className="darkcolor">Increase in Sales year on year</h4>
              </div>
              <div className="col-12 col-lg-4 wow bounceIn">
                <div id="circletwo" className="circle" data-value="0.96">
                  <h6 className="counter-num">96%</h6>
                </div>
                <h4 className="darkcolor">Recommendation rate over the year</h4>
              </div>
              <div className="col-12 col-lg-4 wow bounceIn">
                <div id="circlethree" className="circle" data-value="0.75">
                  <h6 className="counter-num">317%</h6>
                </div>
                <h4 className="darkcolor">New ventures we became part of</h4>
              </div>
            </div>
          </div> */}
        </section>
        {/* <!--Stats sec End--> */}

        {/* <!--Team sec start--> */}
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
        {/* <!--Team sec End--> */}

        {/* <!--portfolio section start--> */}
        {/* <section
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
                    OUR <span>AMAZING PORTFOLIO</span>
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
                    <div data-filter=".web" className="cbp-filter-item">
                      WEB DESIGN
                    </div>
                    <div data-filter=".logo" className="cbp-filter-item">
                      LOGO DESIGN
                    </div>
                    <div data-filter=".mobile" className="cbp-filter-item">
                      MOBILE APP
                    </div>
                    <div data-filter=".development" className="cbp-filter-item">
                      DEVELOPMENT
                    </div>
                  </div>

                  <div id="js-grid-mosaic" className="cbp cbp-l-grid-mosaic">
                    <div className="cbp-item web logo">
                      <a
                        href="creative-startup/img/p1.jpg"
                        className="cbp-caption cbp-lightbox"
                        data-title="Workout Buddy<br>by Tiberiu Neamu"
                      >
                        <div className="cbp-caption-defaultWrap">
                          <img src="creative-startup/img/p1.jpg" alt="img" />
                        </div>
                        <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                          <div className="portfolio-inner-content">
                            <span></span>
                            <span></span>
                          </div>
                          <div className="hover-text">
                            <h4 className="p-hover-title">Creative</h4>
                            <p className="p-hover-des">35 WP Anniversary</p>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="cbp-item mobile web">
                      <a
                        href="creative-startup/img/p2.jpg"
                        className="cbp-caption cbp-lightbox"
                        data-title="Workout Buddy<br>by Tiberiu Neamu"
                      >
                        <div className="cbp-caption-defaultWrap">
                          <img src="creative-startup/img/p2.jpg" alt="img" />
                        </div>
                        <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                          <div className="portfolio-inner-content">
                            <span></span>
                            <span></span>
                          </div>
                          <div className="hover-text">
                            <h4 className="p-hover-title">Web Design</h4>
                            <p className="p-hover-des">35 WP Anniversary</p>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="cbp-item print logo development web mobile">
                      <a
                        href="creative-startup/img/p3.jpg"
                        className="cbp-caption cbp-lightbox"
                        data-title="Workout Buddy<br>by Tiberiu Neamu"
                      >
                        <div className="cbp-caption-defaultWrap">
                          <img src="creative-startup/img/p3.jpg" alt="img" />
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

                    <div className="cbp-item logo development">
                      <a
                        href="creative-startup/img/p4.jpg"
                        className="cbp-caption cbp-lightbox"
                        data-title="Workout Buddy<br>by Tiberiu Neamu"
                      >
                        <div className="cbp-caption-defaultWrap">
                          <img src="creative-startup/img/p4.jpg" alt="img" />
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

                  <div
                    id="js-loadMore-lightbox-gallery"
                    className="cbp-l-loadMore-button text-data wow fadeInUp"
                    data-wow-delay="650ms"
                  >
                    <div className="row portfolio-foot-detail text-data-inner">
                      <div className="col-7 col-lg-4 offset-lg-6 text-left pl-4">
                        <span className="p-text">
                          We've Completed More Then
                        </span>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!--portfolio section end--> */}

        {/* <!--testimonial section start--> */}
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
                        Engineering 1967, is the founder and currently the
                        President of Omimex Resources Inc. Texas, USA
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
                            All you have to do is give your best and do not
                            worry about the results. The result is anyway beyond
                            your control, so there is no point worrying about
                            that. Just put in your sincere effort and give your
                            best.
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
        {/* <!--testimonial section end--> */}

        {/* <!--sponsers section start--> */}
        {/* <div className="sponser-sec padding-top" id="sponser-sec">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sponser-tags owl-carousel owl-theme">
                  <div className="item">
                    <img src="creative-startup/img/brand4.png" />
                  </div>
                  <div className="item">
                    <img src="creative-startup/img/brand4.png" />
                  </div>
                  <div className="item">
                    <img src="creative-startup/img/brand4.png" />
                  </div>
                  <div className="item">
                    <img src="creative-startup/img/brand4.png" />
                  </div>
                  <div className="item">
                    <img src="creative-startup/img/brand4.png" />
                  </div>
                  <div className="item">
                    <img src="creative-startup/img/brand4.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!--sponsers section end--> */}

        {/* <!--Blogs section start--> */}
        {/* <section className="blog-sec" id="blog-sec">
          <div className="left-overlay"></div>
          <div className="container position-relative">
            <div className="blog-inner-overlay"></div>
            <div className="row blog-area">
              <div className="col-12 col-lg-5 d-flex align-items-center text-center text-lg-left">
                <div className="blog-detail wow fadeInLeft">
                  <h4 className="heading">
                    LATEST <span>DESIGN BLOGS</span>
                  </h4>
                  <p className="text">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry’s standard
                    dummy.
                  </p>
                  <a
                    className="btn anim-btn rounded-pill"
                    href="creative-startup/standard-blog.html"
                  >
                    LEARN MORE <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1">
                <div className="blog-img wow fadeInRight">
                  <img src="creative-startup/img/blog1.png" alt="blog-img" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!--Blogs section end--> */}

        {/* <!--Contact section start--> */}
        <section
          className="contact-sec padding-top padding-bottom"
          id="contact-sec"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7">
                <h4 className="heading text-center text-lg-left">
                  GET IN TOUCH
                </h4>
                <form
                  className="row contact-form wow fadeInLeft"
                  id="contact-form-data"
                >
                  <div className="col-sm-12" id="result"></div>
                  <div className="col-12 col-md-5">
                    <input
                      type="text"
                      name="userName"
                      placeholder="Your Name"
                      className="form-control"
                    />
                    <input
                      type="email"
                      name="userEmail"
                      placeholder="Email Address *"
                      className="form-control"
                    />
                    <input
                      type="text"
                      name="userSubject"
                      placeholder="Subject"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <textarea
                      className="form-control"
                      name="userMessage"
                      placeholder="Your Message"
                      rows="6"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <a
                      href="javascript:void(0);"
                      className="btn purple-btn rounded-pill w-100 contact_btn"
                    >
                      <i
                        className="fa fa-spinner fa-spin mr-2 d-none"
                        aria-hidden="true"
                      ></i>
                      Send Message <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </form>
              </div>
              <div className="col-12 col-lg-5 text-center text-lg-left position-relative">
                <div className="contact-details wow fadeInRight">
                  <h4 className="heading">HOW TO REACH US?</h4>
                  {/* <p className="text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered .
                  </p> */}
                  <ul>
                    <li>
                      <i className="las la-map-marker addr"></i>Naresh Vashisht
                      Centre for Tinkering and Innovation IIT (ISM) Dhanbad,
                      Dhanbad, Jharkhand - 826004
                    </li>
                    <li>
                      <i className="las la-phone-volume phone"></i>
                      <a href="tel:+919470194401">+91 94701 94401</a>
                    </li>
                    <li>
                      <i className="las la-paper-plane email"></i>
                      <a href="mailto:nvcti@iitism.ac.in">nvcti@iitism.ac.in</a>
                    </li>
                  </ul>
                </div>
                <img
                  src="creative-startup/img/contact-background.png"
                  className="contact-background"
                  alt="contact"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!--Contact section end--> */}

        {/* <!--colored-lines--> */}
        <div className="color-lines row no-gutters">
          <div className="col-4 bg-red"></div>
          <div className="col-4 bg-purple"></div>
          <div className="col-4 bg-green"></div>
        </div>
        {/* <!--Footer Start--> */}
        <footer className="footer-style-1">
          <div className="container">
            <div className="row align-items-center">
              {/* <!--Social--> */}
              <div className="col-lg-6">
                <div className="footer-social text-center text-lg-left">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="wow fadeInUp"
                        href="https://www.facebook.com/nvcti/"
                        target="_blank"
                      >
                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInDown"
                        href="https://twitter.com/nvcti1"
                        target="_blank"
                      >
                        <i aria-hidden="true" className="fab fa-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        className="wow fadeInDown"
                        href="https://www.linkedin.com/company/nvcti-iitism/"
                        target="_blank"
                      >
                        <i
                          aria-hidden="true"
                          className="fab fa-linkedin-in"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp"
                        href="https://www.instagram.com/nvcti.iitism/"
                        target="_blank"
                      >
                        <i aria-hidden="true" className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!--Text--> */}
              <div className="col-lg-6 text-center text-lg-right">
                <p className="company-about fadeIn">
                  © 2023 NVCTI IIT(ISM) DHANBAD -
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* <!--Footer End--> */}

        {/* <!--Scroll Top Start--> */}
        <span className="scroll-top-arrow">
          <i className="fas fa-angle-up"></i>
        </span>
        {/* <!--Scroll Top End--> */}
      </div>
    );
  }
}

export default App;
