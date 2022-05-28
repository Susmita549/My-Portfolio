import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Navbar = () => {
  return (
    <div>
      <ul className="topnav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
// className="active"
