import React from "react";
import "./portfolio.css";

import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <div id="project">
        <h1 className="text text-center h1">
          <u>ABOUT PROJECTS</u>
        </h1>
        <div className="container ">
          <div className="row  mx-auto">
            <Fade left>
              <div className=" col-xl-4 col-md-6  my-4  ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <img
                    src="frontend.PNG"
                    className="card-img-top "
                    alt="frontend master"
                  />
                  <div className="card-body">
                    <h5 className="card-title">FRONTEND MASTER</h5>
                    <p className="card-text">
                      A website basically deals with frontend courses.This is an
                      team project completed in 5 days. We cover all the
                      functionalities.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Susmita549/Frontend_Master">
                          <span>Click Me!!</span>
                          <span>code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://darling-chebakia-d6a79c.netlify.app/">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade top>
              <div className="col-xl-4  col-md-6   my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <img
                    src="intern..PNG"
                    className="card-img-top"
                    alt="intern"
                  />
                  <div className="card-body">
                    <h5 className="card-title">INTERN THEORY</h5>
                    <p className="card-text">
                      A website basically deals with internships in different
                      field.This is an team project completed in 5 days.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Susmita549/Intern-Theory">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://tranquil-sherbet-8f6bdd.netlify.app/">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-4 col-md-6 my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <img src="movie.PNG" className="card-img-top" alt="movie" />
                  <div className="card-body">
                    <h5 className="card-title">MOVIE APP</h5>
                    <p className="card-text">
                      An app which which us to search different types of
                      movies.We can also sort the movies according to the
                      rating.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Susmita549/Movie-App">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://susmita549.github.io/Movie-App/movie.html">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-xl-4 col-md-6  my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <img
                    src="weather.PNG"
                    className="card-img-top"
                    alt="weather"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Weather App</h5>
                    <p className="card-text">
                      A self project which provides us with 7 days of weather
                      details of different areas.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Susmita549/Weather-App">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://susmita549.github.io/Weather-App/">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-xl-4 col-md-6   my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <img src="clock.PNG" className="card-img-top" alt="clock" />
                  <div className="card-body">
                    <h5 className="card-title">Analog Clock</h5>
                    <p className="card-text">
                      A simple analog clock which shows us time. It is a self
                      project completed in a day.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Susmita549/Analog-Clock">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://susmita549.github.io/Analog-Clock/">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-4 col-md-6   my-4">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <img
                    src="stopwatch.PNG"
                    className="card-img-top"
                    alt="stopwatch"
                  />
                  <div className="card-body">
                    <h5 className="card-title">STOPWATCH</h5>
                    <p className="card-text">
                      A stopwatch made with HTML,CSS and javascript. It is a
                      self project completed in a day.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Susmita549/Stopwatch">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://susmita549.github.io/Stopwatch/">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
