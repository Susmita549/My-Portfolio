import React from "react";
import "./portfolio.css";

import Fade from "react-reveal/Fade";
const project = [
  {youtubelink:"https://www.youtube.com/embed/OZo_ryRsYM4",cardTitle:"FRONTEND MASTER",cardText:"A website basically deals with frontend courses.This is an team project completed in 5 days. We cover all the functionalities.",github:"https://github.com/Susmita549/Frontend_Master",deploy:"https://darling-chebakia-d6a79c.netlify.app/",teckStack:"HTML,CSS,JS"},
  {youtubelink:"https://www.youtube.com/embed/mqnzs3f0M2Y",cardTitle:"INTERN THEORY",cardText:" A website basically deals with internships in different field.This is an team project completed in 5 days.",github:"https://github.com/Susmita549/Intern-Theory",deploy:"https://tranquil-sherbet-8f6bdd.netlify.app/",teckStack:"HTML,CSS,JS"},
  {youtubelink:"https://www.youtube.com/embed/mqnzs3f0M2Y",cardTitle:"MY NETDIARY",cardText:" A website basically deals with internships in different field.This is an team project completed in 5 days.",github:"https://github.com/Susmita549/Intern-Theory",deploy:"https://tranquil-sherbet-8f6bdd.netlify.app/",teckStack:"REACT,NODEJS,EXPRESS,CHAKRA-UI,MONGODB"},
  {youtubelink:"https://www.youtube.com/embed/mqnzs3f0M2Y",cardTitle:"PHARMEASY",cardText:" A website basically deals with internships in different field.This is an team project completed in 5 days.",github:"https://github.com/Susmita549/Intern-Theory",deploy:"https://tranquil-sherbet-8f6bdd.netlify.app/",teckStack:"REACT,REDUX,NODEJS,EXPRESS,CHAKRA-UI,MONGODB"},
  {youtubelink:"https://www.youtube.com/embed/mqnzs3f0M2Y",cardTitle:"CHROME EXTENSION",cardText:" A website basically deals with internships in different field.This is an team project completed in 5 days.",github:"https://github.com/Susmita549/Intern-Theory",deploy:"https://tranquil-sherbet-8f6bdd.netlify.app/",teckStack:"REACT,NODEJS,EXPRESS,CHAKRA-UI,MONGODB"},
  {youtubelink:"https://www.youtube.com/embed/mqnzs3f0M2Y",cardTitle:"TODO APP",cardText:" A website basically deals with internships in different field.This is an team project completed in 5 days.",github:"https://github.com/Susmita549/Intern-Theory",deploy:"https://tranquil-sherbet-8f6bdd.netlify.app/",teckStack:"REACT,REDUX,BOOTSTRAP"}
]
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
              {project.map((el)=>(
                <div className=" col-xl-4 col-md-6  my-4  ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "33rem" }}
                >
                  <div className="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src={el.youtubelink}
                    ></iframe>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{el.cardTitle}</h5>
                    <p className="card-text">
                      {el.cardText}
                    </p>
                    
                    <div className="border border-danger px-2 my-1">
                    <h5 className="card-title">TECH STACK</h5>
                      <p>{el.teckStack}</p>
                    </div>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href={el.github}>
                          <span>Click Me!!</span>
                          <span>code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href={el.deploy}>
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </Fade>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

