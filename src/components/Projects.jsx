import React from "react";
import "./portfolio.css";

import Fade from "react-reveal/Fade";
const project = [
  {youtubelink:"https://www.youtube.com/embed/OZo_ryRsYM4",cardTitle:"FRONTEND MASTER",cardText:"Frontend Master is a website for learning front-end courses. It provides a lots of free courses as well as paid courses.",github:"https://github.com/Susmita549/Frontend_Master",deploy:"https://darling-chebakia-d6a79c.netlify.app/",teckStack:"html,css,javascript"},
  {youtubelink:"https://www.youtube.com/embed/mqnzs3f0M2Y",cardTitle:"INTERN THEORY",cardText:"Intery Theory is a online learning platform. It provides different type of internships and job opportunity indifferent different location.",github:"https://github.com/Susmita549/Intern-Theory",deploy:"https://tranquil-sherbet-8f6bdd.netlify.app/",teckStack:"html,css,javascript"},
  {youtubelink:"https://www.youtube.com/embed/o6lIvfYbzdc",cardTitle:"MY NETDIARY",cardText:"MyNetDiary is a diet app that focuses on calorie tracking based on user information provided during signup.",github:"https://github.com/Susmita549/MyNetDiary_Clone",deploy:"https://mynetdiary-website-clone.netlify.app/",teckStack:"react,nodejs,express,mongodb,  chakra-ui"},
  {youtubelink:"https://www.youtube.com/embed/xlhpwl_SEOc",cardTitle:"SHOPBOB",cardText:"Shopbop is an online fashion store that carries a variety of brands and designers that range from affordable to luxury. ",github:"https://github.com/Susmita549/Shopbop-Clone-Project",deploy:"https://shopbop-clone-project.netlify.app/",teckStack:"react,redux,css"},
  {youtubelink:"https://www.youtube.com/embed/6BE7SdoZaLU",cardTitle:"BETTER JOTTER",cardText:"A Chrome extension to keep tasks as user specific. This is a perfect tool for taking quick & personal notes inside your browser with a single click. ",github:"https://github.com/Susmita549/BetterJotter",deploy:"https://betterjotter.netlify.app/",teckStack:"react,nodejs,express,mongodb,  chakra-ui"},
  {youtubelink:"https://www.youtube.com/embed/dfyw0EVQkWk",cardTitle:"PHARMEASY",cardText:"PharmEasy is an Indian e-pharmacy company that sells medicines, diagnostics and telehealth online.",github:"https://github.com/Susmita549/PharmEasy-Clone",deploy:"https://pharmeasy-clone-nem201.netlify.app/",teckStack:"react,redux,mongodb,express,  nodejs"}
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
                  style={{ width: "20rem", height: "35rem" }}
                >
                  <div className="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src={el.youtubelink}
                    ></iframe>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{el.cardTitle}</h5>
                    <p className="card-text text-justify my-0">
                      {el.cardText}
                    </p>
                    
                    <div className="px-2 my-1">
                      <p className="my-0 font-weight-bold">TECH STACK</p>
                      <p className='font-weight-light'> {el.teckStack}</p>
                    </div>
                    <div className="container d-flex justify-content-between containerBox">
                      <button className="btn ">
                        <a href={el.github} target="_blank">
                          <span>Click Me!!</span>
                          <span>code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href={el.deploy} target="_blank">
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

