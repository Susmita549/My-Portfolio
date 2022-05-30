import React from "react";
import "./portfolio.css";
import Flip from "react-reveal/Flip";
const Projects = () => {
  return (
    <>
      <div id="project">
        <h1 className="text text-center h1"> ABOUT PROJECTS</h1>
        <div className="container ">
          <div className="row  mx-auto">
            <Flip top>
              <div className=" col-md-4  my-4  ">
                <div className="card mx-auto" style={{ width: "20rem" }}>
                  <img
                    src="frontend.PNG"
                    className="card-img-top "
                    alt="frontend master"
                  />
                  <div className="card-body">
                    <h5 className="card-title">FRONTEND MASTER</h5>
                    <p className="card-text">
                      A website basically deals with frontend courses.It has lot
                      of functionalities among which my task is to make the home
                      page and signin page.This is an team project completed in
                      5 days. We cover all the functionalities.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button
                        href="https://github.com/Susmita549/Frontend_Master"
                        className="btn "
                      >
                        <span>Click Me!!</span>
                        <span>Code</span>
                      </button>
                      <button
                        href="https://darling-chebakia-d6a79c.netlify.app/"
                        className="btn "
                      >
                        <span>Click Me!!</span>
                        <span>Website</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Flip>
            <div className="col-md-4   my-4 ">
              <div className="card mx-auto" style={{ width: "20rem" }}>
                <img src="intern..PNG" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">INTERN THEORY</h5>
                  <p className="card-text">
                    A website basically deals with internshipsnin different
                    field.In this project my responsibility is build the inner
                    pages.This is an team project completed in 5 days. We cover
                    all the functionalities.
                  </p>
                  <div className="container d-flex justify-content-between">
                    <button
                      href="https://github.com/Susmita549/Intern-Theory"
                      className="btn "
                    >
                      <span>Click Me!!</span>
                      <span>Code</span>
                    </button>
                    <button
                      href="https://tranquil-sherbet-8f6bdd.netlify.app/"
                      className="btn "
                    >
                      <span>Click Me!!</span>
                      <span>Website</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4 ">
              <div className="card mx-auto" style={{ width: "20rem" }}>
                <img src="movie.PNG" className="card-img-top" alt="movie" />
                <div className="card-body">
                  <h5 className="card-title">MOVIE APP</h5>
                  <p className="card-text">
                    An app which which us to search different types of movies.We
                    can also sort the movies according to the rating.It is a
                    self project.
                  </p>
                  <div className="container d-flex justify-content-between">
                    <button
                      href="https://github.com/Susmita549/Movie-App"
                      className="btn "
                    >
                      <span>Click Me!!</span>
                      <span>Code</span>
                    </button>
                    <button
                      href="https://susmita549.github.io/Movie-App/movie.html"
                      className="btn "
                    >
                      <span>Click Me!!</span>
                      <span>Website</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  my-4 ">
              <div className="card mx-auto" style={{ width: "20rem" }}>
                <img src="weather.PNG" className="card-img-top" alt="weather" />
                <div className="card-body">
                  <h5 className="card-title">Weather App</h5>
                  <p className="card-text">
                    A self project which provides us with 7 days of weather
                    details of different areas.
                  </p>
                  <div className="container d-flex justify-content-between">
                    <button
                      href="https://github.com/Susmita549/Weather-App"
                      className="btn "
                    >
                      <span>Click Me!!</span>
                      <span>Code</span>
                    </button>
                    <button
                      href="https://susmita549.github.io/Weather-App/"
                      className="btn "
                    >
                      <span>Click Me!!</span>
                      <span>Website</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4   my-4 ">
              <div className="card mx-auto" style={{ width: "20rem" }}>
                <img src="clock.PNG" className="card-img-top" alt="clock" />
                <div className="card-body">
                  <h5 className="card-title">Analog Clock</h5>
                  <p className="card-text">
                    A simple analog clock which shows us time.
                  </p>
                  <div className="container d-flex justify-content-between">
                    <button
                      href="https://github.com/Susmita549/Analog-Clock"
                      className="btn "
                    >
                      <span>Click Me!!</span>
                      <span>Code</span>
                    </button>
                    <button
                      href="https://susmita549.github.io/Analog-Clock/"
                      className="btn "
                    >
                      <span>Click Me!!</span>
                      <span>Website</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4   my-4">
              <div className="card mx-auto" style={{ width: "20rem" }}>
                <img
                  src="stopwatch.PNG"
                  className="card-img-top"
                  alt="stopwatch"
                />
                <div className="card-body">
                  <h5 className="card-title">STOPWATCH</h5>
                  <p className="card-text">
                    A stopwatch made with HTML,CSS and javascript
                  </p>
                  <div className="container d-flex justify-content-between">
                    <button
                      href="https://github.com/Susmita549/Stopwatch"
                      className="btn "
                    >
                      <span>Click Me!!</span>
                      <span>Code</span>
                    </button>
                    <button
                      href="https://susmita549.github.io/Stopwatch/"
                      className="btn "
                    >
                      <span>Click Me!!</span>
                      <span>Website</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
