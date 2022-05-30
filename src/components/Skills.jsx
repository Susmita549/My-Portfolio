import React from 'react';
import './portfolio.css'
import Bounce from 'react-reveal/Bounce';
const Skills = () => {
  return (
    <>
       <div id="skills">
       <h1 className="text text-center h1 m-5"> <u>SKILLS</u></h1>
       <Bounce top>
       <div className="box">
         <div>
         <img src="html.png" className="img-fluid" alt="Responsive"/>
         <h3>html</h3>
         </div>
         <div>
         <img src="css.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="js.jpg" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="react.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="redux.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="mongo.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="node.png" className="img-fluid" alt="Responsive image"/>
         </div>
         <div>
         <img src="express.png" className="img-fluid" alt="Responsive image"/>
         </div>
       </div>
       </Bounce>
       </div>
    </>
  );
}

export default Skills;
