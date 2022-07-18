import React from 'react';
import "./portfolio.css";
import Fade from 'react-reveal/Fade';
const Profile = () => {
  return (
    <div id="profile">
     <div className='container-fluid  p-5  '>
         <div className="row  profile m-4 p-2">
         <Fade left>
             <div className="col-md-6  my-5 py-4  ">
             <img src="myphoto.png" className="img-thumbnail rounded-circle" alt="mypic"/>
             </div>
             </Fade>
             <Fade right>
             <div className="col-md-6  my-5 py-5">
               <h1 className='text text-center font-weight-bold'>Hello, I am Susmita👋</h1>
               <div>
                 <p className='text text-center  my-5 h3'>
                 💻Full-Stack web developer with a degree in Electronics and Communication Engineering who believes in sharing knowledge, 
                 loves JavaScript and can spare hours talking about it. My experience and learnings in this field have helped me 
                 garner the required skill-set to be a successful web developer.
                 </p>
               </div>
               <a href="https://drive.google.com/drive/folders/1MTsFB2BD6GqVsAEgs7MRxF7hoIp5aNHt">
               <button className='btn btn-primary px-5 py-2'>RESUME</button>
               </a>
               
             </div>
             </Fade>
         </div>
     </div>
    </div>
  );
}

export default Profile;
