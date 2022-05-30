import React from "react";
import { Link } from "react-scroll/modules";

import "./nav.css";
const Navbar = () => {
  return (
    <div>
      <ul className="topnav">
        <li>
          <Link to="header">Home</Link>
        </li>
        <li>
          <Link to="profile">About</Link>
        </li>
        <li>
          <Link to="skills">Skills</Link>
        </li>
        <li>
          <Link to="project">Projects</Link>
        </li>
        <li>
          <Link to="footer">Contact</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
// className="active"
