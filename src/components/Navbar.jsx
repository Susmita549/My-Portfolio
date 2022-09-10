import React, { useContext } from "react";
import { Link } from "react-scroll/modules";
import Flash from "react-reveal/Flash";
import styles from "./header.module.css";

import "./nav.css";
import { ThemeContext } from "../context/ThemeContext";
import Toggle from "./Toggle";
const Navbar = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.navbar}>
      <ul className="topnav">
      <Flash>
          <li>
            <button onClick={toggleTheme}>{<Toggle/>}</button>
            {/* <Toggle/> */}
          </li>

        </Flash>

        <Flash>
          <li>
            <Link to="header">Home</Link>
          </li>
        </Flash>
        <Flash>
          <li>
            <Link to="profile">About</Link>
          </li>
        </Flash>
        <Flash>
          <li>
            <Link to="skills">Skills</Link>
          </li>
        </Flash>
        <Flash>
          <li>
            <Link to="project">Projects</Link>
          </li>
        </Flash>
        <Flash>
          <li>
            <Link to="footer">Contact</Link>
          </li>
        </Flash>
      </ul>
    </div>
  );
};

export default Navbar;
// className="active"
