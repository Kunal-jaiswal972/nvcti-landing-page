import { Fragment } from "react";

const data = {
  about: "These are the ongoing or past projects under NVCTI",
  projects: [
    {
      title: "Blockchain Based Incentive Driven Edtech Platform",
      leader: "HIMANSHU GOYAL",
      labs: "Data And Software Technology",
    },
    {
      title:
        "Signal processing, Arduino, AI ML based Smart Process to repair electronic items.",
      leader: "DEVENSH RAJ ",
      labs: "Electronics and IoT",
    },
    {
      title:
        "Design And Development of AI/ML Based Intelligent Fault Detection System For Industrial Hydraulic Systems.",
      leader: "ARITRA ROY ",
      labs: "Electronics and IoT",
    },
    {
      title:
        "Visual-SLAM & LIDAR-SLAM based UAV navigation to guide UGV for specific agricultural applications (update-29.06.2022)",
      leader: "HARSHIT SHARMA  ",
      labs: "Robotic Technology",
    },
    {
      title: "School Khati VR Multiplayer",
      leader: "ANIKET KUMAR SAHU ",
      labs: "Animation and Game Design",
    },
  ],
};

const Projects = () => {
  return (
    <section className="main" id="main">
      <div className="blog-content padding-top padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main_content text-center text-lg-left">
                <div className="detail_blog">
                  <div className="blog_detail">
                    <h2>ABOUT</h2>
                    <p className="d-text">{data.about}</p>
                    <h2>Projects</h2>
                    <ul className="text-left">
                      {data.projects.map(({ title, leader, labs }, idx) => (
                        <Fragment key={idx}>
                          <li
                            style={{
                              listStylePosition: "outside",
                              fontSize: "1.25em",
                              fontWeight: "bold",
                            }}
                          >
                            {title} -
                          </li>
                          <p className="d-text" style={{marginTop: '1em', marginBottom: '0.5em'}}>
                            <span
                              style={{
                                fontWeight: "bolder",
                                fontSize: "1.1rem",
                              }}
                              >
                              Project leader :
                            </span>
                            {" "}
                            {leader}
                          </p>
                          <p className="d-text">
                            <span
                              style={{
                                fontWeight: "bolder",
                                fontSize: "1.1rem",
                              }}
                            >
                              Thematic Area/Labs:
                            </span>{" "}
                            {labs}
                          </p>
                        </Fragment>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
