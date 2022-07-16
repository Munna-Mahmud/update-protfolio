import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">MUNNA</div>
       
      </div>
      {/* right */}
      <div>
       <Toggle />
       </div>
    </div>
  );
};

export default navbar;
