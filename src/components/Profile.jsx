import React from 'react';

const Profile = () => {
  return (
    <div>
     <div className='container-fluid border border-primary p-5 my-5'>
         <div className="row border border-success">
             <div className="col-md-6 border border-primary p-5">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3NfLJ0uCgHVmEAMPGv9_1yYFwgn3Ci4U5A&usqp=CAU" class="img-thumbnail" alt="..."/>
             </div>
             <div className="col-md-6 border border-primary p-5">
               <h1 className='text text-center'>About Me</h1>
               <div>
                 <p className='text text-center'>
                 💻Full-Stack web developer with a degree in Computer Science Engineering who believes in sharing knowledge, 
                 loves JavaScript and can spare hours talking about it. My experience and learnings in this field have helped me 
                 garner the required skill-set to be a successful web developer
                 </p>
               </div>
               <button className='btn btn-primary'>RESUME</button>
             </div>
         </div>
     </div>
    </div>
  );
}

export default Profile;
