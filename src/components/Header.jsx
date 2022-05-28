import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.sub_header}>
          <h1>Susmita Mandal</h1>
          <p>Passionate about changing the world with technology.</p>
          <div>
         <a href="https://github.com/Susmita549"> <i class="bi bi-github "></i></a>
         <a href="https://www.linkedin.com/in/susmita549/"> <i class="bi bi-linkedin"></i></a>
         <a href="mailto:jsusmita549@email.com?subject=subject&cc=susmitamandal1811@example.com"> <i class="bi bi-envelope-paper-fill"></i></a>
          
          <a href="tel:6370507147"><i class="bi bi-telephone-fill"></i></a>
          <a href="https://drive.google.com/file/d/1lHt13TX0wQKGykhrVi4Ivfa4PBOswMM8/view?ts=628fd138"><i class="bi bi-file-person-fill"></i></a>
          </div>
          <button type="button" className="btn btn-outline-warning">
            More About Me
          </button>
        </div>
        <div>
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
