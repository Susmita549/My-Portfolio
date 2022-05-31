import React from 'react';

const Profile = () => {
  return (
    <div id="profile">
     <div className='container-fluid  p-5 my-5'>
         <div className="row ">
             <div className="col-md-6  p-5">
             <img src="mypic.jpg" class="img-thumbnail" alt="mypic"/>
             </div>
             <div className="col-md-6  p-5">
               <h1 className='text text-center'>Hello, I am Susmita👋</h1>
               <div>
                 <p className='text text-center lead p-5 h5'>
                 <em>💻Full-Stack web developer with a degree in Electronics and Communication Engineering who believes in sharing knowledge, 
                 loves JavaScript and can spare hours talking about it. My experience and learnings in this field have helped me 
                 garner the required skill-set to be a successful web developer</em>
                 </p>
               </div>
               <a href="https://drive.google.com/file/d/1lHt13TX0wQKGykhrVi4Ivfa4PBOswMM8/view?ts=628fd138">
               <button className='btn btn-primary'>RESUME</button>
               </a>
               
             </div>
         </div>
     </div>
    </div>
  );
}

export default Profile;
